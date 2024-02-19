<template>
  <div class="gameContent">
    <OtherPlayerLayout :player-list="playerList"></OtherPlayerLayout>
    <SelfPlayer :player="player"></SelfPlayer>
  </div>
</template>
<script setup>
import { watch, computed, ref } from "vue";
import { useGameStore } from "@/store";
import SelfPlayer from "./selfPlayer.vue";
import OtherPlayerLayout from "./otherPlayerLayout.vue";
import { cloneDeep } from "lodash-es";

const gameStore = useGameStore();
const allPlayerList = ref([]);

const player = computed(() => allPlayerList.value[0] || {});
const playerList = computed(() => allPlayerList.value.slice(1));

watch(
  () => gameStore.playerList,
  (newVal) => {
    allPlayerList.value = cloneDeep(newVal).slice(24);
  },
  {
    deep: true,
  }
);
</script>
<style lang="scss" scoped>
.gameContent {
  height: 587px;
  padding: 18px 24px 12px 24px;
}
</style>
