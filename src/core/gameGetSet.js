import GameLibrary from "@/core/gameLibrary";
import GameStatus from "@/core/gameStatus";
import { UnInstantiated, getRandomNumber } from "@/core/utils";

const _library = GameLibrary;
const _status = GameStatus;

class GameGet extends UnInstantiated {
  static round() {
    return _status.round;
  }

  static auto() {
    return _status.auto;
  }

  static cardPile(pile) {
    return _status.cardPile;
  }

  static playerList() {
    return _status.playerList;
  }

  static me() {
    return _status.me;
  }

  static current() {
    return _status.current;
  }

  static heroList() {
    return _library.heroList;
  }

  static effectMap() {
    return _library.effectMap;
  }

  static drawCardNum() {
    return _library.runtimeConfig.drawCardNum;
  }

  static phaseCardNum() {
    return _library.runtimeConfig.phaseCardNum;
  }

  static random(min = 0, max = 100) {
    return getRandomNumber(min, max);
  }
}

class GameSet extends UnInstantiated {
  static round(num) {
    _status.round = num;
  }
  static auto(bool) {
    _status.auto = bool;
  }
  static cardPile(pile) {
    _status.cardPile = pile;
  }

  static current(player) {
    _status.current = player;
  }
}

class GameGetSet extends UnInstantiated {
  static get = GameGet;
  static set = GameSet;
}

export default GameGetSet;
