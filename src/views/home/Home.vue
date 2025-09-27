<template>
  <div class="home">

    <HomeHeder></HomeHeder>
    <div class="banner">
      <span></span>
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearch></HomeSearch>

    <HomeCategory />
    <HomeList></HomeList>
    <div class="search-bar" v-if="isShow">
      <SearchBar></SearchBar>
    </div>
  </div>
</template>
<script>

</script>
<script setup>
import HomeHeder from './component/HomeHeder.vue';
import HomeSearch from './component/HomeSearch.vue';
import HomeCategory from '@/views/home/component/HomeCategory.vue'
import HomeList from './component/HomeList.vue';
import SearchBar from '@/components/SearchBar.vue'
import { onMounted, watch, ref, computed, onActivated } from 'vue'

import useBottomHook from '@/hook/useBottomHook.js'
import useHomeStore from '@/stores/moudule/home.js'

defineOptions({
  name: 'Home',
})
const homeStore = useHomeStore()

onMounted(() => {
  homeStore.fetchHotSuggests()
  homeStore.fetchHomeCategories()
  homeStore.fetchHomeList()
})

const { isReacheBottom, scrollTop } = useBottomHook()
watch(isReacheBottom, (newVal) => {
  if (newVal) {
    console.log('到底了')
    homeStore.fetchHomeList()
    isReacheBottom.value = false
  }
})
const isShow = computed(() => {
  return scrollTop.value >= 350
})

onActivated(() => {
  window.scrollTo({
    top: scrollTop.value,
  })
})
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 50px;

  .banner {
    img {
      width: 100%;
    }
  }

  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
}
</style>