<template>
  <div class="guest-comment-container">
    <!-- 顶部标题区域 -->
    <div class="comment-header">
      <h2 class="title">留言板</h2>
      <div class="subtitle">分享你的想法和感受</div>
    </div>

    <!-- 悬浮气泡留言区 -->
    <div class="comment-board">
      <div v-for="comment in comments" :key="comment.id" class="comment-item" :style="comment.style"
        @mouseenter="hoverComment(comment.id)" @mouseleave="leaveComment(comment.id)">
        <div class="comment-content">
          <div class="comment-name">{{ comment.userName }}</div>
          <div class="comment-text">{{ comment.text }}</div>
        </div>
      </div>
    </div>

    <!-- 留言输入区域 -->
    <div class="comment-input-area">
      <div class="input-wrapper">
        <label class="input-label">留言</label>
        <textarea v-model="newComment" placeholder="写下你的留言..." @input="adjustTextarea" @focus="onInputFocus"
          @blur="onInputBlur"></textarea>
      </div>

      <button @click="submitComment" :class="{ 'btn-active': newComment.trim() && userName.trim() }"
        :disabled="!isValid">
        发表留言
      </button>
    </div>

    <!-- 最新留言列表 -->
    <div class="comment-list">
      <div v-for="comment in sortedComments" :key="comment.id" class="comment-list-item"
        :class="{ 'new-comment': isNewComment(comment) }" @mouseenter="hoverListComment(comment.id)"
        @mouseleave="leaveListComment(comment.id)">
        <div class="comment-header">
          <div class="comment-name">{{ comment.userName }}</div>
          <div class="comment-time">{{ formatTime(comment.time) }}</div>
        </div>
        <div class="comment-text">{{ comment.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { ref as fireRef, push, onValue } from 'firebase/database'
import db from '../../services/firebase'

// 状态管理
const newComment = ref('')
const userName = ref(localStorage.getItem('YIERBUBU_NAME') || '')
const comments = ref([])
const commentStates = ref({})
const newComments = ref(new Set())

// 从localStorage获取用户名
onMounted(() => {
  const savedName = localStorage.getItem('YIERBUBU_NAME')
  if (savedName) {
    userName.value = savedName
  }
})

// 监听用户名变化，保存到localStorage
watch(userName, (newValue) => {
  if (newValue.trim()) {
    localStorage.setItem('YIERBUBU_NAME', newValue)
  }
})

// Firebase引用
const commentsRef = fireRef(db, 'GuestComments')

// 生成随机样式
const randomStyle = () => {
  const hue = Math.random() * 360
  return {
    color: `hsl(${hue}, 70%, 50%)`,
    fontSize: `${14 + Math.random() * 8}px`,
    position: 'absolute',
    left: `${10 + Math.random() * 50}%`,  // 修改这里
    top: `${25 + Math.random() * 50}%`,   // 修改这里
    opacity: 0.9,
    transition: 'all 0.5s ease'
  }
}


// 提交留言
const submitComment = () => {
  if (!isValid.value) return

  const comment = {
    id: uuidv4(),
    text: newComment.value,
    time: new Date().toISOString(),
    userName: userName.value,
    style: randomStyle()
  }

  push(commentsRef, comment)
  newComments.value.add(comment.id)

  // 添加新留言后滚动到顶部
  setTimeout(() => {
    const board = document.querySelector('.comment-board')
    if (board) {
      board.scrollTop = 0
    }
  }, 100)

  newComment.value = ''
}

// 计算属性
const isValid = computed(() => {
  return newComment.value.trim() && userName.value.trim()
})

const sortedComments = computed(() => {
  return [...comments.value].sort((a, b) => new Date(b.time) - new Date(a.time))
})

// 格式化时间
const formatTime = (time) => {
  const date = new Date(time)
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

// 判断是否为新留言
const isNewComment = (comment) => {
  return newComments.value.has(comment.id) && (new Date() - new Date(comment.time)) < 5000
}

// 调整文本域高度
const adjustTextarea = (e) => {
  e.target.style.height = 'auto'
  e.target.style.height = (e.target.scrollHeight + 10) + 'px'
}

// 监听Firebase数据变化
onValue(commentsRef, (snapshot) => {
  const data = snapshot.val()
  comments.value = data ? Object.values(data) : []

  // 3秒后移除新留言标记
  setTimeout(() => {
    newComments.value.clear()
  }, 5000)
})

// 交互事件处理
const hoverComment = (id) => {
  commentStates.value[id] = {
    ...commentStates.value[id],
    hover: true
  }
}

const leaveComment = (id) => {
  commentStates.value[id] = {
    ...commentStates.value[id],
    hover: false
  }
}

const hoverListComment = (id) => {
  commentStates.value[id] = {
    ...commentStates.value[id],
    listHover: true
  }
}

const leaveListComment = (id) => {
  commentStates.value[id] = {
    ...commentStates.value[id],
    listHover: false
  }
}

const onInputFocus = (e) => {
  e.target.parentElement.classList.add('focused')
}

const onInputBlur = (e) => {
  e.target.parentElement.classList.remove('focused')
}
</script>

<style lang="scss" scoped>
// 变量定义
$primary-color: #4CAF50;
$secondary-color: #2E7D32;
$text-color: #333;
$light-text: #666;
$bg-color: #f5f5f5;
$border-radius: 15px;
$transition-time: 0.3s;

.guest-comment-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: $bg-color;
  border-radius: $border-radius;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  animation: fadeIn $transition-time ease-out;

  @media (max-width: 768px) {
    padding: 20px;
    width: calc(100% - 40px);
    padding-top: 30px;
  }
}

.comment-header {
  text-align: center;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    color: $primary-color;
    margin-bottom: 10px;
    font-weight: 600;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: $primary-color;
      border-radius: 3px;
    }
  }

  .subtitle {
    font-size: 16px;
    color: $light-text;
    margin-top: 20px;
  }
}

.comment-board {
  position: relative;
  height: 400px;
  background: #fff;
  border-radius: $border-radius;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all $transition-time ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
}

.comment-item {
  display: inline-block;
  padding: 12px 18px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.95);
  margin: 5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  max-width: 200px;
  word-wrap: break-word;
  transform-origin: center;
  animation: floatIn 0.8s ease-out forwards;
  opacity: 0;

  .comment-name {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    color: inherit;
  }

  .comment-text {
    font-size: 14px;
    color: #444;
  }

  // 悬浮效果
  &:hover {
    transform: rotate(0deg) scale(1.05) !important;
    z-index: 10;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
}

.comment-input-area {
  margin-bottom: 30px;

  .input-wrapper {
    margin-bottom: 20px;
    position: relative;
    transition: all $transition-time ease;

    .input-label {
      display: block;
      font-size: 14px;
      color: $light-text;
      margin-bottom: 8px;
      font-weight: 500;
      transition: all $transition-time ease;
    }

    &.focused .input-label {
      color: $primary-color;
    }

    input,
    textarea {
      width: calc(100% - 20px);
      padding: 15px 10px;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 16px;
      resize: none;
      transition: all $transition-time ease;
      background: #fff;

      &:focus {
        outline: none;
        border-color: $primary-color;
        box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.15);
      }
    }

    textarea {
      min-height: 100px;
    }
  }

  button {
    width: 100%;
    background: #ddd;
    color: #999;
    border: none;
    padding: 16px 25px;
    border-radius: 10px;
    cursor: pointer;
    transition: all $transition-time ease;
    font-size: 16px;
    font-weight: 500;

    &.btn-active {
      background: $primary-color;
      color: white;

      &:hover {
        background: $secondary-color;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.2);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
      }
    }
  }
}

.comment-list {
  .comment-list-item {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
    background: #fff;
    transition: all $transition-time ease;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateX(5px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
    }

    &.new-comment::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: $primary-color;
      animation: pulse 4s infinite;
    }

    .comment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .comment-name {
      font-size: 16px;
      font-weight: 500;
      color: $text-color;
    }

    .comment-time {
      font-size: 14px;
      color: $light-text;
    }

    .comment-text {
      font-size: 16px;
      color: $text-color;
      line-height: 1.5;
    }
  }
}

// 动画效果
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }

  to {
    opacity: 0.9;
    transform: scale(1) translateY(0);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.5;
  }
}
</style>
