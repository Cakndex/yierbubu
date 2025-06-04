<template>
  <div>
    <BgmPlayer />
    <UserCount />
    <Header v-model:activeIndex="activeIndex" />
    <!-- 首页 -->
    <IndexBody v-if="activeIndex === 0" />
    <!-- 记仇本 -->
    <HateNote v-if="activeIndex === 1" />
    <!-- 纪念日 -->
    <MemoryDay v-if="activeIndex === 2" />
    <!-- 访客留言 -->
    <GuestComment v-if="activeIndex === 3" />
  </div>
  <RoleSelect />
</template>

<script setup>
import Header from './components/Header.vue'
import BgmPlayer from './components/BgmPlayer.vue'
import UserCount from './components/UserCount/index.vue'
import IndexBody from './components/IndexBody.vue'
import MemoryDay from './components/MemoryDay.vue'
import HateNote from './components/HateNote/index.vue'
import RoleSelect from './components/RoleSelect/RoleSelect.vue'
import GuestComment from './components/GuestComment/index.vue'
import { ref, onMounted, watch } from 'vue'
const activeIndex = ref(0)
watch(activeIndex, (newVal) => {
  localStorage.setItem('yierbubu-activeIndex', newVal)
})
onMounted(() => {
  activeIndex.value = Number(localStorage.getItem('yierbubu-activeIndex')) || 0
})

</script>

<style lang="less" scoped></style>
