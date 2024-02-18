<template>
  <div>测试</div>
</template>
<script setup>
import { onMounted } from "vue";
import { useGameStore } from "@/store";

const gameStore = useGameStore();
onMounted(async () => {
  await gameStore.init();
  console.log(gameStore.playerList, gameStore.cardList);
});
</script>
<style lang="scss" scoped></style>
