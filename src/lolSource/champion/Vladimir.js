function importModule() {
  return {
    type: "champion",
    id: "Vladimir",
    title: "猩红收割者",
    name: "弗拉基米尔",
    avatar: "Vladimir.png",
    skins: [
      { name: "default", skin: "Vladimir_0.jpg" },
      { name: "弗拉基米尔伯爵", skin: "Vladimir_1.jpg" },
      { name: "弗拉基米尔侯爵", skin: "Vladimir_2.jpg" },
      { name: "诺斯费拉图  弗拉基米尔", skin: "Vladimir_3.jpg" },
      { name: "霹雳游侠 弗拉基米尔", skin: "Vladimir_4.jpg" },
      { name: "血石领主 弗拉基米尔", skin: "Vladimir_5.jpg" },
      { name: "摄魂男爵 弗拉基米尔", skin: "Vladimir_6.jpg" },
      { name: "学生会长 弗拉基米尔", skin: "Vladimir_7.jpg" },
      { name: "黑潮 弗拉基米尔", skin: "Vladimir_8.jpg" },
      { name: "黑夜使者 弗拉基米尔", skin: "Vladimir_14.jpg" },
      { name: "波江星神 弗拉基米尔", skin: "Vladimir_21.jpg" },
      { name: "咖啡甜心 弗拉基米尔", skin: "Vladimir_30.jpg" },
      { name: "绝息圣堂 弗拉基米尔", skin: "Vladimir_39.jpg" },
    ],
    spells: [
      {
        id: "VladimirP",
        name: "血色契约",
        icon: "VladimirP.png",
        description:
          "每30生命值加成给予弗拉基米尔1法术强度，每1法术强度给予弗拉基米尔1.6生命值（不会自我循环叠加）。",
      },
      {
        id: "VladimirQ",
        name: "鲜血转换",
        icon: "VladimirQ.png",
        description:
          "弗拉基米尔汲取目标的生命力，造成<magicDamage>{{ basedamagetooltip }}魔法伤害</magicDamage>并回复<healing>{{ basehealtooltip }}生命值</healing>。在使用2次这个技能后，弗拉基米尔会获得<speed>{{ movementspeedonq2 }}%移动速度</speed>，持续0.5秒，并强化这个技能的下一次使用，持续{{ e8 }}秒。<br /><br />这个技能的强化版会造成<magicDamage>{{ empowereddamagetooltip }}魔法伤害</magicDamage>并回复额外的<healing>{{ empoweredhealtooltip }}加上{{ empoweredhealpercenttooltip }}已损失生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VladimirW",
        name: "血红之池",
        icon: "VladimirW.png",
        description:
          "弗拉基米尔化成一滩持续2秒的血池，获得<speed>{{ hasteboost*100 }}%持续衰减的移动速度</speed>，持续{{ hasteduration }}秒，并进入<keyword>无法被选取</keyword>和<keyword>幽灵</keyword>状态，同时使血池中的敌人<status>减速</status>{{ movespeedmod*-100 }}%。<br /><br />弗拉基米尔在期间会持续造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，并且每命中一个敌人就会为弗拉基米尔回复<healing>{{ totalheal }}生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VladimirE",
        name: "血之潮汐",
        icon: "VladimirE.png",
        description:
          '<charge>开始蓄力：</charge>弗拉基米尔积攒一个蓄血库，至多消耗<span class="colorCC3300">{{ chargehealthtooltip }}生命值</span>。在攒满后，弗拉基米尔会被<status>减速</status>20%。<br /><br /><release>释放：</release>弗拉基米尔对附近的敌人释放一股血弹激流，基于蓄力时间造成<magicDamage>{{ mindamagetooltip }}</magicDamage>至<magicDamage>{{ maxdamagetooltip }}魔法伤害</magicDamage>。如果这个技能蓄力了至少1秒，那么它还会使目标<status>减速</status>{{ e9 }}%，持续0.5秒。{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "VladimirR",
        name: "血之瘟疫",
        icon: "VladimirR.png",
        description:
          "弗拉基米尔生成一个剧毒瘟疫，使他的目标们所受伤害(所有来源)提高{{ e2 }}%，持续{{ e4 }}秒。在它消散后，弗拉基米尔对所有被感染的目标造成<magicDamage>{{ damage }}魔法伤害</magicDamage>。如果弗拉基米尔命中了一名敌方英雄，那么就会治疗自身<healing>{{ damage }}生命值</healing>，此后每命中一名敌方英雄会治疗自身额外的<healing>{{ secondaryhealingtooltip }}生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      VladimirP: null,
      VladimirQ: null,
      VladimirW: null,
      VladimirE: null,
      VladimirR: null,
    },
  };
}
export { importModule };
