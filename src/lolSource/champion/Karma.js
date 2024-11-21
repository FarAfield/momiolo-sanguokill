function importModule() {
  return {
    type: "champion",
    id: "Karma",
    title: "天启者",
    name: "卡尔玛",
    avatar: "Karma.png",
    skins: [
      { name: "default", skin: "Karma_0.jpg" },
      { name: "日冕女神 卡尔玛", skin: "Karma_1.jpg" },
      { name: "樱花乱舞 卡尔玛", skin: "Karma_2.jpg" },
      { name: "传统服饰 卡尔玛", skin: "Karma_3.jpg" },
      { name: "莲花之令 卡尔玛", skin: "Karma_4.jpg" },
      { name: "光明骑士 卡尔玛", skin: "Karma_5.jpg" },
      { name: "冬季仙境 卡尔玛", skin: "Karma_6.jpg" },
      { name: "征服者 卡尔玛", skin: "Karma_7.jpg" },
      { name: "暗星 卡尔玛", skin: "Karma_8.jpg" },
      { name: "黎明使者 卡尔玛", skin: "Karma_19.jpg" },
      { name: "奥德赛 卡尔玛", skin: "Karma_26.jpg" },
      { name: "破败军团 卡尔玛", skin: "Karma_27.jpg" },
      { name: "神龙尊者 宁静之龙 卡尔玛", skin: "Karma_44.jpg" },
      { name: "花仙女王 卡尔玛", skin: "Karma_54.jpg" },
      { name: "地狱火 卡尔玛", skin: "Karma_61.jpg" },
    ],
    spells: [
      {
        id: "KarmaP",
        name: "聚能之炎",
        icon: "KarmaP.png",
        description: "卡尔玛的伤害型技能将缩短梵咒的冷却时间。",
      },
      {
        id: "KarmaQ",
        name: "心灵烈焰",
        icon: "KarmaQ.png",
        description:
          "卡尔玛发射一团能量，对命中的第一个目标及其周围的敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，以及持续{{ slowduration }}秒的{{ slowamount*-100 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KarmaW",
        name: "坚定不移",
        icon: "KarmaW.png",
        description:
          "卡尔玛用灵链来连接她和一名敌方英雄或野怪，造成<magicDamage>{{ initialdamage }}魔法伤害</magicDamage>并使其显形{{ tetherduration }}秒。如果灵链一直未断裂，那么目标会再次受到<magicDamage>{{ initialdamage }}魔法伤害</magicDamage>并被<status>禁锢</status>{{ rootduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KarmaE",
        name: "鼓舞",
        icon: "KarmaE.png",
        description:
          "卡尔玛为一名友方英雄提供持续{{ shieldduration }}秒的<shield>{{ totalshield }}护盾值</shield>和持续{{ movespeedduration }}秒的<speed>{{ movespeed*100 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KarmaR",
        name: "梵咒",
        icon: "KarmaR.png",
        description:
          "卡尔玛增强她在8秒内使用的下一个技能。<br /><li><spellName>心灵烈焰</spellName>：造成额外的<magicDamage>{{ rqimpactdamage }}魔法伤害</magicDamage>并留下一道烈焰圆环，<status>减速</status>敌人并造成额外的<magicDamage>{{ rqfielddamage }}魔法伤害</magicDamage>。<li><spellName>坚定不移</spellName>：卡尔玛将在灵链的开始和结束时回复<healing>{{ rwhealamount }}已损失生命值</healing>，并且<status>禁锢</status>延长{{ rwbonusroot }}秒。<li><spellName>鼓舞</spellName>：卡尔玛为她的目标提供<shield>额外的{{ rebonusshield }}护盾值</shield>，并且还会对目标附近的友军提供护盾，为他们提供<shield>{{ rebonusshieldarea }}护盾值</shield>和<speed>{{ removespeed*100 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KarmaP: null,
      KarmaQ: null,
      KarmaW: null,
      KarmaE: null,
      KarmaR: null,
    },
  };
}
export { importModule };
