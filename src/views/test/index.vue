<template>
  <div class="root">
    <a-space>
      <!-- <a-button type="primary" @click="testMain">测试</a-button> -->
      <a-button type="primary" @click="parse">解析</a-button>
    </a-space>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { testMain } from "@/core/zTest";

const modules = import.meta.glob("@/assets/zh_CN/champion/*.json");
async function parse() {
  return;
  const championResult = [];
  for (const path in modules) {
    const name = path.split("/").at(-1).replace(".json", "");
    const json = await new Promise((resolve) => {
      import(`../../assets/zh_CN/champion/${name}.json`).then((module) => {
        resolve(module.data);
      });
    });
    const result = parseData(name, json[name]);
    championResult.push(result);
  }
  console.log(championResult);
}
function parseData(name, data) {
  return {
    [name]: {
      id: data.id,
      title: data.name,
      name: data.title,
      avatar: data.image.full,
      skins: data.skins.map((i) => {
        return {
          name: i.name,
          skin: `${name}_${i.num}.jpg`,
        };
      }),
      spells: [
        {
          id: `${name}P`,
          name: data.passive.name,
          icon: data.passive.image.full,
          description: data.passive.description,
        },
      ].concat(
        data.spells.map((i) => {
          return {
            id: i.id,
            name: i.name,
            icon: i.image.full,
            description: i.tooltip,
          };
        })
      ),
      tags: data.tags,
    },
  };
}
</script>
<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
