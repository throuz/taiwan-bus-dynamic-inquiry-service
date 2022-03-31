<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="navbar-station">
    <div class="top-bar">
      <div class="back" @click="router.back()">
        <font-awesome-icon icon="angle-left" size="lg" />
      </div>
      <router-link to="/">
        <img class="logo-home" alt="logo" src="../../assets/logo-home.png" />
      </router-link>
      <span class="station-name">衡陽路</span>
    </div>
  </div>
</template>

<style scoped>
.navbar-station {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  background: #131414;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.top-bar {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 17px;
}
.back {
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
}
.logo-home {
  display: block;
}
.station-name {
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 41px;
}
</style>