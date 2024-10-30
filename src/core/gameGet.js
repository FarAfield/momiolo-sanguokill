import GameLibrary from "@/core/gameLibrary";
import GameStatus from "@/core/gameStatus";
import { UnInstantiated } from "@/core/utils";

const _library = GameLibrary;
const _status = GameStatus;

class GameGet extends UnInstantiated {
  // 获取/设置游戏轮数
  static gameRound(num) {
    return !num ? _status.round : (_status.round = num);
  }
  // 获取/添加游戏牌堆
  static gamePile(pile) {
    return !pile?.length
      ? _library.cardPile
      : (_library.cardPile = _library.cardPile.concat(pile));
  }
  // 优先级获取
  static priority() {}
}

export default GameGet;
