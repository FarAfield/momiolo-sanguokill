const moduleType = "hero";
const moduleName = "standard";
function importModule(game) {
  return {
    hero: {
      Yasuo: {
        skills: ["Wind Wall"],
      },
    },
    skill: {
      ["Wind Wall"]: {
        effect: function (event, game) {
          // const {player,source,target,card} = event;
          // const {cardName} = card;
          // const {cardDes} = card;
          // const {cardCnName} = card;
        },
      },
    },
    translate: {
      ["Yasuo"]: "亚索",
      ["Wind Wall"]: "风墙",
    },
  };
}
export { moduleType, moduleName, importModule };
