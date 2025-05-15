<template>
  <div class="body">
    <div class="avatar">
      <div class="left container">
        <img class="img" src="../assets/yier_avatar.jpg" width="84" />
        <div class="img_name">王宇晴</div>
      </div>
      <div>
        <div class="desc_container text">在一起</div>
        <div class="days-container">
          <div v-for="(digit, index) in formattedDays" :key="index" class="digit-card">{{ digit }}</div>
          <div class="digit-card text">Days</div>
        </div>
      </div>
      <div class="right container">
        <img class="img" src="../assets/bubu_avatar.jpg" width="84" />
        <div class="img_name">刘云宇</div>
      </div>
    </div>
    <div class="content">
      <!-- 关于我们 -->
      <div class="about_us">
        <span class="card_title">关于我们</span>
        <div class="divider"></div>
        <div class="about_us_content">
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;一二布布相识于2017年12月湖里实验中学，在初一办公室见面，那时候一二带着陈伟诺小弟改英语作业，布布来数数学卷子，两天彼此对视，留下了深刻的印象，并成为了soulmate。但是好景不长......被一二的班主任发现了，一二布布被迫分开。
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;初中毕业后，一二布布来到不同的高中，布布去了最好的厦门一中，一二去了厦门仅此一所的松柏中学。中间虽然见了几次面，但最终抵不过时间的洪流，联系渐少，生活的轨迹似乎越行越远
            。</div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;到了大学，醒悟的布布重新找到一二，互相诉说着这三年来各自的遭遇，在经历了这么多事情之后，两人决定再也不分开了。至此，一二和布布从soulmate变成lovers，开启了属于他们的爱情篇章......
          </div>
        </div>
      </div>
      <div class="card_container">
        <div class="scroll-wrapper" ref="scrollWrapper">
          <img v-for="(item, index) in yierbubuImgArr" :key="item + index" :src="item" class="card card1"
            ref="scrollImgRef">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import yierbubuImgs from '../assets/yierbubu/index';

// 在一起天数计算
const days = ref(0);
let intervalId;
let imgIndex = 0;
const yierbubuImgArr = ref([...yierbubuImgs, ...yierbubuImgs]);
const scrollImgRef = ref(null);
let imgPushIntervalId = null
imgPushIntervalId = setInterval(() => {
  Array.from({ length: 5 }).forEach(() => {
    console.log('开始执行')
    yierbubuImgArr.value.push(yierbubuImgArr.value[imgIndex]);
    scrollImgRef.value[imgIndex]?.remove()
    imgIndex++;
    currentPosition.value -= 120
    scrollWrapper.value.style.transform = `translateX(-${currentPosition.value}px)`;
  })
}, 5000);

const calculateDays = () => {
  const startDate = new Date('2023-12-07');
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - startDate);
  days.value = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const formattedDays = computed(() => {
  return days.value.toString().split('');
});

// 图片滚动逻辑
const scrollWrapper = ref(null);
const scrollSpeed = 2; // 滚动速度
let scrollInterval;
let containerWidth = 0;
let imgWidth = 0;

const currentPosition = ref(0);

const startScroll = () => {
  scrollInterval = setInterval(() => {
    if (!scrollWrapper.value) return;

    // 更新滚动位置
    currentPosition.value += scrollSpeed;

    // 当第一组图片完全滚动出视野时重置位置
    if (currentPosition.value >= containerWidth) {
      currentPosition.value = 0;
    }

    // 更新滚动容器的位置
    scrollWrapper.value.style.transform = `translateX(-${currentPosition.value}px)`;
  }, 16); // 约60fps
};


onMounted(() => {

  // 初始化天数计算
  calculateDays();
  intervalId = setInterval(calculateDays, 60 * 1000);

  // 等待DOM渲染完成后获取容器宽度
  setTimeout(() => {
    if (scrollWrapper.value) {
      containerWidth = scrollWrapper.value.offsetWidth;
      // 获取第一张图片的宽度（包含margin）
      const firstImg = scrollWrapper.value.querySelector('.card1');
      if (firstImg) {
        const imgStyle = window.getComputedStyle(firstImg);
        imgWidth = firstImg.offsetWidth + parseInt(imgStyle.marginRight);
      }

      // 初始化滚动
      startScroll();

    }
  }, 0);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
  clearInterval(scrollInterval);
  clearInterval(imgPushIntervalId);

});
</script>


<style lang="less" scoped>
.body {
  display: flex;
  flex-direction: column;
  height: max-content;
  background: url('../assets/contentBg.jpg') no-repeat center center/cover;
}

.img {
  border-radius: 50%;
}

.img_name {
  font-family: 'keai';
  margin-top: 12px;
  font-size: 20px;
}

.desc {
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'keai';

  .icon {
    width: 10px;
    height: 10px;
    background-color: #eaa0b6;
    margin-right: 8px;
    border-radius: 50%;
  }
}

.desc_container {
  white-space: nowrap;
  text-align: center;
}

.text {
  font-family: 'keai';
  font-size: 24px;
  padding-bottom: 10px;
}

.avatar {
  height: 150px;
  display: flex;
  align-items: center;
  padding: 10px;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.days-container {
  display: flex;
  justify-content: center;
  gap: 5px;
  text-align: center;
}

.digit-card {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;

  .about_us {
    font-family: 'keai';
    width: 100%;
    padding: 4px;
    transform: translateY(100px);
    animation: cardAppear 1s ease-out forwards;

    .card_title {
      border-radius: 10px 10px 0 0;
    }

    .divider {
      height: 4px;
      background-color: #f9b9d1;
    }

    .about_us_content {
      padding: 4px;
      font-size: 24px;
      font-family: 'nai';
    }
  }
}

.card_container {
  display: flex;
  justify-content: space-between;
  font-family: 'keai';
  padding: 4px;
  width: 100%;
  height: 150px;
  margin-top: 30px;
  overflow: hidden;
  position: relative;
}

.card_title {
  background-color: #f9b9d1;
  color: #fff;
  padding: 6px;
  padding-bottom: 0;
}

.card {
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100px;
  opacity: 0;
  transform: translateY(100px);
  animation: cardAppear 1.5s 0.5s ease-out forwards;
}

.scroll-wrapper {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0s linear;
  will-change: transform;

  .card1 {
    margin-right: 20px;
    transition: all 0.3s ease;
    height: 100px;
    object-fit: cover;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
}

@keyframes cardAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
