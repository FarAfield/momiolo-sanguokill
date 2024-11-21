<template>
  <div class="root">
    <div class="tabs">
      <a-card>
        <a-tabs v-model:active-key="activeKey">
          <a-tab-pane
            v-for="item in tabList"
            :key="item.key"
            :title="item.title"
          >
            <div class="tab">
              <component :is="item.render" :library="library"></component>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </div>
  </div>
</template>
<script setup lang="tsx">
import { ref, onMounted, defineComponent } from "vue";
import {
  dynamicImportModule,
  getAvatarImage,
  getBackgroundImage,
  getEquipImage,
  getRuneImage,
  getSkinImage,
  getSpellImage,
} from "@/core/utils";
import championTab from "./component/championTab.vue";

// avatar  128*128
// skin 380*380
// equip rune spell  64*64
// background 1136*640(暂定，未使用)

const library = ref({
  champion: [],
  equipment: [],
  talentRune: [],
});
const activeKey = ref("champion");
onMounted(() => {
  boot();
});
async function boot() {
  const modules = import.meta.glob("@/lolSource/**/**/*.js");
  for (const path in modules) {
    const packageName = path.split("/").at(-2);
    const fileName = path.split("/").at(-1).replace(".js", "");
    const { importModule } = await dynamicImportModule(packageName, fileName);
    const module = importModule();
    if (Array.isArray(module)) {
      library.value[packageName] = library.value[packageName].concat(...module);
    } else {
      library.value[packageName] = library.value[packageName].concat(module);
    }
  }
  console.log(library.value);
}

const tabList = [
  {
    title: "英雄",
    key: "champion",
    render: championTab,
  },
  {
    title: "装备",
    key: "equipment",
  },
  {
    title: "天赋符文",
    key: "talentRune",
  },
];
</script>
<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs {
  width: 80%;
  height: 80%;
  .tab {
    overflow: auto;
    height: 60vh;
  }
}
</style>
