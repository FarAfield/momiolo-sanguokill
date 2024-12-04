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
  static debug = true;
  static runtimeConfig = {};
}

export default GameLibrary;
