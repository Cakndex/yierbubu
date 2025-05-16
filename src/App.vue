<template>
  <div>
    <BgmPlayer />
    <Header v-model:activeIndex="activeIndex" />
    <!-- 首页 -->
    <IndexBody v-if="activeIndex === 0" />
    <!-- 记仇本 -->
    <HateNote v-if="activeIndex === 1" />
    <!-- 纪念日 -->
    <MemoryDay v-if="activeIndex === 2" />
  </div>
  <RoleSelect />
</template>

<script setup>
import Header from './components/Header.vue'
import BgmPlayer from './components/BgmPlayer.vue'
import IndexBody from './components/IndexBody.vue'
import MemoryDay from './components/MemoryDay.vue'
import HateNote from './components/HateNote/index.vue'
import RoleSelect from './components/RoleSelect/RoleSelect.vue'
import { ref } from 'vue'
const activeIndex = ref(0)
</script>

<style lang="less" scoped>

</style>
