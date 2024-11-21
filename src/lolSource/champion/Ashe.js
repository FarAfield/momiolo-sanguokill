function importModule() {
  return {
    type: "champion",
    id: "Ashe",
    title: "寒冰射手",
    name: "艾希",
    avatar: "Ashe.png",
    skins: [
      { name: "default", skin: "Ashe_0.jpg" },
      { name: "极地女神 艾希", skin: "Ashe_1.jpg" },
      { name: "丛林侠盗 艾希", skin: "Ashe_2.jpg" },
      { name: "勇敢的心 艾希", skin: "Ashe_3.jpg" },
      { name: "女皇 艾希", skin: "Ashe_4.jpg" },
      { name: "紫晶射手 艾希", skin: "Ashe_5.jpg" },
      { name: "觅心女王 艾希", skin: "Ashe_6.jpg" },
      { name: "黑暗骑士 艾希", skin: "Ashe_7.jpg" },
      { name: "源计划：联合 艾希", skin: "Ashe_8.jpg" },
      { name: "冠军之箭 艾希", skin: "Ashe_9.jpg" },
      { name: "御星魔矢 艾希", skin: "Ashe_11.jpg" },
      { name: "西部天使 艾希", skin: "Ashe_17.jpg" },
      { name: "神龙尊者 苍龙艾希", skin: "Ashe_23.jpg" },
      { name: "魔女 艾希", skin: "Ashe_32.jpg" },
      { name: "海之歌 艾希", skin: "Ashe_43.jpg" },
      { name: "春晖神女 艾希", skin: "Ashe_52.jpg" },
      { name: "DRX 艾希", skin: "Ashe_63.jpg" },
      { name: "水晶圣骑 艾希", skin: "Ashe_65.jpg" },
      { name: "地狱火 艾希", skin: "Ashe_67.jpg" },
    ],
    spells: [
      {
        id: "AsheP",
        name: "冰霜射击",
        icon: "AsheP.png",
        description:
          "艾希的攻击会让目标减速，并使艾希对这些目标造成更高伤害。<br><br>艾希的暴击不会造成额外伤害，但会对目标施加一个强化版减速效果。",
      },
      {
        id: "AsheQ",
        name: "射手的专注",
        icon: "AsheQ.png",
        description:
          "<spellPassive>被动：</spellPassive>艾希的攻击提供1层持续{{ e1 }}秒的效果。在{{ e2 }}层时，她就可以激活这个技能。<br /><br /><spellPassive>主动：</spellPassive>艾希获得<attackSpeed>{{ e4 }}%攻击速度</attackSpeed>并且她的攻击转而造成<physicalDamage>{{ empowereddamage }}伤害</physicalDamage>，持续{{ e3 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AsheW",
        name: "万箭齐发",
        icon: "AsheW.png",
        description:
          "艾希射出一排共{{ numberofarrowstooltip }}支箭矢，每支箭矢造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。敌方单位可以一次性格挡多支箭矢，但只会受到一次伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AsheE",
        name: "鹰击长空",
        icon: "AsheE.png",
        description:
          "艾希派出一只鹰，在地图上的任一位置提供5秒的视野。它还会在飞行时显形附近的区域。<br /><br />这个技能可持有2层充能（{{ chargecooldown }}秒充能时间）。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AsheR",
        name: "魔法水晶箭",
        icon: "AsheR.png",
        description:
          "艾希射出魔法水晶箭，<status>晕眩</status>命中的第一个敌方英雄，并造成<magicDamage>{{ rmaindamage }}魔法伤害</magicDamage>。<status>晕眩</status>时长取决于飞行距离，至多{{ maxstunduration }}秒。目标周围的敌人会受到<spellName>冰霜射击</spellName>的<status>减速</status>效果和一半伤害。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AsheP: null,
      AsheQ: null,
      AsheW: null,
      AsheE: null,
      AsheR: null,
    },
  };
}
export { importModule };
