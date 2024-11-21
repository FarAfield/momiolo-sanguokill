function importModule() {
  return {
    type: "champion",
    id: "Maokai",
    title: "扭曲树精",
    name: "茂凯",
    avatar: "Maokai.png",
    skins: [
      { name: "default", skin: "Maokai_0.jpg" },
      { name: "烈焰古树 茂凯", skin: "Maokai_1.jpg" },
      { name: "图腾古树 茂凯", skin: "Maokai_2.jpg" },
      { name: "喜庆之树 茂凯", skin: "Maokai_3.jpg" },
      { name: "鬼影森森 茂凯", skin: "Maokai_4.jpg" },
      { name: "绿茵门神 茂凯", skin: "Maokai_5.jpg" },
      { name: "喵凯", skin: "Maokai_6.jpg" },
      { name: "胜利之树 茂凯", skin: "Maokai_7.jpg" },
      { name: "创世之神 茂凯", skin: "Maokai_16.jpg" },
      { name: "宇航员 茂凯", skin: "Maokai_24.jpg" },
      { name: "DRX 茂凯", skin: "Maokai_33.jpg" },
    ],
    spells: [
      {
        id: "MaokaiP",
        name: "吸元秘术",
        icon: "MaokaiP.png",
        description:
          "茂凯的普通攻击也会治疗自身并造成额外伤害，此效果拥有一个中等的冷却时间。每当茂凯施放一次技能或被一个敌方技能击中时，这个冷却时间都会缩短。",
      },
      {
        id: "MaokaiQ",
        name: "荆棘重击",
        icon: "MaokaiQ.png",
        description:
          "茂凯将他的拳头砸入大地中，造成<magicDamage>{{ totaldamage }}外加{{ basepercenthealth*100 }}%最大生命值的魔法伤害</magicDamage>和短暂的<status>减速</status>。附近的敌人们还会被<status>击退</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MaokaiW",
        name: "扭曲突刺",
        icon: "MaokaiW.png",
        description:
          "茂凯扭曲为一团移动根须，无法被选取并且向目标突进。在抵达后，他会<status>禁锢</status>该敌人{{ e2 }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MaokaiE",
        name: "树苗投掷",
        icon: "MaokaiE.png",
        description:
          "茂凯扔出一棵树苗，戒备{{ saplingduration }}秒。树苗会追击附近的敌人，并在抵达后爆炸，对周围的敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。如果树苗命中了一名敌方英雄或史诗级野怪，<keywordMajor>吸元秘术</keywordMajor>的冷却时间就会缩短额外的4秒。<br /><br />投掷在草丛里的树苗会持续{{ empoweredsaplingduration }}秒，并引发一次范围更大的爆炸，在{{ empowereddotduration }}秒的持续时间里共造成<magicDamage>{{ totalempowereddamage }}魔法伤害</magicDamage>并且<status>减速</status>幅度变为{{ empoweredslowamount }}。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MaokaiR",
        name: "自然之握",
        icon: "MaokaiR.png",
        description:
          "茂凯召唤出一道由荆棘和带刺灌木组成的巨墙缓慢向前行进，<status>禁锢</status>敌人{{ minrootduration }}到{{ maxrootduration }}秒，时长随着行进距离提升，并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。命中一名英雄时会为茂凯提供在{{ hasteduration }}秒里持续衰减的<speed>{{ movehaste*100 }}%移动速度</speed>。 {{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      MaokaiP: null,
      MaokaiQ: null,
      MaokaiW: null,
      MaokaiE: null,
      MaokaiR: null,
    },
  };
}
export { importModule };
