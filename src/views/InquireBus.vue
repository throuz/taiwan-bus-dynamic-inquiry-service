<script setup>
import { ref, provide } from 'vue';
import Navbar from "../components/Navbar.vue";
import KeyboardWrap from "../components/KeyboardWrap.vue";

const searchRef = ref(null);

provide('searchRef', searchRef);
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
}
</style>