<script setup>
import { computed, inject } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const routeInfo = computed(() => store.getters.routeInfo);
const status = inject('status');
</script>

<template>
  <div class="navbar-route">
    <div class="top-bar">
      <div class="back" @click="router.back()">
        <font-awesome-icon icon="angle-left" size="lg" />
      </div>
      <router-link to="/">
        <img class="logo-home" alt="logo" src="../assets/logo-home.png" />
      </router-link>
    </div>
    <div class="route-bar">
      <div class="stop" @click="status = 'coming'">
        往
        <span class="text">{{ routeInfo.destination }}</span>
      </div>
      <div class="stop" @click="status = 'backing'">
        往
        <span class="text">{{ routeInfo.departure }}</span>
      </div>
      <div class="active" :style="{ left: status === 'coming' ? 0 : '50%' }"></div>
    </div>
  </div>
</template>

<style scoped>
.navbar-route {
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
.route-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.stop {
  width: 100%;
  padding: 12px;
  text-align: center;
  color: #1cc8ee;
}
.text {
  color: #f5f5f5;
}
.active {
  position: absolute;
  left: 0;
  bottom: 0;
  background: #1cc8ee;
  width: 50%;
  height: 2.5px;
  box-shadow: 0px 0px 6px #1cc8ee, 0px 0px 2px #1cc8ee;
  transition: 0.2s;
}
</style>