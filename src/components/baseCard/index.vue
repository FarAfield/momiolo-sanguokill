<template>
  <div class="baseCard">
    <div class="notBack" v-if="!isBack">
      <div class="cardNum">{{ card.cardNum }}</div>
      <div class="cardDecor"></div>
    </div>
    <div class="cardName">
      {{ isBack ? "三国杀" : card.cardName }}
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { getSvgImage } from "@/utils";

const props = defineProps({
  isBack: {
    type: Boolean,
    default: () => false,
  },
  card: {
    type: Object,
    default: () => {},
  },
});
const cardDecor = computed(() =>
  props.isBack ? undefined : getSvgImage(props.card.cardDecor)
);
</script>
<style lang="scss" scoped>
.baseCard {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgb(253, 248, 225);
}
.notBack {
  position: absolute;
  font-size: 24px;
  top: 0;
  left: 0;
  width: 32px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cardDecor {
    width: 20px;
    height: 20px;
    background-image: v-bind("cardDecor");
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.cardName {
  font-size: 24px;
  writing-mode: vertical-rl;
}
</style>
