<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useAutoFit from "@/hooks/useAutoFit";

const { scale, init } = useAutoFit();
onMounted(() => {});
</script>

<style lang="scss" scoped>
#main {
  width: 1280px;
  height: 720px;
}
</style>
