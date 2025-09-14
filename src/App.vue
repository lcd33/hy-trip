<script setup>
import Tabber from '@/components/Tabber.vue';
import { computed } from 'vue';

import { useRoute } from 'vue-router';

const route = useRoute();
const hide = computed(() => route.meta.hide);

</script>

<template>

  <router-view #="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <!-- 第一种方法隐藏tabber -->
  <!-- <Tabber v-if="!hide"></Tabber> -->
  <Tabber></Tabber>
</template>

<style scoped lang="scss"></style>
