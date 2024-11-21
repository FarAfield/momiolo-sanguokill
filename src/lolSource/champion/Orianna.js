function importModule() {
  return {
    type: "champion",
    id: "Orianna",
    title: "发条魔灵",
    name: "奥莉安娜",
    avatar: "Orianna.png",
    skins: [
      { name: "default", skin: "Orianna_0.jpg" },
      { name: "哥特女仆 奥莉安娜", skin: "Orianna_1.jpg" },
      { name: "恶灵布偶 奥莉安娜", skin: "Orianna_2.jpg" },
      { name: "灵骨工匠 奥莉安娜", skin: "Orianna_3.jpg" },
      { name: "暗杀星 奥莉安娜", skin: "Orianna_4.jpg" },
      { name: "冬季仙境 奥莉安娜", skin: "Orianna_5.jpg" },
      { name: "觅心魔灵 奥莉安娜", skin: "Orianna_6.jpg" },
      { name: "暗星 奥莉安娜", skin: "Orianna_7.jpg" },
      { name: "胜利女神 奥莉安娜", skin: "Orianna_8.jpg" },
      { name: "泳池派对 奥莉安娜", skin: "Orianna_11.jpg" },
      { name: "小蜜蜂 奥莉安娜", skin: "Orianna_20.jpg" },
      { name: "星之守护者 奥莉安娜", skin: "Orianna_29.jpg" },
      { name: "T1 奥莉安娜", skin: "Orianna_38.jpg" },
    ],
    spells: [
      {
        id: "OriannaP",
        name: "发条协奏",
        icon: "OriannaP.png",
        description:
          "奥莉安娜的攻击会造成额外魔法伤害。这个伤害可在奥莉安娜对相同目标进行更多次攻击后提升。",
      },
      {
        id: "OriannaQ",
        name: "指令：攻击",
        icon: "OriannaQ.png",
        description:
          "奥莉安娜指挥她的<keywordMajor>魔偶</keywordMajor>移动至一个区域，对附近敌人和沿途敌人造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>。对第一个敌人之后的所有敌人造成的伤害减少{{ e2 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "OriannaW",
        name: "指令：杂音",
        icon: "OriannaW.png",
        description:
          "奥莉安娜指挥她的<keywordMajor>魔偶</keywordMajor>释放一股电脉冲，对周围敌军造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />此电脉冲会留下持续{{ fieldduration }}秒的能量场，使敌人<status>减速</status>{{ slowamount*100 }}%，并为友军提供<speed>{{ hasteamount*100 }}%移动速度</speed>，在{{ slowandhasteduration }}秒里持续衰减。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "OriannaE",
        name: "指令：防卫",
        icon: "OriannaE.png",
        description:
          "<spellPassive>被动：</spellPassive><keywordMajor>魔偶</keywordMajor>为附身的友军英雄增加<scaleArmor>{{ e2 }}护甲</scaleArmor>和<scaleMR>{{ e2 }}魔法抗性</scaleMR>。<br /><br /><spellActive>主动：</spellActive>奥莉安娜指挥她的<keywordMajor>魔偶</keywordMajor>附身在一名友方英雄身上，为其提供<shield>{{ totalshieldtooltip }}护盾值</shield>，持续{{ e5 }}秒。<keywordMajor>魔偶</keywordMajor>途径的敌方单位都会受到<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "OriannaR",
        name: "指令：冲击波",
        icon: "OriannaR.png",
        description:
          "奥莉安娜指挥她的<keywordMajor>魔偶</keywordMajor>，在短暂的延迟后释放一股冲击波，对周围敌军造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并将他们朝<keywordMajor>魔偶</keywordMajor>的方向<status>击飞</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      OriannaP: null,
      OriannaQ: null,
      OriannaW: null,
      OriannaE: null,
      OriannaR: null,
    },
  };
}
export { importModule };
