function importModule() {
  return {
    type: "champion",
    id: "Aatrox",
    title: "暗裔剑魔",
    name: "亚托克斯",
    avatar: "Aatrox.png",
    skins: [
      {
        name: "default",
        skin: "Aatrox_0.jpg",
      },
      {
        name: "仲裁圣骑 亚托克斯",
        skin: "Aatrox_1.jpg",
      },
      {
        name: "霸天剑魔 亚托克斯",
        skin: "Aatrox_2.jpg",
      },
      {
        name: "狂鲨 亚托克斯",
        skin: "Aatrox_3.jpg",
      },
      {
        name: "腥红之月 亚托克斯",
        skin: "Aatrox_7.jpg",
      },
      {
        name: "至臻 腥红之月 亚托克斯",
        skin: "Aatrox_8.jpg",
      },
      {
        name: "胜利之剑 亚托克斯",
        skin: "Aatrox_9.jpg",
      },
      {
        name: "奥德赛 亚托克斯",
        skin: "Aatrox_11.jpg",
      },
      {
        name: "至臻 腥红之月 亚托克斯 (2022)",
        skin: "Aatrox_20.jpg",
      },
      {
        name: "月蚀骑士 亚托克斯",
        skin: "Aatrox_21.jpg",
      },
      {
        name: "DRX 亚托克斯",
        skin: "Aatrox_30.jpg",
      },
      {
        name: "至臻 DRX 亚托克斯",
        skin: "Aatrox_31.jpg",
      },
      {
        name: "海魔至尊 亚托克斯",
        skin: "Aatrox_33.jpg",
      },
    ],
    spells: [
      {
        id: "AatroxP",
        name: "赐死剑气",
        icon: "AatroxP.png",
        description: "亚托克斯的下一次攻击附加1点伤害",
      },
      {
        id: "AatroxQ",
        name: "暗裔利刃",
        icon: "AatroxQ.png",
        description: "亚托克斯猛砸他的巨剑，依次造成1点、2点、3点伤害",
        cost: 3,
      },
      {
        id: "AatroxW",
        name: "恶火束链",
        icon: "AatroxW.png",
        description: "亚托克斯发射一道锁链，造成1点伤害并禁锢目标",
        cost: 1,
      },
      {
        id: "AatroxE",
        name: "暗影冲决",
        icon: "AatroxE.png",
        description:
          "被动效果：亚托克斯获得治疗效果，每累计造成5点伤害，获得1点治疗。主动效果：闪避一次技能",
        cost: 1,
      },
      {
        id: "AatroxR",
        name: "大灭",
        icon: "AatroxR.png",
        description:
          "亚托克斯显现他真正的恶魔形态，对目标造成5点伤害，若目标处于禁锢状态，额外造成3点伤害",
        cost: 5,
      },
    ],
    effects: {
      AatroxP: (event, game, get, ui) => {},
      AatroxQ: (event, game, get, ui) => {},
      AatroxW: (event, game, get, ui) => {},
      AatroxE: (event, game, get, ui) => {},
      AatroxR: (event, game, get, ui) => {},
    },
  };
}

export { importModule };
