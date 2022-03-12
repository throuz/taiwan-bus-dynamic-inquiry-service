<script setup>
import Navbar from "../components/Navbar.vue";
import Keyboard from "../components/Keyboard.vue";
</script>

<template>
  <div class="inquire-bus">
    <span>請先選擇縣市</span>
    <Keyboard />
  </div>
</template>

<style scoped>
.inquire-bus {
  padding: 24px 16px;
}
</style>