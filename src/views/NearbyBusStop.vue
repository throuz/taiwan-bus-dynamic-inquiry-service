<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavbarNearby from "../components/NavbarNearby.vue";
import NearbyStopList from "../components/NearbyStopList.vue";
import LoadWrap from "../components/LoadWrap.vue";

const store = useStore();
const nearbyStopsStatus = computed(() => store.getters.nearbyStops.status);
store.dispatch('asyncUpdateNearbyStops', { lat: 25.047675, lon: 121.517055 });
</script>

<template>
  <div class="nearby-bus-stop">
    <NavbarNearby />
    <LoadWrap :status="nearbyStopsStatus">
      <NearbyStopList />
    </LoadWrap>
  </div>
</template>

<style scoped>
.nearby-bus-stop {
  position: relative;
  height: 100vh;
  padding: 99px 16px 24px 16px;
  background: #131414;
  box-sizing: border-box;
  overflow: scroll;
}
</style>