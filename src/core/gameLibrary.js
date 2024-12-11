import { UnInstantiated } from "@/core/utils";

class GameLibrary extends UnInstantiated {
  // 导入的资源
  static champion = [];
  static equipment = [];
  static talentRune = [];
  // 解析后的资源
  static heroList = [];
  static cardList = [];
  static effectMap = {};
  // 游戏运行配置
  static debug = false; // 事件信息debug
  static runtimeConfig = {
    playerNum: 2,
    playerHp: 100,
    playerPow: 8,
    cardTimes: {
      sword: 1,
      spell: 1,
      rune: 1,
      virtual: 1,
    },
    drawCardNum: 2,
    phaseCardNum: 1,
  };
}

export default GameLibrary;
