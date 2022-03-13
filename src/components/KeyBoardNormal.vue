<script setup>
import { computed, inject } from 'vue';
import { useStore } from 'vuex';
import KeyButton from "./KeyButton.vue";

const store = useStore();
const status = inject('status')
const searchCounty = computed(() => store.getters.searchCounty);
</script>

<template>
  <KeyButton class="select-county" :enableClick="false" @click="status = 'county'">
    <font-awesome-icon icon="location-dot" />
    &nbsp;&nbsp;{{ searchCounty }}
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
  <KeyButton class="blue" :enableClick="false" @click="status = 'more'">更多</KeyButton>
  <KeyButton class="blue font-roboto" :enableClick="false" @click="store.commit('clearSearch')">C</KeyButton>
  <KeyButton class="font-roboto">0</KeyButton>
  <KeyButton class="blue" :enableClick="false" @click="store.commit('deleteSearch')">
    <font-awesome-icon icon="delete-left" />
  </KeyButton>
</template>

<style scoped>
.select-county {
  grid-column-start: 1;
  grid-column-end: 4;
}
.manual-entry {
  grid-column-start: 4;
  grid-column-end: 6;
}
</style>