function importModule() {
  return {
    type: "champion",
    id: "Morgana",
    title: "堕落天使",
    name: "莫甘娜",
    avatar: "Morgana.png",
    skins: [
      { name: "default", skin: "Morgana_0.jpg" },
      { name: "杀戮天使昔拉 莫甘娜", skin: "Morgana_1.jpg" },
      { name: "地狱厨房 莫甘娜", skin: "Morgana_2.jpg" },
      { name: "刀锋女王 莫甘娜", skin: "Morgana_3.jpg" },
      { name: "黑色荆棘 莫甘娜", skin: "Morgana_4.jpg" },
      { name: "鬼魂新娘 莫甘娜", skin: "Morgana_5.jpg" },
      { name: "胜利女神 莫甘娜", skin: "Morgana_6.jpg" },
      { name: "紫金罗刹 莫甘娜", skin: "Morgana_10.jpg" },
      { name: "魅惑女巫 莫甘娜", skin: "Morgana_11.jpg" },
      { name: "玉剑传说 苍鸾", skin: "Morgana_17.jpg" },
      { name: "至尊魔女 莫甘娜", skin: "Morgana_26.jpg" },
      { name: "黎明使者 莫甘娜", skin: "Morgana_39.jpg" },
      { name: "至臻 魅惑女巫 莫甘娜", skin: "Morgana_41.jpg" },
      { name: "星之吞噬者 莫甘娜", skin: "Morgana_50.jpg" },
      { name: "净雪之月 莫甘娜", skin: "Morgana_60.jpg" },
      { name: "青花瓷 莫甘娜", skin: "Morgana_70.jpg" },
    ],
    spells: [
      {
        id: "MorganaP",
        name: "灵魂吸取",
        icon: "MorganaP.png",
        description:
          "莫甘娜从她的敌人身上吸取灵魂，在对英雄、大型小兵、中型野怪和大型野怪造成技能伤害时获得治疗效果。",
      },
      {
        id: "MorganaQ",
        name: "暗之禁锢",
        icon: "MorganaQ.png",
        description:
          "莫甘娜掷出一团星火来<status>禁锢</status>命中的第一个敌人{{ rootduration }}秒，并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MorganaW",
        name: "折磨之影",
        icon: "MorganaW.png",
        description:
          "莫甘娜点燃一个区域{{ wduration }}秒，每秒对区域内的敌人造成<magicDamage>{{ totalmindamage }}魔法伤害</magicDamage>，基于目标的已损失生命值，伤害可最多提升至{{ missinghealthamppercent*100 }}%。<br /><br />每当莫甘娜被<spellName>灵魂吸取</spellName>治疗时，这个技能的冷却时间就会减少{{ cdrefundpercent*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MorganaE",
        name: "黑暗之盾",
        icon: "MorganaE.png",
        description:
          "莫甘娜为一名友方英雄提供<shield>{{ totalshieldstrength }}魔法护盾</shield>，持续{{ shieldduration }}秒。护盾会阻挡<status>限制</status>和<status>定身</status>效果，直至被打破为止。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MorganaR",
        name: "灵魂镣铐",
        icon: "MorganaR.png",
        description:
          "莫甘娜将她自己与附近的敌方英雄用锁链铐在一起，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和{{ slowpercent }}%<status>减速</status>效果。在{{ chainduration }}秒后，仍未挣断锁链的敌人会受到<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并被<status>晕眩</status>{{ stunduration }}秒。<br /><br />在施放这个技能时，莫甘娜会获得<speed>{{ hastepercent }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      MorganaP: null,
      MorganaQ: null,
      MorganaW: null,
      MorganaE: null,
      MorganaR: null,
    },
  };
}
export { importModule };
