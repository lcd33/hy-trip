<template>
  <div class="detail-section">
    <div class="header">
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="content">
      <slot>主要内容</slot>
    </div>
    <div class="footer" v-if="moreText.length">
      <div class="text">{{ moreText }}</div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '房屋设施'
  },
  moreText: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.detail-section {
  padding: 16px;
  background-color: #fff;
  border-top: 5px solid #f5f5f5;

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 20px;
      font-weight: 700;
      color: #333;
    }
  }

  .content {
    margin: 10px 0;
    background-color: #fff;
  }

  .footer {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--primary-color);

    .text {
      font-size: 16px;
      font-weight: 500;
      margin-right: 5px;
    }
  }
}
</style>