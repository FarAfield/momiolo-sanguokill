import GameLog from "@/core/gameLog";
import GameStatus from "@/core/gameStatus";

const _log = GameLog;
const _status = GameStatus;

class Card {
  package;
  // 基础属性
  type;
  id;
  name;
  image;
  description;
  cost = 0;
  // 是否是虚拟牌
  isVirtual = false;
  // 卡牌属性以及AI
  attrs = {
    // 是否可使用 (card,player) => boolean
    enable: true,
    // 是否能对自身使用 (card,player) => boolean
    toSelf: false,
    // 能否选择目标 (card,player,target) => boolean
    selectTarget: true,
    // 是否可多选目标 (card,player) => boolean
    allowMultiple: false,
    // 多选目标数量  (card,player) => number
    multipleNum: 0,
  };
  ai = {
    basic: {
      // 优先级 (card,player,target) => number
      order: 0,
      // 基础值 (card,player,target) => number
      value: 0,
      // 附加值 (card,player,target) => number
      addedValue: 0,
    },
    choose: {
      // 对玩家使用优先级  (card,player) => number
      player: 0,
      // 对目标使用优先级  (card,target) => number
      target: 0,
    },
  };
  constructor(card) {
    Object.keys(card).forEach((key) => {
      this[key] = card[key];
    });
  }
}
export default Card;
