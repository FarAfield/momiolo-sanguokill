function importModule() {
  return {
    type: "champion",
    id: "Xayah",
    title: "逆羽",
    name: "霞",
    avatar: "Xayah.png",
    skins: [
      { name: "default", skin: "Xayah_0.jpg" },
      { name: "暮星之羽 霞", skin: "Xayah_1.jpg" },
      { name: "甜心之羽 霞", skin: "Xayah_2.jpg" },
      { name: "SSG 霞", skin: "Xayah_3.jpg" },
      { name: "星之守护者 霞", skin: "Xayah_4.jpg" },
      { name: "永恒之森 霞", skin: "Xayah_8.jpg" },
      { name: "神凰行者 烈羽焰凰 霞", skin: "Xayah_17.jpg" },
      { name: "至臻 神凰行者 烈羽焰凰 霞", skin: "Xayah_26.jpg" },
      { name: "比翼之心 霞", skin: "Xayah_28.jpg" },
      { name: "绝息圣堂 霞", skin: "Xayah_37.jpg" },
      { name: "星之守护者 净化之羽 霞", skin: "Xayah_38.jpg" },
      { name: "幻灵蝙蝠 霞", skin: "Xayah_47.jpg" },
    ],
    spells: [
      {
        id: "XayahP",
        name: "锐切",
        icon: "XayahP.png",
        description:
          "在使用一次技能后，霞的下几次普攻将命中沿途的所有敌人，并各落下一根<font color='#C200E1'>羽毛</font>。",
      },
      {
        id: "XayahQ",
        name: "双刃",
        icon: "XayahQ.png",
        description:
          "霞扔出两把匕首，每把造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，然后留下两支<keywordMajor>羽毛</keywordMajor>。每把匕首对首个目标之后的后续目标造成<physicalDamage>{{ multihitdamage }}伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "XayahW",
        name: "致死羽衣",
        icon: "XayahW.png",
        description:
          "霞创造一道持续{{ e2 }}秒的羽刃风暴，来为她提供<attackSpeed>{{ e1 }}%攻击速度</attackSpeed>并使她的攻击发射一支造成{{ bonusdamagepercent }}%伤害的次级羽刃。<br /><br />如果次级羽刃命中了一名敌方英雄，那么她自身会获得<speed>{{ e3 }}%移动速度</speed>，持续{{ e4 }}秒。<br /><br />如果洛在附近，那么他也会获得这个技能的效果，但他只会在<i>霞</i>命中了一个目标英雄时获得<speed>移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "XayahE",
        name: "倒钩",
        icon: "XayahE.png",
        description:
          "霞将所有<keywordMajor>羽毛</keywordMajor>召回至她的位置，每支造成<physicalDamage>{{ featherdamage }}物理伤害</physicalDamage>提升。如果有{{ featherthreshold }}支或以上的<keywordMajor>羽毛</keywordMajor>命中了一名敌人，那么该敌人就会被<status>禁锢</status>{{ rootduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "XayahR",
        name: "暴风羽刃",
        icon: "XayahR.png",
        description:
          "霞跃向空中，变为不可被选取状态，持续1.5秒。然后她会从天降下匕首雨，造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>并留下一连串的<keywordMajor>羽毛</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      XayahP: null,
      XayahQ: null,
      XayahW: null,
      XayahE: null,
      XayahR: null,
    },
  };
}
export { importModule };
