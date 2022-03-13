<script setup>
import { ref, provide, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import Navbar from "../components/Navbar.vue";
import KeyboardWrap from "../components/KeyboardWrap.vue";

const store = useStore();
const searchRef = ref(null);
const distance = ref(0);
provide('searchRef', searchRef);
provide('distance', distance);

onUnmounted(() => {
  store.commit('updateSearchCounty', '');
})
</script>

<template>
  <div class="inquire-bus">
    <Navbar />
    <span>請先選擇縣市</span>
    <KeyboardWrap />
  </div>
</template>

<style scoped>
.inquire-bus {
  position: relative;
  height: 100vh;
  padding: 99px 16px 0 16px;
  background: #131414;
  box-sizing: border-box;
  overflow: hidden;
}
</style>