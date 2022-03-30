<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const nearbyStations = computed(() => store.getters.nearbyStations.data);

const stationClick = stationID => {
  store.dispatch('asyncUpdateNearbyStationRoutes', stationID);
  router.push('/nearby-station-routes');
}
</script>

<template>
  <div class="nearby-station-list">
    <div
      v-for="{ id, name, routes } in nearbyStations"
      class="station-wrap"
      @click="stationClick(id)"
    >
      <div class="station-name">{{ name }}</div>
      <span class="text">{{ routes }}</span>
    </div>
  </div>
</template>

<style scoped>
.station-wrap {
  padding: 12px 16px;
  color: #1cc8ee;
}
.station-wrap:nth-child(odd) {
  background: #1c1d1d;
}
.station-name {
  font-weight: 500;
  font-size: 17px;
}
.text {
  color: #f5f5f5;
  font-size: 14px;
}
</style>