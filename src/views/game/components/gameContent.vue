<template>
  <div class="gameContent">
    <OtherPlayerLayout></OtherPlayerLayout>
    <SelfPlayer></SelfPlayer>
  </div>
</template>
<script setup>
import SelfPlayer from "./selfPlayer.vue";
import OtherPlayerLayout from "./otherPlayerLayout.vue";
</script>
<style lang="scss" scoped>
.gameContent {
  height: 587px;
  padding: 18px 24px 12px 24px;
}
</style>
