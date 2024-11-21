function importModule() {
  return {
    type: "champion",
    id: "Fiddlesticks",
    title: "远古恐惧",
    name: "费德提克",
    avatar: "Fiddlesticks.png",
    skins: [
      { name: "default", skin: "Fiddlesticks_0.jpg" },
      { name: "幽魂 费德提克", skin: "Fiddlesticks_1.jpg" },
      { name: "联合王国 费德提克", skin: "Fiddlesticks_2.jpg" },
      { name: "荒野幽灵 费德提克", skin: "Fiddlesticks_3.jpg" },
      { name: "南瓜头 费德提克", skin: "Fiddlesticks_4.jpg" },
      { name: "铁钩船长 费德提克", skin: "Fiddlesticks_5.jpg" },
      { name: "惊悚派对 费德提克", skin: "Fiddlesticks_6.jpg" },
      { name: "糖果使徒 费德提克", skin: "Fiddlesticks_7.jpg" },
      { name: "重生之沙 费德提克", skin: "Fiddlesticks_8.jpg" },
      { name: "禁卫机甲 费德提克", skin: "Fiddlesticks_9.jpg" },
      { name: "星之吞噬者 费德提克", skin: "Fiddlesticks_27.jpg" },
      { name: "腥红之月 费德提克", skin: "Fiddlesticks_37.jpg" },
    ],
    spells: [
      {
        id: "FiddlesticksP",
        name: "巫骇草人",
        icon: "FiddlesticksP.png",
        description: "费德提克的饰品会被替换为【草间人】。",
      },
      {
        id: "FiddlesticksQ",
        name: "恐惧",
        icon: "FiddlesticksQ.png",
        description:
          "<spellPassive>被动：</spellPassive>在非战斗状态且未被敌人看见，或冒充成一个<keywordMajor>草间人</keywordMajor>时，如果用一个技能对敌人造成了伤害，那么会使该敌人<status>恐惧</status>{{ fearduration }}秒。<br /><br /><spellActive>主动：</spellActive><status>恐惧</status>一个目标{{ fearduration }}秒并造成<magicDamage>{{ totalpercenthealthdamage }}当前生命值的魔法伤害</magicDamage>。如果目标近期被费德提克<status>恐惧</status>过，那么则会转而造成<magicDamage>{{ totalpercenthealthdamagefeared }}当前生命值的魔法伤害</magicDamage>。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "FiddlesticksW",
        name: "五骨丰登",
        icon: "FiddlesticksW.png",
        description:
          "费德提克引导并吸取附近敌人们的灵魂，每秒造成<magicDamage>{{ draindamagecalc }}魔法伤害</magicDamage>，持续2秒，外加在结束时造成<magicDamage>{{ percentfortooltip }}%已损失生命值的伤害</magicDamage>。费德提克回复<healing>相当于{{ vamppercentage }}%伤害值的生命值</healing>。<br /><br />如果费德提克在未被打断地结束引导，那么剩余冷却时间缩短60%。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "FiddlesticksE",
        name: "夜割",
        icon: "FiddlesticksE.png",
        description:
          "费德提克释放黑暗魔法，造成<magicDamage>{{ damage }}魔法伤害</magicDamage>并使敌人<status>减速</status>{{ slowamount*-100 }}%，持续{{ silenceduration }}秒。处于区域正中的敌人还会受到<status>沉默</status>效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "FiddlesticksR",
        name: "群鸦风暴",
        icon: "FiddlesticksR.png",
        description:
          "费德提克引导{{ channeltime }}秒，随后传送并释放杀人鸦群，在{{ duration }}秒里持续造成共<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      FiddlesticksP: null,
      FiddlesticksQ: null,
      FiddlesticksW: null,
      FiddlesticksE: null,
      FiddlesticksR: null,
    },
  };
}
export { importModule };
