<template>
  <div @click="click">测试页</div>
</template>

<script setup>
import { gameEngineStart } from "@/core/gameEngine";

function click() {
  gameEngineStart();
}
</script>
