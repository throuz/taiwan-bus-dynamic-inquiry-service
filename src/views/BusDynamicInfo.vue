<script setup>
import { ref, computed, provide, onUnmounted } from 'vue'
import { useStore } from 'vuex';
import NavbarRoute from "../components/NavbarRoute.vue";
import StopList from "../components/StopList.vue";
import Loading from "../components/Loading.vue";

const store = useStore();
const routeStops = computed(() => store.getters.routeStops.data);
const routeStopsStatus = computed(() => store.getters.routeStops.status);
const status = ref('coming');
provide('status', status);

onUnmounted(() => {
  store.commit("updateRouteStops", { status: 'idle', data: {} });
  store.commit("updateLastStop", { status: 'idle', data: {} });
})
</script>

<template>
  <div class="bus-dynamic-info">
    <NavbarRoute />
    <Loading v-if="routeStopsStatus === 'pending'" />
    <StopList v-else :stops="status === 'coming' ? routeStops.comeStops : routeStops.backStops" />
  </div>
</template>

<style scoped>
.bus-dynamic-info {
  position: relative;
  height: 100vh;
  padding: 150px 16px 10px 16px;
  background: #1c1d1d;
  box-sizing: border-box;
  overflow: scroll;
}
</style>