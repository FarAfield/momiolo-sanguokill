import Card from "@/core/gameCard";
import GameEngine from "@/core/gameEngine";
import GameLibrary from "@/core/gameLibrary";
import { gameLog } from "@/core/utils";

const _game = GameEngine;
const _library = GameLibrary;

function generateCard(group, card, skill, list) {
  const result = [];
  list.forEach(([name, count]) => {
    new Array(count).fill().forEach(() => {
      const item = {
        group,
        cardType: card[name].type,
        cardName: name,
        cardCnName: card[name].name,
        cardDes: card[name].des,
      };
      result.push(new Card(item));
    });
  });
  return result;
}

function generateHero() {}

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
    const list = cardPack[i].list;
    _library.cardList.length = 0;
    _library.cardList.push(...generateCard(i, card, skill, list));
  }
  // ...其他加载操作
  _game.start();
}

export { onLoad };
