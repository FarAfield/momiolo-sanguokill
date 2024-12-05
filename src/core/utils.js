const AsyncFunction = async function () {}["constructor"];
// 判断是否是async函数
function isAsyncFunction(fn) {
  return typeof fn === "function" && fn instanceof AsyncFunction;
}
const GeneratorFunction = function* () {}["constructor"];
// 判断是否是generator函数
function isGeneratorFunction(fn) {
  return typeof fn === "function" && fn instanceof GeneratorFunction;
}
// 延时函数，参数毫秒
function delay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 自动执行Generator函数（同步）
function runGen(gen) {
  if (!isGeneratorFunction(gen)) {
    console.error("The function is not a generator function.");
    return;
  }
  const g = gen();
  let res = g.next();
  while (!res.done) {
    res = g.next(res.value);
  }
  return res.value;
}
// 自动执行Generator函数（异步）
function runGenAsync(gen) {
  if (!isGeneratorFunction(gen)) {
    console.error("The function is not a generator function.");
    return;
  }
  const g = gen();
  function next(data) {
    var result = g.next(data);
    if (result.done) {
      return result.value;
    }
    result.value.then(function (data) {
      next(data);
    });
  }
  next();
}
function createSeedRadom(initSeed) {
  function seedRadom(seed) {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }
  let seed = initSeed;
  return () => {
    const result = seedRadom(seed);
    seed += result;
    return result;
  };
}
function getRadomBySeed(seed, count) {
  const radom = createSeedRadom(seed);
  let result = undefined;
  for (let i = 0; i < count; i++) {
    result = radom();
  }
  return result;
}

function gameLog() {
  console.log(...arguments);
}

// 动态导入模块,此处的路径是相对路径
function dynamicImportModule(packageName, fileName) {
  const importModule = import(`../lolSource/${packageName}/${fileName}.js`);
  return new Promise((resolve, reject) => {
    importModule
      .then((module) => {
        resolve(module);
      })
      .catch((err) => reject(err));
  });
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 静态资源获取函数
function getAvatarImage(avatarName) {
  const name = avatarName.replace(".png", "");
  return new URL(`../assets/images/avatar/${name}.png`, import.meta.url).href;
}
function getBackgroundImage(backgroundName) {
  const name = backgroundName.replace(".png", "");
  return new URL(`../assets/images/${name}.png`, import.meta.url).href;
}
function getEquipImage(equipName) {
  const name = equipName.replace(".png", "");
  return new URL(`../assets/images/equip/${name}.png`, import.meta.url).href;
}
function getRuneImage(runeName) {
  const name = runeName.replace(".png", "");
  return new URL(`../assets/images/rune/${name}.png`, import.meta.url).href;
}
function getSkinImage(skinName) {
  const name = skinName.replace(".jpg", "");
  return new URL(`../assets/images/skin/${name}.jpg`, import.meta.url).href;
}
function getSpellImage(spellName) {
  const name = spellName.replace(".png", "");
  return new URL(`../assets/images/spell/${name}.png`, import.meta.url).href;
}

export {
  AsyncFunction,
  isAsyncFunction,
  GeneratorFunction,
  isGeneratorFunction,
  delay,
  runGen,
  runGenAsync,
  createSeedRadom,
  getRadomBySeed,
  gameLog,
  dynamicImportModule,
  getRandomNumber,
  getAvatarImage,
  getBackgroundImage,
  getEquipImage,
  getRuneImage,
  getSkinImage,
  getSpellImage,
};

// 无法被实例化类(不可使用new关键字)
export class UnInstantiated {
  constructor() {
    throw new Error("This class cannot be instantiated.");
  }
}
