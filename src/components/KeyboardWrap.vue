<script setup>
import { ref, provide, inject } from 'vue'
import KeyBoardNormal from "./KeyBoardNormal.vue";
import KeyboardCounty from "./KeyboardCounty.vue";
import KeyboardMore from "./KeyboardMore.vue";

const status = ref('normal');
provide('status', status)

const positionStart = ref(0);
const distance = inject('distance');
const moving = ref(false);

const dragStart = e => {
  positionStart.value = e.touches[0].clientY;
  moving.value = true;
}
const draging = e => {
  distance.value = e.changedTouches[0].clientY - positionStart.value;
}
const dragEnd = () => {
  distance.value > 100 ? (distance.value = 400) : (distance.value = 0);
  moving.value = false;
}
</script>

<template>
  <div
    class="keyboard"
    :style="{
      bottom: distance > 0 ? `-${distance}px` : 0,
      transition: !moving && '0.3s'
    }"
    @touchstart="dragStart"
    @touchmove="draging"
    @touchend="dragEnd"
  >
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
  background: #1c1d1d;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
}
</style>