import GameLibrary from "@/core/gameLibrary";
import GameLog from "@/core/gameLog";
import GameStatus from "@/core/gameStatus";
import { UnInstantiated } from "@/core/utils";

const _library = GameLibrary;
const _log = GameLog;
const _status = GameStatus;

// 是否开启测试模式
const IS_TEST = true;

const gameTestConfig = {
  playerList: ["Aatrox", "Ahri", "Akali"],
  cardMap: {
    SummonerFlash: 20,
  },
};

class GameTest extends UnInstantiated {
  static start() {
    if (IS_TEST) {
      _log.warn("启动游戏测试模式");
      _library.runtimeConfig.playerNum = gameTestConfig.playerList.length;
      _library.heroList = _library.heroList.filter((i) =>
        gameTestConfig.playerList.includes(i.id)
      );
      _library.cardList = _library.cardList.filter((i) =>
        Object.keys(gameTestConfig.cardMap).includes(i.id)
      );
      _library.runtimeConfig.initCardTimes.spell = 100; // 卡牌数量
    }
  }
  static content = IS_TEST
    ? {
        chooseHero: function ({ event, game, get, set, ui }) {
          async function step1() {
            const [playerList, heroList, cardPile] = [
              get.playerList(),
              get.heroList(),
            ];
            for (const player of playerList) {
              await game.delay();
              player.chooseHero(heroList[player.playerSeatNum]);
              game.log(
                `${player.playerSeatNum}号位选择了【${player.playerTitle}: ${player.playerName}】`
              );
            }
            event.finish();
          }
          return {
            step1,
          };
        },
      }
    : {};
}

export default GameTest;
