import { cloneDeep } from "lodash-es";
export function getBackgroundImage(name) {
  return `url(${
    new URL(`../assets/images/background/${name}.png`, import.meta.url).href
  })`;
}
export function getHeroSkin(name) {
  return `url(${
    new URL(`../assets/images/skin/${name}.jpg`, import.meta.url).href
  })`;
}
// export function getCardImage(name) {
//   return `url(${
//     new URL(`../assets/images/card/${name}.png`, import.meta.url).href
//   })`;
// }
// export function getSvgImage(name) {
//   return `url(${new URL(`../assets/svg/${name}.svg`, import.meta.url).href})`;
// }
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
