function importModule() {
  return {
    type: "champion",
    id: "Ryze",
    title: "符文法师",
    name: "瑞兹",
    avatar: "Ryze.png",
    skins: [
      { name: "default", skin: "Ryze_0.jpg" },
      { name: "青年 瑞兹", skin: "Ryze_1.jpg" },
      { name: "部落精神 瑞兹", skin: "Ryze_2.jpg" },
      { name: "美国大叔 瑞兹", skin: "Ryze_3.jpg" },
      { name: "守护者雕像 瑞兹", skin: "Ryze_4.jpg" },
      { name: "宗师级法师训练师 瑞兹", skin: "Ryze_5.jpg" },
      { name: "至死不渝 瑞兹", skin: "Ryze_6.jpg" },
      { name: "恶魔男爵 瑞兹", skin: "Ryze_7.jpg" },
      { name: "海贼 瑞兹", skin: "Ryze_8.jpg" },
      { name: "瑞兹·白须", skin: "Ryze_9.jpg" },
      { name: "SKT T1 瑞兹", skin: "Ryze_10.jpg" },
      { name: "冠军之志 瑞兹", skin: "Ryze_11.jpg" },
      { name: "沙之守护 瑞兹", skin: "Ryze_13.jpg" },
      { name: "孤勇之隐 瑞兹", skin: "Ryze_20.jpg" },
    ],
    spells: [
      {
        id: "RyzeP",
        name: "奥术专精",
        icon: "RyzeP.png",
        description:
          "<mainText>瑞兹的技能会造成基于他法力值加成的额外伤害，并且他的最大法力值会基于他的法术强度来获得百分比的提升。</mainText>",
      },
      {
        id: "RyzeQ",
        name: "超负荷",
        icon: "RyzeQ.png",
        description:
          "<spellPassive>被动：</spellPassive><spellName>符文禁锢</spellName>和<spellName>法术涌动</spellName>会刷新这个技能的冷却时间并充能一枚符文，持续{{ runeduration }}秒(最多{{ maximumrunes }}枚符文)。<br /><br /><spellActive>主动：</spellActive>瑞兹释放一次魔爆，对命中的第一个敌人造成<magicDamage>{{ qdamagecalc }}魔法伤害</magicDamage>。如果目标带有<keywordMajor>涌动</keywordMajor>，则它会将其消耗，使这个技能造成{{ spell.ryzer:overloaddamagebonus }}%伤害提升并弹射至附近带有<keywordMajor>涌动</keywordMajor>的敌人们。<br /><br />如果{{ maximumrunes }}枚符文已被充能，瑞兹就会释放所有符文的能量，来为瑞兹提供持续{{ movementspeedduration }}秒的<speed>{{ movementspeedamount }}%移动速度</speed>。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RyzeW",
        name: "符文禁锢",
        icon: "RyzeW.png",
        description:
          "瑞兹造成<magicDamage>{{ wdamagecalc }}魔法伤害</magicDamage>和持续{{ ccduration }}秒的{{ slowamount*100 }}%<status>减速</status>。如果目标带有<keywordMajor>涌动</keywordMajor>，则它会将其消耗，使这个技能造成<status>禁锢</status>而非<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RyzeE",
        name: "法术涌动",
        icon: "RyzeE.png",
        description:
          "瑞兹发射一颗法球，造成<magicDamage>{{ edamagecalc }}魔法伤害</magicDamage>并施加持续{{ debuffduration }}秒的<keywordMajor>涌动</keywordMajor>给目标和附近的敌人们。已被<keywordMajor>涌动</keywordMajor>影响的敌人们将使其进一步扩散。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RyzeR",
        name: "曲境折跃",
        icon: "RyzeR.png",
        description:
          "<spellPassive>被动：</spellPassive> <spellName>超负荷</spellName>对带有<keywordMajor>涌动</keywordMajor>的目标的伤害加成提升至{{ overloaddamagebonus }}%。<br /><br /><spellActive>主动：</spellActive>瑞兹开启一个前往另一个位置的传送门。在{{ chargetimetooltip }}秒后，传送门附近的所有友军都会被传送到该位置。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RyzeP: null,
      RyzeQ: null,
      RyzeW: null,
      RyzeE: null,
      RyzeR: null,
    },
  };
}
export { importModule };
