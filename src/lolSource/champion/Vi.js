function importModule() {
  return {
    type: "champion",
    id: "Vi",
    title: "皮城执法官",
    name: "蔚",
    avatar: "Vi.png",
    skins: [
      { name: "default", skin: "Vi_0.jpg" },
      { name: "霓虹杀拳 蔚", skin: "Vi_1.jpg" },
      { name: "女警官 蔚", skin: "Vi_2.jpg" },
      { name: "铁拳执事 蔚", skin: "Vi_3.jpg" },
      { name: "炼狱魔女 蔚", skin: "Vi_4.jpg" },
      { name: "虎痴之拳 蔚", skin: "Vi_5.jpg" },
      { name: "源计划：裁决 蔚", skin: "Vi_11.jpg" },
      { name: "碎心之拳 蔚", skin: "Vi_12.jpg" },
      { name: "灵能特工 蔚", skin: "Vi_20.jpg" },
      { name: "双城之战 蔚", skin: "Vi_29.jpg" },
      { name: "意乱情迷 蔚", skin: "Vi_30.jpg" },
      { name: "伏虎之力 蔚", skin: "Vi_39.jpg" },
    ],
    spells: [
      {
        id: "ViP",
        name: "爆裂护盾",
        icon: "ViP.png",
        description: "蔚持续为护盾充能。护盾会在蔚的技能命中一名敌人后激活。",
      },
      {
        id: "ViQ",
        name: "强能冲拳",
        icon: "ViQ.png",
        description:
          "<charge>开始蓄力：</charge>蔚开始积蓄一次强力的冲拳，自身<status>减速</status>{{ e4 }}%。<br /><br /><release>释放：</release>蔚向前冲刺，基于蓄力时间造成<physicalDamage>{{ totaldamage }}到{{ maxdamagetooltip }}物理伤害</physicalDamage>，并对命中的所有敌人施加<spellName>爆弹重拳</spellName>。蔚会在与一名敌方英雄碰撞时停下，并将其<status>击</status><status>退</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ViW",
        name: "爆弹重拳",
        icon: "ViW.png",
        description:
          "<spellPassive>被动：</spellPassive>对相同目标的每第三次攻击会造成额外<physicalDamage>{{ totaldamagetooltip }}最大生命值的物理伤害</physicalDamage>，移除目标<scaleArmor>{{ e3 }}%护甲</scaleArmor>，并为蔚提供<attackSpeed>{{ e2 }}%攻击速度</attackSpeed>，持续{{ e4 }}秒。它还可缩短<spellName>爆裂护盾</spellName>{{ spell.vipassive:cdreductionon3hit }}秒冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ViE",
        name: "透体之劲",
        icon: "ViE.png",
        description:
          "蔚的下次攻击对目标和目标后方的敌人造成<physicalDamage>{{ totaldamagetooltip }}物理伤害</physicalDamage>。<br /><br />这个技能有2层充能({{ ammorechargetime }}秒充能时间)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ViR",
        name: "天霸横空烈轰",
        icon: "ViR.png",
        description:
          "蔚挑出一名敌方英雄，将其显形并不可阻挡地向其冲刺。在触碰到该英雄后，蔚会将其<status>击飞</status>{{ rstunduration }}秒，并造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>。<br /><br />任何与蔚产生碰撞的敌人都会受到伤害、被震开并<status>晕眩</status>{{ secondarytargetstunduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: { ViP: null, ViQ: null, ViW: null, ViE: null, ViR: null },
  };
}
export { importModule };
