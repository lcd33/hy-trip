<template>
  <div class="home-item-v3">
    <div class="layout">
      <img :src="data.image?.url">
      <div class="content">
        <div class="location">
          <van-icon name="location-o" color="var(--primary-color)" class="icon" />
          <div>{{ data.location }}</div>
        </div>
        <div class="houseName">{{ data.houseName }}</div>
        <div class="summaryText">{{ data.summaryText }}</div>
        <div class="price">
          <div class="productPrice">¥{{ data.productPrice }}</div>
          <div class="finalPrice">现价¥{{ data.finalPrice }}</div>
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
.home-item-v3 {
  width: 50%;

  .layout {
    margin: 10px 10px 0 0;

    img {
      width: 100%;
      object-fit: cover;
    }

    .content {
      padding: 10px 10px 0;

      .location {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #a09e9e;

        .icon {
          margin-right: 5px;
        }
      }

      .houseName {
        font-size: 14px;
        margin-top: 5px;
        text-indent: 1rem;
        height: 30px;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .summaryText {
        font-size: 12px;
        margin-top: 5px;
        color: rgb(116, 116, 116);
      }

      .price {
        display: flex;
        padding: 10px 0;

        .productPrice {
          font-size: 14px;
          font-weight: bold;
          margin-right: 10px;
          color: #a09e9e;
        }

        .finalPrice {
          font-size: 12px;
          background-color: #f3a1b2;
          text-align: center;
          line-height: 1rem;
          padding: 0 10px;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
  }
}
</style>