import GameLibrary from "@/core/gameLibrary";
import GameStatus from "@/core/gameStatus";
import GamePlayer from "@/core/gamePlayer";
import GameCard from "@/core/gameCard";
import { UnInstantiated, getRandomNumber } from "@/core/utils";

const _library = GameLibrary;
const _status = GameStatus;

class GameUi extends UnInstantiated {
  static createPlayer() {
    const { playerNum, playerHp, playerPow } = _library.runtimeConfig;
    _status.playerList = Array.from({ length: playerNum }, (_, i) => {
      return new GamePlayer({
        seatNum: i,
        maxHp: playerHp,
        hp: playerHp,
        maxPow: playerPow,
        pow: playerPow,
      });
    });
    const meIndex = getRandomNumber(0, playerNum - 1);
    _status.me = _status.playerList[meIndex];
  }

  static createCard() {
    const cardList = _library.cardList;
    const cardTimes = _library.runtimeConfig.cardTimes;
    Object.keys(cardTimes).forEach((key) => {
      _status.cardPile.push(
        ...repeatArray(
          cardList.filter((i) => i.type === key),
          cardTimes[key]
        ).map((i) => new GameCard(i))
      );
    });
    function repeatArray(arr, n) {
      return Array(n)
        .fill(arr)
        .flatMap((x) => x);
    }
  }
}

export default GameUi;
