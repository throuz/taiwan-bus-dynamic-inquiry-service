<script setup>
import { ref, computed, provide, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import NavbarRoute from "../components/bus-dynamic-info/NavbarRoute.vue";
import StopList from "../components/bus-dynamic-info/StopList.vue";
import LoadWrap from "../components/LoadWrap.vue";

const store = useStore();
const router = useRouter();
const busRouteStops = computed(() => store.getters.busRouteStops.data);
const routeStopsStatus = computed(() => store.getters.busRouteStops.status);
const status = ref('coming');
provide('status', status);

routeStopsStatus.value === 'idle' && router.push('/');

onUnmounted(() => {
  store.commit("updateBusRouteStops", { status: 'idle', data: {} });
})
</script>

<template>
  <div class="bus-dynamic-info">
    <NavbarRoute />
    <LoadWrap :status="routeStopsStatus">
      <StopList :stops="status === 'coming' ? busRouteStops.comeStops : busRouteStops.backStops" />
    </LoadWrap>
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