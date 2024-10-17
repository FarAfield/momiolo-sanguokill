<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useAutoFit from "./hooks/useAutoFit";
import { testMain } from "./core/zTest";

const { scale, init } = useAutoFit();
onMounted(() => {
  testMain();
});
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
