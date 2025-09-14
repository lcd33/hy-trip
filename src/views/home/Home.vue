<template>
  <div class="home">
    <HomeHeder></HomeHeder>
    <div class="banner">
      <span></span>
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearch></HomeSearch>
  </div>
</template>

<script setup>
import HomeHeder from './component/HomeHeder.vue';
import HomeSearch from './component/HomeSearch.vue';
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