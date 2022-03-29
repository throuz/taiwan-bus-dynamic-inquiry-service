<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const nearbyStops = computed(() => store.getters.nearbyStops.data);

const stopClick = stopID => {
  store.dispatch('asyncUpdateNearbyRoutes', stopID);
  router.push('/stop-routes');
}
</script>

<template>
  <div class="nearby-stop-list">
    <div v-for="{ id, name, routes } in nearbyStops" class="stop-wrap" @click="stopClick(id)">
      <div class="stop-name">{{ name }}</div>
      <span class="text">{{ routes }}</span>
    </div>
  </div>
</template>

<style scoped>
.stop-wrap {
  padding: 12px 16px;
  color: #1cc8ee;
}
.stop-wrap:nth-child(odd) {
  background: #1c1d1d;
}
.stop-name {
  font-weight: 500;
  font-size: 17px;
}
.text {
  color: #f5f5f5;
  font-size: 14px;
}
</style>