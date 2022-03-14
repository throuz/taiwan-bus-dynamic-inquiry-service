<script setup>
import NavbarRoute from "../components/NavbarRoute.vue";
import StopList from "../components/StopList.vue";
</script>

<template>
  <div class="bus-dynamic-info">
    <NavbarRoute />
    <StopList />
  </div>
</template>

<style scoped>
.bus-dynamic-info {
  position: relative;
  height: 100vh;
  padding: 150px 16px 24px 16px;
  background: #1c1d1d;
  box-sizing: border-box;
  overflow: scroll;
}
</style>