<template>
  <div class="otherPlayer">
    <div class="avatar"></div>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  player: {
    type: Object,
    default: () => {},
  },
});
const playerAvatar = computed(() => props.player.playerAvatar);
</script>

<style lang="scss" scoped>
.otherPlayer {
  width: 130px;
  height: 120px;
  .avatar {
    width: 100%;
    height: 100%;
    background-image: v-bind("playerAvatar[0]");
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
