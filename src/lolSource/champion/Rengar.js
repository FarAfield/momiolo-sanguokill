function importModule() {
  return {
    type: "champion",
    id: "Rengar",
    title: "傲之追猎者",
    name: "雷恩加尔",
    avatar: "Rengar.png",
    skins: [
      { name: "default", skin: "Rengar_0.jpg" },
      { name: "铁血猎人 雷恩加尔", skin: "Rengar_1.jpg" },
      { name: "暗黑武士 雷恩加尔", skin: "Rengar_2.jpg" },
      { name: "SSW 雷恩加尔", skin: "Rengar_3.jpg" },
      { name: "霸天战士 雷恩加尔", skin: "Rengar_8.jpg" },
      { name: "雷喵喵尔", skin: "Rengar_15.jpg" },
      { name: "沙之守护 雷恩加尔", skin: "Rengar_23.jpg" },
      { name: "光明哨兵 雷恩加尔", skin: "Rengar_30.jpg" },
      { name: "妖怪艺术家 雷恩加尔", skin: "Rengar_40.jpg" },
    ],
    spells: [
      {
        id: "RengarP",
        name: "无形掠食者",
        icon: "RengarP.png",
        description:
          "在草丛时，雷恩加尔的普通攻击会让他跳跃至目标敌人身边。<br><br>雷恩加尔在每次施放技能时会生成残暴值。在满残暴值时，他的下一个技能会得到强化。<br><br>击杀敌方英雄会在雷恩加尔的<font color='#BBFFFF'>骨齿项链</font>上新增战利品奖励，从而提供额外攻击力。",
      },
      {
        id: "RengarQ",
        name: "残忍无情",
        icon: "RengarQ.png",
        description:
          "雷恩加尔的下2次攻击获得<attackSpeed>{{ e5 }}%攻击速度</attackSpeed>。第一次攻击会暴击，造成<physicalDamage>{{ F4 }} (%i:scaleAD%%i:scaleCrit%) 物理伤害</physicalDamage>。<br /><br /><keywordMajor>满层残暴值：</keywordMajor>第一次攻击会暴击，造成<physicalDamage>{{ F5 }} (%i:scaleLevel%%i:scaleAD%%i:scaleCrit%) 物理伤害</physicalDamage>并为雷恩加尔提供{{ e3 }}秒的<attackSpeed>{{ empoweredqas }}攻击速度</attackSpeed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RengarW",
        name: "战争咆哮",
        icon: "RengarW.png",
        description:
          "雷恩加尔进行咆哮，对附近的敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并回复生命值，相当于他在前{{ e3 }}秒受到的<healing>{{ damagepercentagehealed }}%</healing>伤害。<br /><br /><keywordMajor>满层残暴值：</keywordMajor>造成<magicDamage>{{ totaldamageempowered }}魔法伤害</magicDamage>并且还会净化雷恩加尔身上的控制效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RengarE",
        name: "套索打击",
        icon: "RengarE.png",
        description:
          "雷恩加尔扔出一个套索，对命中的第一个敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，以及持续{{ e3 }}秒的显形和{{ e2 }}%<status>减速</status>。<br /><br /><keywordMajor>满层残暴值：</keywordMajor>造成<physicalDamage>{{ totalempowereddamage }}物理伤害</physicalDamage>并将其<status>禁锢</status>{{ e4 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RengarR",
        name: "狩猎律动",
        icon: "RengarR.png",
        description:
          "<spellPassive>被动：</spellPassive>雷恩加尔在<keywordStealth>伪装</keywordStealth>状态下也能进行跃击。<br /><br /><spellActive>主动：</spellActive>雷恩加尔获得<speed>{{ stealthms }}%移动速度</speed>和相距最近的敌方英雄周围一个小区域内的<keywordStealth>真实视野</keywordStealth>，持续{{ stealthduration }}秒。<br /><br />在{{ fadetime }}秒后，雷恩加尔变为<keywordStealth>伪装</keywordStealth>状态并且不需要在草丛中就能进行跃击。跃击该相距最近的敌方英雄时会造成<physicalDamage>{{ bonusdamage }}物理伤害</physicalDamage>，击碎<scaleArmor>{{ armorshred }}护甲</scaleArmor>达{{ armorshredduration }}秒，并结束这个技能。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RengarP: null,
      RengarQ: null,
      RengarW: null,
      RengarE: null,
      RengarR: null,
    },
  };
}
export { importModule };
