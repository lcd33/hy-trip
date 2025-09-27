<template>
  <!-- mainPart,数据不变化，子组件不在重新渲染 -->
  <div class="detail top_page" ref="detailRef">
    <div class="tabs" v-if="showTab">
      <van-tabs v-model:active="active" @click-tab="handleClickTab">
        <template v-for="item in titles">
          <van-tab :title="item"></van-tab>
        </template>
      </van-tabs>
    </div>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="detail_swiper" v-if="mainPart" v-memo="[mainPart]">
      <SwiptDetail :swipeDate="mainPart.topModule.housePicture.housePics"></SwiptDetail>
      <DetailInfos :ref="getRef" name="描述" :infos="mainPart.topModule"></DetailInfos>
      <DetailFacility :ref="getRef" name="设施" :facility="mainPart.dynamicModule.facilityModule.houseFacility">
      </DetailFacility>
      <DetailLandlord :ref="getRef" name="房东" :landlord="mainPart.dynamicModule.landlordModule"></DetailLandlord>
      <DetailComment :ref="getRef" name="评价" :comment="mainPart.dynamicModule.commentModule
        "></DetailComment>
      <DetailYud :ref="getRef" name="须知"></DetailYud>
      <DetailMap :ref="getRef" name="地图" :positionInfo="mainPart.dynamicModule.positionModule"></DetailMap>
      <DetailPrice :detaPrice="mainPart.introductionModule"></DetailPrice>
      <DetailFooter></DetailFooter>
    </div>
  </div>
</template>

<script setup>
import SwiptDetail from './components/Detail-01-SwiptDetail.vue'
import DetailInfos from './components/Detail-02-infos.vue'
import DetailFacility from './components/Detail-03-Facility.vue';
import DetailLandlord from './components/Detail-04-landlord.vue';
import DetailComment from './components/Detail-05-Comment.vue';
import DetailYud from './components/Detail-06-Yud.vue';
import DetailMap from './components/Detail-07-Map.vue';
import DetailPrice from './components/Detail-08-Price.vue';
import DetailFooter from './components/Detail-09-Footer.vue';

import { useRouter, useRoute } from 'vue-router';
import { onMounted, computed, ref, useTemplateRef, watch } from 'vue';

import { getDetail } from '@/service'
import useBottomHook from '@/hook/useBottomHook'
const router = useRouter()
const route = useRoute()
const houseId = route.params.houseId
// 由于数据太复杂对对数据进行拆分
const detailInfo = ref({})
const mainPart = computed(() => detailInfo.value.mainPart)
async function getDetail1() {
  const res = await getDetail(houseId)
  detailInfo.value = res.data
  console.log(detailInfo.value)
}
function onClickLeft() {
  router.back()
}
onMounted(() => {
  getDetail1()
})

const detailRef = useTemplateRef('detailRef')
const { scrollTop } = useBottomHook(detailRef)
const showTab = computed(() => {
  return scrollTop.value >= 330
})

// tabcontrol
const active = ref(0)
const titles = ['描述', '设施', '房东', '评价', '须知', '地图']
const sectionRefs = ref([])
let isClick = false
let currentDistence = -1
function handleClickTab(value) {
  console.log(value, 'ddddddhkj')
  // 滚动到对应的位置
  const targetElement = sectionRefs.value[value.name]
  console.log(targetElement.offsetTop, '222')
  // const targetElement1 = Object.values(refObj.value)[value.name]
  let intance = targetElement.offsetTop

  if (value.name !== 0) {
    intance = intance - 44
  }
  isClick = true
  currentDistence = intance
  if (targetElement) {
    detailRef.value.scrollTo({ top: intance, behavior: 'smooth' })
  }
}

function getRef(cpnRef) {
  if (!cpnRef) return
  sectionRefs.value.push(cpnRef.$el)
}

// 第二种做法 利用ref对象来存储组件的引用 {”name“:'组件实例'}
// const refObj = ref({})
// const names = computed(() => {
//   return Object.keys(refObj.value)
// })
// function getRef(cpnRef) {
//   // 获取组件上的name属性值 后期维护只需要在组件上添加name属性即可
//   const name = cpnRef.$el.getAttribute('name')
//   refObj.value[name] = cpnRef.$el
// }

// 监听tabControl的滚动

watch(scrollTop, (newVal) => {
  // console.log(Math.floor(newVal), currentDistence, 'scrollTop')
  if (Math.floor(newVal) == currentDistence) {
    isClick = false
  }
  if (isClick) return
  // 监听tabControl的滚动  滚动到对应的tab
  const positions = sectionRefs.value.map(el => el.offsetTop)
  let tabIndex = positions.length - 1
  for (let i = 0; i < positions.length; i++) {
    if (newVal < positions[i] - 44) {
      tabIndex = i - 1
      break
    }
  }

  active.value = tabIndex
  // console.log(positions, 'titlesPositon', tabIndex, newVal)
})
</script>

<style lang="scss" scoped>
.detail {
  .tabs {
    position: fixed;
    z-index: 999;
    width: 100%;
  }
}
</style>