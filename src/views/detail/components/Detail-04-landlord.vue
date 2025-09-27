<template>
  <div class="landlord">
    <DetailSection title="房东介绍" moreText="查看房东主页">
      <!-- 图片 -->
      <div class="info">
        <img src="@/assets/img/detail/lord.png">
      </div>
      <!-- 顶部 -->
      <div class="top">
        <div class="left">
          <img :src="landlord.hotelLogo">
          <div class="desc">
            <div class="title">{{ landlord.hotelName }}</div>
            <div class="desc-container">
              <template v-for="item in landlord.hotelTags" :key="item.tagText.text">
                <div class="item" :style="{ color: item.tagText.color }">{{ item.tagText.text }}</div>
              </template>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="btn">
            联系房东
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom">
        <div class="rate-container">
          <template v-for="(item, index) in landlord.hotelSummary.slice(0, 3)" :key="item.title">
            <div class="item">
              <div class="text">{{ item.title }}</div>
              <div class="rate">{{ item.introduction }}</div>
              <div class="text">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from '@/components/DetailSection.vue';

defineProps({
  landlord: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.landlord {
  display: flex;
  align-items: center;

  // 图片
  .info {
    img {
      width: 100%;
    }
  }

  // 顶部
  .top {
    margin-top: 10px;
    display: flex;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      flex: 1;

      img {
        width: 50px;
        height: 50px;
      }

      .desc {
        margin-left: 5px;

        .title {
          font-size: 16px;
          font-weight: bold;
        }

        .desc-container {
          display: flex;
          margin-top: 5px;

          .item {
            font-size: 12px;
            color: #999;
            padding: 0 5px;

            border-right: 1px solid #999;

            &:last-child {
              border-right: none;
            }

            &:first-child {
              padding-left: 0;
            }
          }
        }
      }


    }

    .right {
      .btn {
        font-size: 12px;
        color: #fff;
        background: linear-gradient(90deg, #FF6B6B, #FF9A9A);
        padding: 5px 10px;
        border-radius: 5px;
      }
    }
  }

  // 底部
  .bottom {
    padding: 40px 10px 10px;

    .rate-container {
      display: flex;
      justify-content: space-between;

      .item {
        display: flex;
        flex-direction: column;
        align-items: start;

        .text {
          font-size: 12px;
          color: #838282;
        }

        .rate {
          padding: 10px 0;
          font-size: 16px;
          color: #000;
        }
      }
    }
  }
}
</style>