const moduleType = "mode";
const moduleName = "standard";

function importModule(game) {
  return {
    game: function () {
      // 重写默认游戏开始事件
    },
    cardPack: ["standard"],
    heroPack: ["standard"],
    skill: {},
  };
}
export { moduleType, moduleName, importModule };
