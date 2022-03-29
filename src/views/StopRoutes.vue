<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavbarStop from "../components/NavbarStop.vue";
import NearbyRouteList from "../components/NearbyRouteList.vue";
import LoadWrap from "../components/LoadWrap.vue";

const store = useStore();
const nearbyRoutesStatus = computed(() => store.getters.nearbyRoutes.status);
</script>

<template>
  <div class="stop-routes">
    <NavbarStop />
    <LoadWrap :status="nearbyRoutesStatus">
      <NearbyRouteList />
    </LoadWrap>
  </div>
</template>

<style scoped>
.stop-routes {
  position: relative;
  height: 100vh;
  padding: 99px 16px 24px 16px;
  background: #131414;
  box-sizing: border-box;
  overflow: scroll;
}
</style>