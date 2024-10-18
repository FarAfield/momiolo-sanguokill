const moduleType = "card";
const moduleName = "basic";

function importModule(game) {
  return {
    card: {
      haste: {
        type: "basic",
        skills: ["haste"],
      },
      heal: {
        type: "basic",
        skills: ["heal"],
      },
      barrier: {
        type: "basic",
        skills: ["barrier"],
      },
      exhaust: {
        type: "basic",
        skills: ["exhaust"],
      },
      snowball: {
        type: "basic",
        skills: ["snowball"],
      },
      mana: {
        type: "basic",
        skills: ["mana"],
      },
      teleport: {
        type: "basic",
        skills: ["teleport"],
      },
      flash: {
        type: "basic",
        skills: ["flash"],
      },
      boost: {
        type: "basic",
        skills: ["boost"],
      },
      ignite: {
        type: "basic",
        skills: ["ignite"],
      },
      smite: {
        type: "basic",
        skills: ["smite"],
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
    translate: {
      haste: "幽灵疾步",
      haste_des: "增加移动速度",
      heal: "治疗术",
      heal_des: "治疗自己",
      barrier: "屏障",
      barrier_des: "增加护甲",
      exhaust: "虚弱",
      exhaust_des: "降低攻击速度",
      snowball: "标记",
      snowball_des: "标记一个目标",
      mana: "清晰术",
      mana_des: "回复法力",
      teleport: "传送",
      teleport_des: "传送一段距离",
      flash: "闪现",
      flash_des: "闪现一段距离",
      boost: "净化",
      boost_des: "增加攻击力",
      ignite: "引燃",
      ignite_des: "造成伤害并持续伤害",
      smite: "惩戒",
      smite_des: "造成伤害并使其无法使用技能",
    },
    list: [
      ["haste", 5],
      ["heal", 5],
      ["barrier", 5],
      ["exhaust", 5],
      ["snowball", 5],
      ["mana", 5],
      ["teleport", 5],
      ["flash", 5],
      ["boost", 5],
      ["ignite", 5],
      ["smite", 5],
    ],
  };
}
export { moduleType, moduleName, importModule };
