<template>
  <div class="home-search">
    <!-- 地点 -->
    <div class="location">
      <div class="location-text" @click="gotoCity">{{ currentCity.cityName }}</div>
      <div class="adress" @click="positionClick">
        <span class="text">我的位置</span>
        <van-icon name="aim" class="icon" />
      </div>
    </div>
    <!-- 日期时间 -->
    <div class="time-container section" @click="calendarShow = true">
      <div class="stand">
        <span class="tip">入住</span>
        <div class="time">{{ startTimeStr }}</div>
      </div>
      <div class="stay">共 {{ totalNight }} 晚</div>
      <div class="stand">
        <span class="tip">离开</span>
        <div class="time">{{ endTimeStr }}</div>
      </div>
    </div>
    <van-calendar v-model:show="calendarShow" :round="false" color="var(--primary-color)" type="range"
      :formatter="formatter" @confirm="onConfirm" />
    <!-- 筛选 -->
    <div class="text-conteiner section">
      <span>经费不限</span>
      <span>人数不限</span>
    </div>
    <!-- 文本展示 -->
    <div class="show-search section">关键词/位置/民宿</div>
    <!-- 搜索 -->
    <div class="search section">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item" :style="{ color: item.tagText?.textColor, background: item.tagText.background.color }">
          {{ item.tagText?.text }}
        </div>
      </template>
    </div>
    <!-- 点击搜索 -->
    <div class="search-bth" @click="searchClick">
      开始搜索
    </div>

  </div>
</template>

<script setup>


import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue';

import useCityStore from '@/stores/moudule/city'
import useHomeStore from '@/stores/moudule/home.js'
import { fordateDate, fordateDay } from '@/utils/fordata-date'


const router = useRouter();
const cityStore = useCityStore()
const homeStore = useHomeStore()
const { currentCity } = storeToRefs(cityStore)
const { hotSuggests } = storeToRefs(homeStore)
// 位置点击
function positionClick() {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res);
  }, err => {
    console.log(err);
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

// 跳转到城市选择页面
function gotoCity() {
  router.push({
    name: 'city'
  })
}

import  useMainStore  from '@/stores/moudule/mainStore.js'
const mainStore = useMainStore()
const { startTime, endTime } = storeToRefs(mainStore)
const totalNight = ref(1) // 总天数
const startTimeStr = computed(() => fordateDate(startTime.value))
const endTimeStr = computed(() => fordateDate(endTime.value))
const calendarShow = ref(false) //日历显示
// 日期格式化
const formatter = (day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day
}
// 确认选择
function onConfirm(days) {
  // 设置日期
  if (days.length === 2) {
    startTime.value = days[0]
    endTime.value = days[1]
    // 计算天数
    totalNight.value = fordateDay(days[0], days[1])
  }
  // 隐藏日历
  calendarShow.value = false
  // 计算天数
}

// 搜索点击
function searchClick() {
  router.push({
    path: '/search',
    query: {
      cityName: currentCity.value.cityName,
      startTime: startTime.value,
      endTime: endTime.value,
    }
  })
}

</script>

<style lang="scss" scoped>
.section {
  display: flex;

  align-items: center;
  padding: 10px 0;
}

.home-search {
  padding: 0 20px;

  .location {
    padding: 10px 0;
    display: flex;
    align-items: center;

    .location-text {
      font-size: 18px;
      font-weight: 500;
      color: #333;
      flex: 1;
    }

    .adress {
      display: flex;
      align-items: center;

      .text {
        font-size: 16px;
        font-weight: 400;
        margin-right: 5px;
        color: #666;
      }

      .icon {
        color: var(--primary-color);
        font-size: 20px;
      }
    }
  }

  .time-container {
    justify-content: space-between;

    .stand {
      display: flex;
      flex-direction: column;
      align-items: center;

      .tip {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 4px;
        color: #666;
      }

      .time {
        font-size: 16px;
        font-weight: 500;
        color: #333;
      }
    }

    .stay {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-self: center;
      color: #a7a4a4;
    }
  }

  .text-conteiner {
    justify-content: space-between;
    font-size: 14px;
    color: #666;
  }

  .show-search {
    font-size: 16px;
    font-weight: 500;
    color: #adacac;
  }

  .search {
    margin-top: 10px 0;
    flex-flow: wrap;

    .item {
      padding: 4px 8px;
      margin: 8px 6px;
      background-color: #f5f5f5;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      color: #333;
    }
  }

  .search-bth {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    border-radius: 18px;
    font-weight: 500;
    background: var(--them--linear--gradient);
    color: #fff;
  }
}
</style>