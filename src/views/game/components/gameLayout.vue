<template>
  <div class="gameLayout">
    <GameHeader></GameHeader>
    <GameContent></GameContent>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useGameStore } from "@/store";
import { getBackgroundImage, getCommonImage } from "@/utils";
import GameHeader from "./gameHeader.vue";
import GameContent from "./gameContent.vue";

const gameStore = useGameStore();
const background = computed(() => getBackgroundImage(gameStore.background));
</script>
<style lang="scss" scoped>
.gameLayout {
  width: 100%;
  height: 100%;
  background-image: v-bind("background");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
