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
<script setup lang="jsx">
import { ref, onMounted, defineComponent } from "vue";
import { dynamicImportModule } from "@/core/utils";
import ChampionTab from "./component/championTab.vue";
import GroupingTab from "./component/groupingTab.vue";

const library = ref({
  champion: [],
  equipment: [],
  talentRune: [],
});
const activeKey = ref("equipment");
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
}

const tabList = [
  {
    title: "英雄",
    key: "champion",
    render: ChampionTab,
  },
  {
    title: "装备",
    key: "equipment",
    render: <GroupingTab group="equipment" />,
  },
  {
    title: "符文",
    key: "talentRune",
    render: <GroupingTab group="talentRune" />,
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
