<template>
  <div class="otherPlayerLayout">
    <div class="left">
      <OtherPlayer
        v-for="(player, index) in leftPlayerList"
        :key="index"
        :player="player"
      ></OtherPlayer>
    </div>
    <div class="center">
      <OtherPlayer
        v-for="(player, index) in centerPlayerList"
        :key="index"
        :player="player"
      ></OtherPlayer>
      <GamePile></GamePile>
    </div>
    <div class="right">
      <OtherPlayer
        v-for="(player, index) in rightPlayerList.reverse()"
        :key="index"
        :player="player"
      ></OtherPlayer>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import OtherPlayer from "./otherPlayer.vue";
import GamePile from "./gamePile.vue";
const props = defineProps({
  playerList: {
    type: Array,
    default: () => [],
  },
});

// 1 => center
// 2 => left  right
// 3 => left  center right
// 4 => left  right
// 5 => left  center right
// 6 => left  right
// 7 => left  center right
const otherPlayerLength = computed(() => props.playerList.length);
const rightPlayerList = computed(() => {
  if ([2, 3].includes(otherPlayerLength.value)) {
    return props.playerList.slice(0, 1);
  }
  if ([4, 5].includes(otherPlayerLength.value)) {
    return props.playerList.slice(0, 2);
  }
  if ([6, 7].includes(otherPlayerLength.value)) {
    return props.playerList.slice(0, 3);
  }
  return [];
});
const centerPlayerList = computed(() => {
  // 奇数时取 (length-1)/2 下标
  if (otherPlayerLength.value % 2 === 1) {
    const player = props.playerList[(otherPlayerLength.value - 1) / 2];
    return [player];
  }
  return [];
});

const leftPlayerList = computed(() => {
  if ([2, 3].includes(otherPlayerLength.value)) {
    return props.playerList.slice(-1);
  }
  if ([4, 5].includes(otherPlayerLength.value)) {
    return props.playerList.slice(-2);
  }
  if ([6, 7].includes(otherPlayerLength.value)) {
    return props.playerList.slice(-3);
  }
  return [];
});
</script>

<style lang="scss" scoped>
.otherPlayerLayout {
  width: 100%;
  height: 355px;
  display: flex;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 130px;
  }
  .center {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 130px;
  }
}
</style>
