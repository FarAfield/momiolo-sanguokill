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

  static gamePlayerList() {
    return _status.playerList;
  }

  // 获取/添加游戏牌堆
  static gameCardPile(pile) {
    return !pile?.length
      ? _status.cardPile
      : (_status.cardPile = _status.cardPile.concat(pile));
  }
  // 优先级获取
  static priority() {}
}

export default GameGet;
