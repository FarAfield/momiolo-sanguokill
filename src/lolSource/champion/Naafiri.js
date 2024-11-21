function importModule() {
  return {
    type: "champion",
    id: "Naafiri",
    title: "百裂冥犬",
    name: "纳亚菲利",
    avatar: "Naafiri.png",
    skins: [
      { name: "default", skin: "Naafiri_0.jpg" },
      { name: "斗魂觉醒 纳亚菲利", skin: "Naafiri_1.jpg" },
      { name: "源计划：狂猎 纳亚菲利", skin: "Naafiri_11.jpg" },
    ],
    spells: [
      {
        id: "NaafiriP",
        name: "狂烈种群",
        icon: "NaafiriP.png",
        description:
          "纳亚菲利生成狗群伙伴，它们会在她攻击或施放技能时攻击目标。",
      },
      {
        id: "NaafiriQ",
        name: "暗裔犬牙",
        icon: "NaafiriQ.png",
        description:
          "纳亚菲利猛投出多个侵染了暗裔能量的犬牙，造成<physicalDamage>{{ spell.naafiriq:totaldamagefirstcast }}物理伤害</physicalDamage>并施加一个流血效果，流血会在{{ spell.naafiriq:bleedduration }}秒里持续造成共<physicalDamage>{{ spell.naafiriq:totalbleeddamage }}物理伤害</physicalDamage>。<br /><br />纳亚菲利可以<recast>再次施放</recast>这个技能。如果被命中的敌人已经被施加了来自这个技能的流血，那么它会转而造成剩余的流血伤害外加<physicalDamage>{{ spell.naafiriq:totalmindamagesecondcast }} </physicalDamage>到<physicalDamage>{{ spell.naafiriq:totalmaxdamagesecondcast }}物理伤害</physicalDamage>，基于该敌人的已损失生命值。如果该目标是一个英雄或大型野怪，那么纳亚菲利会回复<healing>{{ spell.naafiriq:totalhealsecondcast }}生命值</healing>。<br /><br /><keywordMajor>狗群伙伴</keywordMajor>们将跃向被命中的第一个英雄并攻击该英雄{{ spell.naafirip:packmatetauntduration }}秒。<br /><br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NaafiriW",
        name: "猎狗血性",
        icon: "NaafiriW.png",
        description:
          "纳亚菲利向一个敌人冲刺，在她命中第一个英雄时停下，对其造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>和短暂<status>减速</status>。<br /><br /><keywordMajor>狗群伙伴</keywordMajor>们会变为不可被选取状态并与纳亚菲利一起冲刺，每只<keywordMajor>狗群伙伴</keywordMajor>造成<physicalDamage>{{ packmatedamage }}物理伤害</physicalDamage>。<br /><br />这个技能会基于终极技能的技能等级获得距离。当前加成：{{ spell.naafirir:wrangeincrease }}<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NaafiriE",
        name: "剔骨本能",
        icon: "NaafiriE.png",
        description:
          "纳亚菲利向前奔涌，造成<physicalDamage>{{ totaldamagefirstslash }}物理伤害</physicalDamage>，然后爆裂出一连串利刃，造成<physicalDamage>{{ totaldamagesecondslash }}物理伤害</physicalDamage>。<br /><br /><keywordMajor>狗群伙伴</keywordMajor>会被唤回至纳亚菲利处并<healing>回复100%生命值</healing>。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NaafiriR",
        name: "暴吼",
        icon: "NaafiriR.png",
        description:
          "<spellPassive>被动：</spellPassive><spellActive>猎狗血性</spellActive>获得{{ wrangeincrease }}距离。<br /><br /><spellActive>主动：</spellActive>纳亚菲利准备狩猎，获得<physicalDamage>{{ bonusad }}攻击力</physicalDamage>、<keywordMajor>强化她的狗群</keywordMajor>、并生成<keywordMajor>{{ packmatestoadd }}只额外的狗群伙伴</keywordMajor>，持续{{ duration }}秒。<br /><br />纳亚菲利还会获得她周围环境的视野和<speed>在{{ movespeedduration }}秒里持续衰减的{{ movespeedooctootlip*100 }}%移动速度，这个移速加成会在受到伤害时降低至{{ movespeedamount*100 }}%。</speed>在她第一次命中一个英雄时，她获会获得持续{{ shieldduration }}秒的<shield>{{ shieldtotal }}护盾值</shield>。<br /><br />首次参与击杀一名英雄后，所有效果都会刷新。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      NaafiriP: null,
      NaafiriQ: null,
      NaafiriW: null,
      NaafiriE: null,
      NaafiriR: null,
    },
  };
}
export { importModule };
