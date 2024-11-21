function importModule() {
  return {
    type: "champion",
    id: "Khazix",
    title: "虚空掠夺者",
    name: "卡兹克",
    avatar: "Khazix.png",
    skins: [
      { name: "default", skin: "Khazix_0.jpg" },
      { name: "霸天异形 卡兹克", skin: "Khazix_1.jpg" },
      { name: "沙之守护 卡兹克", skin: "Khazix_2.jpg" },
      { name: "死亡绽放 卡兹克", skin: "Khazix_3.jpg" },
      { name: "暗星 卡兹克", skin: "Khazix_4.jpg" },
      { name: "冠军掠夺者 卡兹克", skin: "Khazix_11.jpg" },
      { name: "奥德赛 卡兹克", skin: "Khazix_60.jpg" },
      { name: "春晖海神 卡兹克", skin: "Khazix_69.jpg" },
      { name: "水晶掠夺者 卡兹克", skin: "Khazix_79.jpg" },
    ],
    spells: [
      {
        id: "KhazixP",
        name: "无形威胁",
        icon: "KhazixP.png",
        description:
          "附近陷入<font color='#FFF673'>孤立无援</font>状态的敌人会被标记出来。卡兹克的技能会与<font color='#FFF673'>孤立无援</font>的目标产生交互作用。<br><br>当卡兹克没有被敌方队伍所看见时，他会获得无形威胁，使他的下次对敌方英雄发动的普通攻击造成额外魔法伤害，并使目标减速数秒。",
      },
      {
        id: "KhazixQ",
        name: "品尝恐惧",
        icon: "KhazixQ.png",
        description:
          "卡兹克斩击一名附近的敌人，造成<physicalDamage>{{ spell.khazixq:basedamage }}物理伤害</physicalDamage>。这个技能对<keywordMajor>孤立无援</keywordMajor>的目标造成<physicalDamage>{{ spell.khazixq:isodamage }}伤害</physicalDamage>作为替代。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KhazixW",
        name: "虚空突刺",
        icon: "KhazixW.png",
        description:
          "卡兹克发射一根尖刺，对命中的首个目标及一个小区域内造成<physicalDamage>{{ basedamage }}物理伤害</physicalDamage>。如果卡兹克在该区域内，那么他会回复<healing>{{ healamount }}生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KhazixE",
        name: "跃击",
        icon: "KhazixE.png",
        description:
          "卡兹克进行跳跃，在着陆时造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KhazixR",
        name: "虚空来袭",
        icon: "KhazixR.png",
        description:
          "<spellActive>主动：</spellActive>卡兹克进入持续{{ stealthduration }}秒的<keywordStealth>隐形状态</keywordStealth>并获得<speed>{{ bonusmovementspeedpercent*100 }}%移动速度</speed>。卡兹克可以在{{ recastwindow }}秒内<recast>再次施放</recast>这个技能。<br /><br /><spellPassive>被动：</spellPassive>升级这个技能会允许卡兹克<evolve>进化</evolve>他的一个技能，来为该技能提供额外效果。<li><spellName>品尝恐惧：</spellName>获得技能距离、攻击距离，并且在对抗<keywordMajor>孤立无援</keywordMajor>的目标时会降低{{ spell.khazixq:effect4amount }}%冷却时间。<li><spellName>虚空突刺：</spellName>发射3个尖刺，造成{{ spell.khazixw:effect3amount }}%<status>减速</status>，对抗<keywordMajor>孤立无援</keywordMajor>的目标时会提升。<li><spellName>跃击：</spellName>提升距离并在参与击杀英雄后刷新冷却时间。<li><spellName>虚空来袭：</spellName> <keywordStealth>隐形</keywordStealth>持续{{ evolvedstealthduration }}秒并获得第二段<recast>再次施放</recast>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KhazixP: null,
      KhazixQ: null,
      KhazixW: null,
      KhazixE: null,
      KhazixR: null,
    },
  };
}
export { importModule };
