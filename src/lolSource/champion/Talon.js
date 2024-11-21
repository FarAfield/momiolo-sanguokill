function importModule() {
  return {
    type: "champion",
    id: "Talon",
    title: "刀锋之影",
    name: "泰隆",
    avatar: "Talon.png",
    skins: [
      { name: "default", skin: "Talon_0.jpg" },
      { name: "刺客信条 泰隆", skin: "Talon_1.jpg" },
      { name: "血色精锐 泰隆", skin: "Talon_2.jpg" },
      { name: "银龙裁决 泰隆", skin: "Talon_3.jpg" },
      { name: "SSW 泰隆", skin: "Talon_4.jpg" },
      { name: "腥红之月 泰隆", skin: "Talon_5.jpg" },
      { name: "玉剑传说 无影", skin: "Talon_12.jpg" },
      { name: "泰隆 · 黑木", skin: "Talon_20.jpg" },
      { name: "幽梦玫瑰 泰隆", skin: "Talon_29.jpg" },
      { name: "西部魔影 猎天使恶魔 泰隆", skin: "Talon_38.jpg" },
      { name: "至臻 西部魔影 猎天使恶魔 泰隆", skin: "Talon_39.jpg" },
      { name: "伏虎之力 泰隆", skin: "Talon_49.jpg" },
    ],
    spells: [
      {
        id: "TalonP",
        name: "刀锋之末",
        icon: "TalonP.png",
        description:
          "泰隆的技能会创伤英雄和大型野怪，可叠加3层。当泰隆用普攻攻击一个带有3层创伤效果的目标时，目标会流血，受到重度的持续伤害。",
      },
      {
        id: "TalonQ",
        name: "诺克萨斯式外交",
        icon: "TalonQ.png",
        description:
          "泰隆跃向一个目标并造成<physicalDamage>{{ leapdamage }}物理伤害</physicalDamage>。如果在近战距离内使用，那么这个技能会转而进行暴击，造成<physicalDamage>{{ criticaldamage }}物理伤害</physicalDamage>。<br /><br />如果这个技能击杀了目标，那么泰隆会回复<healing>{{ totalhealing }}生命值</healing>并返还{{ cooldownrefund*100 }}%冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TalonW",
        name: "斩草除根",
        icon: "TalonW.png",
        description:
          "泰隆扔出一排刀刃，造成<physicalDamage>{{ totalinitialdamage }}物理伤害</physicalDamage>。然后刀刃会折返，造成<physicalDamage>{{ totalreturndamage }}额外物理伤害</physicalDamage>和持续{{ slowduration }}秒的{{ movespeedslow*100 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TalonE",
        name: "刺客之道",
        icon: "TalonE.png",
        description:
          "泰隆翻越相距最近的地形或建筑物。泰隆无法在{{ wallcd }}秒里重复翻越相同地区的地形。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TalonR",
        name: "暗影突袭",
        icon: "TalonR.png",
        description:
          "泰隆散出一圈刀刃，造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>，获得<speed>{{ movespeed*100 }}%移动速度</speed>，并且变为<keywordStealth>隐形</keywordStealth>状态，持续{{ duration }}秒。当<keywordStealth>隐形</keywordStealth>状态结束时，刀刃会折返至泰隆处，再次造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>。<br /><br />如果泰隆用一次攻击或<spellName>诺克萨斯式外交</spellName>取消掉<keywordStealth>隐形</keywordStealth>状态，那么刀刃会转而折返至目标处。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TalonP: null,
      TalonQ: null,
      TalonW: null,
      TalonE: null,
      TalonR: null,
    },
  };
}
export { importModule };
