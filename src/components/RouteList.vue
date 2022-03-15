<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const searchCounty = computed(() => store.getters.searchCounty);
const busRoutes = computed(() => store.getters.busRoutes);
const search = computed(() => store.getters.search);
const routes = computed(() => busRoutes.value.filter(route => route.name.includes(search.value)));

const routeClick = (routeName) => {
  store.dispatch('asyncUpdateRouteStops', routeName);
  router.push('/bus-dynamic-info');
}
</script>

<template>
  <div class="bus-list">
    <div class="county-name">{{ searchCounty ? searchCounty : '請先選擇縣市' }}</div>
    <div v-for="route in routes" class="route-wrap" @click="routeClick(route.name)">
      <div class="route-name font-roboto">{{ route.name }}</div>
      <div class="route-describe">
        <span class="text">{{ route.departure }}</span>
        &nbsp;&nbsp;往&nbsp;&nbsp;
        <span class="text">{{ route.destination }}</span>
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