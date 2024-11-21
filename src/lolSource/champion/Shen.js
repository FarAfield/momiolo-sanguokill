function importModule() {
  return {
    type: "champion",
    id: "Shen",
    title: "暮光之眼",
    name: "慎",
    avatar: "Shen.png",
    skins: [
      { name: "default", skin: "Shen_0.jpg" },
      { name: "极寒 慎", skin: "Shen_1.jpg" },
      { name: "炎爆 慎", skin: "Shen_2.jpg" },
      { name: "主治医师 慎", skin: "Shen_3.jpg" },
      { name: "腥红之月 鬼武者 慎", skin: "Shen_4.jpg" },
      { name: "战国大名 慎", skin: "Shen_5.jpg" },
      { name: "暗杀星 慎", skin: "Shen_6.jpg" },
      { name: "未来战士 慎", skin: "Shen_15.jpg" },
      { name: "奈落之炎 慎", skin: "Shen_16.jpg" },
      { name: "灵能特工 慎", skin: "Shen_22.jpg" },
      { name: "冲击之刃 慎", skin: "Shen_40.jpg" },
      { name: "灰烬守护者 慎", skin: "Shen_49.jpg" },
    ],
    spells: [
      {
        id: "ShenP",
        name: "忍法！气合盾",
        icon: "ShenP.png",
        description:
          "在施放一次技能后，慎会获得一层护盾。如果慎的技能对英雄产生作用，那么这个技能的冷却时间就会降低。",
      },
      {
        id: "ShenQ",
        name: "奥义！暮临",
        icon: "ShenQ.png",
        description:
          "慎召回他的<keywordMajor>魂刃</keywordMajor>。被其命中的敌人们在接下来的{{ e5 }}秒里，在远离慎的时候会被<status>减速</status>{{ e4 }}%。<br /><br />此外，慎的下{{ e3 }}次攻击造成额外的<magicDamage>{{ baseflatdamage }}</magicDamage>外加<magicDamage>{{ basepercenthealth }}最大生命值的魔法伤害</magicDamage>。如果慎用<keywordMajor>魂刃</keywordMajor>命中了一名英雄，那么伤害提升至<magicDamage>{{ baseflatdamage }}</magicDamage>外加<magicDamage>{{ emppercenthealth }}最大生命值的魔法伤害</magicDamage>并且他的那几次攻击获得<attackSpeed>{{ e9 }}%攻击速度</attackSpeed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ShenW",
        name: "奥义！魂佑",
        icon: "ShenW.png",
        description:
          "慎在他的<keywordMajor>魂刃</keywordMajor>位置生成一个防御结界，持续{{ e1 }}秒。对结界内的友方英雄进行的攻击都会被格挡。 <br /><br />如果结界在开启时并没有英雄在其中，那么它会等待至多{{ e2 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ShenE",
        name: "奥义！影缚",
        icon: "ShenE.png",
        description:
          "<spellPassive>被动：</spellPassive>用<spellName>奥义！暮临</spellName>或这个技能造成伤害时，会回复<keywordMajor>{{ energyrefund }}能量</keywordMajor>。<br /><br /><spellActive>主动：</spellActive>慎进行冲刺，<status>嘲讽</status>英雄和野怪{{ ccduration }}秒并造成<physicalDamage>{{ tauntdamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ShenR",
        name: "秘奥义！慈悲度魂落",
        icon: "ShenR.png",
        description:
          "慎为地图任一位置的一名友方英雄提供持续{{ shieldduration }}秒的<shield>{{ shield }}</shield>到<shield>{{ maxshield }}护盾值</shield>，基于目标的已损失生命值(在60%已损失生命值时达到最大值)。在引导{{ channelduration }}秒后，慎会带着<keywordMajor>魂刃</keywordMajor>传送到该友方英雄所在的位置。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ShenP: null,
      ShenQ: null,
      ShenW: null,
      ShenE: null,
      ShenR: null,
    },
  };
}
export { importModule };
