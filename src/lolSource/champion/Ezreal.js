function importModule() {
  return {
    type: "champion",
    id: "Ezreal",
    title: "探险家",
    name: "伊泽瑞尔",
    avatar: "Ezreal.png",
    skins: [
      { name: "default", skin: "Ezreal_0.jpg" },
      { name: "冒险精神 伊泽瑞尔", skin: "Ezreal_1.jpg" },
      { name: "足球先生 伊泽瑞尔", skin: "Ezreal_2.jpg" },
      { name: "冰川勇者 伊泽瑞尔", skin: "Ezreal_3.jpg" },
      { name: "失落的世界 伊泽瑞尔", skin: "Ezreal_4.jpg" },
      { name: "未来战士 伊泽瑞尔", skin: "Ezreal_5.jpg" },
      { name: "暗杀星 伊泽瑞尔", skin: "Ezreal_6.jpg" },
      { name: "光执事 伊泽瑞尔", skin: "Ezreal_7.jpg" },
      { name: "黑桃皇牌 伊泽瑞尔", skin: "Ezreal_8.jpg" },
      { name: "电玩勇者 伊泽瑞尔", skin: "Ezreal_9.jpg" },
      { name: "星之守护者 伊泽瑞尔", skin: "Ezreal_18.jpg" },
      { name: "SSG 伊泽瑞尔", skin: "Ezreal_19.jpg" },
      { name: "睡衣守护者 伊泽瑞尔", skin: "Ezreal_20.jpg" },
      { name: "战斗学院 伊泽瑞尔", skin: "Ezreal_21.jpg" },
      { name: "灵能特工 伊泽瑞尔", skin: "Ezreal_22.jpg" },
      { name: "至臻 灵能特工 伊泽瑞尔", skin: "Ezreal_23.jpg" },
      { name: "青花瓷 伊泽瑞尔", skin: "Ezreal_25.jpg" },
      { name: "花仙贵族 伊泽瑞尔", skin: "Ezreal_33.jpg" },
      { name: "心之钢 伊泽瑞尔", skin: "Ezreal_43.jpg" },
      { name: "天龙之子 伊泽瑞尔", skin: "Ezreal_44.jpg" },
      { name: "至臻 天龙之子 伊泽瑞尔", skin: "Ezreal_54.jpg" },
    ],
    spells: [
      {
        id: "EzrealP",
        name: "咒能高涨",
        icon: "EzrealP.png",
        description:
          "伊泽瑞尔的任何技能在击中目标后，都会提升他的攻击速度（最多可叠加5次）。",
      },
      {
        id: "EzrealQ",
        name: "秘术射击",
        icon: "EzrealQ.png",
        description:
          "伊泽瑞尔发射一支能量箭，对命中的第一个敌人造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>并使他各个技能的冷却时间缩短{{ cdrefund }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EzrealW",
        name: "精华跃动",
        icon: "EzrealW.png",
        description:
          "伊泽瑞尔发射一团魔法球体，魔法球体会附着在命中的第一个敌方英雄、建筑物或史诗级野怪上，持续{{ detonationtimeout }}秒。如果伊泽瑞尔用技能或攻击命中该目标，就会将球体引爆，造成<magicDamage>{{ damage }}魔法伤害</magicDamage>。用技能引爆时会返还该技能的法力消耗外加<scaleMana>{{ manareturn }}法力</scaleMana>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EzrealE",
        name: "奥术跃迁",
        icon: "EzrealE.png",
        description:
          "伊泽瑞尔传送然后向最近的敌人发射一支魔法箭，造成<magicDamage>{{ damage }}魔法伤害</magicDamage>。魔法箭会优先选择受<spellName>精华跃动</spellName>影响的目标。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EzrealR",
        name: "精准弹幕",
        icon: "EzrealR.png",
        description:
          "伊泽瑞尔发射一道大型能量圆弧，造成<magicDamage>{{ damage }}魔法伤害</magicDamage>。圆弧对小兵和非史诗级野怪造成{{ damagereductionwaveclear.0*100 }}%伤害。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      EzrealP: null,
      EzrealQ: null,
      EzrealW: null,
      EzrealE: null,
      EzrealR: null,
    },
  };
}
export { importModule };
