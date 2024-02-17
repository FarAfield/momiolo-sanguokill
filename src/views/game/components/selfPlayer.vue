<template>
  <div class="selfPlayer">
    <div class="avatar"></div>
    <div class="otherContent"></div>
    <div class="cardContent"></div>
    <div class="action"></div>
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
    background-image: v-bind("props.player.avatar");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .otherContent {
    width: 62px;
    height: 175px;
  }
  .cardContent {
    flex: 1;
    height: 100%;
  }
  .action {
    width: 166px;
    height: 100%;
  }
}
</style>
