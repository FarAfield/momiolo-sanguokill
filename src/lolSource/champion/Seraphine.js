function importModule() {
  return {
    type: "champion",
    id: "Seraphine",
    title: "星籁歌姬",
    name: "萨勒芬妮",
    avatar: "Seraphine.png",
    skins: [
      { name: "default", skin: "Seraphine_0.jpg" },
      { name: "K/DA ALL OUT 萨勒芬妮 独立音乐人", skin: "Seraphine_1.jpg" },
      { name: "K/DA ALL OUT 萨勒芬妮 明日新星", skin: "Seraphine_2.jpg" },
      { name: "K/DA ALL OUT 萨勒芬妮 超级巨星", skin: "Seraphine_3.jpg" },
      { name: "神凰行者 幽羽玄凰 萨勒芬妮", skin: "Seraphine_4.jpg" },
      { name: "海之歌 萨勒芬妮", skin: "Seraphine_14.jpg" },
      { name: "至臻 海之歌 萨勒芬妮", skin: "Seraphine_15.jpg" },
      { name: "花仙子 萨勒芬妮", skin: "Seraphine_24.jpg" },
      { name: "星之守护者 萨勒芬妮", skin: "Seraphine_34.jpg" },
      { name: "幻灵白鸽 萨勒芬妮", skin: "Seraphine_43.jpg" },
    ],
    spells: [
      {
        id: "SeraphineP",
        name: "星光漫射",
        icon: "SeraphineP.png",
        description:
          "萨勒芬妮施放的每第三个技能将进行双重施放。此外，施放技能时，附近的友军会为她的下一次普通攻击提供额外魔法伤害和攻击距离。",
      },
      {
        id: "SeraphineQ",
        name: "清籁穿云",
        icon: "SeraphineQ.png",
        description:
          "萨勒芬妮放出一道清澈的音符，造成<magicDamage>{{ explosiondamage }}魔法伤害</magicDamage>，对英雄的伤害会基于目标的已损失生命值而提升，最多可对{{ executethreshold*100 }}%生命值以下的目标造成<magicDamage>{{ totalempowereddamage }}伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SeraphineW",
        name: "聚和心声",
        icon: "SeraphineW.png",
        description:
          "萨勒芬妮用歌曲激励她附近的友方英雄，为他们提供<speed>{{ hastevalueallies }}移动速度</speed>，为她自身提供<speed>不断衰减的{{ wmsbonustotal }}%移动速度</speed>，并为自身和友方都提供<shield>{{ shieldvalueseraphine }}护盾值</shield>，持续{{ shieldduration }}秒。<br /><br />如果萨勒芬妮身上已有<shield>护盾</shield>，那么她会号召友军加入她，在{{ whealsplitdelay }}秒延迟后，附近的每有一位友方英雄，就会为他们回复<healing>{{ wmissinghpheal }}%已损失生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SeraphineE",
        name: "增幅节拍",
        icon: "SeraphineE.png",
        description:
          "萨勒芬妮释放出一道强力音波，对一条直线上的敌人造成<magicDamage>{{ finaldamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowvalue }}%<status>减速</status>效果。<br /><br />对已被<status>减速</status>的敌人们造成<status>禁锢</status>效果，对已被<status>定身</status>的敌人们造成<status>晕眩</status>效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SeraphineR",
        name: "炫音返场",
        icon: "SeraphineR.png",
        description:
          "萨勒芬妮登台演出，投射出一股令人着迷的力量，来造成{{ rchannelduration }}秒<status>魅惑</status>效果和<magicDamage>{{ r1totaldamage }}魔法伤害</magicDamage>。<br /><br />任何被命中的英雄(包括友方英雄)都会成为表演的一部分，延长这个技能的距离。友方英雄会获得满层的<keywordMajor>音符</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SeraphineP: null,
      SeraphineQ: null,
      SeraphineW: null,
      SeraphineE: null,
      SeraphineR: null,
    },
  };
}
export { importModule };
