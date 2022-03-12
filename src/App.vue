<script setup>
import { useRoute } from 'vue-router'
import Navbar from "./components/Navbar.vue";

const route = useRoute()
</script>

<template>
  <Navbar v-if="route.meta.navbar" />
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500&family=Roboto&display=swap");

body {
  margin: 0;
}
#app {
  font-family: "Noto Sans TC", sans-serif;
  color: #f5f5f5;
  background: #131414;
  height: 100vh;
}
.font-roboto {
  font-family: "Roboto";
}
</style>