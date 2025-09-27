<template>
  <div class="map">
    <DetailSection title="位置周边" moreText="查看更多周边信息">
      <div class="map-inner" id="container"></div>

    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from '@/components/DetailSection.vue';
import { onMounted } from 'vue';
const props = defineProps({
  positionInfo: {
    type: Object,
    default: () => ({})
  }
})

onMounted(() => {
  const map = new BMapGL.Map("container");          // 创建地图实例 
  const point = new BMapGL.Point(props.positionInfo.longitude, props.positionInfo.latitude);  // 创建点坐标 
  const marker = new BMapGL.Marker(point);
  map.addOverlay(marker);
  map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
})
</script>

<style lang="scss" scoped>
.map {
  .map-inner {
    height: 300px;
  }
}
</style>