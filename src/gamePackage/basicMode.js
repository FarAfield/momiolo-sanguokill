const moduleType = "mode";
const moduleName = "basic";

function importModule(game) {
  return {
    game: function () {
      // 重写默认游戏开始事件
    },
    cardPack: ["basic"],
    heroPack: ["basic"],
    skill: {},
  };
}
export { moduleType, moduleName, importModule };
