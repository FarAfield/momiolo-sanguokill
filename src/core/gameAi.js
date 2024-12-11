import { UnInstantiated } from "@/core/utils";

// 所有AI可选值范围[-10,10]
class GameAi extends UnInstantiated {
  chooseCard() {
    // attrs: { cost:0, toSelf:false, enable:true, selectTarget:true, allowMultiple:false }
    // ai:{ basic:{ order:0, value:0, addedValue:0 }, result:{ player:0, target:0 }, tag:{ damage:0, recover:0, multiple:0, useful:0} }
    // 计算卡片权重
  }
  chooseSpell() {
    // 计算法术权重
  }
}

export default GameAi;
