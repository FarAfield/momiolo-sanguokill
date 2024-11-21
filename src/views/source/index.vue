<template>
  <div class="root">
    <div class="tabs"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
</script>
<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs {
  width: 60%;
  height: 60%;
}
</style>
