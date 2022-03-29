<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavbarStop from "../components/NavbarStop.vue";
import NearbyStopList from "../components/NearbyStopList.vue";
import LoadWrap from "../components/LoadWrap.vue";

const store = useStore();
const nearbyStopsStatus = computed(() => store.getters.nearbyStops.status);
</script>

<template>
	<div class="stop-routes">
		<NavbarStop />
		<LoadWrap :status="nearbyStopsStatus">
			<NearbyStopList />
		</LoadWrap>
	</div>
</template>

<style scoped>
.stop-routes {
	position: relative;
	height: 100vh;
	padding: 99px 16px 24px 16px;
	background: #131414;
	box-sizing: border-box;
	overflow: scroll;
}
</style>