<template>
  <div class="root">
    <a-space direction="vertical">
      <a-button type="primary" @click="handleExtractChampion"
        >抽取champion资源</a-button
      >
      <a-button type="primary" @click="handleExtractItem"
        >抽取item资源</a-button
      >
      <a-button type="primary" @click="handleExtract">抽取其他资源</a-button>
    </a-space>
  </div>
</template>
<script setup>
/** ================提取champion资源================= */
async function handleExtractChampion() {
  const modules = import.meta.glob("@/assets/zh_CN/champion/*.json");
  const championList = [];
  const iconMapList = [];
  for (const path in modules) {
    const name = path.split("/").at(-1).replace(".json", "");
    const json = await new Promise((resolve) => {
      import(`../../assets/zh_CN/champion/${name}.json`).then((module) => {
        resolve(module.data);
      });
    });
    const champion = parseChampionData(name, json[name], iconMapList);
    championList.push(champion);
  }
  console.log("championList:", championList);
  console.log("iconMapList:", iconMapList);
}
function parseChampionData(name, data, list) {
  // 收集iconMap
  const passive = [
    {
      id: `${name}P`,
      name: data.passive.name,
      icon: `${name}P.png`,
      description: data.passive.description,
    },
  ];
  list.push({
    source: data.passive.image.full,
    target: `${name}P.png`,
  });
  const spells = data.spells.map((i, index) => {
    const suffixList = ["Q", "W", "E", "R"];
    if (i.id !== `${name}${suffixList[index]}`) {
      i.id = `${name}${suffixList[index]}`;
    }
    list.push({
      source: i.image.full,
      target: `${i.id}.png`,
    });
    return {
      id: i.id,
      name: i.name,
      icon: `${i.id}.png`,
      description: i.tooltip,
    };
  });
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
      spells: [...passive, ...spells],
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

/** ================提取item资源================= */
async function handleExtractItem() {
  const json = await new Promise((resolve) => {
    import(`../../assets/zh_CN/item.json`).then((module) => {
      resolve(module.data);
    });
  });
  const json_en = await new Promise((resolve) => {
    import(`../../assets/en_US/item.json`).then((module) => {
      resolve(module.data);
    });
  });
  const list = [];
  Object.entries(json).forEach(([key, value]) => {
    list.push({
      id: key,
      name: json_en[key].name.replace(/\s/g, ""),
      cnName: value.name,
      icon: value.image.full,
      plaintext: value.plaintext,
      description: value.description,
    });
  });
  console.log(list);
  const result = list.map((i) => {
    return {
      source: i.icon,
      target: i.name + ".png",
      mapName: i.cnName,
    };
  });
  console.log(result);
}

/** ================提取资源================= */
async function handleExtract() {
  const json = await new Promise((resolve) => {
    import(`../../assets/zh_CN/runesReforged.json`).then((module) => {
      resolve(module.default);
    });
  });
  const tree = json
    .map((item) => {
      return {
        id: item.id,
        key: item.key,
        name: item.name,
        icon: item.icon,
        children: item.slots.reduce((pre, cur) => {
          pre.push(
            ...cur.runes.map((i) => ({
              id: i.id,
              key: i.key,
              name: i.name,
              icon: i.icon.split("/").at(-1),
              description: i.shortDesc,
            }))
          );
          return pre;
        }, []),
      };
    })
    .reduce((pre, cur) => {
      pre.push(...cur.children);
      return pre;
    }, []);
  const modules = import.meta.glob("@/assets/images/rune/*.png");
  const keys = Object.keys(modules)
    .map((i) => i.split("/").at(-1))
    .filter((i) => !i.includes("Summoner"));
  console.log(keys);
  const result = tree.filter((i) => keys.includes(i.icon));
  console.log(
    result,
    keys.filter((i) => !result.map((r) => r.icon).includes(i))
  );
  const r = result.map((i) => {
    return {
      type: "rune",
      id: i.key,
      name: i.name,
      image: i.icon,
      description: i.description,
      effects: {
        [i.key]: null,
      },
    };
  });
  console.log(r);
}

// 写入文件脚本
// const fs = require("fs");
// const path = require("path");
// const directory = "files";
// const list = [];
// for (let i = 0; i < list.length; i++) {
//   const item = list[i];
//   const fileName = Object.keys(item)[0];
//   const filePath = path.join(directory, `${fileName}.js`);
//   const content = `function importModule() {
//   return ${JSON.stringify(item[fileName])}
//   }
//   export { importModule }
//   `;
//   fs.writeFile(filePath, content, (err) => {
//     if (err) {
//       console.error(`写入文件 ${fileName} 时发生错误：`, err);
//       return;
//     }
//     console.log(`文件 ${fileName} 写入成功！`);
//   });
// }

// 抽取图片并替换名称脚本
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
