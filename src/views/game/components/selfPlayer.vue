<template>
  <div class="selfPlayer">
    <div class="avatar"></div>
    <div class="otherContent">
      <div class="identity">主公</div>
      <div class="equip">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="cardContent">
      <div class="cardBlock"></div>
      <div class="skillBlock"></div>
    </div>
    <div class="action">
      <div class="submit">出牌</div>
      <div class="cancel">弃牌</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  player: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.selfPlayer {
  height: 202px;
  display: flex;
  align-items: flex-end;
  .avatar {
    width: 160px;
    height: 190px;
    background-image: v-bind("props.player.playerAvatar");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .otherContent {
    width: 62px;
    height: 175px;
    .identity {
      width: 100%;
      height: 63px;
      font-size: 28px;
      writing-mode: vertical-rl;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(197, 0, 0); //  184,115,0     0,137,34    0,100,196
      color: rgb(235, 223, 169);
    }
    .equip {
      > div:nth-of-type(odd) {
        height: 28px;
        background-color: rgb(82, 54, 35);
      }
      > div:nth-of-type(even) {
        height: 28px;
        background-color: rgb(50, 28, 16);
      }
    }
  }
  .cardContent {
    flex: 1;
    height: 100%;
    border-left: 2px solid rgb(192, 163, 108);
    .cardBlock {
      height: 160px;
      border-bottom: 2px solid rgb(192, 163, 108);
    }
    .skillBlock {
      height: 42px;
    }
  }
  .action {
    width: 166px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 32px;
    border-left: 2px solid rgb(192, 163, 108);
    border-right: 2px solid rgb(192, 163, 108);

    .submit {
      width: 136px;
      height: 56px;
      background-color: rgb(24, 72, 82);
      color: rgb(235, 223, 169);
      border: 4px solid rgb(192, 140, 45);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .cancel {
      width: 136px;
      height: 56px;
      background-color: rgb(105, 92, 14);
      color: rgb(235, 223, 169);
      border: 4px solid rgb(192, 140, 45);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
