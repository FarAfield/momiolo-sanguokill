function importModule() {
  return {
    type: "champion",
    id: "Vayne",
    title: "暗夜猎手",
    name: "薇恩",
    avatar: "Vayne.png",
    skins: [
      { name: "default", skin: "Vayne_0.jpg" },
      { name: "摩登骇客 薇恩", skin: "Vayne_1.jpg" },
      { name: "猎天使魔女 薇恩", skin: "Vayne_2.jpg" },
      { name: "屠龙勇士 薇恩", skin: "Vayne_3.jpg" },
      { name: "觅心猎手 薇恩", skin: "Vayne_4.jpg" },
      { name: "SKT T1 薇恩", skin: "Vayne_5.jpg" },
      { name: "苍穹之光 薇恩", skin: "Vayne_6.jpg" },
      { name: "摄魂使者 薇恩", skin: "Vayne_10.jpg" },
      { name: "源计划：净化 薇恩", skin: "Vayne_11.jpg" },
      { name: "烈焰美人 薇恩", skin: "Vayne_12.jpg" },
      { name: "至臻 烈焰美人 薇恩", skin: "Vayne_13.jpg" },
      { name: "灵魂莲华 薇恩", skin: "Vayne_14.jpg" },
      { name: "FPX 薇恩", skin: "Vayne_15.jpg" },
      { name: "光明哨兵 薇恩", skin: "Vayne_25.jpg" },
      { name: "幻灵战斗蝠 薇恩", skin: "Vayne_32.jpg" },
      { name: "至臻 烈焰美人 薇恩 (2022)", skin: "Vayne_33.jpg" },
      { name: "黎明使者 薇恩", skin: "Vayne_44.jpg" },
      { name: "神龙尊者 夜之龙 薇恩", skin: "Vayne_55.jpg" },
    ],
    spells: [
      {
        id: "VayneP",
        name: "暗夜猎手",
        icon: "VayneP.png",
        description:
          "薇恩毫不留情的猎杀世间邪恶，向附近敌方英雄移动时会获得移动速度。",
      },
      {
        id: "VayneQ",
        name: "闪避突袭",
        icon: "VayneQ.png",
        description:
          "薇恩翻滚一小段距离，并且她的下次普通攻击造成额外的<physicalDamage>{{ adratiobonus }}物理伤害</physicalDamage>。<br /><br /><rules>这个技能会在造成伤害时触发技能特效。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VayneW",
        name: "圣银弩箭",
        icon: "VayneW.png",
        description:
          "<spellPassive>被动：</spellPassive>对一名敌人的每第三次连续的攻击或技能造成额外的<trueDamage>{{ totaldamage }}最大生命值的真实伤害</trueDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VayneE",
        name: "恶魔审判",
        icon: "VayneE.png",
        description:
          "薇恩发射一根弩箭来<status>击退</status>一个目标并造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。如果目标与地形产生碰撞，那么会受到<physicalDamage>{{ empowereddamagett }}额外物理伤害</physicalDamage>，并且会被<status>晕眩</status>{{ stunduration }}秒。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VayneR",
        name: "终极时刻",
        icon: "VayneR.png",
        description:
          "薇恩获得<physicalDamage>{{ bonusattackdamage }}攻击力</physicalDamage>，持续{{ baseduration }}秒，并且如果一个被薇恩所伤害的敌方英雄在{{ damagedmarkerduration }}秒内死亡，那么持续时间会延长{{ durationtoadd }}秒。此外，在这段持续时间里：<li><spellName>暗夜猎手</spellName>会转而提供<speed>{{ movementspeed }}移动速度</speed>。<li><spellName>闪避突袭</spellName>的冷却时间缩短{{ tumblecdreduction }}%，并提供持续{{ tumblestealthduration }}秒的<keywordStealth>隐形</keywordStealth>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      VayneP: null,
      VayneQ: null,
      VayneW: null,
      VayneE: null,
      VayneR: null,
    },
  };
}
export { importModule };
