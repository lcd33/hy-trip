<template>
  <div class="search">
    <div class="select-tiem">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startTimeStr }}</div>
      </div>
      <div class="item start">
        <div class="name">离</div>
        <div class="date">{{ endTimeStr }}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <van-icon name="search" class="icon" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useMainStore from '@/stores/moudule/mainStore';
import { fordateDate } from '@/utils/fordata-date'
import { storeToRefs } from 'pinia'
const mainStore = useMainStore()
const { startTime, endTime } = storeToRefs(mainStore)
const startTimeStr = computed(() => fordateDate(startTime.value, 'MM.DD'))
const endTimeStr = computed(() => fordateDate(endTime.value, 'MM.DD'))
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  background-color: #f2f4f6;
  padding: 0 10px;
  border-radius: 10px;
  height: 40px;

  .select-tiem {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 10px;
    padding-right: 10px;
    border-right: 2px solid #fff;

    .item {
      display: flex;
      align-items: center;

      .name {
        color: #d1d0d0;
        margin-right: 5px;
      }

      .date {
        color: #ff4444;
      }
    }
  }

  .content {
    flex: 1;
    padding: 0 5px;

    .keyword {
      color: #d1d0d0;
      font-size: 14px;
    }
  }

  .right {
    .icon {
      font-size: 24px;
    }
  }
}
</style>