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
    <div class="time-container" @click="calendarShow = true">
      <div class="stand">
        <span class="tip">入住</span>
        <div class="time">{{ startTime }}</div>
      </div>
      <div class="stay">共 {{ totalNight }} 晚</div>
      <div class="stand">
        <span class="tip">离开</span>
        <div class="time">{{ endTime }}</div>
      </div>
    </div>
    <van-calendar v-model:show="calendarShow" :round="false" color="var(--primary-color)" type="range"
      :formatter="formatter" @confirm="onConfirm" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import { ref } from 'vue';

import useCityStore from '@/stores/moudule/city'
import { fordateDate } from '@/utils/fordata-date'


const router = useRouter();
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

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

const startTime = ref('')
const endTime = ref('')
const totalNight = ref(1) // 总天数
startTime.value = fordateDate(new Date())
endTime.value = fordateDate(new Date().setDate(new Date().getDate() + 1))
const calendarShow = ref(true) //日历显示
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
  console.log(days)
  if (days.length === 2) {
    startTime.value = fordateDate(days[0])
    endTime.value = fordateDate(days[1])
    // 计算天数
  }
  // 隐藏日历
  calendarShow.value = false
  // 计算天数
}
</script>

<style lang="scss" scoped>
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
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

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
}
</style>