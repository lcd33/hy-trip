<template>
  <div class="tabber">
    <template v-for="(item, index) in tabbarData" :key="item.path">
      <div class="tabber-item" :class="{ 'active': currentIndex === index }" @click="handleClick(item, index)">
        <img v-if="currentIndex === index" :src="loaderImage(item.imageActive)">
        <img v-else :src="loaderImage(item.image)">
        <div class="tabber-text">{{ item.text }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar';

import { useRouter, useRoute } from 'vue-router';
import { onUnmounted, ref, watch } from 'vue';

import loaderImage from '@/utils/loadImage';

const router = useRouter();
const route = useRoute();
const currentIndex = ref(0); // 当前所在位置

watch(() => route.path, (newPath) => {
  // 路由变化时，更新当前所在位置
  const index = tabbarData.findIndex(item => item.path === newPath);
  if (index !== -1) {
    currentIndex.value = index;
  }
})
// 获取当前所在位置条抓路由
const handleClick = (item) => {
  router.push(item.path);
}

onUnmounted(() => {
  // 组件卸载时，重置当前所在位置
  console.log('组件卸载时，重置当前所在位置', currentIndex.value);
})
</script>

<style lang="scss" scoped>
.tabber {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;

  .active {
    color: var(--primary-color);
  }

  .tabber-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;



    img {
      width: 26px;
    }

    .tabber-text {
      font-size: 16px;
    }
  }
}
</style>