<template>
  <div class="comment">
    <DetailSection title="热门评价" :moreText="`查看全部${comment.totalCount}条评价`">
      <div class="comment-container">
        <!-- 顶部 -->
        <div class="top">
          <div class="left">
            <div class="score">4.9</div>
            <div class="desc">
              <div class="text1">超赞</div>
              <div class="text2">117条评论</div>
              <van-rate :modelValue="value" size="15px" />
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in comment.subScores.slice(0, 6)" :key="index">
              <div class="item" :style="{ color: item.color, backgroundColor: item.backgroundColor }">
                {{ item }}
              </div>
            </template>
          </div>
        </div>
        <!-- 标签 -->
        <div class="tag-container">
          <template v-for="(item, index) in comment.commentTagVo" :key="item.text">
            <div class="tag" :style="{ color: item.color, backgroundColor: item.backgroundColor }">
              {{ item.text }}
            </div>
          </template>
        </div>
        <!-- 评论列表 -->
        <div class="comment-list">
          <div class="comment-item">
            <div class="top">
              <img :src="comment.comment.userAvatars" alt="">
              <div class="info">
                <div class="name">
                  {{ comment.comment.userName }}
                </div>
                <div class="time">
                  {{ comment.comment.checkInDate }}
                </div>
              </div>
            </div>
            <div class="bottom">
              {{ comment.comment.commentDetail }}
            </div>
          </div>
        </div>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from '@/components/DetailSection.vue';

defineProps({
  comment: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="scss" scoped>
.comment {
  .comment-container {
    margin-top: 20px;

    .top {
      display: flex;
      align-items: center;

      .left {
        display: flex;
        align-self: center;


        .score {
          font-size: 48px;
          font-weight: 700;
          margin-right: 10px;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 5px;
            border-radius: 2px;
            background: linear-gradient(to right, #FFD700, #FFA500);
          }
        }

        .desc {
          .text1 {
            font-size: 14px;
          }

          .text2 {
            font-size: 14px;
            padding: 3px 0;
            color: #999;
          }
        }
      }

      .right {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        flex-flow: wrap;

        .item {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #999;
          margin: 5px 3px 0;

          .text2 {
            margin-left: 3px;
          }
        }
      }
    }

    .tag-container {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;

      .tag {
        display: inline-block;
        font-size: 12px;
        color: #6c6c6c;
        background-color: #f5f5f5;
        border-radius: 7px;
        padding: 2px 5px;
        margin: 5px 3px 0;
      }
    }

    .comment-list {
      margin-top: 10px;

      .comment-item {
        padding: 10px;
        background-color: #f7f9fb;
        border-radius: 10px;

        .top {
          display: flex;
          align-items: center;

          img {
            width: 40px;
            width: 40px;
            border-radius: 20px;
            margin-right: 10px;
          }

          .info {
            .name {
              font-size: 14px;
              color: #000;
            }

            .time {
              font-size: 12px;
              color: #999;
              margin-top: 5px;
            }
          }

        }

        .bottom {
          text-align: justify;
          padding-top: 20px;
          color: #414141;
        }
      }
    }
  }
}
</style>