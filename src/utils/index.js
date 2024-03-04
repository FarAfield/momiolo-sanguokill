import { cloneDeep } from "lodash-es";
export function getBackgroundImage(name) {
  return `url(${
    new URL(`../assets/images/background/${name}.png`, import.meta.url).href
  })`;
}
export function getCommonImage(name) {
  return `url(${
    new URL(`../assets/images/common/${name}.png`, import.meta.url).href
  })`;
}
export function getCharacterImage(name) {
  return `url(${
    new URL(`../assets/images/character/${name}.png`, import.meta.url).href
  })`;
}
export function getSvgImage(name) {
  return `url(${new URL(`../assets/svg/${name}.svg`, import.meta.url).href})`;
}
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getIdentityList(num) {
  // 1主 2忠 3反 4内
  const identityList = [1];
  // 4 5 6  => 1    7 8 => 2
  identityList.push(
    ...new Array(num <= 6 ? Math.floor(num / 4) : Math.ceil(num / 4))
      .fill()
      .map(() => 2)
  );
  // 2 3 4 => 1   5 => 2     6 => 3  7 => 3   8 => 4
  identityList.push(
    ...new Array(num <= 5 ? Math.ceil(num / 4) : Math.floor(num / 2))
      .fill()
      .map(() => 3)
  );
  // >=3  => 1
  identityList.push(...new Array(num >= 3 ? 1 : 0).fill().map(() => 4));
  return [identityList[0]].concat(
    ...identityList.slice(1).sort(() => Math.random() - 0.5)
  );
}

export function getNoRepeatNum(array, length) {
  const result = [];
  const list = cloneDeep(array);
  new Array(length).fill().forEach(() => {
    const index = getRandomNumber(0, list.length - 1);
    result.push(list[index]);
    list.splice(index, 1);
  });
  return result;
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
export function getRadomBySeed(seed, count) {
  const radom = createSeedRadom(seed);
  let result = undefined;
  for (let i = 0; i < count; i++) {
    result = radom();
  }
  return result;
}
