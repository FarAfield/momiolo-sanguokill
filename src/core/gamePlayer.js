import GameLog from "@/core/gameLog";
import GameStatus from "@/core/gameStatus";

const _log = GameLog;
const _status = GameStatus;

class Player {
  // 基础属性
  playerId;
  playerTitle;
  playerName;
  playerAvatar;
  playerSkin;
  skills = [];
  // 其他属性
  playerSeatNum = 0; // 位次
  playerMaxHp = 0;
  playerHp = 0;
  playerMaxPow = 0;
  playerPow = 0;
  // 额外属性
  tempSkills = []; // 临时技能
  actionHistory = []; // 操作记录
  marks = {}; // 标记
  ai = {}; // ai逻辑
  judgeCards = [];
  buffCards = [];
  handCards = [];
  equipCards = [];

  constructor(player) {
    Object.keys(player).forEach((key) => {
      this[key] = player[key];
    });
  }

  chooseHero(hero) {
    this.playerId = hero.id;
    this.playerTitle = hero.title;
    this.playerName = hero.name;
    this.playerAvatar = hero.avatar;
    this.playerSkin = hero.skins[0].skin;
    this.skills = hero.spells;
  }

  drawCard(num = 0) {
    const cardPile = _status.cardPile;
    const cards = cardPile.splice(0, num);
    this.handCards = this.handCards.concat(cards);
    _log.log(
      this.playerName,
      `获得了【${num}】张牌:`,
      cards.map((i) => i.cardName).join(",")
    );
  }

  isDie() {
    return this.playerHp <= 0;
  }
}
export default Player;
