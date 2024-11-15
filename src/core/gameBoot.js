import GameLibrary from "@/core/gameLibrary";
import { onLoad } from "@/core/gameLoad";
import { dynamicImportModule, gameLog } from "@/core/utils";

const _library = GameLibrary;
const modules = import.meta.glob("@/lolSource/**/**/*.js");

// 游戏启动入口
async function onBoot() {
  gameLog("【游戏启动】");
  gameLog("【资源读取中...】");
  // 异步读取资源并存储
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
  gameLog("【资源读取完成】");
  await onLoad();
}
export { onBoot };
