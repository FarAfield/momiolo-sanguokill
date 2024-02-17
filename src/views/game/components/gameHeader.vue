<template>
  <div class="gameHeader"></div>
</template>
<script setup>
import { getCommonImage } from "@/utils";
</script>
<style lang="scss" scoped>
.gameHeader {
  height: 53px;
  background-image: v-bind("getCommonImage('caidanlan')");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
