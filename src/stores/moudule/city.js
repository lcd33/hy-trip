import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getCityAll } from '@/service'

const useCityStore = defineStore('city', () => {

  const cityList = ref({})

  const currentCity = ref({ cityName: '湖南' })
  // 获取城市数据
  async function fetchCityList() {
    const res = await getCityAll()
    cityList.value = res.data
  }

  return {
    cityList,
    currentCity,
    fetchCityList
  }
})

export default useCityStore