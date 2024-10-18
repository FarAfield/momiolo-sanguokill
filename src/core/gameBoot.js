import GameAi from "@/core/gameAi";
import GameEngine from "@/core/gameEngine";
import GameGet from "@/core/gameGet";
import GameLibrary from "@/core/gameLibrary";
import GameStatus from "@/core/gameStatus";
import GameUi from "@/core/gameUi";
import { onLoad } from "@/core/gameLoad";
import { dynamicImportModule, gameLog } from "@/core/utils";

const _ai = GameAi;
const _game = GameEngine;
const _get = GameGet;
const _library = GameLibrary;
const _status = GameStatus;
const _ui = GameUi;

const modules = import.meta.glob("@/gamePackage/**/*.js");

// 游戏启动入口
async function onBoot() {
  gameLog("【游戏启动】");
  // 异步读取资源并存储
  for (const path in modules) {
    const name = path.split("/").at(-1).replace(".js", "");
    const { moduleType, moduleName, importModule } =
      await dynamicImportModule(name);
    _library[`${moduleType}Pack`][moduleName] = importModule(_game, _get, _ui);
  }
  // ...其他初始化操作
  await onLoad();
}
export { onBoot };
