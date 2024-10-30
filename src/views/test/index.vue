<template>
  <div class="root">
    <a-space>
      <a-button type="primary" @click="testMain">测试</a-button>
    </a-space>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { testMain } from "@/core/zTest";
</script>
<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
