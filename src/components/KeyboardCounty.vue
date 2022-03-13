<script setup>
import { ref, inject } from 'vue';
import { useStore } from 'vuex';
import KeyButton from "./KeyButton.vue";

const store = useStore();
const status = inject('status')
const counties = ['台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '台中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣', '台南市', '高雄市', '屏東縣', '台東縣', '花蓮縣', '宜蘭縣', '澎湖縣', '金門縣', '連江縣'];
const selectCounty = ref('');

const updateSelectCounty = (county) => {
  selectCounty.value = county
};
const setupCounty = () => {
  status.value = 'normal';
  store.commit('updateSearchCounty', selectCounty.value)
};
</script>

<template>
  <KeyButton
    v-for="county in counties"
    :class="['blue', selectCounty === county && 'selected']"
    :enableClick="false"
    @click="updateSelectCounty(county)"
  >{{ county }}</KeyButton>
  <KeyButton class="blue setup-county" :enableClick="false" @click="setupCounty">設定</KeyButton>
</template>

<style scoped>
.selected {
  color: #131414;
  background: #1cc8ee;
}
.setup-county {
  grid-column-start: 3;
  grid-column-end: 6;
}
</style>