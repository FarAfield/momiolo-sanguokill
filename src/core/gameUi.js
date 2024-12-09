import GameLibrary from "@/core/gameLibrary";
import GameStatus from "@/core/gameStatus";
import GamePlayer from "@/core/gamePlayer";
import GameCard from "@/core/gameCard";
import { UnInstantiated, getRandomNumber } from "@/core/utils";

const _library = GameLibrary;
const _status = GameStatus;

class GameUi extends UnInstantiated {
  static createPlayer() {
    const { playerNum, initPlayerHp, initPlayerPow } = _library.runtimeConfig;
    _status.playerList = Array.from({ length: playerNum }, (_, i) => {
      return new GamePlayer({
        playerSeatNum: i,
        playerMaxHp: initPlayerHp,
        playerHp: initPlayerHp,
        playerMaxPow: initPlayerPow,
        playerPow: initPlayerPow,
      });
    });
    const meIndex = getRandomNumber(0, playerNum - 1);
    _status.me = _status.playerList[meIndex];
  }

  static createCard() {
    const cardList = _library.cardList;
    const initCardTimes = _library.runtimeConfig.initCardTimes;
    const { sword, spell, rune } = initCardTimes;
    function repeatArray(arr, n) {
      return Array(n)
        .fill(arr)
        .flatMap((x) => x);
    }
    _status.cardPile = [
      ...repeatArray(
        cardList.filter((i) => i.type === "sword"),
        sword
      ),
      ...repeatArray(
        cardList.filter((i) => i.type === "spell"),
        spell
      ),
      ...repeatArray(
        cardList.filter((i) => i.type === "rune"),
        rune
      ),
    ].map((i) => new GameCard(i));
  }
}

export default GameUi;
