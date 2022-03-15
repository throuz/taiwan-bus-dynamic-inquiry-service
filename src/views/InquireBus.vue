<script setup>
import { ref, computed, provide, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import NavbarSearch from "../components/NavbarSearch.vue";
import RouteList from "../components/RouteList.vue";
import KeyboardWrap from "../components/KeyboardWrap.vue";
import Loading from "../components/Loading.vue";

const store = useStore();
const busRoutesStatus = computed(() => store.getters.busRoutes.status);
const searchRef = ref(null);
const distance = ref(0);
provide('searchRef', searchRef);
provide('distance', distance);

onUnmounted(() => {
  store.commit('clearSearch');
  store.commit('updateSearchCounty', '');
  store.commit('updateBusRoutes', { status: 'idle', data: [] });
})
</script>

<template>
  <div class="inquire-bus">
    <NavbarSearch />
    <Loading v-if="busRoutesStatus === 'pending'" />
    <RouteList v-else />
    <KeyboardWrap />
  </div>
</template>

<style scoped>
.inquire-bus {
  position: relative;
  height: 100vh;
  padding: 99px 16px 24px 16px;
  background: #131414;
  box-sizing: border-box;
  overflow: scroll;
}
</style>