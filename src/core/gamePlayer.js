import GameLog from "@/core/gameLog";
import GameStatus from "@/core/gameStatus";

const _log = GameLog;
const _status = GameStatus;

class Player {
  // 基础属性
  type;
  id;
  title;
  name;
  avatar;
  skin;
  spells = [];
  // 游戏属性
  seatNum = 0;
  maxHp = 0;
  hp = 0;
  maxPow = 0;
  pow = 0;
  judgeCards = [];
  buffCards = [];
  handCards = [];
  equipCards = [];
  // 额外属性
  ai = {
    friend: [],
    enemy: [],
    neutral: [],
  };
  tempSpells = [];
  marks = {};
  actionHistory = [];

  constructor(player) {
    Object.keys(player).forEach((key) => {
      this[key] = player[key];
    });
  }

  chooseHero(hero) {
    this.type = hero.type;
    this.id = hero.id;
    this.title = hero.title;
    this.name = hero.name;
    this.avatar = hero.avatar;
    this.skin = hero.skins[0].skin;
    this.spells = hero.spells;
  }
  isDie() {
    return this.playerHp <= 0;
  }
  drawCard(num = 0) {
    const cardPile = _status.cardPile;
    const cards = cardPile.splice(0, num);
    this.handCards = this.handCards.concat(cards);
    _log.log(
      this.name,
      `获得了【${num}】张牌:`,
      cards.map((i) => i.name).join(",")
    );
  }
}
export default Player;
