<template>
  <a-space v-if="!currentChampion" fill :size="[24, 24]" wrap>
    <a-card v-for="(item, index) in champion" @click="handleSelect(item)">
      <div class="item">
        <!-- <a-image
          class="avatar"
          :width="64"
          :height="64"
          fit="contain"
          :src="getAvatarImage(item.avatar)"
        >
        </a-image> -->
        <div class="avatar"></div>
        <div class="title">
          <div>{{ item.title }}</div>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </a-card>
  </a-space>
  <div v-else class="champion">
    <a-breadcrumb>
      <a-breadcrumb-item @click="handleBack">
        <div class="breadcrumb">英雄</div>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ currentChampion.title }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import {
  dynamicImportModule,
  getAvatarImage,
  getSkinImage,
  getSpellImage,
} from "@/core/utils";
const props = defineProps({
  library: {
    type: Object,
    default: {
      champion: [],
      equipment: [],
      talentRune: [],
    },
  },
});
const champion = computed(() => props.library.champion);
const currentChampion = ref(undefined);

function handleSelect(item) {
  currentChampion.value = item;
}
function handleBack() {
  currentChampion.value = undefined;
}
</script>
<style lang="scss" scoped>
.item {
  height: 64px;
  width: 156px;
  display: flex;
  cursor: pointer;
  .avatar {
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
}
.champion {
  .breadcrumb {
    cursor: pointer;
  }
}
</style>
