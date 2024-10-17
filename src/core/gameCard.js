class Card {
  group; // 卡包组   例如: basic
  cardType; // 卡牌类型  例如：basic |  equip  |  skill  |  effect
  cardName; // 卡牌名称  例如：flash
  cardCnName; // 卡牌中文名 例如：闪现
  cardDes; // 卡牌描述

  constructor(card) {
    Object.keys(card).forEach((key) => {
      this[key] = card[key];
    });
  }
}
export default Card;
