import Card from "@/core/gameCard";
import GameLibrary from "@/core/gameLibrary";

const _library = GameLibrary;

function generateCard(group, card, skill, list) {
  const result = [];
  list.forEach(([name, count]) => {
    new Array(count).fill().forEach(() => {
      const item = {
        group,
        cardType: card[name].type,
        cardName: name,
        cardCnName: card[name].cnName,
        cardDes: card[name].des,
      };
      result.push(new Card(item));
    });
  });
  return result;
}

function generateHero() {}

async function onLoad() {
  // 解析资源
  const cardPack = _library.cardPack;
  const heroPack = _library.heroPack;
  const modePack = _library.modePack;
  // 卡牌
  const cardList = [];
  for (const i in cardPack) {
    const card = cardPack[i].card;
    const skill = cardPack[i].skill;
    const list = cardPack[i].list;
    _library.cardList.length = 0;
    _library.cardList.push(...generateCard(i, card, skill, list));
  }
}

export { onLoad };
