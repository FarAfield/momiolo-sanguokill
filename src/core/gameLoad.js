import GameContent from "@/core/gameContent";
import GameEngine from "@/core/gameEngine";
import GameLibrary from "@/core/gameLibrary";
import GameLog from "@/core/gameLog";
import GameTest from "@/core/gameTest";
import { UnInstantiated } from "@/core/utils";
import { cloneDeep, omit } from "lodash-es";

const _game = GameEngine;
const _library = GameLibrary;
const _log = GameLog;
const _test = GameTest;

class GameLoad extends UnInstantiated {
  static async onLoad() {
    _log.info("System", "资源加载中...");
    // 解析资源
    const champion = _library.champion;
    const equipment = _library.equipment;
    const talentRune = _library.talentRune;
    // 对英雄信息进行提取
    for (const i of champion) {
      const hero = omit(cloneDeep(i), ["effects"]);
      Object.assign(_library.effectMap, i.effects);
      _library.heroList.push(hero);
    }
    // 对装备和符文进行提取
    for (const i of equipment) {
      const card = omit(cloneDeep(i), ["effects"]);
      Object.assign(_library.effectMap, i.effects);
      card.package = "equipment";
      _library.cardList.push(card);
    }
    for (const i of talentRune) {
      const card = omit(cloneDeep(i), ["effects"]);
      Object.assign(_library.effectMap, i.effects);
      card.package = "talentRune";
      _library.cardList.push(card);
    }
    // 提取effectContent并合并
    for (const i in _library.effectMap) {
      const effect = _library.effectMap[i];
      if (effect && effect.content) {
        _library.effectContent[i] = effect.content;
      }
    }
    Object.assign(GameContent, _library.effectContent);
    _log.success("System", "资源加载完成");
    // 测试模式启动
    await _test.start();
    // 启动游戏
    _game.start();
  }
}

export default GameLoad;
