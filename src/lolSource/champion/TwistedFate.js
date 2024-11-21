function importModule() {
  return {
    type: "champion",
    id: "TwistedFate",
    title: "卡牌大师",
    name: "崔斯特",
    avatar: "TwistedFate.png",
    skins: [
      { name: "default", skin: "TwistedFate_0.jpg" },
      { name: "蓝色忧郁 崔斯特", skin: "TwistedFate_1.jpg" },
      { name: "红桃杰克 崔斯特", skin: "TwistedFate_2.jpg" },
      { name: "魔幻卡牌 崔斯特", skin: "TwistedFate_3.jpg" },
      { name: "探戈灵魂 崔斯特", skin: "TwistedFate_4.jpg" },
      { name: "西部牛仔 崔斯特", skin: "TwistedFate_5.jpg" },
      { name: "皇家火枪手 崔斯特", skin: "TwistedFate_6.jpg" },
      { name: "地底世界 崔斯特", skin: "TwistedFate_7.jpg" },
      { name: "逆转裁判 崔斯特", skin: "TwistedFate_8.jpg" },
      { name: "逍遥赌侠 崔斯特", skin: "TwistedFate_9.jpg" },
      { name: "腥红之月 崔斯特", skin: "TwistedFate_10.jpg" },
      { name: "未来战士 崔斯特", skin: "TwistedFate_11.jpg" },
      { name: "奥德赛 崔斯特", skin: "TwistedFate_13.jpg" },
      { name: "DWG 崔斯特", skin: "TwistedFate_23.jpg" },
      { name: "地下都市 梦魇 崔斯特", skin: "TwistedFate_25.jpg" },
      { name: "太空律动 “万能舞王” 崔斯特", skin: "TwistedFate_36.jpg" },
    ],
    spells: [
      {
        id: "TwistedFateP",
        name: "灌铅骰子",
        icon: "TwistedFateP.png",
        description:
          "在击杀了一名单位后，崔斯特会投掷他的“幸运”骰，随机获得1到6的额外赏金。",
      },
      {
        id: "TwistedFateQ",
        name: "万能牌",
        icon: "TwistedFateQ.png",
        description:
          "崔斯特掷出三张牌，各造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TwistedFateW",
        name: "选牌",
        icon: "TwistedFateW.png",
        description:
          "崔斯特开始洗牌，允许他<recast>再次施放</recast>来从3张牌中锁定一张，并且强化他的下次攻击。<br /><li>蓝牌造成<magicDamage>{{ bluedamage }}魔法伤害</magicDamage>并回复<scaleMana>{{ e6 }}法力</scaleMana>。<li>红牌对附近的敌人造成<magicDamage>{{ reddamage }}魔法伤害</magicDamage>和持续2.5秒的{{ e2 }}%<status>减速</status>。<li>金牌造成<magicDamage>{{ golddamage }}魔法伤害</magicDamage>和{{ e3 }}秒<status>晕眩</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TwistedFateE",
        name: "卡牌骗术",
        icon: "TwistedFateE.png",
        description:
          "<spellPassive>被动：</spellPassive>崔斯特获得<attackSpeed>{{ attackspeedbonus }}%攻击速度</attackSpeed>并且每第4次攻击造成额外的<magicDamage>{{ bonusdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TwistedFateR",
        name: "命运",
        icon: "TwistedFateR.png",
        description:
          "崔斯特专注于他的卡牌，提供地图上所有敌方英雄的<keywordStealth>真实视野</keywordStealth>，持续{{ e1 }}秒，并允许他<recast>再次施放</recast>。<br /><br /><recast>再次施放</recast>：崔斯特传送到{{ e4 }}码以内的任何地方。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TwistedFateP: null,
      TwistedFateQ: null,
      TwistedFateW: null,
      TwistedFateE: null,
      TwistedFateR: null,
    },
  };
}
export { importModule };
