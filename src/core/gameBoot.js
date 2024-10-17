import GameEngine from "@/core/gameEngine";
import GameLibrary from "@/core/gameLibrary";
import { dynamicImportModule } from "@/core/utils";

const _game = GameEngine;
const _library = GameLibrary;

async function onBoot() {
  // 加载资源
  const { moduleType, moduleName, importModule } =
    await dynamicImportModule("basicCard");
  // 存储资源
  _library.cardPack[moduleName] = basicCard.importModule(_game);
}

export { onBoot };
