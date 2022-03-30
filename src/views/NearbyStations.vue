<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavbarNearby from "../components/NavbarNearby.vue";
import NearbyStationList from "../components/NearbyStationList.vue";
import LoadWrap from "../components/LoadWrap.vue";

const store = useStore();
const nearbyStopsStatus = computed(() => store.getters.nearbyStations.status);

const success = pos => {
  const { latitude, longitude } = pos.coords;
  store.dispatch('asyncUpdateSearchCity', { lat: latitude, lon: longitude });
  store.dispatch('asyncUpdateNearbyStations', { lat: latitude, lon: longitude });
}
const error = err => {
  store.commit('updateNearbyStations', { status: 'error', data: [] })
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
navigator.geolocation.getCurrentPosition(success, error, options);
</script>

<template>
  <div class="nearby-stations">
    <NavbarNearby />
    <LoadWrap :status="nearbyStopsStatus">
      <NearbyStationList />
    </LoadWrap>
  </div>
</template>

<style scoped>
.nearby-stations {
  position: relative;
  height: 100vh;
  padding: 99px 16px 24px 16px;
  background: #131414;
  box-sizing: border-box;
  overflow: scroll;
}
</style>