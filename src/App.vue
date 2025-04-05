<template>
  <div>
    <BgmPlayer />
    <Header />
    <section class="banner">
    </section>
    <IndexBody/>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import BgmPlayer from './components/BgmPlayer.vue'
import IndexBody from './components/IndexBody.vue'
</script>

<style lang="less" scoped>
.banner {
  height: calc(30vh - 60px);
  background: url('./assets/banner.png') no-repeat center center/cover;
}
</style>
