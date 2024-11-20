function importModule() {
  return {
    type: "champion",
    id: "Ahri",
    title: "九尾妖狐",
    name: "阿狸",
    avatar: "Ahri.png",
    skins: [
      {
        name: "default",
        skin: "Ahri_0.jpg",
      },
      {
        name: "高丽风情 阿狸",
        skin: "Ahri_1.jpg",
      },
      {
        name: "暗影妖狐 阿狸",
        skin: "Ahri_2.jpg",
      },
      {
        name: "焰尾妖狐 阿狸",
        skin: "Ahri_3.jpg",
      },
      {
        name: "偶像歌手 阿狸",
        skin: "Ahri_4.jpg",
      },
      {
        name: "勇者 阿狸",
        skin: "Ahri_5.jpg",
      },
      {
        name: "风纪委员 阿狸",
        skin: "Ahri_6.jpg",
      },
      {
        name: "电玩女神 阿狸",
        skin: "Ahri_7.jpg",
      },
      {
        name: "星之守护者 阿狸",
        skin: "Ahri_14.jpg",
      },
      {
        name: "K/DA 阿狸",
        skin: "Ahri_15.jpg",
      },
      {
        name: "至臻 K/DA 阿狸",
        skin: "Ahri_16.jpg",
      },
      {
        name: "永恒之森 阿狸",
        skin: "Ahri_17.jpg",
      },
      {
        name: "灵魂莲华 阿狸",
        skin: "Ahri_27.jpg",
      },
      {
        name: "K/DA ALL OUT 阿狸",
        skin: "Ahri_28.jpg",
      },
      {
        name: "魔女 阿狸",
        skin: "Ahri_42.jpg",
      },
      {
        name: "至臻 K/DA 阿狸 (2022)",
        skin: "Ahri_65.jpg",
      },
      {
        name: "魅惑之月 阿狸",
        skin: "Ahri_66.jpg",
      },
      {
        name: "净雪之月 阿狸",
        skin: "Ahri_76.jpg",
      },
      {
        name: "殿堂传奇 阿狸",
        skin: "Ahri_85.jpg",
      },
      {
        name: "联盟不朽 阿狸",
        skin: "Ahri_86.jpg",
      },
    ],
    spells: [
      {
        id: "AhriP",
        name: "摄魂夺魄",
        icon: "Ahri_SoulEater2.png",
        description: "在造成3点伤害后，阿狸会治疗自身。回复1点血量。",
      },
      {
        id: "AhriQ",
        name: "欺诈宝珠",
        icon: "AhriQ.png",
        description:
          "阿狸投出然后收回她的宝珠，在放出时会造成1点伤害，在收回时则会造成2点真实伤害",
      },
      {
        id: "AhriW",
        name: "妖异狐火",
        icon: "AhriW.png",
        description: "阿狸释放出3团狐火来追踪敌人并累计造成3点伤害",
      },
      {
        id: "AhriE",
        name: "魅惑妖术",
        icon: "AhriE.png",
        description:
          "阿狸献出红唇热吻，魅惑敌人并造成1点伤害（魅惑：无法被闪避）",
      },
      {
        id: "AhriR",
        name: "灵魄突袭",
        icon: "AhriR.png",
        description:
          "阿狸灵活地突进，并对敌人发射3颗灵魄弹。这些灵魄弹每颗造成1点伤害，可再次施放至多2次",
      },
    ],
    effects: {
      AhriP: (event, game, get, ui) => {},
      AhriQ: (event, game, get, ui) => {},
      AhriW: (event, game, get, ui) => {},
      AhriE: (event, game, get, ui) => {},
      AhriR: (event, game, get, ui) => {},
    },
  };
}

export { importModule };
