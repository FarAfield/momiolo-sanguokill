import GameCard from "@/core/gameCard";
import GameLibrary from "@/core/gameLibrary";
import GameStatus from "@/core/gameStatus";
import { UnInstantiated } from "@/core/utils";
import { cloneDeep } from "lodash-es";

const _library = GameLibrary;
const _status = GameStatus;

// 所有AI可选值范围[-10,10]
class GameAi extends UnInstantiated {
  static chooseToUse(cardList, spellList) {
    const virtualCardList = spellList.map((spell) => {
      return new GameCard({ ...spell, isVirtual: true });
    });
    function findMaxIndexes(array, n) {
      return array
        .map((item, index) => ({ item, index }))
        .sort((a, b) => b.item - a.item)
        .slice(0, n)
        .map(({ index }) => index);
    }
    function calcWeight(card) {
      const result = {
        disabled: false,
        targets: [],
        totalWeight: 0,
      };
      // attrs:{ enable, toSelf, selectTarget, allowMultiple, multipleNum }
      // ai: { basic:{ order, value, addedValue }, choose:{ player, target } }
      const cost = card.cost;
      let { enable, toSelf, selectTarget, allowMultiple, multipleNum } =
        card.attrs;
      let { order, value, addedValue } = card.ai.basic;
      let { player, target } = card.ai.choose;
      const current = _status.current;
      const otherPlayer = _status.playerList.filter(
        (player) => player.id !== current.id && !player.isDie()
      );
      // 是否可使用 (card,player) => boolean
      enable = typeof enable === "function" ? enable(card, current) : enable;
      if (!enable) {
        result.disabled = true;
        return result;
      }
      // 可使用的目标
      const targets = [];
      // 是否能对自身使用   (card,player) => boolean
      toSelf = typeof toSelf === "function" ? toSelf(card, current) : toSelf;
      if (toSelf) {
        targets.push(current);
      }
      if (typeof selectTarget === "boolean") {
        selectTarget ? targets.push(...otherPlayer) : null;
      } else {
        // 能否选择目标    (card,player,target) => boolean
        otherPlayer.forEach((player) => {
          if (selectTarget(card, current, player)) {
            targets.push(player);
          }
        });
      }
      if (!targets.length) {
        result.disabled = true;
        return result;
      }
      // 是否可多选目标    (card,player) => boolean
      allowMultiple =
        typeof allowMultiple === "function"
          ? allowMultiple(card, current)
          : allowMultiple;
      // 多选目标数量    (card,player) => number
      multipleNum =
        typeof multipleNum === "function"
          ? multipleNum(card, current)
          : multipleNum;
      // 可选目标数
      const targetNum = allowMultiple ? multipleNum : 1;
      // 遍历所有目标，计算目标拥有的权重
      const weightList = targets.map((item) => {
        const orderWeight =
          typeof order === "function" ? order(card, current, item) : order;
        const valueWeight =
          typeof value === "function" ? value(card, current, item) : value;
        const addedValueWeight =
          typeof addedValue === "function"
            ? addedValue(card, current, item)
            : addedValue;
        // 计算choose的权重  (card,player) => number  |   (card,target) => number
        const playerWeight =
          typeof player === "function" ? player(card, current) : player;
        const targetWeight =
          typeof target === "function" ? target(card, item) : target;
        if (current.id === item.id) {
          return orderWeight + valueWeight + addedValueWeight + playerWeight;
        } else {
          return orderWeight + valueWeight + addedValueWeight + targetWeight;
        }
      });
      // 计算该卡的总权重
      const indexes = findMaxIndexes(weightList, targetNum);
      result.targets = targets.filter((_, index) => indexes.includes(index));
      result.totalWeight = weightList
        .filter((_, index) => indexes.includes(index))
        .reduce((a, b) => a + b, 0);
      result.totalWeight = Math.round(result.totalWeight / (cost || 1));
      return result;
    }
    const weightResultList = cardList.concat(virtualCardList).map((card) => {
      const effectMap = _library.effectMap;
      const effect = effectMap[card.id];
      const weight = calcWeight(Object.assign({}, card, effect));
      // 如果pow不足，则权重为0且禁用
      if (card.cost > _status.current.pow) {
        weight.disabled = true;
        weight.totalWeight = 0;
      }
      // console.log(`【${card.name}】`, weight.totalWeight, weight);
      return weight;
    });
    const [bestIndex] = findMaxIndexes(
      weightResultList.map((i) => i.totalWeight),
      1
    );
    const bestCard = cardList.concat(virtualCardList)[bestIndex];
    const bestTargets = weightResultList[bestIndex].targets;
    const disabledCard = weightResultList.filter((i) => i.disabled);
    return {
      card: bestCard.disabled ? null : bestCard,
      targets: bestCard.disabled ? [] : bestTargets,
      disabledCard,
    };
  }
}

export default GameAi;
