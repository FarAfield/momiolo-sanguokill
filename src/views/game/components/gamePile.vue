<template>
  <div class="gamePile">
    <div class="cardPile" @click="handleSwitch">
      <BaseCard :isBack="true"></BaseCard>
    </div>
    <div class="discardPile">
      <BaseCard :isBack="!lastDisCard" :card="lastDisCard"></BaseCard>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
import { useGameStore } from "@/store";
import { cloneDeep } from "lodash-es";
import BaseCard from "@/components/baseCard/index.vue";

const gameStore = useGameStore();

const totalCardList = ref([]); // 牌堆
const disCardList = ref([]); // 弃牌堆
const lastDisCard = computed(() => disCardList.value.at(-1) || {});

onMounted(async () => {
  await gameStore.init();
  totalCardList.value = cloneDeep(gameStore.cardList);
});
function handleSwitch() {
  // 弃牌堆+1 总牌堆-1
  disCardList.value.push(totalCardList.value.at(-1));
  totalCardList.value.splice(-1, 1);
}
</script>
<style lang="scss" scoped>
.gamePile {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .cardPile {
    width: 100px;
    height: 156px;
  }
  .discardPile {
    width: 100px;
    height: 156px;
  }
}
</style>
