import GameEngine from "@/core/gameEngine";
import GameLibrary from "@/core/gameLibrary";
import { gameLog } from "@/core/utils";

const _game = GameEngine;
const _library = GameLibrary;

function generateCard(group, card, skill, translate, list) {
  const result = [];
  list.forEach(([name, count]) => {
    new Array(count).fill().forEach(() => {
      const item = {
        group,
        cardType: card[name].type,
        cardName: name,
        cardCnName: translate[name],
        cardDes: translate[`${name}_des`],
      };
      result.push(item);
    });
  });
  return result;
}

function generateHero(group, hero, skill, translate) {
  const result = [];
  Object.entries(hero).forEach(([name, { skills }]) => {
    result.push({
      group,
      heroName: name,
      heroCnName: translate[name],
      heroSkills: skills,
    });
  });
  return result;
}

async function onLoad() {
  gameLog("【游戏加载】");
  // 解析资源
  const cardPack = _library.cardPack;
  const heroPack = _library.heroPack;
  const modePack = _library.modePack;
  // 卡牌
  for (const i in cardPack) {
    const card = cardPack[i].card;
    const skill = cardPack[i].skill;
    const translate = cardPack[i].translate;
    const list = cardPack[i].list;
    _library.cardList.length = 0;
    _library.cardList.push(...generateCard(i, card, skill, translate, list));
  }
  // 英雄
  for (const i in heroPack) {
    const hero = heroPack[i].hero;
    const skill = heroPack[i].skill;
    const translate = heroPack[i].translate;
    _library.heroList.length = 0;
    _library.heroList.push(...generateHero(i, hero, skill, translate));
  }
  // 模式
  for (const i in modePack) {
    _library.modeList.length = 0;
    _library.modeList.push(i);
  }
  // ...其他加载操作
  _game.start();
}

export { onLoad };
