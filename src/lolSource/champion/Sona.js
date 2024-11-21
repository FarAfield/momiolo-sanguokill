function importModule() {
  return {
    type: "champion",
    id: "Sona",
    title: "琴瑟仙女",
    name: "娑娜",
    avatar: "Sona.png",
    skins: [
      { name: "default", skin: "Sona_0.jpg" },
      { name: "缪斯女神 娑娜", skin: "Sona_1.jpg" },
      { name: "五杀摇滚键盘手 娑娜", skin: "Sona_2.jpg" },
      { name: "平安夜女神 娑娜", skin: "Sona_3.jpg" },
      { name: "古琴余韵 娑娜", skin: "Sona_4.jpg" },
      { name: "电玩女神 娑娜", skin: "Sona_5.jpg" },
      { name: "DJ 娑娜", skin: "Sona_6.jpg" },
      { name: "甜心宝贝 娑娜", skin: "Sona_7.jpg" },
      { name: "奥德赛 娑娜", skin: "Sona_9.jpg" },
      { name: "灵能特工 娑娜", skin: "Sona_17.jpg" },
      { name: "五杀摇滚 III：遗失的章节 娑娜", skin: "Sona_26.jpg" },
      { name: "星之守护者 娑娜", skin: "Sona_35.jpg" },
      { name: "玉剑传说 琴仙子", skin: "Sona_45.jpg" },
      { name: "至臻 玉剑传说 琴仙子", skin: "Sona_46.jpg" },
      { name: "胜利女神 娑娜", skin: "Sona_56.jpg" },
    ],
    spells: [
      {
        id: "SonaP",
        name: "能量和弦",
        icon: "SonaP.png",
        description:
          "<passive>渐入佳音</passive>：娑娜在出色地使用她的技能时，会获得非终极技能的技能急速，直到达到上限为止。在达到上限之后，后续的成功使用将转而缩短她终极技能的冷却时间。<br><br><passive>能量和弦</passive>：每施放若干次技能，娑娜的下次攻击将造成额外魔法伤害并基于最新激活的基础技能施加一个额外效果。",
      },
      {
        id: "SonaQ",
        name: "英勇赞美诗",
        icon: "SonaQ.png",
        description:
          "娑娜对相距最近的2名敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，优先以英雄为目标。她随后会开始一段新的<keywordMajor>旋律</keywordMajor>。这个技能每对一名敌方英雄造成伤害就会获得1层<keywordMajor>渐入佳音</keywordMajor>。<br /><br /><keywordMajor>旋律：</keywordMajor>娑娜获得一个持续{{ auraduration }}秒的光环，来使其中的友方英雄在{{ onhitduration }}秒内的下一次攻击附带<magicDamage>{{ totalonhitdamage }}魔法伤害</magicDamage> %i:OnHit%。<br /><br /><keywordMajor>能量和弦—断奏：</keywordMajor>【能量和弦】造成额外伤害 (<magicDamage>{{ totalstaccatodamage }}总魔法伤害</magicDamage>)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SonaW",
        name: "坚毅咏叹调",
        icon: "SonaW.png",
        description:
          "<spellPassive>主动：</spellPassive>娑娜为她自己和一名附近的友方英雄回复<healing>{{ totalheal }}生命值</healing>，优先以伤势最重的英雄为目标。她随后会开始一段新的<keywordMajor>旋律</keywordMajor>。<br /><br /><keywordMajor>旋律：</keywordMajor>娑娜获得一个持续{{ auraduration }}秒的光环，来为其中的友方英雄提供持续{{ shieldduration }}秒的<shield>{{ totalshield }}护盾值</shield>。<br /><br />每当你治疗了一名受伤的友方英雄，或用这个护盾为一名友方英雄格挡了至少{{ accelerandoshieldbreakpoint }}伤害时，都会获得一层<keywordMajor>渐入佳音</keywordMajor>。<br /><br /><keywordMajor>能量和弦—渐弱：</keywordMajor>【能量和弦】也会使目标造成的物理和魔法伤害降低{{ totaldiminuendoweakenpercent }}，持续{{ diminuendoduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SonaE",
        name: "迅捷奏鸣曲",
        icon: "SonaE.png",
        description:
          "<spellPassive>主动：</spellPassive>她开始一段新的<keywordMajor>旋律</keywordMajor>并为自身提供<speed>{{ totalselfmovementspeed }}移动速度</speed>，持续{{ selfmovementspeeddurationmin }}秒，如果她未受到伤害则延长至最多{{ selfmovementspeeddurationmax }}秒。<br /><br /><keywordMajor>旋律：</keywordMajor>娑娜获得一个持续{{ auraduration }}秒的光环，来为其中的友方英雄提供<speed>{{ totalallymovementspeed }}移动速度</speed>，持续{{ allymovementspeedduration }}秒。<br /><br /><keywordMajor>能量和弦—节奏：</keywordMajor>【能量和弦】还会对目标造成持续{{ tempoduration }}秒的{{ totaltempomovespeedslow }}的<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SonaR",
        name: "狂舞终乐章",
        icon: "SonaR.png",
        description:
          "娑娜弹出一段不可抗拒的音符，对敌人造成{{ stunduration }}秒<status>晕眩</status>和<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SonaP: null,
      SonaQ: null,
      SonaW: null,
      SonaE: null,
      SonaR: null,
    },
  };
}
export { importModule };
