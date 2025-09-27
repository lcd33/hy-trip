<template>
  <div class="category">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="category-item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import useHomeStore from '@/stores/moudule/home.js'

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  align-items: center;
  margin: 20px 0;
  overflow-x: auto;

  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }

  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    margin: 0 10px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }

    .title {
      margin-top: 5px;
      font-size: 12px;
      color: #666;
    }
  }
}
</style>