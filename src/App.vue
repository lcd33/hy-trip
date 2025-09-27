<script setup>
import Tabber from '@/components/Tabber.vue';
import AllLoading from '@/components/AllLoading.vue';

import { computed } from 'vue';

import { useRoute } from 'vue-router';

const route = useRoute();
const hide = computed(() => route.meta.hide);
</script>

<template>
  <!-- 不写 include/exclude → 默认缓存所有子组件（即使没有 name）写了 include/exclude → 必须有 name，而且和规则一致，否则不会缓存 -->
  <router-view #="{ Component }">
    <keep-alive :include="['SwiptDetail', 'Home']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <AllLoading></AllLoading>
  <!-- 第一种方法隐藏tabber -->
  <!-- <Tabber v-if="!hide"></Tabber> -->
  <Tabber></Tabber>
</template>

<style scoped lang="scss"></style>
