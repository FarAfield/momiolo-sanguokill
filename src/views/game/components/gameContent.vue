<template>
  <div class="gameContent">
    <OtherPlayerLayout :player-list="playerList"></OtherPlayerLayout>
    <SelfPlayer :player="player"></SelfPlayer>
  </div>
</template>
<script setup>
import { getCharacterImage } from "@/utils";
import SelfPlayer from "./selfPlayer.vue";
import OtherPlayerLayout from "./otherPlayerLayout.vue";

const player = {
  name: "神郭嘉",
  sex: "male",
  //   group: [Group.SHEN],
  avatar: getCharacterImage("shenguojia", "l"),
  maxHp: 3,
  hp: 3,
  seatNum: 0,
};

const playerList = new Array(7).fill().map(() => {
  return {
    ...player,
    avatar: getCharacterImage("shenguojia", "m"),
  };
});
</script>
<style lang="scss" scoped>
.gameContent {
  height: 587px;
  padding: 18px 24px 12px 24px;
}
</style>
