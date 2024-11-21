function importModule() {
  return {
    type: "champion",
    id: "Evelynn",
    title: "痛苦之拥",
    name: "伊芙琳",
    avatar: "Evelynn.png",
    skins: [
      { name: "default", skin: "Evelynn_0.jpg" },
      { name: "黑暗女王 伊芙琳", skin: "Evelynn_1.jpg" },
      { name: "假面女皇 伊芙琳", skin: "Evelynn_2.jpg" },
      { name: "探戈灵魂 伊芙琳", skin: "Evelynn_3.jpg" },
      { name: "惊天魔盗 伊芙琳", skin: "Evelynn_4.jpg" },
      { name: "腥红之月 伊芙琳", skin: "Evelynn_5.jpg" },
      { name: "K/DA 伊芙琳", skin: "Evelynn_6.jpg" },
      { name: "至臻 K/DA 伊芙琳", skin: "Evelynn_7.jpg" },
      { name: "糖果大战 伊芙琳", skin: "Evelynn_8.jpg" },
      { name: "K/DA ALL OUT 伊芙琳", skin: "Evelynn_15.jpg" },
      { name: "魔女 伊芙琳", skin: "Evelynn_24.jpg" },
      { name: "至臻 K/DA 伊芙琳 (2022)", skin: "Evelynn_31.jpg" },
      { name: "灵魂莲华 伊芙琳", skin: "Evelynn_32.jpg" },
      { name: "斗魂觉醒 伊芙琳", skin: "Evelynn_42.jpg" },
      { name: "西部魔影 伊芙琳", skin: "Evelynn_52.jpg" },
      { name: "至臻 西部魔影 伊芙琳", skin: "Evelynn_53.jpg" },
    ],
    spells: [
      {
        id: "EvelynnP",
        name: "恶魔魅影",
        icon: "EvelynnP.png",
        description:
          "在非战斗状态下，伊芙琳进入【恶魔魅影】。【恶魔魅影】会在伊芙琳生命值较低时治疗她，并在6级后为她提供【伪装】。",
      },
      {
        id: "EvelynnQ",
        name: "憎恨之刺",
        icon: "EvelynnQ.png",
        description:
          "伊芙琳用她的鞭子进行打击，对命中的第一个敌人造成<magicDamage>{{ missiledamagetooltip }}魔法伤害</magicDamage>并使伊芙琳对该敌人发起的下3次技能或攻击造成额外的<magicDamage>{{ totalbonusdamagetooltip }}魔法伤害</magicDamage>。伊芙琳可以<recast>再次施放</recast>这个技能最多3次。<br /><br /><recast>再次施放：</recast>伊芙琳发射尖刺穿过相距最近的敌人，并对命中的所有敌人造成<magicDamage>{{ missiledamagetooltip }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EvelynnW",
        name: "引诱",
        icon: "EvelynnW.png",
        description:
          "伊芙琳标记一名英雄或野怪5秒。如果伊芙琳用一次攻击或技能命中了该目标，那么她将抹除该印记，返还它的法力消耗，并使目标<status>减速</status>{{ slowamount*100 }}%，持续{{ slowduration }}秒。<br /><br />如果标记持续了至少2.5秒，那么将它抹除还会有额外效果：<li>对抗英雄时：将其<status>魅惑</status>{{ charmduration }}秒并削减<scaleMR>{{ mrshred*100 }}%魔法抗性</scaleMR>，持续{{ shredduration }}秒。<li>对抗野怪时：将其<status>魅惑</status>{{ monstercharm }}秒并造成<magicDamage>{{ monsterdamagetotaltooltip }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EvelynnE",
        name: "鞭笞",
        icon: "EvelynnE.png",
        description:
          "伊芙琳鞭打一名敌人，造成<magicDamage>{{ basedamage }}加上{{ percenthealthbasetooltip }}最大生命值的魔法伤害</magicDamage>。伊芙琳获得<speed>{{ speedamount*100 }}%移动速度</speed>，持续{{ speedduration }}秒。<br /><br />进入<keywordMajor>恶魔魅影</keywordMajor>会刷新这个技能的冷却时间并使其获得强化。当这个技能获得强化后，伊芙琳会冲刺向目标并对她的目标和沿途的所有敌人造成<magicDamage>{{ empowereddamage }}加上{{ percenthealthempoweredtooltip }}最大生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EvelynnR",
        name: "最终抚慰",
        icon: "EvelynnR.png",
        description:
          "伊芙琳释放她的恶魔能量，造成大量伤害、变为不可被选取状态并向后传送。她造成<magicDamage>{{ damage }}魔法伤害</magicDamage>，如果敌人低于<healing>30%生命值</healing>，则此伤害提升至<magicDamage>{{ critdamage }}</magicDamage>。在施放的同时，给【恶魔魅影】设置一个为期1.25秒的冷却时间。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      EvelynnP: null,
      EvelynnQ: null,
      EvelynnW: null,
      EvelynnE: null,
      EvelynnR: null,
    },
  };
}
export { importModule };
