<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavbarStation from "../components/nearby-station-routes/NavbarStation.vue";
import NearbyRouteList from "../components/nearby-station-routes/NearbyRouteList.vue";
import LoadWrap from "../components/LoadWrap.vue";

const store = useStore();
const nearbyRoutesStatus = computed(() => store.getters.nearbyStationRoutes.status);
</script>

<template>
  <div class="nearby-station-routes">
    <NavbarStation />
    <LoadWrap :status="nearbyRoutesStatus">
      <NearbyRouteList />
    </LoadWrap>
  </div>
</template>

<style scoped>
.nearby-station-routes {
  position: relative;
  height: 100vh;
  padding: 99px 16px 24px 16px;
  background: #131414;
  box-sizing: border-box;
  overflow: scroll;
}
</style>