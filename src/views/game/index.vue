<template>
  <div class="game">
    <div class="gameHeader"></div>
    <div class="gameContent">
      <div class="gamePlayer">
        <div class="left">
          <div
            class="avatar"
            v-for="(player, index) in leftPlayerList"
            :style="getSkinStyle(player)"
          >
            {{ player.id }}
          </div>
        </div>
        <div class="center">
          <div
            class="avatar"
            v-for="(player, index) in centerPlayerList"
            :style="getSkinStyle(player)"
          >
            {{ player.id }}
          </div>
          <div class="cardPile">
            <a-button type="primary" @click="handleStart">开始</a-button>
          </div>
        </div>
        <div class="right">
          <div
            class="avatar"
            v-for="(player, index) in rightPlayerList.reverse()"
            :style="getSkinStyle(player)"
          >
            {{ player.playerId }}
          </div>
        </div>
      </div>
      <div class="gameMe">
        <div class="avatar" :style="getSkinStyle(me)">{{ me.playerId }}</div>
        <div class="equip"></div>
        <div class="card"></div>
        <div class="action"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, toRefs, watch } from "vue";
import { useGameStore } from "@/store";
import { onBoot } from "@/core/gameBoot";
import { getHeroSkin } from "@/utils";
import { cloneDeep } from "lodash-es";

const gameStore = useGameStore();
const { me } = toRefs(gameStore);
const playerList = computed(() => {
  return gameStore.playerList.filter(
    (i) => i.playerSeatNum !== gameStore.me.playerSeatNum
  );
});
const rightPlayerList = computed(() => {
  if ([2, 3].includes(playerList.value.length)) {
    return playerList.value.slice(0, 1);
  }
  if ([4, 5].includes(playerList.value.length)) {
    return playerList.value.slice(0, 2);
  }
  if ([6, 7].includes(playerList.value.length)) {
    return playerList.value.slice(0, 3);
  }
  return [];
});
const centerPlayerList = computed(() => {
  // 奇数时取 (length-1)/2 下标
  if (playerList.value.length % 2 === 1) {
    const player = playerList.value[(playerList.value.length - 1) / 2];
    return [player];
  }
  return [];
});
const leftPlayerList = computed(() => {
  if ([2, 3].includes(playerList.value.length)) {
    return playerList.value.slice(-1);
  }
  if ([4, 5].includes(playerList.value.length)) {
    return playerList.value.slice(-2);
  }
  if ([6, 7].includes(playerList.value.length)) {
    return playerList.value.slice(-3);
  }
  return [];
});
const justifyContent = computed(() => {
  switch (playerList.value.length) {
    case 2:
    case 3:
      return "center";
    case 4:
    case 5:
      return "space-around";
    default:
      return "space-between";
  }
});

function getSkinStyle(player) {
  return player.playerSkin
    ? {
        "background-image": `${getHeroSkin(player.playerSkin.replace(".jpg", ""))}`,
      }
    : {};
}
function handleStart() {
  onBoot();
}
</script>
<style lang="scss" scoped>
.game {
  width: 1280px;
  height: 720px;
  border: 1px solid red;
  .gameHeader {
    width: 100%;
    height: 60px;
  }
  .gameContent {
    width: 100%;
    height: calc(100% - 60px);
    border: 1px solid blue;
    padding: 0 24px;
    .gamePlayer {
      width: 100%;
      height: calc(100% - 240px);
      display: flex;
      justify-content: space-between;
      padding: 24px 0;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: v-bind("justifyContent");
        width: 128px;
      }
      .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: v-bind("justifyContent");
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: v-bind("justifyContent");
        width: 128px;
      }
      .avatar {
        width: 108px;
        height: 108px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .cardPile {
        margin-top: auto;
        width: 100%;
        height: calc(100% - 128px);
        // background-color: blueviolet;
      }
    }
    .gameMe {
      width: 100%;
      height: 240px;
      padding-bottom: 24px;
      display: flex;
      .avatar {
        width: 240px;
        height: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
