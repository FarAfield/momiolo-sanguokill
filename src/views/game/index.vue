<template>
  <div class="gameLayout">
    <GameLayout></GameLayout>
    <div class="test">
      <a-space>
        <a-button type="primary" @click="handleStart">游戏开始</a-button>
        <a-button type="primary" @click="handleSelect">选择身份和武将</a-button>
      </a-space>
    </div>
  </div>
</template>
<script setup>
import { useGameStore } from "@/store";
import GameLayout from "./components/gameLayout.vue";

// TODO 处理动画以及事件
const gameStore = useGameStore();

gameStore.startGame("basic", ["basic"], 8);

function handleStart() {
  // gameStore.startGame("basic", ["basic"], 8);
}

function handleSelect() {
  gameStore.initGame(undefined, ["shenguojia"]);
}
</script>
<style lang="scss" scoped>
// 画面比例  1136 * 640
.gameLayout {
  width: 1136px;
  height: 640px;
  // overflow: hidden;
  position: relative;
  .test {
    position: absolute;
    top: -48px;
    width: 100%;
    height: 48px;
    left: 0;
  }
}
</style>
