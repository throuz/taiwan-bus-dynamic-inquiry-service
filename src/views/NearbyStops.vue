<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavbarNearby from "../components/NavbarNearby.vue";
import NearbyStopList from "../components/NearbyStopList.vue";
import LoadWrap from "../components/LoadWrap.vue";

const store = useStore();
const nearbyStopsStatus = computed(() => store.getters.nearbyStops.status);

const success = pos => {
  const { latitude, longitude } = pos.coords;
  store.dispatch('asyncUpdateSearchCity', { lat: latitude, lon: longitude });
  store.dispatch('asyncUpdateNearbyStops', { lat: latitude, lon: longitude });
}
const error = err => {
  store.commit('updateNearbyStops', { status: 'error', data: [] })
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
  <div class="nearby-stops">
    <NavbarNearby />
    <LoadWrap :status="nearbyStopsStatus">
      <NearbyStopList />
    </LoadWrap>
  </div>
</template>

<style scoped>
.nearby-stops {
  position: relative;
  height: 100vh;
  padding: 99px 16px 24px 16px;
  background: #131414;
  box-sizing: border-box;
  overflow: scroll;
}
</style>