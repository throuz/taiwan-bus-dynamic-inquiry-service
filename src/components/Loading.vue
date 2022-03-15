<script setup>
import loadingJson from '../assets/loading.json';
</script>

<template>
  <vue3-lottie class="loading" :animationData="loadingJson" />
</template>

<style scoped>
.loading {
  width: 56px;
  height: 56px;
  margin: 0 auto;
}
</style>