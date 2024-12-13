import { UnInstantiated } from "@/core/utils";
import GameStatus from "@/core/gameStatus";

const _status = GameStatus;

// 所有AI可选值范围[-10,10]
class GameAi extends UnInstantiated {
  static chooseToUse(cards, spells) {}
  static chooseCard(cardList) {
    // attrs: { cost:0, toSelf:false, enable:true, selectTarget:true, allowMultiple:false }
    // ai:{ basic:{ order:0, value:0, addedValue:0 }, result:{ player:0, target:0 }, tag:{ damage:0, recover:0, multiple:0, useful:0} }
    function calcWeight(card) {
      let { cost, toSelf, enable, selectTarget, allowMultiple } = card.attrs;
      let { order, value, addedValue } = card.ai.basic;
      let { player, target } = card.ai.result;
      let { damage, recover, multiple, useful } = card.ai.tag;
      const otherPlayer = _status.playerList.filter(
        (player) => player.id !== _status.current.id && !player.isDie()
      );
      // (1) 计算伤害收益
      const damageWeight =
        typeof damage === "function"
          ? Math.max(
              ...otherPlayer.map((player) =>
                damage(card, _status.current, player)
              )
            )
          : damage;
      // (2) 计算恢复收益
      const recoverWeight =
        typeof recover === "function"
          ? Math.max(
              ...otherPlayer.map((player) =>
                recover(card, _status.current, player)
              )
            )
          : recover;
      // (3) 计算多选数量
      const canMultiple =
        typeof allowMultiple === "function"
          ? otherPlayer.some((player) =>
              allowMultiple(card, _status.current, player)
            )
          : allowMultiple;
      const multipleNum = canMultiple
        ? typeof multiple === "function"
          ? Math.max(
              ...otherPlayer.map((player) =>
                multiple(card, _status.current, player)
              )
            )
          : multiple
        : 0;
      // (4) 计算其他收益
      const usefulWeight =
        typeof useful === "function"
          ? Math.max(
              ...otherPlayer.map((player) =>
                useful(card, _status.current, player)
              )
            )
          : useful;
      const effectWeight =
        ((Math.max(damageWeight, recoverWeight) + usefulWeight) *
          (multipleNum || 1)) /
        cost;
      console.log(
        card.name,
        "权重：",
        damageWeight,
        recoverWeight,
        usefulWeight,
        effectWeight
      );
      // (5) 计算 basic  order权重
      const orderWeight =
        typeof order === "function"
          ? Math.max(
              ...otherPlayer.map((player) =>
                order(card, _status.current, player)
              )
            )
          : order;
      // (6) 计算 basic  value权重
      const valueWeight =
        typeof value === "function"
          ? Math.max(
              ...otherPlayer.map((player) =>
                value(card, _status.current, player)
              )
            )
          : value;
      // (7) 计算 basic  addedValue权重
      const addedValueWeight =
        typeof addedValue === "function"
          ? Math.max(
              ...otherPlayer.map((player) =>
                addedValue(card, _status.current, player)
              )
            )
          : addedValue;
      const basicWeight =
        orderWeight * 0.3 + valueWeight * 0.2 + addedValueWeight * 0.1;
      console.log(card.name, "basic权重：", basicWeight);
      return basicWeight + effectWeight;
    }
    return cardList.map(calcWeight);
  }
  static chooseSpell(spellList) {
    // 计算法术权重
  }

  static chooseTarget() {
    // 计算目标权重
  }
}

export default GameAi;
