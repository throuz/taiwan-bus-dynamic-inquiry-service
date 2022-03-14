<script setup>
import { ref } from 'vue';

const stops = ref([
  {
    state: 'no-dep',
    name: '小北街',
    wheelchair: false,
    plate: ''
  },
  {
    state: 'pit',
    name: '士林區農會',
    wheelchair: true,
    plate: '619-U3'
  },
  {
    state: '4分',
    name: '士林國中',
    wheelchair: false,
    plate: ''
  },
  {
    state: '9分',
    name: '社子市場',
    wheelchair: false,
    plate: '568-FR'
  },
  {
    state: 'leave',
    name: '社子派出所',
    wheelchair: false,
    plate: ''
  }
]);
</script>

<template>
  <div class="stop-list">
    <div class="seconds-ago blue">*於3秒前更新</div>
    <div v-for="stop in stops" class="stop-wrap">
      <div class="stop-state blue">{{ stop.state }}</div>
      <div class="stop-name">{{ stop.name }}</div>
      <div class="car-info blue">
        <font-awesome-icon v-if="stop.wheelchair" icon="wheelchair" class="wheelchair" />
        <span v-if="stop.plate" class="font-roboto">{{ stop.plate }}</span>
        <div class="stop-state-circle"></div>
      </div>
    </div>
    <div class="stop-line"></div>
  </div>
</template>

<style scoped>
.stop-list {
  position: relative;
}
.seconds-ago {
  font-size: 12px;
  text-align: right;
  margin-bottom: 9px;
}
.stop-wrap {
  display: flex;
  font-size: 14px;
  align-items: center;
  margin-bottom: 14px;
}
.stop-state {
  width: 79px;
  line-height: 40px;
  background: #131414;
  border: 1px solid #1cc8ee;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px #1cc8ee;
  border-radius: 12px;
  text-align: center;
}
.stop-name {
  flex: 1;
  padding-left: 11px;
}
.car-info {
  display: flex;
  align-items: center;
  gap: 4px;
}
.wheelchair {
  font-size: 19px;
}
.stop-state-circle {
  width: 15px;
  height: 15px;
  background: #1c1d1d;
  z-index: 1;
  border: 1.4px solid #1cc8ee;
  box-shadow: 0px 0px 6px #1cc8ee, 0px 0px 2px #1cc8ee;
  border-radius: 50%;
  margin: 0 4px;
}
.stop-line {
  position: absolute;
  top: 38px;
  right: 12.9px;
  width: 1.2px;
  height: calc(100% - 59px);
  background: #1cc8ee;
  box-shadow: 0px 0px 5px #1cc8ee;
}
</style>