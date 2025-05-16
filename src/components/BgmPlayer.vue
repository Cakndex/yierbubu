<!-- BgmPlayer.vue -->
<template>
  <div>
    <audio ref="audioPlayer" src="/bgm.mp3" loop></audio>
    <div class="bgm_icon" :class="{ 'rotate': isPlaying }" @click="togglePlay"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isPlaying = ref(false)
const audioPlayer = ref(null)

function togglePlay() {
  if (isPlaying.value) {
    audioPlayer.value.pause()
  } else {
    audioPlayer.value.play()
  }
  isPlaying.value = !isPlaying.value
}
</script>

<style scoped>
.bgm_icon {
  z-index: 1000;
  width: 32px;
  height: 32px;
  background: url('../assets/bgm_icon.png') no-repeat center center/cover;
  position: absolute;
  top: 70px;
  left: 10px;
  cursor: pointer;
}

.bgm_icon_tips {
  z-index: 1000;
  width: 32px;
  height: 32px;
  background: url('../assets/bgm_icon_tips.png') no-repeat center center/cover;
  position: absolute;
  top: 70px;
  left: 50px;
  cursor: pointer;
}

.bgm_icon.rotate {
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
