<script setup>
import { ref, computed, inject } from 'vue';
import { useStore } from 'vuex';
import KeyButton from "./KeyButton.vue";
import { cities } from "../tools/city";

const store = useStore();
const status = inject('status');
const searchCity = computed(() => store.getters.searchCity);
const selectCity = ref(searchCity.value);

const updateSelectCity = (city) => {
  selectCity.value = city;
};
const setupCity = () => {
  status.value = 'normal';
  if (selectCity.value) {
    store.commit('clearSearch');
    store.commit('updateSearchCity', selectCity.value);
    store.dispatch('asyncUpdateBusRoutes');
  }
};
</script>

<template>
  <KeyButton
    v-for="{ en, tw } in cities"
    :class="['blue', selectCity === en && 'selected']"
    :enableClick="false"
    @click="updateSelectCity(en)"
  >{{ tw }}</KeyButton>
  <KeyButton class="blue setup-city" :enableClick="false" @click="setupCity">設定</KeyButton>
</template>

<style scoped>
.selected {
  color: #131414;
  background: #1cc8ee;
}
.setup-city {
  grid-column-start: 3;
  grid-column-end: 6;
}
</style>