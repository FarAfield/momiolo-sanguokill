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
export function getCharacterImage(name, size = "m") {
  return `url(${
    new URL(`../assets/images/character/${name}_${size}.png`, import.meta.url)
      .href
  })`;
}
export function createPlayers(num = 2) {
  if (num < 2 || num > 8) {
    console.error("玩家数必须为2-8位");
  }
  return new Array(num).fill().map((_, index) => new Player());
}
