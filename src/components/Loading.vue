<script setup>
import loadingJson from '../assets/loading.json';
</script>

<template>
  <Vue3Lottie class="loading" :animationData="loadingJson" />
</template>

<style scoped>
.loading {
  width: 56px;
  height: 56px;
}
</style>