import GameEngine from "@/core/gameEngine";
import GameGet from "@/core/gameGet";
import GameLibrary from "@/core/gameLibrary";
import GameUi from "@/core/gameUi";
import { onLoad } from "@/core/gameLoad";
import { dynamicImportModule, gameLog } from "@/core/utils";

const _game = GameEngine;
const _get = GameGet;
const _library = GameLibrary;
const _ui = GameUi;

const modules = import.meta.glob("@/package/**/*.js");

// 游戏启动入口
async function onBoot() {
  gameLog("【游戏启动】");
  // 异步读取资源并存储
  for (const path in modules) {
    const type = path.split("/").at(-2);
    const name = path.split("/").at(-1).replace(".js", "");
    const { importModule } = await dynamicImportModule(type, name);
    _library[`${type}Pack`][name] = importModule(_game, _get, _ui);
  }
  // ...其他初始化操作
  await onLoad();
}
export { onBoot };
