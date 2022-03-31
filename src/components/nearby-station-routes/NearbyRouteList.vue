<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const nearbyStationRoutes = computed(() => store.getters.nearbyStationRoutes.data);

const routeClick = route => {
  store.commit('updateRouteInfo', route);
  store.dispatch('asyncUpdateBusRouteStops');
  router.push('/bus-dynamic-info');
}
</script>

<template>
  <div class="nearby-route-list">
    <div v-for="route in nearbyStationRoutes" class="route-wrap" @click="routeClick(route)">
      <div class="route-name font-roboto">{{ route.name }}</div>往&nbsp;&nbsp;
      <span class="text">{{ route.departure }}</span>
    </div>
  </div>
</template>

<style scoped>
.route-wrap {
  padding: 12px 16px;
  color: #1cc8ee;
}
.route-wrap:nth-child(odd) {
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