<template>
  <div class="user-count-container" :style="positionStyle" @mousedown="onMouseDown" @touchstart="onTouchStart">
    <div class="user-count-box">
      <span class="count-text">当前已有 {{ userCount }} 人访问</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ref as fireRef, onValue } from 'firebase/database'
import db from '../../services/firebase';

const usersRef = fireRef(db, 'users')
const userCount = ref(0)

// 绝对定位样式
const positionStyle = ref({
  opacity: 0,
  position: 'absolute',
  top: '70px',
  right: '0px',
  zIndex: '9999'
})

// 监听用户数据变化
const unsubscribe = ref(null)

onMounted(() => {
  // 当用户数据变化时更新计数
  unsubscribe.value = onValue(usersRef, (snapshot) => {
    if (snapshot.exists()) {
      userCount.value = Object.keys(snapshot.val() || {}).length
      positionStyle.value.opacity = 1
    } else {
      userCount.value = 0
    }
  })
})

onUnmounted(() => {
  // 组件卸载时取消监听
  if (unsubscribe.value) {
    unsubscribe.value()
  }
})

// 拖动功能
const isDragging = ref(false)
const startX = ref(0)
const startY = ref(0)

const getEventPosition = (event) => {
  if (event.touches) {
    return { clientX: event.touches[0].clientX, clientY: event.touches[0].clientY }
  }
  return { clientX: event.clientX, clientY: event.clientY }
}

const disableScroll = () => {
  document.body.style.overflow = 'hidden'
}

const enableScroll = () => {
  document.body.style.overflow = ''
}

const onMouseDown = (event) => {
  const { clientX, clientY } = getEventPosition(event)
  isDragging.value = true

  // 获取元素的实际位置
  const element = event.currentTarget
  const rect = element.getBoundingClientRect()

  // 计算鼠标在元素内的相对位置
  startX.value = clientX - rect.left
  startY.value = clientY - rect.top

  // 转换为left定位方式以便拖动
  positionStyle.value = {
    ...positionStyle.value,
    left: `${rect.left}px`,
    right: 'auto'
  }

  disableScroll()

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

const onTouchStart = (event) => {
  const { clientX, clientY } = getEventPosition(event)
  isDragging.value = true

  // 获取元素的实际位置
  const element = event.currentTarget
  const rect = element.getBoundingClientRect()

  // 计算触摸点在元素内的相对位置
  startX.value = clientX - rect.left
  startY.value = clientY - rect.top

  // 转换为left定位方式以便拖动
  positionStyle.value = {
    ...positionStyle.value,
    left: `${rect.left}px`,
    right: 'auto'
  }

  disableScroll()

  document.addEventListener('touchmove', onTouchMove)
  document.addEventListener('touchend', onTouchEnd)
}

const onMouseMove = (event) => {
  if (isDragging.value) {
    const { clientX, clientY } = getEventPosition(event)
    positionStyle.value.left = `${clientX - startX.value}px`
    positionStyle.value.top = `${clientY - startY.value}px`
  }
}

const onTouchMove = (event) => {
  if (isDragging.value) {
    const { clientX, clientY } = getEventPosition(event)
    positionStyle.value.left = `${clientX - startX.value}px`
    positionStyle.value.top = `${clientY - startY.value}px`
  }
}

const onMouseUp = () => {
  isDragging.value = false
  enableScroll()
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
}

const onTouchEnd = () => {
  isDragging.value = false
  enableScroll()
  document.removeEventListener('touchmove', onTouchMove)
  document.removeEventListener('touchend', onTouchEnd)
}
</script>

<style scoped lang="scss">
.user-count-container {
  transition: opacity 0.3s ease;
  cursor: move;

  .user-count-box {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

    .count-text {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
