<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const searchCounty = computed(() => store.getters.searchCounty);
</script>

<template>
  <div class="bus-list">
    <div class="county-name">{{ searchCounty ? searchCounty : '請先選擇縣市' }}</div>
    <div class="route-wrap">
      <div class="route-name font-roboto">紅10</div>
      <div class="route-describe">
        <span class="text">台北海大</span>
        &nbsp;&nbsp;往&nbsp;&nbsp;
        <span class="text">捷運劍潭站</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.county-name {
  margin-bottom: 6px;
}
.route-wrap {
  padding: 12px 16px;
  color: #1cc8ee;
}
.route-wrap:nth-child(even) {
  background: #1c1d1d;
}
.route-name {
  font-weight: 500;
  font-size: 17px;
}
.text {
  color: #f5f5f5;
  font-size: 14px;
}
</style>