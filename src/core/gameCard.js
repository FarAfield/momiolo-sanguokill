import { capitalize } from "lodash-es";

class Card {
  cardPackage;
  cardType;
  // 基础属性
  cardId;
  cardName;
  cardImage;
  cardDescription;
  // 额外属性
  isVirtual = false;
  constructor(card) {
    Object.keys(card).forEach((key) => {
      this[`card${capitalize(key)}`] = card[key];
    });
  }
}
export default Card;
