<template>
  <div>
    <BgmPlayer />
    <Header v-model:activeIndex="activeIndex" />
    <section class="banner">
    </section>
    <!-- 首页 -->
    <IndexBody v-if="activeIndex === 0" />
    <!-- 纪念日 -->
    <MemoryDay v-if="activeIndex === 2" />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import BgmPlayer from './components/BgmPlayer.vue'
import IndexBody from './components/IndexBody.vue'
import MemoryDay from './components/MemoryDay.vue'
import { ref } from 'vue'
const activeIndex = ref(0)
</script>

<style lang="less" scoped>
.banner {
  height: 50vh;
  background: url('./assets/banner.png') no-repeat center center/cover;
}
</style>
