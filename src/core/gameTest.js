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
  playerList: ["Aatrox", "Ahri"],
  cardList: ["Attack", "Recover"],
  cardNum: 100,
  round: 2,
};
class GameTest extends UnInstantiated {
  static start() {
    if (IS_TEST) {
      _log.warning("启动游戏测试模式");
      _library.runtimeConfig.maxRound = gameTestConfig.round;
      _library.runtimeConfig.playerNum = gameTestConfig.playerList.length;
      _library.heroList = _library.heroList.filter((i) =>
        gameTestConfig.playerList.includes(i.id)
      );
      _library.cardList = _library.cardList.filter((i) =>
        gameTestConfig.cardList.includes(i.id)
      );
      Object.keys(_library.runtimeConfig.cardTimes).forEach((key) => {
        _library.runtimeConfig.cardTimes[key] = gameTestConfig.cardNum;
      });
    }
  }
  static content = IS_TEST
    ? {
        chooseHero: function ({ event, game, get, set, ui }) {
          async function step1() {
            const [playerList, heroList] = [get.playerList(), get.heroList()];
            for (const player of playerList) {
              await game.delay();
              player.chooseHero(heroList[player.seatNum]);
              game.log(
                `${player.seatNum}号位选择了【${player.title}: ${player.name}】`
              );
            }
            event.finish();
          }
          return {
            step1,
          };
        },
        phaseUse: function ({ event, game, get, set, ui, ai }) {
          async function step1() {
            const [playerList, current] = [get.playerList(), get.current()];
            game.log(current, "进入了出牌阶段");
            // 根据触发时机过滤出能使用的法术以及卡牌
            const { card, targets, disabledCard } = ai.chooseToUse(
              current.handCards,
              current.spells
            );
            if (card.id)
              console.log(
                `【${current.name}】对${targets.map((i) => i.name).join(",")}使用了${card.isVirtual ? "法术" : "卡牌"}【${card.name}】`
              );
            const next = event.trigger(card.id);
            next.source = current;
            next.targets = targets;
            next.cards = [card];
            next.spell = card.id;
            //  event.result =  chooseToUse
            // 第二步，为true,goto(1)
            // event.finish();
          }

          // function step2() {
          //   if (event.result) {
          //     event.goto(1);
          //   } else {
          //     event.finish();
          //   }
          // }
          return {
            step1,
          };
        },
        chooseToUse() {
          async function step1() {}
          return {
            step1,
          };
        },
      }
    : {};
}

export default GameTest;
