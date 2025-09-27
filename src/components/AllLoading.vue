<template>
  <div class="all-loading" v-if="mainStore.isloading" @click="handleClickLoading">
    <div class="loading">
      <img src="@/assets/img/home/full-screen-loading.gif">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/moudule/mainStore'
const mainStore = useMainStore()
const handleClickLoading = () => {
  mainStore.isloading = false
}
</script>

<style lang="scss" scoped>
.all-loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;

  .loading {
    width: 104px;
    height: 104px;
    background: url('@/assets/img/home/loading-bg.png') center / 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 74px;
      height: 74px;
      margin-bottom: 10px;
    }
  }
}
</style>