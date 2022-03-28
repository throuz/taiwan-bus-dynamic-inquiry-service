<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavbarNearby from "../components/NavbarNearby.vue";
import RouteList from "../components/RouteList.vue";
import LoadWrap from "../components/LoadWrap.vue";

const store = useStore();
const busRoutesStatus = computed(() => store.getters.busRoutes.status);
</script>

<template>
  <div class="nearby-bus-stop">
    <NavbarNearby />
    <LoadWrap :status="busRoutesStatus">
      <RouteList />
    </LoadWrap>
  </div>
</template>

<style scoped>
.nearby-bus-stop {
  position: relative;
  height: 100vh;
  padding: 99px 16px 24px 16px;
  background: #131414;
  box-sizing: border-box;
  overflow: scroll;
}
</style>