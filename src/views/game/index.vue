<template>
  <div class="gameLayout">
    <GameLayout></GameLayout>
  </div>
</template>
<script setup>
import GameLayout from "./components/gameLayout.vue";

// 画面比例  1136 * 640

// TODO 处理动画以及事件
</script>
<style lang="scss" scoped>
.gameLayout {
  width: 1136px;
  height: 640px;
  overflow: hidden;
}
</style>
