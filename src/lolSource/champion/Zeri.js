function importModule() {
  return {
    type: "champion",
    id: "Zeri",
    title: "祖安花火",
    name: "泽丽",
    avatar: "Zeri.png",
    skins: [
      { name: "default", skin: "Zeri_0.jpg" },
      { name: "幽梦玫瑰 泽丽", skin: "Zeri_1.jpg" },
      { name: "海之歌 泽丽", skin: "Zeri_10.jpg" },
      { name: "玉剑传说 神机花火", skin: "Zeri_19.jpg" },
      { name: "魔域梦魇 泽丽", skin: "Zeri_28.jpg" },
      { name: "至臻 魔域梦魇 泽丽", skin: "Zeri_29.jpg" },
    ],
    spells: [
      {
        id: "ZeriP",
        name: "内能迁转",
        icon: "ZeriP.png",
        description:
          "泽丽的攻击造成魔法伤害并被视为技能。移动和施放【电火迸射】会将能量储存至泽丽的【火花背包】。在完全充能后，她的下次攻击将造成额外伤害。",
      },
      {
        id: "ZeriQ",
        name: "电火迸射",
        icon: "ZeriQ.png",
        description:
          "泽丽发射一连串的{{ numberofmissiles }}颗子弹，来对命中的第一个敌人造成<physicalDamage>{{ activedamagethatcancrit }}物理伤害</physicalDamage>。这个技能会被视为一次攻击。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZeriW",
        name: "强穿激光",
        icon: "ZeriW.png",
        description:
          "泽丽发射一道电能脉冲，来对首个命中的敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>和持续{{ slowduration }}秒的{{ slowpercent*100 }}%<status>减速</status>。如果脉冲命中了地形，那么它会延伸为一道激光并在一个区域内施加效果并对英雄和野怪造成暴击。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZeriE",
        name: "灿丽花火",
        icon: "ZeriE.png",
        description:
          "泽丽冲刺一小段距离，并翻越接触到的任何地形，来极大地延伸冲刺距离。接下来的{{ buffduration }}秒，她的<spellName>电火迸射</spellName>将获得穿刺效果，对首个敌人之后的敌人们造成{{ pendamagepercent*100 }}%伤害，并对命中的第一个目标附加额外的<magicDamage>{{ bonusdamagetotal }}魔法伤害</magicDamage>。<br /><br />用一次攻击或技能命中一名英雄时，会使这个技能的冷却时间缩短{{ cdreductionperhit }}秒。暴击会转而使这个技能的冷却时间缩短{{ critcdreductionperhit }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZeriR",
        name: "超限爆闪",
        icon: "ZeriR.png",
        description:
          "泽丽放出一道电能新星，对附近的敌人们造成<magicDamage>{{ totalactivedamage }}魔法伤害</magicDamage>。如果她命中了一名敌方英雄，就会获得持续{{ rduration }}秒的<attackSpeed>{{ baseaspercent*100 }}%攻击速度</attackSpeed>和<speed>{{ basebonusms*100 }}%移动速度</speed>。用一次攻击或技能命中一名敌方英雄时，会使这个技能的持续时间延长并添加一层持续{{ maxhyperchargeduration }}秒的超负荷效果。暴击会添加额外的2层效果。每层效果提供<speed>{{ mspercent*100 }}%移动速度</speed>。<br /><br />在此期间，<spellName>电火迸射</spellName>会变为一个更快速的3连发，可对附近的敌人们连锁造成<physicalDamage>{{ chainphysicaldamage }}物理伤害</physicalDamage>。<br /><br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ZeriP: null,
      ZeriQ: null,
      ZeriW: null,
      ZeriE: null,
      ZeriR: null,
    },
  };
}
export { importModule };
