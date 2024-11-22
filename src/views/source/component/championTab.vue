<template>
  <a-space v-if="!currentChampion" fill :size="[24, 24]" wrap>
    <a-card v-for="(item, index) in champion" @click="handleSelect(item)">
      <div class="item">
        <a-image
          class="avatar"
          :width="64"
          :height="64"
          fit="contain"
          :preview="false"
          :src="getAvatarImage(item.avatar)"
        >
        </a-image>
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
    <div class="infoWrapper">
      <div class="info">
        <div class="infoItem">
          <a-space direction="vertical">
            <a-image
              class="avatar"
              :width="64"
              :height="64"
              fit="contain"
              :preview="false"
              :src="getAvatarImage(currentChampion.avatar)"
            >
            </a-image>
            <div class="title">
              <div>{{ currentChampion.title }}</div>
              <div>{{ currentChampion.name }}</div>
            </div>
          </a-space>
        </div>
        <div class="carouselWrapper">
          <a-carousel
            v-model:current="current"
            :autoPlay="true"
            animation-name="card"
            indicator-position="outer"
            class="carousel"
          >
            <a-carousel-item
              v-for="(item, index) in currentChampion.skins || []"
              class="carouselItem"
            >
              <a-image
                :width="128"
                :height="128"
                fit="contain"
                :src="getSkinImage(item.skin)"
                :preview="false"
              >
              </a-image>
              <div class="extra" v-if="current - 1 === index">
                {{ currentName }}
              </div>
            </a-carousel-item>
          </a-carousel>
        </div>
      </div>
      <div class="spell">
        <a-space :size="20" fill>
          <a-tooltip
            :content="item.description"
            v-for="(item, index) in currentChampion.spells || []"
          >
            <div class="spellItem">
              <a-image
                :width="64"
                :height="64"
                fit="contain"
                :src="getSpellImage(item.icon)"
                :preview="false"
                footer-position="outer"
              >
              </a-image>
              <div class="extra">{{ item.name }}</div>
            </div>
          </a-tooltip>
        </a-space>
      </div>
    </div>
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

// avatar 128*128
// skin 380*380
// spell 64*64

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
const current = ref(1);
const currentName = computed(() => {
  const name = currentChampion.value?.skins?.[current.value - 1]?.name;
  return name === "default" ? "默认" : name;
});

function handleSelect(item) {
  currentChampion.value = item;
}
function handleBack() {
  currentChampion.value = undefined;
  current.value = 1;
}
</script>
<style lang="scss" scoped>
.item {
  height: 64px;
  width: 156px;
  display: flex;
  cursor: pointer;
}
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
.champion {
  .breadcrumb {
    cursor: pointer;
  }
  .infoWrapper {
    display: flex;
    flex-direction: column;
    height: 500px;
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      .infoItem {
        width: 156px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .carouselWrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .carousel {
          width: 256px;
          height: 156px;
          &Item {
            width: 128px;
            height: 156px;
          }
          .extra {
            height: 30px;
            line-height: 30px;
            text-align: center;
            white-space: nowrap;
            font-weight: bold;
          }
        }
      }
    }
    .spell {
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      .spellItem {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .extra {
          text-align: center;
          font-weight: bold;
          margin-top: 4px;
        }
      }
    }
  }
}
</style>
