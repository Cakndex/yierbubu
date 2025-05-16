<template>
  <div class="app-container">
    <!-- 纪念日表单 -->
    <form class="memo-form" @submit.prevent="isEditing ? handleSaveEdit() : handleAddMemo()">
      <div class="form-group">
        <label>名称</label>
        <input type="text" v-model.trim="newMemo.name" placeholder="请输入纪念日名称" required />
      </div>

      <div class="form-group">
        <label>日期</label>
        <input type="date" v-model="newMemo.date" required />
      </div>

      <div class="form-group">
        <label>类型</label>
        <input type="text" v-model.trim="newMemo.type" placeholder="请输入纪念类型" required />
      </div>

      <button type="submit" class="btn primary-btn">
        {{ isEditing ? '保存编辑' : '添加纪念日' }}
      </button>
    </form>

    <!-- 纪念日列表 -->
    <div class="memo-list">
      <div class="memo-item" v-for="(item, index) in filteredMemos" :key="item.id">
        <div class="item-header">
          <p class="item-name" :style="{ backgroundColor: item.backgroundColor }">{{ item.name }}</p>
        </div>
        <div class="item-meta">
          <span class="type-tag" :class="item.type">{{ item.type }}</span>
          <span class="date">{{ formatDate(item.date) }}</span>
        </div>
        <div class="countdown">
          <span class="countdown-text" :class="getCountdownClass(item.days)">
            {{ computedDay(item.date) }}
          </span>
        </div>

        <div class="actions">
          <button class="btn edit-btn" @click="handleEditMemo(index)">
            <span class="icon-edit">编辑</span>
          </button>
          <button class="btn delete-btn" @click="handleDeleteMemo(item.id)">
            <span class="icon-delete">删除</span>
          </button>
        </div>
      </div>

      <div v-if="memos.length === 0" class="empty-state">
        <p>暂无纪念日，点击上方按钮添加</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue';
import dayjs from 'dayjs';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as fireRef, onValue, set, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBEYS8UtnIdaYA4aZHsFCE3rnSya_DdS8o",
  authDomain: "yierbubu.firebaseapp.com",
  projectId: "yierbubu",
  storageBucket: "yierbubu.firebasestorage.app",
  messagingSenderId: "745521053033",
  appId: "1:745521053033:web:57602c1e935aa1cca811f8",
  measurementId: "G-7TF1KMZJBQ",
  databaseURL: 'https://yierbubu-default-rtdb.asia-southeast1.firebasedatabase.app'
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const memosRef = fireRef(db, 'memos');

// 状态管理
const memos = ref([]);
const newMemo = reactive({
  id: null,
  name: '',
  date: '',
  type: '纪念日',
  backgroundColor: ''
});
const searchQuery = ref('');
const isLoading = ref(true);
const error = ref(null);
const isEditing = ref(false);

// 计算属性：过滤搜索结果
const filteredMemos = computed(() => {
  // 加上随机颜色
  memos.value.forEach(item => {
    if (!item.backgroundColor) {
      item.backgroundColor = getRandomColor();
    }
  });
  return memos.value.filter(item =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// 计算剩余天数
const calculateDays = (dateStr) => {
  const targetDate = dayjs(dateStr);
  const today = dayjs();
  return targetDate.diff(today, 'day');
};

const computedDay = (dateStr) => {
  const days = calculateDays(dateStr);
  console.log('计算日期:', days);
  if (days > 0) {
    return `${days}天后`;
  } else if (days === 0) {
    return '今天！';
  } else {
    return `${-days}天前`;
  }
};
// 格式化日期
const formatDate = (dateStr) => {
  return dayjs(dateStr).format('YYYY年MM月DD日');
};

// 获取倒计时颜色
const getCountdownClass = (days) => {
  if (days > 7) return 'countdown-normal';
  if (days > 0) return 'countdown-warning';
  return days === 0 ? 'countdown-today' : 'countdown-past';
};

// 生成随机颜色
const getRandomColor = () => {
  const colors = [
    'rgba(163, 217, 0, 0.3)',    // 绿色
    'rgba(0, 163, 224, 0.3)',    // 蓝色
    'rgba(255, 184, 28, 0.3)',   // 黄色
    'rgba(0, 166, 172, 0.3)',    // 青色
    'rgba(214, 0, 28, 0.3)',     // 红色
    'rgba(143, 195, 31, 0.3)',   // 深绿色
    'rgba(0, 153, 68, 0.3)'      // 深蓝色
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  console.log(`随机颜色索引: ${randomIndex}, 颜色值: ${colors[randomIndex]}`);
  return colors[randomIndex];
};

// 添加纪念日
const handleAddMemo = async () => {
  if (!newMemo.name || !newMemo.date) return;

  try {
    const newItem = {
      id: Date.now(),
      name: newMemo.name,
      date: newMemo.date,
      type: newMemo.type,
      days: calculateDays(newMemo.date),
      backgroundColor: getRandomColor()
    };

    // 更新本地状态
    memos.value.push(newItem);

    // 同步到 Firebase
    await set(memosRef, memos.value);

    // 重置表单
    resetForm();
  } catch (err) {
    error.value = err.message;
    console.error('添加失败:', err);
  }
};

// 编辑纪念日
const handleEditMemo = (index) => {
  const item = memos.value[index];
  newMemo.id = item.id;
  newMemo.name = item.name;
  newMemo.date = item.date;
  newMemo.type = item.type;
  newMemo.backgroundColor = item.backgroundColor;
  isEditing.value = true;
};

// 保存编辑
const handleSaveEdit = async () => {
  if (!newMemo.id) return;

  try {
    const index = memos.value.findIndex(item => item.id === newMemo.id);
    if (index !== -1) {
      memos.value[index] = {
        ...memos.value[index],
        name: newMemo.name,
        date: newMemo.date,
        type: newMemo.type,
        days: calculateDays(newMemo.date),
        backgroundColor: newMemo.backgroundColor
      };

      // 同步到 Firebase
      await set(memosRef, memos.value);
      resetForm();
      isEditing.value = false;
    }
  } catch (err) {
    error.value = err.message;
    console.error('更新失败:', err);
  }
};

// 删除纪念日
const handleDeleteMemo = async (id) => {
  if (confirm('确定要删除这个纪念日吗？')) {
    try {
      // 更新本地状态
      memos.value = memos.value.filter(item => item.id !== id);

      // 同步到 Firebase
      await set(memosRef, memos.value);
    } catch (err) {
      error.value = err.message;
      console.error('删除失败:', err);
    }
  }
};

// 重置表单
const resetForm = () => {
  newMemo.id = null;
  newMemo.name = '';
  newMemo.date = '';
  newMemo.type = '纪念日';
  newMemo.backgroundColor = '';
};

// 初始化数据
onMounted(() => {
  try {
    // 监听数据库变化
    onValue(memosRef, (snapshot) => {
      const data = snapshot.val();
      memos.value = data ? Object.values(data) : [];
      isLoading.value = false;
    }, (err) => {
      error.value = err.message;
      isLoading.value = false;
      console.error('获取数据失败:', err);
    });
  } catch (err) {
    error.value = err.message;
    isLoading.value = false;
    console.error('初始化失败:', err);
  }
});
</script>

<style lang="scss" scoped>
$primary-color: #42b983; // Vue 官方绿色
$warning-color: #ff9e2b;
$danger-color: #e56465;
$neutral-color: #666;

.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;

  .header {
    text-align: center;
    margin-bottom: 2rem;

    .title {
      font-size: 1.8rem;
      color: #333;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon-calendar-star {
        position: relative;
        display: inline-block;
        width: 1.2em;
        height: 1.2em;
        margin-right: 0.5rem;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid $primary-color;
          border-radius: 2px;
        }

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 20%;
          width: 0;
          height: 0;
          transform: translateX(-50%);
          border-left: 0.3em solid transparent;
          border-right: 0.3em solid transparent;
          border-bottom: 0.4em solid $primary-color;
        }
      }
    }

    .subtitle {
      color: #666;
      font-size: 1.1rem;
    }
  }

  .memo-form {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        color: #333;
        font-weight: 500;
      }

      input,
      select {
        width: 90%;
        padding: 0.8rem;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
        font-size: 1rem;

        &:focus {
          outline: none;
          border-color: $primary-color;
          box-shadow: 0 0 0 2px rgba($primary-color, 0.2);
        }
      }
    }

    .btn {
      padding: 0.8rem 2rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 0.9;
      }
    }

    .primary-btn {
      background: $primary-color;
      color: white;
      width: 100%;

    }
  }

  .memo-list {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .memo-item {
      padding-bottom: 1rem;
      border-bottom: 1px solid #e5e7eb;
      transition: transform 0.3s ease;
      margin-bottom: 1rem;

      &:hover {
        transform: translateX(5px);
      }

      &:last-child {
        border-bottom: none;
      }

      .item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        .item-name {
          font-size: 1.2rem;
          color: #333;
          margin: 0;
          padding: 5px 15px;
          border-radius: 10px;
        }
      }

      .item-meta {
        display: flex;
        gap: 1rem;
        font-size: 0.9rem;
        color: #666;

        .type-tag {
          padding: 0.2rem 0;
          border-radius: 20px;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .date {
          padding: 0.2rem 0;
          border-radius: 20px;
          font-weight: 500;
          margin-bottom: 1rem;
        }
      }

      .countdown {
        font-size: 1.1rem;
        margin-bottom: 1rem;

        &.countdown-today {
          color: $primary-color;
          font-weight: bold;
        }

        &.countdown-warning {
          color: $warning-color;
        }

        &.countdown-past {
          color: $danger-color;
        }
      }

      .actions {
        display: flex;
        gap: 1rem;

        .btn {
          padding: 6px 12px;
          font-size: 1rem;
          background: transparent;
          color: #666;

          &.edit-btn {
            color: $primary-color;
          }

          &.delete-btn {
            color: $danger-color;
          }
        }
      }
    }

    .empty-state {
      padding: 2rem;
      text-align: center;
      color: #999;
    }
  }
}
</style>
