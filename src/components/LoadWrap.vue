<script setup>
import { useRouter } from 'vue-router';
import Loading from "../components/Loading.vue";

const router = useRouter();

defineProps({
  status: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <Loading v-if="status === 'pending'" />
  <div v-else-if="status === 'error'" class="error-message">
    發生未知錯誤，
    <span class="blue" @click="router.go()">點我</span>重整頁面。
  </div>
  <slot v-else></slot>
</template>

<style scoped>
.error-message {
  text-align: center;
}
</style>