<script setup>
import { ref, provide, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import Navbar from "../components/Navbar.vue";
import BusList from "../components/BusList.vue";
import KeyboardWrap from "../components/KeyboardWrap.vue";

const store = useStore();
const searchRef = ref(null);
const distance = ref(0);
provide('searchRef', searchRef);
provide('distance', distance);

onUnmounted(() => {
  store.commit('updateSearchCounty', '');
  store.commit('updateBusRoutes', []);
})
</script>

<template>
  <div class="inquire-bus">
    <Navbar />
    <BusList />
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