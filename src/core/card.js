const Num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const Decor = ["spade", "heart", "club", "diamond"];
class Card {
  group; // 分组   例如: basic  extra
  cardType; // 牌类型  例如：sha  shan  jiu  tao
  cardName; // 牌名称
  cardNum; // 牌编号
  cardDecor; // 牌花色
  cardSkin; // 牌背景
  cardDes; // 牌描述

  constructor(card) {
    Object.keys(card).forEach((key) => {
      this[key] = card[key];
    });
  }

  // 创建卡牌
  static $createCard(group, config) {
    const cards = [];
    Object.entries(config).forEach(([type, { name, skin, des, list }]) => {
      (list || []).forEach(({ num, decor }) => {
        const card = {
          group,
          cardType: type,
          cardName: name,
          cardNum: Num[num - 1],
          cardDecor: Decor[decor - 1],
          cardSkin: skin,
          cardDes: des,
        };
        cards.push(card);
      });
    });
    return cards.map((i) => new Card(i));
  }
}

export default Card;
