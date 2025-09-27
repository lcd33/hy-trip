<template>
  <DetailSection title="房屋设施" moreText="查看全部设施">
    <div class="facility-inner">
      <template v-for="(item, index) in facility.houseFacilitys" :key="item.groupName">
        <div class="facility-item" v-if="facility.facilitySort.includes(item.groupId)">
          <div class="header">
            <img :src="item.icon">
            <div class="groupName">{{ item.groupName }}</div>
          </div>
          <div class="content">
            <template v-for="(iten, index) in item.facilitys.slice(0, 4)" :key="index">
              <div class="item">
                <div class="icon icon_check"></div>
                <div class="name">{{ iten.name }}</div>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </DetailSection>
</template>

<script setup>
import DetailSection from '@/components/DetailSection.vue';
defineProps({
  facility: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.facility-inner {
  padding: 10px 0;

  .facility-item {
    display: flex;
    background-color: #f7f9fb;
    padding: 20px 0;

    .header {
      width: 100px;
      text-align: center;

      img {
        width: 22px;
        height: 22px;
        margin-bottom: 5px;
      }

      .groupName {
        font-size: 14px;
      }
    }

    .content {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        margin: 4px 0;
        align-items: center;
        display: flex;

        .icon {
          margin-right: 5px;
        }

        .name {
          font-size: 14px;
        }
      }
    }
  }
}
</style>