<template>
  <div class="otherPlayer">
    <div class="avatar"></div>
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
.otherPlayer {
  width: 130px;
  height: 120px;
  .avatar {
    width: 100%;
    height: 100%;
    background-image: v-bind("props.player.avatar");
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
