<script setup>
import Navbar from "../components/Navbar.vue";
import Keyboard from "../components/Keyboard.vue";
</script>

<template>
  <div class="inquire-bus">
    <Navbar />
    <span>請先選擇縣市</span>
    <Keyboard />
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