<template>
  <div class="price">
    <div class="price-title">
      {{ detaPrice.title }}
    </div>
    <div class="introduction">
      {{ detaPrice.introduction }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  detaPrice: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.price {
  padding: 16px 12px;
  background-color: #fff;
  border-top: 5px solid #f5f5f5;

  .price-title {
    font-size: 15px;
    font-weight: bold;
  }

  .introduction {
    font-size: 12px;
    color: #666;
    margin: 14px 0;
    line-height: 1.5;
  }
}
</style>