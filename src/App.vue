<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useAutoFit from "./hooks/useAutoFit";

const { scale, init } = useAutoFit();
onMounted(() => {
  // init({
  //   el: "main",
  //   width: 1136,
  //   height: 640,
  // });
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
