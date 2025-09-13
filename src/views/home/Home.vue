<template>
  <div class="home">
    <HomeHeder></HomeHeder>
    <div class="banner">
      <span></span>
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
  </div>
</template>

<script setup>
import HomeHeder from './component/HomeHeder.vue';
</script>

<style lang="scss" scoped>
.home {
  .banner {

    img {
      width: 100%;
    }
  }
}
</style>