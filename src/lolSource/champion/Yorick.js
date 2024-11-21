function importModule() {
  return {
    type: "champion",
    id: "Yorick",
    title: "牧魂人",
    name: "约里克",
    avatar: "Yorick.png",
    skins: [
      { name: "default", skin: "Yorick_0.jpg" },
      { name: "地狱送葬 约里克", skin: "Yorick_1.jpg" },
      { name: "五杀摇滚贝斯手 约里克", skin: "Yorick_2.jpg" },
      { name: "苍穹之光 约里克", skin: "Yorick_3.jpg" },
      { name: "喵里克", skin: "Yorick_4.jpg" },
      { name: "抵抗军灵魔 约里克", skin: "Yorick_12.jpg" },
      { name: "五杀摇滚 III：遗失的章节 约里克", skin: "Yorick_21.jpg" },
      { name: "灵魂莲华 约里克", skin: "Yorick_30.jpg" },
      { name: "暗星 约里克", skin: "Yorick_40.jpg" },
    ],
    spells: [
      {
        id: "YorickP",
        name: "牧魂人",
        icon: "YorickP.png",
        description:
          "<font color='#FF9900'>受诅咒的部落：</font>约里克可以召唤雾行者来蜂拥并攻击附近的敌人。",
      },
      {
        id: "YorickQ",
        name: "临终仪式",
        icon: "YorickQ.png",
        description:
          "约里克的下一次普通攻击造成额外的<physicalDamage>{{ bonusdamage }}物理伤害</physicalDamage>并回复<healing>{{ qheal }}外加他的{{ missinghealthratio }}%已损失生命值</healing>，对抗非英雄单位时会削减{{ healreduction }}%。如果这个攻击击杀了目标，就会留下一座坟墓。<br /><br />当附近有3个或以上的坟墓时，如果这个技能已被使用，那么约里克就能<recast>再次施放</recast>来从附近的所有坟墓中唤起<keywordMajor>雾行者</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YorickW",
        name: "暗灵缠身",
        icon: "YorickW.png",
        description:
          "约里克召唤一道灵墙来阻挡敌人的道路，但不影响友军。灵墙能被攻击，并且会在{{ e5 }}次命中后消失。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YorickE",
        name: "哀伤之雾",
        icon: "YorickE.png",
        description:
          "约里克扔出一小团黑雾，来造成<magicDamage>{{ e7 }}%当前生命值的魔法伤害(最小为{{ minimumdamagebonus }})</magicDamage>，以及持续{{ e6 }}秒的{{ e3 }}%<status>减速</status>，并标记英雄和野怪{{ e2 }}秒。被标记的敌人们会不断<spellName>唤醒</spellName>附近的坟墓(但不会超过{{ spell.yorickpassive:yorickpassiveghoulmax }}的最大限制)，并且会从<keywordMajor>雾行者</keywordMajor>们的至多{{ ghoulbonuscount }}次攻击中受到{{ ghoulbonusdamage*100 }}%额外伤害。<br /><br />约里克和他的召唤单位们在朝着标记移动时会获得<speed>{{ e5 }}%移动速度</speed>。<keywordMajor>雾行者</keywordMajor>将在被标记的敌人远离它们时立刻跳过去。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YorickR",
        name: "海屿悼词",
        icon: "YorickR.png",
        description:
          "约里克召唤<keywordMajor>迷雾室女</keywordMajor>和{{ rghoulnumbers }}个<keywordMajor>雾行者</keywordMajor>。<keywordMajor>室女</keywordMajor>会自动从附近阵亡的敌人身上唤起<keywordMajor>雾行者</keywordMajor>。<br /><br />当约里克对<keywordMajor>室女</keywordMajor>的目标造成伤害时，他将额外造成<magicDamage>{{ rmarkdamagepercent }}%最大生命值的魔法伤害</magicDamage>。<br /><br />10秒后，约里克可以<recast>再次施放</recast>这个技能来放走<keywordMajor>室女</keywordMajor>，派她去相距最近的一条战线。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      YorickP: null,
      YorickQ: null,
      YorickW: null,
      YorickE: null,
      YorickR: null,
    },
  };
}
export { importModule };
