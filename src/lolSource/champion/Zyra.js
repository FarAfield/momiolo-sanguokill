function importModule() {
  return {
    type: "champion",
    id: "Zyra",
    title: "荆棘之兴",
    name: "婕拉",
    avatar: "Zyra.png",
    skins: [
      { name: "default", skin: "Zyra_0.jpg" },
      { name: "野火之藤 婕拉", skin: "Zyra_1.jpg" },
      { name: "鬼影森森 婕拉", skin: "Zyra_2.jpg" },
      { name: "SKT T1 婕拉", skin: "Zyra_3.jpg" },
      { name: "驯龙女巫 婕拉", skin: "Zyra_4.jpg" },
      { name: "魔女 婕拉", skin: "Zyra_5.jpg" },
      { name: "至臻 魔女 婕拉", skin: "Zyra_6.jpg" },
      { name: "水晶玫瑰 婕拉", skin: "Zyra_7.jpg" },
      { name: "地下都市 梦魇 婕拉", skin: "Zyra_16.jpg" },
      { name: "剪纸仙灵 婕拉", skin: "Zyra_36.jpg" },
      { name: "妖怪艺术家 婕拉", skin: "Zyra_46.jpg" },
      { name: "腥红之月 婕拉", skin: "Zyra_55.jpg" },
    ],
    spells: [
      {
        id: "ZyraP",
        name: "荆棘花园",
        icon: "ZyraP.png",
        description:
          "种子会周期性地在婕拉身边生成，生成速度随等级提升。婕拉可通过在种子附近施放致命棘刺或缠绕之根来让种子长成为婕拉而战的植物。",
      },
      {
        id: "ZyraQ",
        name: "致命棘刺",
        icon: "ZyraQ.png",
        description:
          "婕拉使稠密的藤蔓们扩散并爆炸成尖刺，造成<magicDamage>{{ initialdamage }}魔法伤害</magicDamage>。<br /><br />如果这个技能在一颗<keywordMajor>种子</keywordMajor>附近施放，那么这颗<keywordMajor>种子</keywordMajor>就会长成荆棘喷射者，造成<magicDamage>{{ spell.zyrap:plantdamage }}魔法伤害</magicDamage>并持续{{ spell.zyrap:plantduration }}秒。荆棘喷射者拥有575攻击距离。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZyraW",
        name: "狂野生长",
        icon: "ZyraW.png",
        description:
          "婕拉种下一颗持续{{ e6 }}秒的<keywordMajor>种子</keywordMajor>。这些<keywordMajor>种子</keywordMajor>在被敌方英雄踩到后会提供该英雄的<keywordStealth>真实视野</keywordStealth>，持续{{ e3 }}秒，但仍然会被摧毁。<br /><br />这个技能有2层充能，充能时间为{{ ammorechargetime }}秒。击杀一个敌方小兵或野怪会使充能时间缩短{{ e1 }}%。参与击杀英雄会转而使充能时间缩短{{ e2 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZyraE",
        name: "缠绕之根",
        icon: "ZyraE.png",
        description:
          "婕拉向前方放出藤蔓，<status>禁锢</status>{{ e5 }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />如果这个技能在一颗<keywordMajor>种子</keywordMajor>附近经过，那么这颗<keywordMajor>种子</keywordMajor>就会长成藤蔓鞭击者，造成<magicDamage>{{ spell.zyrap:plantdamage }}魔法伤害</magicDamage>并持续{{ spell.zyrap:plantduration }}秒。藤蔓鞭击者拥有400攻击距离，并且它们的攻击会施加持续{{ e3 }}秒的{{ e2 }}%<status>减速</status>。来自多个藤蔓鞭击者的<status>减速</status>可以至多叠加{{ maxslowstacks }}次。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZyraR",
        name: "绞杀之藤",
        icon: "ZyraR.png",
        description:
          "婕拉召唤自然之怒，长出一个扭曲的密林，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。在2秒后，藤蔓会向上方抽击，使敌人<status>击飞</status>{{ e1 }}秒。<br /><br />婕拉在密林中的植物们会被激怒，重置持续时间，获得<healing>{{ e2 }}%生命值</healing>并且攻击会造成{{ plantdamagebonus }}%额外伤害。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ZyraP: null,
      ZyraQ: null,
      ZyraW: null,
      ZyraE: null,
      ZyraR: null,
    },
  };
}
export { importModule };
