import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getHomeSuggests, getHomeCategories, getHomeList } from '@/service/api/homeApi.js'
const useHomeStore = defineStore('home', () => {
  const hotSuggests = ref([])
  const categories = ref([])
  const currentPage = ref(1)
  const homeList = ref([])
  async function fetchHotSuggests() {
    const res = await getHomeSuggests()
    console.log(res, 'fetchHotSuggests数据')
    hotSuggests.value = res.data
  }

  // 分类
  async function fetchHomeCategories() {
    const res = await getHomeCategories()
    console.log(res, 'fetchHomeCategories数据')
    categories.value = res.data
  }

  // 列表
  async function fetchHomeList() {
    const res = await getHomeList(currentPage.value)
    console.log(res, 'fetchHomeList数据')
    homeList.value = [...homeList.value, ...res.data]
    currentPage.value++
  }

  return {
    hotSuggests,
    fetchHotSuggests,
    categories,
    fetchHomeCategories,
    currentPage,
    homeList,
    fetchHomeList
  }
})

export default useHomeStore
