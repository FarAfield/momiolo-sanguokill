function importModule() {
  return {
    type: "champion",
    id: "Draven",
    title: "荣耀行刑官",
    name: "德莱文",
    avatar: "Draven.png",
    skins: [
      { name: "default", skin: "Draven_0.jpg" },
      { name: "灵魂收割者 德莱文", skin: "Draven_1.jpg" },
      { name: "绞肉机刽子手 德莱文", skin: "Draven_2.jpg" },
      { name: "金牌主播 德莱文", skin: "Draven_3.jpg" },
      { name: "泳池派对 德莱文", skin: "Draven_4.jpg" },
      { name: "野兽猎人 德莱文", skin: "Draven_5.jpg" },
      { name: "德莱德莱德莱文", skin: "Draven_6.jpg" },
      { name: "圣诞老人 德莱文", skin: "Draven_12.jpg" },
      { name: "王国机神青龙 德莱文", skin: "Draven_13.jpg" },
      { name: "破败军团 德莱文", skin: "Draven_20.jpg" },
      { name: "刃执事 德莱文", skin: "Draven_29.jpg" },
      { name: "魔域梦魇 德莱文", skin: "Draven_39.jpg" },
      { name: "魂蔷薇 德莱文", skin: "Draven_48.jpg" },
    ],
    spells: [
      {
        id: "DravenP",
        name: "德莱文联盟",
        icon: "DravenP.png",
        description:
          "在接住一把旋转飞斧或者击杀了一个小兵、野怪或防御塔后，德莱文会从他的粉丝那里获得崇拜效果。击杀一名敌方英雄会为德莱文提供额外赏金，赏金的多少取决于他拥有多少层崇拜效果。",
      },
      {
        id: "DravenQ",
        name: "旋转飞斧",
        icon: "DravenQ.png",
        description:
          "德莱文准备好一把<keywordMajor>旋转飞斧</keywordMajor>，使他的下一次攻击造成额外的<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>然后弹到空中。如果德莱文接住了它，那么他会准备好另一把<keywordMajor>旋转飞斧</keywordMajor>。<br /><br />德莱文可以同时持有2把<keywordMajor>旋转飞斧</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DravenW",
        name: "血性冲刺",
        icon: "DravenW.png",
        description:
          "德莱文进入幽灵状态，获得在{{ e3 }}秒里持续衰减的<speed>{{ e2 }}%移动速度</speed>和持续{{ e5 }}秒的<attackSpeed>{{ e4 }}%攻击速度</attackSpeed>。<br /><br />当德莱文接住一把<keywordMajor>旋转飞斧</keywordMajor>时，这个技能的冷却时间就会刷新。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DravenE",
        name: "开道利斧",
        icon: "DravenE.png",
        description:
          "德莱文抛掷一柄开山斧，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，<status>击退</status>，以及持续{{ e3 }}秒的{{ e2 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DravenR",
        name: "冷血追命",
        icon: "DravenR.png",
        description:
          "德莱文猛掷出两把巨斧来造成<physicalDamage>{{ rcalculateddamage }}物理伤害</physicalDamage>。在命中一名英雄或<recast>再次施放</recast>之后，巨斧会掉转方向并返回德莱文处。巨斧每命中一个敌人就会降低{{ rdamagereductionperhit*100 }}%伤害，最低降至{{ rmindamagepercent }}%。<br /><br />如果<keywordMajor>冷血追命</keywordMajor>使一名敌方英雄的生命值低于德莱文目前的{{ rpassivestackscoefficient*100 }}%<keywordMajor>德莱文联盟</keywordMajor>层数({{ rpassivetruedamage }})，那么德莱文会将该英雄处决。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      DravenP: null,
      DravenQ: null,
      DravenW: null,
      DravenE: null,
      DravenR: null,
    },
  };
}
export { importModule };
