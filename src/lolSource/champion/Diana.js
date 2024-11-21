function importModule() {
  return {
    type: "champion",
    id: "Diana",
    title: "皎月女神",
    name: "黛安娜",
    avatar: "Diana.png",
    skins: [
      { name: "default", skin: "Diana_0.jpg" },
      { name: "暗黑女武神 黛安娜", skin: "Diana_1.jpg" },
      { name: "广寒仙子 嫦娥", skin: "Diana_2.jpg" },
      { name: "无限烈焰 黛安娜", skin: "Diana_3.jpg" },
      { name: "腥红之月 黛安娜", skin: "Diana_11.jpg" },
      { name: "黑潮 黛安娜", skin: "Diana_12.jpg" },
      { name: "屠龙勇士 黛安娜", skin: "Diana_18.jpg" },
      { name: "女帝 黛安娜", skin: "Diana_25.jpg" },
      { name: "至臻 女帝 黛安娜", skin: "Diana_26.jpg" },
      { name: "光明哨兵 黛安娜", skin: "Diana_27.jpg" },
      { name: "烈焰仙子 黛安娜", skin: "Diana_37.jpg" },
      { name: "北极星神 黛安娜", skin: "Diana_47.jpg" },
      { name: "天龙之子 黛安娜", skin: "Diana_54.jpg" },
      { name: "暗星女王 黛安娜", skin: "Diana_64.jpg" },
      { name: "至臻 暗星女王 黛安娜", skin: "Diana_65.jpg" },
    ],
    spells: [
      {
        id: "DianaP",
        name: "月银之刃",
        icon: "DianaP.png",
        description:
          "每第三次攻击就会溅射周围的敌人，造成额外的魔法伤害。在施放一个技能后，黛安娜获得持续5秒的攻击速度。",
      },
      {
        id: "DianaQ",
        name: "新月打击",
        icon: "DianaQ.png",
        description:
          "黛安娜释放一道月能圆弧，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并用<keywordMajor>月光</keywordMajor>标记{{ moonlightduration }}秒。<br /><br /><keywordMajor>月光</keywordMajor>会显形那些不在<keywordStealth>潜行</keywordStealth>状态的敌人们。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DianaW",
        name: "苍白之瀑",
        icon: "DianaW.png",
        description:
          "黛安娜生成3颗持续{{ shieldduration }}秒的护体法球，可在接触时爆炸，每颗造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，至多达到<magicDamage>{{ totalmaxdamage }}伤害</magicDamage>。<br /><br />黛安娜也会获得相同持续时间的<shield>{{ shieldvalue }}护盾值</shield>。当最后一颗法球爆炸后，她会获得额外的<shield>{{ shieldvalue }}护盾值</shield>并刷新持续时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DianaE",
        name: "月神冲刺",
        icon: "DianaE.png",
        description:
          "黛安娜成为复仇之月的活化身，冲向一名敌人并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。如果目标被施加了<keywordMajor>月光</keywordMajor>，那么这个技能的冷却时间会被刷新。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DianaR",
        name: "月之降临",
        icon: "DianaR.png",
        description:
          "黛安娜<status>拽入</status>、<status>减速</status>{{ slowtooltip }}%、并显形附近的敌人 {{ slowduration }}秒。<br /><br />如果黛安娜命中了至少一名敌方英雄，那么她就会召唤月亮，造成<magicDamage>{{ rexplosiondamage }}魔法伤害</magicDamage>外加<magicDamage>{{ rmultihitamplification }}</magicDamage>x第一个之外的被拖拽英雄数，至多达到<magicDamage>{{ maxdamage }}伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      DianaP: null,
      DianaQ: null,
      DianaW: null,
      DianaE: null,
      DianaR: null,
    },
  };
}
export { importModule };
