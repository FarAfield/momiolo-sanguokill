<template>
  <div class="root">测试页</div>
</template>

<script setup>
import { onMounted } from "vue";
import { testMain } from "@/core/zTest";

onMounted(async () => {
  await testMain();
});
</script>
<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
