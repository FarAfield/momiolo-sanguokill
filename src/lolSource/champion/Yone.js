function importModule() {
  return {
    type: "champion",
    id: "Yone",
    title: "封魔剑魂",
    name: "永恩",
    avatar: "Yone.png",
    skins: [
      { name: "default", skin: "Yone_0.jpg" },
      { name: "灵魂莲华 永恩", skin: "Yone_1.jpg" },
      { name: "战斗学院 永恩", skin: "Yone_10.jpg" },
      { name: "黎明使者 永恩", skin: "Yone_19.jpg" },
      { name: "海之歌 永恩", skin: "Yone_26.jpg" },
      { name: "墨之影武者 永恩", skin: "Yone_35.jpg" },
      { name: "心之钢 永恩", skin: "Yone_45.jpg" },
      { name: "至臻 心之钢 永恩", skin: "Yone_46.jpg" },
      { name: "西部魔影 永恩", skin: "Yone_55.jpg" },
      { name: "西部魔影 炽天使 永恩", skin: "Yone_58.jpg" },
    ],
    spells: [
      {
        id: "YoneP",
        name: "狩人之道",
        icon: "YoneP.png",
        description: "永恩每第二次攻击造成魔法伤害。此外，他的暴击几率提升。",
      },
      {
        id: "YoneQ",
        name: "错玉切",
        icon: "YoneQ.png",
        description:
          "永恩向前出剑，造成<physicalDamage>{{ qdamage }}物理伤害</physicalDamage>。<br /><br />在命中时，提供一层持续{{ buffduration }}秒的可叠加效果。在积攒2层效果后，这个技能会使永恩向前冲刺，并带着一阵能够<status>击飞</status>敌人{{ q3knockupduration }}秒的的旋风，造成<physicalDamage>{{ qdamage }}物理伤害</physicalDamage>。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YoneW",
        name: "凛神斩",
        icon: "YoneW.png",
        description:
          "永恩向前顺劈，造成<physicalDamage>{{ basedamage*0.5 }}+目标{{ maxhealthdamage*50 }}%最大生命值的物理伤害</physicalDamage>和<magicDamage>{{ basedamage*0.5 }}+目标{{ maxhealthdamage*50 }}%最大生命值的魔法伤害</magicDamage>。<br /><br />如果永恩命中了敌方单位，那么他会获得<shield>{{ wshield }}护盾</shield>，持续{{ shieldduration }}秒。每命中一名敌方英雄，<shield>护盾</shield>生命值都会提升。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YoneE",
        name: "破障之锋",
        icon: "YoneE.png",
        description:
          "永恩进入灵体形态{{ returntimer }}秒，期间会将他的身体留在原地，并获得<speed>{{ startingms*100 }}%不断提升的移动速度</speed>。<br /><br />当灵体形态结束时，永恩会返回他的身体，并再次造成伤害，伤害值相当于他在此期间对英雄造成伤害的{{ deathmarkpercent*100 }}%。你可以在灵体形态期间<recast>再次施放</recast>这个技能。<br /><br /><recast>再次施放：</recast>提前结束灵体形态。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YoneR",
        name: "封尘绝念斩",
        icon: "YoneR.png",
        description:
          "永恩对一条路径上的所有敌人进行打击，造成<physicalDamage>{{ tooltipdamage }}物理伤害</physicalDamage>和<magicDamage>{{ tooltipdamage }}魔法伤害</magicDamage>，传送至命中的最后一名敌方英雄身后，并将命中的所有敌人<status>击飞</status>向永恩。 {{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      YoneP: null,
      YoneQ: null,
      YoneW: null,
      YoneE: null,
      YoneR: null,
    },
  };
}
export { importModule };
