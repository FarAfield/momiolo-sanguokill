<template>
  <div class="root">
    <a-space :size="[20, 20]" fill wrap>
      <a-button
        v-for="item in appRoutes.filter((item) => item.path !== '/')"
        type="primary"
        @click="handleSwitch(item.path)"
        >{{ item.name }}</a-button
      >
    </a-space>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { appRoutes } from "@/router";
import { useRouter } from "vue-router";

const router = useRouter();

function handleSwitch(path) {
  router.push(path);
}
</script>
<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
