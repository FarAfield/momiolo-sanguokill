<template>
  <div class="baseHp">
    <div>{{ maxHp }}</div>
    <div v-for="item in new Array(4).fill()" class="heart"></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { getSvgImage } from "@/utils";

const props = defineProps({
  maxHp: {
    type: Number,
    default: 4,
  },
  hp: {
    type: Number,
    default: 4,
  },
});

onMounted(async () => {
  console.log();
});
</script>
<style lang="scss" scoped>
.baseHp {
  width: 20px;
  height: 60px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heart {
  background-color: blue;
  width: 12px;
  height: 12px;
  mask-image: v-bind("getSvgImage('hp')");
  mask-repeat: no-repeat;
  mask-size: cover;
}
</style>
