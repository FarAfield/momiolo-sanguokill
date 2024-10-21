import { UnInstantiated } from "@/core/utils";

class GameLibrary extends UnInstantiated {
  static cardPack = {
    standard: {},
  };
  static heroPack = {
    standard: {},
  };
  static modePack = {
    standard: {},
  };
  static cardList = [];
  static heroList = [];
  static modeList = [];
}

export default GameLibrary;
