<template>
  <div class="detail-infos">
    <!-- 房屋名称 -->
    <div class="houseName">{{ infos.houseName }}</div>
    <!-- 房屋标签 -->
    <div class="tags">
      <template v-for="(item, index) in infos.houseTags" :key="index">
        <div class="tag" :style="{ color: item.tagText?.color, background: item.tagText?.background.color }">
          {{ item.tagText?.text }}
        </div>
      </template>
    </div>
    <!-- 评论 -->
    <div class="commentBrief">
      <div class="left">
        <div class="overall">{{ infos.commentBrief.overall }}</div>
        <div class="scoreTitle">{{ infos.commentBrief.scoreTitle }}</div>
        <div class="commentBrief1">{{ infos.commentBrief.commentBrief }}</div>
      </div>
      <div class="right">
        <div class="totalCount">{{ infos.commentBrief.totalCount }}条评论</div>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 地址 -->
    <div class="location">
      <div class="left">{{ infos.nearByPosition.address }}</div>
      <div class="right">
        <div class="text">地图·周边</div>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  infos: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.detail-infos {
  padding: 16px;
  background-color: #fff;

  // 房屋名称
  .houseName {
    font-size: 20px;
    font-weight: 700;
    text-align: justify;
    line-height: 1.3;
    overflow: hidden;
    margin-bottom: 6px;
  }

  // 房屋标签
  .tags {
    display: flex;
    align-items: center;
    margin: 10px 0;
    overflow-y: hidden;

    .tag {
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      padding: 2px 2px;
      margin-right: 5px;
    }
  }

  // 评论
  .commentBrief {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f5f7fa;
    font-size: 12px;
    margin: 10px 0;

    .left {
      flex: 1;
      display: flex;
      align-items: baseline;

      .overall {
        font-size: 18px;
        font-weight: 700;
        margin-right: 5px;
      }

      .scoreTitle {
        font-weight: 700;
        margin-right: 5px;
      }

      .commentBrief1 {
        color: #999;
      }
    }

    .right {
      display: flex;
      align-items: center;
      color: var(--primary-color);

      .totalCount {
        margin-right: 5px;
      }
    }
  }

  // 地址
  .location {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f5f7fa;
    margin: 10px 0;
    .left {
      flex: 1;
      font-weight: 500;
      text-align: left;
      font-size: 16px;
    }

    .right {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: var(--primary-color);

      .text {
        margin-right: 5px;
      }
    }
  }
}
</style>