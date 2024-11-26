<template>
  <a-space fill :size="[24, 24]" wrap>
    <a-card v-for="(item, index) in list">
      <div class="item">
        <a-image
          class="image"
          :width="64"
          :height="64"
          fit="contain"
          :preview="false"
          :src="getImage(item.image)"
        >
        </a-image>
        <a-tooltip :content="item.description">
          <div class="title">
            <div>{{ item.name }}</div>
            <a-tag :color="typeColorMap[item.type]">{{ item.type }}</a-tag>
          </div>
        </a-tooltip>
      </div>
    </a-card>
  </a-space>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import { dynamicImportModule, getEquipImage, getRuneImage } from "@/core/utils";

// equip rune  64*64

const props = defineProps({
  library: {
    type: Object,
    default: {
      champion: [],
      equipment: [],
      talentRune: [],
    },
  },
  group: {
    type: String,
    default: "equipment",
  },
});
const list = computed(() => props.library[props.group]);
const getImage = props.group === "talentRune" ? getRuneImage : getEquipImage;
const typeColorMap = computed(() => {
  const typeList = [...new Set(list.value.map((item) => item.type))];
  return typeList.reduce((pre, cur, index) => {
    pre[cur] = customColor[index];
    return pre;
  }, {});
});
const customColor = [
  "#f53f3f",
  "#7816ff",
  "#00b42a",
  "#165dff",
  "#ff7d00",
  "#eb0aa4",
  "#7bc616",
  "#b71de8",
  "#0fc6c2",
  "#ffb400",
  "#168cff",
  "#ff5722",
];
</script>
<style lang="scss" scoped>
.item {
  height: 64px;
  width: 156px;
  display: flex;
  cursor: pointer;
}
.image {
  height: 64px;
  width: 64px;
}
.title {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:nth-of-type(1) {
    font-weight: bold;
    margin-bottom: 4px;
  }
}
</style>
