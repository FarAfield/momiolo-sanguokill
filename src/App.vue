<template>
  <div id="main">
    <a-affix :offsetTop="80">
      <a-button type="primary" @click="router.push('/')">home</a-button>
    </a-affix>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import useAutoFit from "@/hooks/useAutoFit";

const router = useRouter();

const { scale, init } = useAutoFit();
onMounted(() => {});
</script>

<style lang="scss" scoped>
#main {
  width: 1280px;
  height: 720px;
}
</style>
