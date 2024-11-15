import { UnInstantiated } from "@/core/utils";
import GameLibrary from "@/core/gameLibrary";
import GameStatus from "@/core/gameStatus";
import GamePlayer from "@/core/gamePlayer";
import GameCard from "@/core/gameCard";

const _library = GameLibrary;
const _status = GameStatus;

class GameUi extends UnInstantiated {
  static createPlayer(num = 2) {
    _status.playerList = Array.from({ length: num }, (_, i) => {
      return new GamePlayer({
        playerSeatNum: i,
        playerMaxHp: 100,
        playerHp: 100,
        playerMaxPow: 8,
        playerPow: 8,
      });
    });
  }

  static createCard() {
    const cardList = _library.cardList;
    function repeatArray(arr, n) {
      return Array(n)
        .fill(arr)
        .flatMap((x) => x);
    }
    _status.cardPile = repeatArray(cardList, 3).map((i) => new GameCard(i));
  }
}

export default GameUi;
