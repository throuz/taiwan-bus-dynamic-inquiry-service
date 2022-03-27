<script setup>
import { ref, computed, useSlots } from 'vue'
import { useStore } from 'vuex'
import buttonMP3 from "../assets/button.mp3";

const props = defineProps({
  enableClick: {
    type: Boolean,
    default: true
  }
})
const slots = useSlots();
const store = useStore();
const audio = new Audio(buttonMP3);
const searchCity = computed(() => store.getters.searchCity);
const touching = ref(false);

const clicked = () => {
  audio.play();
  if (props.enableClick) {
    searchCity.value ? store.commit('addSearch', slots.default()[0].children) : alert('請先選擇縣市');
  }
}
</script>

<template>
  <div
    :class="['key-button', touching && 'touching']"
    @click="clicked"
    @touchstart="touching = true"
    @touchend="touching = false"
  >
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
  padding: 10px 0;
  text-align: center;
  box-shadow: 0px 0px 6px #1cc8ee, 0px 0px 2px #1cc8ee;
  font-size: 14px;
}
.touching {
  color: #131414;
  background: #1cc8ee;
}
</style>