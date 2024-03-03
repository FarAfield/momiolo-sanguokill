<template>
  <div>
    <a-space>
      <a-button type="primary" @click="handleStart">游戏开始</a-button>
      <a-button type="primary" @click="handleSelect">选择身份和武将</a-button>
      <a-button type="primary" @click="handleEngineStart"
        >开启事件循环</a-button
      >
    </a-space>
  </div>
</template>
<script setup>
import { onMounted, watch } from "vue";
import { useGameStore } from "@/store";
import { initEventEngine } from "@/core/engine";

const gameStore = useGameStore();

function handleStart() {
  gameStore.startGame("basic", ["basic"], 8);
}

function handleSelect() {
  gameStore.initGame(1, ["shenguojia"]);
}
function handleEngineStart() {
  initEventEngine();
}
watch(
  () => gameStore.playerList,
  (newVal) => {
    console.log("游戏角色", newVal);
  },
  {
    deep: true,
  }
);
watch(
  () => gameStore.cardList,
  (newVal) => {
    console.log("游戏卡牌", newVal);
  },
  {
    deep: true,
  }
);
watch(
  () => gameStore.characterList,
  (newVal) => {
    console.log("角色卡牌", newVal);
  },
  {
    deep: true,
  }
);
</script>
<style lang="scss" scoped></style>
