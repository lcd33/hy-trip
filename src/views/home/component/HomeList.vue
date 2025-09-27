<template>
  <div class="home-list">
    <div class="title">热门精选</div>
    <div class="homes">
      <template v-for="item in homeList" :key="item.data.cityid">
        <HomeItemV3 v-if="item.discoveryContentType === 3" :data="item.data"
          @click="handleClickDetail(item.data.houseId)"></HomeItemV3>
        <HomeItemV9 v-if="item.discoveryContentType === 9" :data="item.data"
          @click="handleClickDetail(item.data.houseId)"></HomeItemV9>
      </template>
    </div>
  </div>
</template>

<script setup>
import HomeItemV3 from '@/components/homeitem/HomeItemV3.vue'
import HomeItemV9 from '@/components/homeitem/HomeItemV9.vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useHomeStore from '@/stores/moudule/home.js'

const homeStore = useHomeStore()
const { homeList } = storeToRefs(homeStore)
const router = useRouter()

function handleClickDetail(houseId) {
  router.push({
    path: `/detail/${houseId}`
  })
}
</script>

<style lang="scss" scoped>
.home-list {
  padding: 0 0 0 10px;

  .title {
    font-size: 25px;
    font-weight: bold;
    margin: 20px 0;
  }

  .homes {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>