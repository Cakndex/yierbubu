<template>
  <!-- 首页 -->
  <section class="header">
    <p class="title">首页</p>
    <p class="title">动态</p>
    <p class="title">纪念日</p>
    <p class="title">相册</p>
  </section>
</template>

<script setup lang="js">

</script>

<style lang="less">
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #f996be;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  .title {
    font-family: 'keai';
    flex: 1;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    border-right: #fff 1px solid;
  }
  .title:last-child {
    border-right: none;
  }
  .title:hover {
    cursor: url('/yier.png'), auto;
  }
}
</style>
