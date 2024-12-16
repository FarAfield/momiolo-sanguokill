import GameLibrary from "@/core/gameLibrary";
import GameLoad from "@/core/gameLoad";
import GameLog from "@/core/gameLog";
import { UnInstantiated, dynamicImportModule } from "@/core/utils";

const _library = GameLibrary;
const _load = GameLoad;
const _log = GameLog;

class GameBoot extends UnInstantiated {
  // 游戏启动入口
  static async onBoot() {
    _log.info("System", "游戏启动");
    _log.info("System", "资源读取中...");
    // 异步读取资源并存储
    const modules = import.meta.glob("@/lolSource/**/**/*.js");
    for (const path in modules) {
      const packageName = path.split("/").at(-2);
      const fileName = path.split("/").at(-1).replace(".js", "");
      const { importModule } = await dynamicImportModule(packageName, fileName);
      const module = importModule();
      if (Array.isArray(module)) {
        _library[packageName] = _library[packageName].concat(...module);
      } else {
        _library[packageName] = _library[packageName].concat(module);
      }
    }
    _log.success("System", "资源读取完成");
    // 加载资源
    _load.onLoad();
  }
}

export default GameBoot;
