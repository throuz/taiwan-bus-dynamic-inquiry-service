<script setup>
import { useSlots } from 'vue'
import { useStore } from 'vuex'
import buttonMP3 from "../assets/button.mp3";

const slots = useSlots();
const store = useStore();

const content = slots.default()[0].children;
const audio = new Audio(buttonMP3);

const clicked = () => {
  audio.play();
  content && store.commit('addSearch', content);
}
</script>

<template>
  <div class="key-button" @click="clicked">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.key-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1cc8ee;
  border-radius: 9px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 6px #1cc8ee, 0px 0px 2px #1cc8ee;
  font-size: 14px;
}
</style>