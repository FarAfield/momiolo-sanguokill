function importModule() {
  return {
    type: "champion",
    id: "Irelia",
    title: "刀锋舞者",
    name: "艾瑞莉娅",
    avatar: "Irelia.png",
    skins: [
      { name: "default", skin: "Irelia_0.jpg" },
      { name: "夜刃 艾瑞莉娅", skin: "Irelia_1.jpg" },
      { name: "凌云之翼 艾瑞莉娅", skin: "Irelia_2.jpg" },
      { name: "夜行义贼 艾瑞莉娅", skin: "Irelia_3.jpg" },
      { name: "冰霜之刃 艾瑞莉娅", skin: "Irelia_4.jpg" },
      { name: "莲花之令 艾瑞莉娅", skin: "Irelia_5.jpg" },
      { name: "玉剑传说 舞剑仙", skin: "Irelia_6.jpg" },
      { name: "iG 艾瑞莉娅", skin: "Irelia_15.jpg" },
      { name: "源计划：正义 艾瑞莉娅", skin: "Irelia_16.jpg" },
      { name: "至臻 源计划：正义 艾瑞莉娅", skin: "Irelia_17.jpg" },
      { name: "西部天使 艾瑞莉娅", skin: "Irelia_18.jpg" },
      { name: "光明哨兵 艾瑞莉娅", skin: "Irelia_26.jpg" },
      { name: "至臻 源计划：正义 艾瑞莉娅 (2022)", skin: "Irelia_36.jpg" },
      { name: "剪纸仙灵 艾瑞莉娅", skin: "Irelia_37.jpg" },
      { name: "青花瓷 艾瑞莉娅", skin: "Irelia_45.jpg" },
    ],
    spells: [
      {
        id: "IreliaP",
        name: "艾欧尼亚热诚",
        icon: "IreliaP.png",
        description:
          "当艾瑞莉娅用技能命中敌人时，她会获得可叠加的攻击速度加成。这个效果在满层时还会为艾瑞莉娅提供攻击附伤。",
      },
      {
        id: "IreliaQ",
        name: "利刃冲击",
        icon: "IreliaQ.png",
        description:
          "艾瑞莉娅冲向一名敌人，造成<physicalDamage>{{ championdamage }}物理伤害</physicalDamage>并回复自身 <healing>{{ healamount }}生命值</healing>。如果敌人阵亡或者<keywordMajor>重心不稳</keywordMajor>，那么会刷新冷却时间。<br /><br />对小兵造成{{ miniondamage }}伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "IreliaW",
        name: "距破之舞",
        icon: "IreliaW.png",
        description:
          "<charge>开始蓄力：</charge>艾瑞莉娅进入防御姿态，至多持续{{ maxduration }}秒，变得无法行动但使所受的物理伤害降低{{ finalphysicaldr }}%、所受的魔法伤害降低{{ finalmagicdr }}%。<br /><br /><release>释放：</release>艾瑞莉娅放出她的刀锋，造成<physicalDamage>{{ mindamagecalc }}物理伤害</physicalDamage>，基于蓄力时间至多提升至<physicalDamage>{{ maxdamagecalc }}</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "IreliaE",
        name: "比翼双刃",
        icon: "IreliaE.png",
        description:
          "艾瑞莉娅扔出一把刀锋至地上，并且至多可在{{ buffduration }}秒里<recast>再次施放</recast>。<br /><br /><recast>再次施放：</recast>艾瑞莉娅扔出第二把刀锋，随后两把刀锋会朝着彼此飞行，对沿途的敌人造成{{ stunduration }}秒<status>晕眩</status>和<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。英雄和大型野怪会进入<keywordMajor>重心不稳</keywordMajor>状态，持续{{ markduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "IreliaR",
        name: "先锋之刃",
        icon: "IreliaR.png",
        description:
          "艾瑞莉娅发射出一阵刀锋弹幕，造成<magicDamage>{{ missiledamage }}魔法伤害</magicDamage>并对英雄和大型野怪施加持续{{ markduration }}秒的<keywordMajor>重心不稳</keywordMajor>。刀锋弹幕会在命中第一个英雄后绽放成一个持续{{ zoneduration }}秒的牢笼。牢笼造成<magicDamage>{{ zonedamage }}魔法伤害</magicDamage>和持续{{ ccduration }}秒的{{ slowamount }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      IreliaP: null,
      IreliaQ: null,
      IreliaW: null,
      IreliaE: null,
      IreliaR: null,
    },
  };
}
export { importModule };
