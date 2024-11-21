function importModule() {
  return {
    type: "champion",
    id: "Sejuani",
    title: "北地之怒",
    name: "瑟庄妮",
    avatar: "Sejuani.png",
    skins: [
      { name: "default", skin: "Sejuani_0.jpg" },
      { name: "野兽女王 瑟庄妮", skin: "Sejuani_1.jpg" },
      { name: "死亡骑士 瑟庄妮", skin: "Sejuani_2.jpg" },
      { name: "传统造型 瑟庄妮", skin: "Sejuani_3.jpg" },
      { name: "战熊骑士 瑟庄妮", skin: "Sejuani_4.jpg" },
      { name: "魄罗骑士 瑟庄妮", skin: "Sejuani_5.jpg" },
      { name: "野兽猎人 瑟庄妮", skin: "Sejuani_6.jpg" },
      { name: "瑟庄妮·逐晓者", skin: "Sejuani_7.jpg" },
      { name: "金猪烈焰 瑟庄妮", skin: "Sejuani_8.jpg" },
      { name: "海克斯科技 瑟庄妮", skin: "Sejuani_15.jpg" },
      { name: "源计划：统帅 瑟庄妮", skin: "Sejuani_16.jpg" },
      { name: "日蚀骑士 瑟庄妮", skin: "Sejuani_26.jpg" },
      { name: "胜利女神 瑟庄妮", skin: "Sejuani_36.jpg" },
    ],
    spells: [
      {
        id: "SejuaniP",
        name: "北地之怒",
        icon: "SejuaniP.png",
        description:
          "在脱离战斗后，瑟庄妮会获得冰霜护甲，冰川护甲可提供护甲、魔法抗性和免疫减速。当瑟庄妮受到伤害后，冰霜护甲会存留一小段时间。瑟庄妮可以伤害一名被晕眩的敌人来击碎它，从而造成巨量魔法伤害。",
      },
      {
        id: "SejuaniQ",
        name: "极寒突袭",
        icon: "SejuaniQ.png",
        description:
          "瑟庄妮冲锋，对敌人造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>并<status>击飞</status>敌人{{ e4 }}秒。冲锋会在命中一名敌方英雄后停止。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SejuaniW",
        name: "凛冬之怒",
        icon: "SejuaniW.png",
        description:
          "瑟庄妮挥击她的链枷，造成<physicalDamage>{{ firsthitdamagetooltip }}物理伤害</physicalDamage>并<status>击退</status>小兵和野怪。然后她会再次挥击，造成<physicalDamage>{{ secondhitdamagetooltip }}物理伤害</physicalDamage>并暂时<status>减速</status>目标。<br /><br />两段挥击都会施加<spellName>永冻</spellName>效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SejuaniE",
        name: "永冻领域",
        icon: "SejuaniE.png",
        description:
          "<spellPassive>被动：</spellPassive>附近近战友方英雄的攻击会对英雄和野怪施加一层效果。<br /><br /><spellPassive>主动：</spellPassive>瑟庄妮对带有4层此效果的目标敌人造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>并使其<status>晕眩</status>{{ e1 }}秒。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SejuaniR",
        name: "极冰寒狱",
        icon: "SejuaniR.png",
        description:
          "瑟庄妮扔出她的极冰套索，<status>晕眩</status>并显形命中的第一个敌方英雄{{ e2 }}秒并造成<magicDamage>{{ minordamagetooltip }}魔法伤害</magicDamage>。<br /><br />如果套索飞行了至少25%的最大距离，那么它会<status>晕眩</status>并显形{{ e6 }}秒。它还会生成一团冰风暴来使目标附近的敌人<status>减速</status>{{ e4 }}%，持续{{ e3 }}秒。所有受影响的敌人都会受到<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SejuaniP: null,
      SejuaniQ: null,
      SejuaniW: null,
      SejuaniE: null,
      SejuaniR: null,
    },
  };
}
export { importModule };
