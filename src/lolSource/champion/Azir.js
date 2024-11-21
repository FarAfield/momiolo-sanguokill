function importModule() {
  return {
    type: "champion",
    id: "Azir",
    title: "沙漠皇帝",
    name: "阿兹尔",
    avatar: "Azir.png",
    skins: [
      { name: "default", skin: "Azir_0.jpg" },
      { name: "星际之门 阿兹尔", skin: "Azir_1.jpg" },
      { name: "幽冥领主 阿兹尔", skin: "Azir_2.jpg" },
      { name: "SKT T1 阿兹尔", skin: "Azir_3.jpg" },
      { name: "司马懿 仲达", skin: "Azir_4.jpg" },
      { name: "永恒之森 阿兹尔", skin: "Azir_5.jpg" },
      { name: "2022 全球总决赛 阿兹尔", skin: "Azir_14.jpg" },
      { name: "精英律师 阿兹尔", skin: "Azir_19.jpg" },
    ],
    spells: [
      {
        id: "AzirP",
        name: "恕瑞玛的传承",
        icon: "AzirP.png",
        description: "阿兹尔可以从友方或敌方防御塔的废墟中召唤太阳圆盘。",
      },
      {
        id: "AzirQ",
        name: "狂沙猛攻",
        icon: "AzirQ.png",
        description:
          "阿兹尔命令所有<keywordMajor>黄沙士兵</keywordMajor>前往一个区域，对他们途经的敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续1秒的{{ e2 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AzirW",
        name: "沙兵现身",
        icon: "AzirW.png",
        description:
          "阿兹尔召唤一个持续{{ e1 }}秒的<keywordMajor>黄沙士兵</keywordMajor>。当阿兹尔攻击处在一个<keywordMajor>黄沙士兵</keywordMajor>附近的敌人时，他会转而命令该士兵进行戳刺，在其方向上造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />这个技能拥有{{ maxammo }}层充能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AzirE",
        name: "流沙移形",
        icon: "AzirE.png",
        description:
          "阿兹尔为他自身提供<shield>{{ totalshield }}护盾值</shield>，持续{{ e6 }}秒并朝着他的一位<keywordMajor>黄沙士兵</keywordMajor>突进，对途经的敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />如果阿兹尔命中了一名敌方英雄，那么他就会停下来并获得一层<spellName>黄沙士兵</spellName>充能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AzirR",
        name: "禁军之墙",
        icon: "AzirR.png",
        description:
          "阿兹尔召唤一道由禁军组成的人墙向前冲锋，<status>击退</status>敌人们并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。然后这道由禁军组成的人墙会持续{{ e4 }}秒，来阻挡敌人的前进。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AzirP: null,
      AzirQ: null,
      AzirW: null,
      AzirE: null,
      AzirR: null,
    },
  };
}
export { importModule };
