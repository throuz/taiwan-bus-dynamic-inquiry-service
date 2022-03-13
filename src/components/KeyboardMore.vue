<script setup>
import { inject } from 'vue';
import KeyButton from "./KeyButton.vue";

const status = inject('status')
const buttons = ['F', 'R', 'T', '快', '內科', '跳蛙', '通勤', '南軟', '先導', '夜間', '市民', '其他'];
</script>

<template>
  <KeyButton v-for="button in buttons" class="blue">{{ button }}</KeyButton>
  <KeyButton class="blue back-previous" :enableClick="false" @click="status = 'normal'">回上一頁</KeyButton>
</template>

<style scoped>
.back-previous {
  grid-column-start: 3;
  grid-column-end: 6;
}
</style>