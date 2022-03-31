<script setup>
import { computed, inject } from 'vue';
import { useStore } from 'vuex';
import KeyButton from "./KeyButton.vue";
import { ENtoTW } from "../../tools/city";

const store = useStore();
const status = inject('status');
const searchRef = inject('searchRef');
const searchCity = computed(() => store.getters.searchCity);
</script>

<template>
  <KeyButton class="select-city" :enableClick="false" @click="status = 'city'">
    <font-awesome-icon icon="location-dot" />
    &nbsp;&nbsp;{{ searchCity ? ENtoTW(searchCity) : '選擇縣市' }}
  </KeyButton>
  <KeyButton class="blue manual-entry" :enableClick="false" @click="searchRef.focus()">手動輸入</KeyButton>
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
.select-city {
  grid-column-start: 1;
  grid-column-end: 4;
}
.manual-entry {
  grid-column-start: 4;
  grid-column-end: 6;
}
</style>