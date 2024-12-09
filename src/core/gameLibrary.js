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
    initPlayerHp: 100,
    initPlayerPow: 8,
    initCardTimes: {
      sword: 1,
      spell: 1,
      rune: 1,
    },
    initCardNum: 2,
    phaseCardNum: 1,
  };
}

export default GameLibrary;
