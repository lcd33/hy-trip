<template>
  <div class="city top_page">
    <div class="top">
      <van-search v-model="searchValue" show-action shape="round" placeholder="城市/区域" @search="onSearch"
        @cancel="onCancel" />
      <van-tabs v-model:active="tabActive" color="var(--primary-color)">
        <template v-for="(value, key, index) in cityList" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 优化性能以为数据太大了 -->
      <template v-for="(value, key, index) in cityList" :key="key">
        <CityGroup :currentGroup="currentGroup" v-show="tabActive === key"></CityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
import CityGroup from './components/CityGroup.vue'

import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'

import useCityStore from '@/stores/moudule/city'

const cityStore = useCityStore()
const { cityList } = storeToRefs(cityStore)
const router = useRouter();
const searchValue = ref('')
const tabActive = ref(0)

const currentGroup = computed(() => cityList.value[tabActive.value])

onMounted(async () => {
  cityStore.fetchCityList()
})

// 搜索
function onSearch() {

}

// 取消
function onCancel() {
  router.back()
}


</script>

<style lang="scss" scoped>
.city {
  // 用绝对定位进行固定头部 
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   z-index: 999;
  // }

  // .content {
  //   padding-top: 98px;
  // }
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>