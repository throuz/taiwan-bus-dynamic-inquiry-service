<script setup>
import { ref, onUnmounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

defineProps({
  stops: {
    type: Array,
    default: () => []
  }
})

const second = ref(0);
const counting = setInterval(() => {
  if (second.value === 10) {
    store.dispatch('asyncUpdateBusRouteStops');
    second.value = 0
  } else {
    second.value++
  }
}, 1000);

const stopState = state => {
  let tw = '';
  let en = '';
  if (!state) {
    tw = '未發車';
    en = 'not-depart';
  } else if (state === '進站中') {
    tw = '進站中';
    en = 'coming';
  } else if (state === '離站中') {
    tw = '離站中';
    en = 'leaving';
  } else {
    tw = `${Math.round(state / 60)}分`;
  }
  return { tw, en };
};

onUnmounted(() => {
  clearInterval(counting);
})
</script>

<template>
  <div class="stop-list">
    <div class="seconds-ago blue">*於{{ second }}秒前更新</div>
    <div v-for="{ state, name, accessible, plateNumber } in stops" class="stop-wrap">
      <div :class="['stop-state', 'blue', stopState(state).en]">{{ stopState(state).tw }}</div>
      <div :class="['stop-name', stopState(state).en === 'coming' && 'blue']">{{ name }}</div>
      <div class="car-info blue">
        <font-awesome-icon v-if="accessible" icon="wheelchair" class="wheelchair" />
        <span v-if="plateNumber" class="font-roboto">{{ plateNumber }}</span>
        <div :class="['stop-state-circle', stopState(state).en === 'coming' && 'bg-blue']"></div>
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
.not-depart {
  border: none;
  box-shadow: none;
  color: #414242;
}
.coming {
  box-shadow: none;
  background: #1cc8ee;
  color: #131414;
}
.leaving {
  border: none;
  box-shadow: none;
  background: #414242;
  color: #f5f5f5;
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
.bg-blue {
  background: #1cc8ee;
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