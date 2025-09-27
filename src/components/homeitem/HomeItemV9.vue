<template>
  <div class="home-item-v9">
    <div class="layout">
      <img :src="data.image?.url">
      <div class="content">
        <div class="summaryText">{{ data.summaryText }}</div>
        <div class="houseName">{{ data.houseName }}</div>
        <div class="score">
          <van-rate :model-value="parseFloat(data.commentScore)" color="var(--primary-color)" size="16" />
          <div class="score-text">{{ data.commentScore }}分</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.home-item-v9 {
  width: 50%;

  .layout {
    padding: 10px 10px 0 0;
    position: relative;

    img {
      width: 100%;
      object-fit: cover;
    }

    .content {
      position: absolute;
      bottom: 3px;
      padding: 0 10px;

      .summaryText {
        font-size: 14px;
        color: #fff;
        margin-bottom: 5px;
      }

      .houseName {
        font-size: 12px;
        color: #fff;
        text-indent: 2em;
      }

      .score {
        display: flex;
        align-items: center;
        color: #fff;

        .score-text {
          margin-left: 10px;
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }


}
</style>