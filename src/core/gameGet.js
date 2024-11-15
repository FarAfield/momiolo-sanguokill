import GameLibrary from "@/core/gameLibrary";
import GameStatus from "@/core/gameStatus";
import { UnInstantiated, getRandomNumber } from "@/core/utils";

const _library = GameLibrary;
const _status = GameStatus;

class GameGet extends UnInstantiated {
  // 获取/设置游戏轮数
  static gameRound(num) {
    return !num ? _status.round : (_status.round = num);
  }

  // 获取/设置游戏是否自动模式
  static gameAuto(bool) {
    return bool === undefined ? _status.auto : (_status.auto = bool);
  }

  // 获取玩家列表
  static gamePlayerList() {
    return _status.playerList;
  }

  // 获取/添加游戏牌堆
  static gameCardPile(pile) {
    return !pile?.length
      ? _status.cardPile
      : (_status.cardPile = _status.cardPile.concat(pile));
  }
  // 获取当前玩家
  static gameMe() {
    return _status.me;
  }

  // 获取所有英雄
  static heroList() {
    return _library.heroList;
  }

  static random(min = 0, max = 100) {
    return getRandomNumber(min, max);
  }

  // 优先级获取
  static priority() {}
}

export default GameGet;
