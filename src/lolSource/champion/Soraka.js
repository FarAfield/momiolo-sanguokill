function importModule() {
  return {
    type: "champion",
    id: "Soraka",
    title: "众星之子",
    name: "索拉卡",
    avatar: "Soraka.png",
    skins: [
      { name: "default", skin: "Soraka_0.jpg" },
      { name: "森林女神 索拉卡", skin: "Soraka_1.jpg" },
      { name: "月光女神阿忒弥斯 索拉卡", skin: "Soraka_2.jpg" },
      { name: "圣洁化身 索拉卡", skin: "Soraka_3.jpg" },
      { name: "灵魂收割者 索拉卡", skin: "Soraka_4.jpg" },
      { name: "蕉泥座人 索拉卡", skin: "Soraka_5.jpg" },
      { name: "源代码 索拉卡", skin: "Soraka_6.jpg" },
      { name: "星之守护者 索拉卡", skin: "Soraka_7.jpg" },
      { name: "睡衣守护者 索拉卡", skin: "Soraka_8.jpg" },
      { name: "冬境仙灵 索拉卡", skin: "Soraka_9.jpg" },
      { name: "黎明使者 索拉卡", skin: "Soraka_15.jpg" },
      { name: "黑夜使者 索拉卡", skin: "Soraka_16.jpg" },
      { name: "至臻 星之守护者 索拉卡", skin: "Soraka_17.jpg" },
      { name: "咖啡甜心 索拉卡", skin: "Soraka_18.jpg" },
      { name: "灵魂莲华 索拉卡", skin: "Soraka_27.jpg" },
      { name: "玉剑传说 星仙子", skin: "Soraka_37.jpg" },
      { name: "花仙子 索拉卡", skin: "Soraka_44.jpg" },
    ],
    spells: [
      {
        id: "SorakaP",
        name: "拯救",
        icon: "SorakaP.png",
        description: "索拉卡在朝着附近低血量的友方英雄移动时会提升移动速度。",
      },
      {
        id: "SorakaQ",
        name: "流星坠落",
        icon: "SorakaQ.png",
        description:
          "索拉卡召唤下一颗星星，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ movespeedslow*100 }}%<status>减速</status>效果。<br /><br />命中一个敌方英雄时会为索拉卡提供<keywordMajor>活力焕发</keywordMajor>，在{{ hotduration }}秒里持续回复共<healing>{{ totalhot }}生命值</healing>并提供在此期间持续衰减的<speed>{{ movespeedhaste*100 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SorakaW",
        name: "星之灌注",
        icon: "SorakaW.png",
        description:
          "索拉卡给一名友方英雄回复<healing>{{ totalheal }}生命值</healing>。<br /><br />如果索拉卡带有<keywordMajor>活力焕发</keywordMajor>，那么生命值消耗会降低{{ percenthealthcostrefund*100 }}%，并且目标也会获得<keywordMajor>活力焕发</keywordMajor>，持续{{ spell.sorakaq:hotduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SorakaE",
        name: "星体结界",
        icon: "SorakaE.png",
        description:
          "索拉卡创造一个星之领域，对英雄造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。领域会存留{{ rootdelay }}秒，<status>沉默</status>其中的敌人们。当领域消失后，领域中的英雄们会被<status>禁锢</status>{{ rootduration }}秒并受到<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SorakaR",
        name: "祈愿",
        icon: "SorakaR.png",
        description:
          "索拉卡召唤神圣的能量，来为所有友方英雄回复<healing>{{ healingcalc }}生命值</healing>，无论相距多远。对生命值低于40%的友方英雄的回复效果提升至<healing>{{ ampedhealing }}</healing>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SorakaP: null,
      SorakaQ: null,
      SorakaW: null,
      SorakaE: null,
      SorakaR: null,
    },
  };
}
export { importModule };
