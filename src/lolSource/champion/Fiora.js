function importModule() {
  return {
    type: "champion",
    id: "Fiora",
    title: "无双剑姬",
    name: "菲奥娜",
    avatar: "Fiora.png",
    skins: [
      { name: "default", skin: "Fiora_0.jpg" },
      { name: "皇家守卫 菲奥娜", skin: "Fiora_1.jpg" },
      { name: "夜鸦 菲奥娜", skin: "Fiora_2.jpg" },
      { name: "女校长 菲奥娜", skin: "Fiora_3.jpg" },
      { name: "源计划：火 菲奥娜", skin: "Fiora_4.jpg" },
      { name: "泳池派对 菲奥娜", skin: "Fiora_5.jpg" },
      { name: "玉剑传说 无双", skin: "Fiora_22.jpg" },
      { name: "穿心之剑 菲奥娜", skin: "Fiora_23.jpg" },
      { name: "iG 菲奥娜", skin: "Fiora_31.jpg" },
      { name: "未来战士 菲奥娜", skin: "Fiora_41.jpg" },
      { name: "福牛守护者 菲奥娜", skin: "Fiora_50.jpg" },
      { name: "至臻 福牛守护者 菲奥娜", skin: "Fiora_51.jpg" },
      { name: "魅惑女巫 菲奥娜", skin: "Fiora_60.jpg" },
      { name: "花仙骑士 菲奥娜", skin: "Fiora_69.jpg" },
      { name: "神龙尊者 无双之龙 菲奥娜", skin: "Fiora_80.jpg" },
      { name: "女帝 菲奥娜", skin: "Fiora_89.jpg" },
    ],
    spells: [
      {
        id: "FioraP",
        name: "决斗之舞",
        icon: "FioraP.png",
        description:
          "菲奥娜已在这名英雄身上发现了一处<keywordMajor>破绽</keywordMajor>。如果她命中了这处<keywordMajor>破绽</keywordMajor>，她就会<healing>回复生命值</healing>并获得<speed>移动速度</speed>。",
      },
      {
        id: "FioraQ",
        name: "破空斩",
        icon: "FioraQ.png",
        description:
          "菲奥娜向一个方向进行突刺并刺击相距最近的敌人、守卫或建筑物，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。这次打击会优先攻击<keywordMajor>破绽</keywordMajor>和将被此打击击杀的单位。<br /><br />如果菲奥娜命中了一个敌人，那么这个技能的冷却时间就会缩短{{ cdrefundpercent*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "FioraW",
        name: "劳伦特心眼刀",
        icon: "FioraW.png",
        description:
          "菲奥娜招架即将到来的所有伤害、限制效果和有害效果，持续{{ parryduration }}秒，然后刺击。刺击会对命中的第一个敌方英雄造成<magicDamage>{{ stabdamage }}魔法伤害</magicDamage>，并<status>减速</status>目标的{{ msslowpercent*-100 }}%<speed>移动速度</speed><attackSpeed>和{{ attackslowpercent*-100 }}%攻击速度</attackSpeed>，持续{{ ccduration }}秒。如果菲奥娜招架掉一个<status>定身</status>效果，那么被刺击的敌人会被<status>晕眩</status>而非<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "FioraE",
        name: "夺命连刺",
        icon: "FioraE.png",
        description:
          "菲奥娜的下两次攻击获得<attackSpeed>{{ aspercent*100 }}%攻击速度</attackSpeed>。第一次攻击造成持续{{ slowduration }}秒的{{ slowpercent*-100 }}%<status>减速</status>。第二次攻击必定会产生暴击，造成<physicalDamage>{{ attacktwopercenttad*100 }}%伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "FioraR",
        name: "无双挑战",
        icon: "FioraR.png",
        description:
          "<spellPassive>被动：</spellPassive><spellName>决斗之舞</spellName> <speed>移动速度</speed>加成提升至{{ percentms*100 }}%。<br /><br /><spellActive>主动：</spellActive>菲奥娜标出一名英雄身上的全部四处<keywordMajor>破绽</keywordMajor>，最多可造成<trueDamage>{{ spell.fiorapassive:rdamagetotal }}最大生命值的真实伤害</trueDamage>并在目标附近时获得<spellName>决斗之舞</spellName>的<speed>移动速度加成</speed>。<br /><br />如果菲奥娜在{{ markduration }}秒内命中了全部四处<keywordMajor>破绽</keywordMajor>，或者在目标死前至少命中一处，那么菲奥娜就会为周围的友方英雄每秒回复<healing>{{ healpersecondcalc }}生命值</healing>，持续{{ minhealduration }}到{{ healduration }}秒，命中的<keywordMajor>破绽</keywordMajor>数越多则持续时间越久。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      FioraP: null,
      FioraQ: null,
      FioraW: null,
      FioraE: null,
      FioraR: null,
    },
  };
}
export { importModule };
