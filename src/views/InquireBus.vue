<script setup>
import { ref, computed, provide } from 'vue';
import { useStore } from 'vuex';
import NavbarSearch from "../components/NavbarSearch.vue";
import RouteList from "../components/RouteList.vue";
import KeyboardWrap from "../components/KeyboardWrap.vue";
import LoadWrap from "../components/LoadWrap.vue";

const store = useStore();
const busRoutesStatus = computed(() => store.getters.busRoutes.status);
const searchRef = ref(null);
const distance = ref(0);
provide('searchRef', searchRef);
provide('distance', distance);
</script>

<template>
  <div class="inquire-bus">
    <NavbarSearch />
    <LoadWrap :status="busRoutesStatus">
      <RouteList />
    </LoadWrap>
    <KeyboardWrap />
  </div>
</template>

<style scoped>
.inquire-bus {
  position: relative;
  height: 100vh;
  padding: 99px 16px 24px 16px;
  background: #131414;
  box-sizing: border-box;
  overflow: scroll;
}
</style>