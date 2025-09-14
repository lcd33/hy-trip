<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="item in currentGroup.hotCities" :key="item.cityId">
          <div class="city" @click="gotoCity(item)">
            {{ item.cityName }}
          </div>
        </template>
      </div>
      <template v-for="(group, index1) in currentGroup.cities" :key="index1">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, index2) in group.cities" :key="index2">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import useCityStore from '@/stores/moudule/city'

const router = useRouter()
const cityStore = useCityStore()

const props = defineProps({
  currentGroup: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list = ['#']
  console.log(props.currentGroup)
  props.currentGroup.cities?.forEach(item => {
    list.push(item.group)
  })
  return list
})
function gotoCity(item) {
  cityStore.currentCity = item
  router.back()
}
</script>

<style lang="scss" scoped>
.city-group {
  .list {
    display: flex;
    padding: 10px;
    padding-right: 25px;
    flex-flow: wrap;
    justify-content: space-around;

    .city {
      height: 28px;
      width: 70px;
      font-size: 14px;
      text-align: center;
      line-height: 28px;
      color: #000;
      border-radius: 14px;
      background-color: #fff4ec;
      margin-bottom: 10px;
      margin-right: 10px;

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>