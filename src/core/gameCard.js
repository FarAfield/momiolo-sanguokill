import { merge } from "lodash-es";

class Card {
  package;
  // 基础属性
  type;
  id;
  name;
  image;
  description;
  attrs = {
    // 费用
    cost: 0,
    // 是否能对自身使用
    toSelf: false,
    // 是否可使用
    enable: true,
    // 能否选择目标
    selectTarget: true,
    // 是否可多选目标
    allowMultiple: false, // (card,player,target) => boolean
  };
  ai = {
    basic: {
      // 优先级
      order: 0,
      // 基础值
      value: 0,
      // 附加值
      addedValue: 0,
    },
    result: {
      // 对玩家使用优先级
      player: 0,
      // 对目标使用优先级
      target: 0,
    },
    tag: {
      // 伤害
      damage: 0,
      // 恢复
      recover: 0,
      // 多选
      multiple: 0,
      // 其他功能性
      useful: 0,
    },
  };
  // 额外属性
  isVirtual = false;
  constructor(card) {
    Object.keys(card).forEach((key) => {
      if (typeof card[key] === "object") {
        this[key] = merge({}, this[key], card[key]);
      } else {
        this[key] = card[key];
      }
    });
  }
}
export default Card;
