<script setup>
import { useStore } from 'vuex'
import KeyButton from "./KeyButton.vue";

const store = useStore();
</script>

<template>
  <div class="keyboard">
    <KeyButton class="county" :enableClick="false">
      <font-awesome-icon icon="location-dot" />&nbsp;&nbsp;選擇縣市
    </KeyButton>
    <KeyButton class="blue manual-entry" :enableClick="false">手動輸入</KeyButton>
    <KeyButton class="blue">紅</KeyButton>
    <KeyButton class="blue">藍</KeyButton>
    <KeyButton class="font-roboto">1</KeyButton>
    <KeyButton class="font-roboto">2</KeyButton>
    <KeyButton class="font-roboto">3</KeyButton>
    <KeyButton class="blue">綠</KeyButton>
    <KeyButton class="blue">棕</KeyButton>
    <KeyButton class="font-roboto">4</KeyButton>
    <KeyButton class="font-roboto">5</KeyButton>
    <KeyButton class="font-roboto">6</KeyButton>
    <KeyButton class="blue">橘</KeyButton>
    <KeyButton class="blue">小</KeyButton>
    <KeyButton class="font-roboto">7</KeyButton>
    <KeyButton class="font-roboto">8</KeyButton>
    <KeyButton class="font-roboto">9</KeyButton>
    <KeyButton class="blue">幹線</KeyButton>
    <KeyButton class="blue" :enableClick="false">更多</KeyButton>
    <KeyButton class="blue font-roboto" :enableClick="false" @click="store.commit('clearSearch')">C</KeyButton>
    <KeyButton class="font-roboto">0</KeyButton>
    <KeyButton class="blue" :enableClick="false" @click="store.commit('deleteSearch')">
      <font-awesome-icon icon="delete-left" />
    </KeyButton>
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
.county {
  grid-column-start: 1;
  grid-column-end: 4;
}
.manual-entry {
  grid-column-start: 4;
  grid-column-end: 6;
}
.blue {
  color: #1cc8ee;
}
</style>