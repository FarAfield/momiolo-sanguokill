import GameEngine from "@/core/gameEngine";
import GameLibrary from "@/core/gameLibrary";
import { gameLog } from "@/core/utils";
import { cloneDeep, omit } from "lodash-es";

const _game = GameEngine;
const _library = GameLibrary;

async function onLoad() {
  gameLog("【资源加载中...】");
  // 解析资源
  const champion = _library.champion;
  const equipment = _library.equipment;
  const talentRune = _library.talentRune;
  // 对英雄信息进行提取
  for (const i of champion) {
    const hero = omit(cloneDeep(i), ["effects"]);
    Object.assign(_library.effectMap, i.effects);
    _library.heroList.push(hero);
  }
  // 对装备和符文进行提取
  for (const i of equipment) {
    const card = omit(cloneDeep(i), ["effects"]);
    Object.assign(_library.effectMap, i.effects);
    card.package = "equipment";
    _library.cardList.push(card);
  }
  for (const i of talentRune) {
    const card = omit(cloneDeep(i), ["effects"]);
    Object.assign(_library.effectMap, i.effects);
    card.package = "talentRune";
    _library.cardList.push(card);
  }
  gameLog("【资源加载完成】");
  // 启动游戏
  _game.start();
}

export { onLoad };
