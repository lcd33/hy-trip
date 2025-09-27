<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <template v-for="(item, index) in swipeDate" :key="index">
      <van-swipe-item>
        <img :src="item.url">
      </van-swipe-item>
    </template>
    <template #indicator="{ active, total }">
      <div class="custom-indicator">
        <template v-for="(value, key, index) in groups" :key="key">
          <div class="item" :class="{ 'active': key == swipeDate[active]?.enumPictureCategory }">
            {{ getName(value[0].title) }}
            <div class="count" v-if="key == swipeDate[active]?.enumPictureCategory">
              {{ getCategoryIndex(swipeDate[active]) }} /{{ value.length }}
            </div>
          </div>
        </template>
      </div>
    </template>
  </van-swipe>
</template>

<script setup>

const props = defineProps({
  swipeDate: {
    type: Object,
    default: () => ({})
  }
})

// 按enumPictureCategory分类
const groups = {}
for (const item of props.swipeDate) {
  let temple = groups[item.enumPictureCategory]
  if (!temple) {
    temple = []
    groups[item.enumPictureCategory] = temple
  }
  temple.push(item)
}
// console.log(groups, 'dhhbd')
const regName = /【(.*?)】/i
// const regName1 = /[【】:]*/
function getName(str) {
  const regArray = regName.exec(str)
  return regArray ? regArray[1] : str
}

function getCategoryIndex(item) {
  return groups[item.enumPictureCategory].findIndex(data => data == item) + 1
}
</script>

<style lang="scss" scoped>
.van-swipe {
  .van-swipe-item {
    img {
      width: 100%;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    display: flex;
    align-items: center;

    .item {
      margin-right: 3px;
      padding: 0 3px;
      border-radius: 5px;
      display: flex;
    }

    .active {
      background: #fff;
      color: #000;
    }
  }
}
</style>