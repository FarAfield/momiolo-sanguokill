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
  const championResult = [];
  const list = [];
  for (const path in modules) {
    const name = path.split("/").at(-1).replace(".json", "");
    const json = await new Promise((resolve) => {
      import(`../../assets/zh_CN/champion/${name}.json`).then((module) => {
        resolve(module.data);
      });
    });

    const result = parseData(name, json[name], list);
    championResult.push(result);
  }
  console.log(championResult[1], list);
}
function parseData(name, data, list) {
  if (data.passive.image.full !== `${name}P.png`) {
    list.push({
      source: data.passive.image.full,
      target: `${name}P.png`,
    });
  }
  return {
    [name]: {
      type: "champion",
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
          icon: `${name}P.png`,
          description: data.passive.description,
        },
      ].concat(
        data.spells.map((i, index) => {
          const array = ["Q", "W", "E", "R"];
          if (i.id !== `${name}${array[index]}`) {
            i.id = `${name}${array[index]}`;
          }
          if (i.image.full !== `${i.id}.png`) {
            list.push({
              source: i.image.full,
              target: `${i.id}.png`,
            });
          }
          return {
            id: i.id,
            name: i.name,
            icon: `${i.id}.png`,
            description: i.tooltip,
          };
        })
      ),
      effects: {
        [`${name}P`]: null,
        [`${name}Q`]: null,
        [`${name}W`]: null,
        [`${name}E`]: null,
        [`${name}R`]: null,
      },
    },
  };
}

// for (let i = 0; i < list.length; i++) {
//   const item = list[i];
//   const fileName = Object.keys(item)[0];
//   const filePath = path.join(directory, `${fileName}.js`);
//   const content = `function importModule() {
//   return ${JSON.stringify(item[fileName])} } export { importModule }
// `;
//   fs.writeFile(filePath, content, (err) => {
//     if (err) {
//       console.error(`写入文件 ${fileName} 时发生错误：`, err);
//       return;
//     }
//     console.log(`文件 ${fileName} 写入成功！`);
//   });
// }

/**  copy   */

// const fs = require("fs");
// const path = require("path");

// const sourceDir = "source";
// const targetDir = "target";

// const list = [{ source: "A_P.txt", target: "AP.txt" }];

// fs.readdir(sourceDir, (err, files) => {
//   if (err) {
//     console.error("读取目录失败：", err);
//     return;
//   }
//   files.forEach((file) => {
//     list.forEach((i) => {
//       if (file === i.source) {
//         const sourcePath = path.join(sourceDir, file);
//         const targetPath = path.join(targetDir, i.target);
//         fs.copyFile(sourcePath, targetPath, (err) => {
//           if (err) {
//             console.error("复制文件失败：", err);
//             return;
//           }
//           console.log(`文件 ${file} 复制成功！`);
//         });
//       }
//     });
//   });
// });
</script>
<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
