const moduleType = "card";
const moduleName = "basic";
function importModule(game) {
  return {
    card: {
      flash: {
        type: "basic",
        name: "闪现",
        des: "闪现一段距离",
        skills: ["flash"], // 或者 effect:function(event,game){}
      },
    },
    skill: {
      flash: {
        effect: function (event, game) {
          //   const { player, source, target, card } = event;
          //   const { cardName } = card;
          //   const { cardDes } = card;
          //   const { cardCnName } = card;
        },
      },
    },
    list: [["flash", 5]],
  };
}
export { moduleType, moduleName, importModule };
