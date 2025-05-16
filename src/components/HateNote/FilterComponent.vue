<template>
  <div class="filter-container">
    <div class="filter-item">
      <label for="identity">身份筛选：</label>
      <select v-model="selectedIdentity" id="identity" @change="handleIdentityChange">
        <option value="">全部</option>
        <option value="一二">一二</option>
        <option value="布布">布布</option>
      </select>
    </div>
    <div class="filter-item">
      <label for="date">时间筛选：</label>
      <select v-model="selectedDate" id="date">
        <option value="">全部</option>
        <option v-for="date in availableDates" :key="date" :value="date">{{ date }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const selectedIdentity = ref('');
const selectedDate = ref('');
const availableDates = ref([]);

// 接收父组件传递的日期列表
const props = defineProps({
  posts: Array
});

// 监听身份选择变化，更新日期选项
const handleIdentityChange = () => {
  selectedDate.value = ''; // 重置日期选择
  updateAvailableDates();
};
const allDates = computed(() => {
  return  props.posts.map(post => post.timestamp.split('T')[0]).filter((date, index, self) => self.indexOf(date) === index);
});
// 更新可用日期列表
const updateAvailableDates = () => {
  if (selectedIdentity.value) {
    availableDates.value = allDates.value.filter(date =>
      props.posts.some(post => post.user.name === selectedIdentity.value && post.timestamp.includes(date))
    );
  } else {
    availableDates.value = [...new Set(allDates.value)];
  }
};

// 监听父组件传递的日期列表变化
watch(() => allDates.value, updateAvailableDates, { immediate: true });

// 暴露给父组件
defineExpose({
  selectedIdentity,
  selectedDate
});
</script>

<style scoped>
.filter-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eaeaea;
}

.filter-item {
  display: flex;
  align-items: center;
}

label {
  margin-right: 5px;
  font-weight: bold;
}

select,
input[type="date"] {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
