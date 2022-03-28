<script setup>
// import { computed } from 'vue';
// import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';

// const store = useStore();
// const router = useRouter();
// const busRoutes = computed(() => store.getters.busRoutes.data);
const stops = [
  {
    name: '衡陽路',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '二二八和平公園',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '衡陽路',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '二二八和平公園',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '衡陽路',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '二二八和平公園',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '衡陽路',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '二二八和平公園',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '衡陽路',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '二二八和平公園',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '衡陽路',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  },
  {
    name: '二二八和平公園',
    routes: [
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' },
      { id: 123, name: 18, departure: '捷運麟光站', destination: '萬華' },
      { id: 456, name: 222, departure: '測試站', destination: '衡陽路' }
    ]
  }
];

const allRoutes = routes => routes.map(item => item.name).join(', ');

// const routeClick = routes => {
//   store.commit('updateRouteInfo', route);
//   store.dispatch('asyncUpdateRouteStops');
//   router.push('/bus-dynamic-info');
// }
</script>

<template>
  <div class="nearby-stop-list">
    <div v-for="{ name, routes } in stops" class="stop-wrap" @click="routeClick(routes)">
      <div class="stop-name">{{ name }}</div>
      <span class="text">{{ allRoutes(routes) }}</span>
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