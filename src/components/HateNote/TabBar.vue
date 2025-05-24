<template>
  <div class="tab-bar">
    <button @click="$emit('tabChange', 'home')" :class="{ 'active': currentTab === 'home' }">说说主页</button>
    <button @click="$emit('tabChange', 'stats')" :class="{ 'active': currentTab === 'stats' }">统计分析</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  currentTab: {
    type: String,
    default: 'home'
  }
})

const emits = defineEmits(['tabChange'])
</script>

<style lang="scss" scoped>
@use "sass:color";

// 颜色变量
$primary: #42b983; // 主色调-蓝色，代表信任和社交
$neutral-600: #4B5563; // 深中性色

.tab-bar {
  width: 100%;
  height: 60px;
  margin-top: 50px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;

  button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: $neutral-600;
    font-weight: 600;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .active {
    color: $primary;
    border-bottom: 2px solid $primary;
  }
}
</style>
