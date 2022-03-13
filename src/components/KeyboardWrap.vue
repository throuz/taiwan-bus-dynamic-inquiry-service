<script setup>
import { ref, provide } from 'vue'
import KeyBoardNormal from "./KeyBoardNormal.vue";
import KeyboardCounty from "./KeyboardCounty.vue";
import KeyboardMore from "./KeyboardMore.vue";

const status = ref('normal');
provide('status', status)
</script>

<template>
  <div class="keyboard">
    <KeyBoardNormal v-if="status === 'normal'" />
    <KeyboardCounty v-if="status === 'county'" />
    <KeyboardMore v-if="status === 'more'" />
  </div>
</template>

<style scoped>
.keyboard {
  position: absolute;
  padding: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1c1d1d;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
}
</style>