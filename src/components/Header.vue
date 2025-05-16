<template>
  <!-- 首页 -->
  <section class="header">
    <p class="title" :class="[index === activeIndex ? 'active' : '']" v-for="(item, index) in headerList" :key="index"
      @click="updateActiveIndex(index)">
      {{ item }}
    </p>
  </section>
</template>

<script setup lang="js">
import { ref } from 'vue';
const props = defineProps({
  activeIndex: {
    type: Number,
    default: 0
  }
})
const emits = defineEmits(['update:activeIndex'])
const headerList = ref(['首页', '记仇本', '纪念日', '成长'])
const updateActiveIndex = (index) => {
  emits('update:activeIndex', index)
}
</script>

<style lang="less">
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: rgba(249, 149, 189, 0.6);
  position: absolute;
  top: 0;
  width: 100vw;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  .title {
    opacity: 0.8;
    font-family: 'keai';
    flex: 1;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    border-right: #fff 1px solid;
    transition: all 0.3s ease-in-out;
  }

  .title:last-child {
    border-right: none;
  }

  .title:hover {
    cursor: url('/yier.png'), auto;
    opacity: 1;
  }
}

.header .active {
  font-size: 24px;
  opacity: 1;
}
</style>
