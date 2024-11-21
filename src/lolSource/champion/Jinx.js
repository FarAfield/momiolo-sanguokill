function importModule() {
  return {
    type: "champion",
    id: "Jinx",
    title: "暴走萝莉",
    name: "金克丝",
    avatar: "Jinx.png",
    skins: [
      { name: "default", skin: "Jinx_0.jpg" },
      { name: "黑帮狂花 金克丝", skin: "Jinx_1.jpg" },
      { name: "神龙烈焰 金克丝", skin: "Jinx_2.jpg" },
      { name: "丧尸杀手 金克丝", skin: "Jinx_3.jpg" },
      { name: "星之守护者 金克丝", skin: "Jinx_4.jpg" },
      { name: "圣诞捣蛋鬼 金克丝", skin: "Jinx_12.jpg" },
      { name: "奥德赛 金克丝", skin: "Jinx_13.jpg" },
      { name: "源计划：疯狂 金克丝", skin: "Jinx_20.jpg" },
      { name: "觅心萝莉 金克丝", skin: "Jinx_29.jpg" },
      { name: "双城之战 金克丝", skin: "Jinx_37.jpg" },
      { name: "幻灵战斗猫 金克丝", skin: "Jinx_38.jpg" },
      { name: "至臻 幻灵战斗猫 金克丝", skin: "Jinx_40.jpg" },
      { name: "咖啡甜心 金克丝", skin: "Jinx_51.jpg" },
      { name: "T1 金克丝", skin: "Jinx_62.jpg" },
    ],
    spells: [
      {
        id: "JinxP",
        name: "罪恶快感",
        icon: "JinxP.png",
        description:
          "金克丝每当参与击杀或摧毁一名英雄、一个史诗级野怪或一座建筑物后，她的移动速度和攻击速度就会得到显著提升。",
      },
      {
        id: "JinxQ",
        name: "枪炮交响曲！",
        icon: "JinxQ.png",
        description:
          "金克丝可在【鱼骨头—火箭发射器】和【砰砰枪—轻机枪】之间切换武器。<br /><br />在使用火箭发射器时，金克丝的攻击会对目标和目标附近的敌人造成<physicalDamage>{{ rocketdamage }}物理伤害</physicalDamage>，提升{{ rocketbonusrange }}距离，消耗法力，但所享的攻速加成减少{{ rocketaspdpenalty*100 }}%。<br /><br />在使用轻机枪时，金克丝的攻击提供<attackSpeed>攻击速度</attackSpeed>，持续{{ minigunattackspeedduration }}秒，可叠加至多{{ minigunattackspeedstacks }}次(最大为<attackSpeed>+{{ minigunattackspeedmax }}% %i:scaleAS%</attackSpeed>)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JinxW",
        name: "震荡电磁波！",
        icon: "JinxW.png",
        description:
          "金克丝发射一束震荡波，对命中的第一个目标造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，使其<status>减速</status>{{ slowpercent }}%并显形，持续{{ slowduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JinxE",
        name: "嚼火者手雷！",
        icon: "JinxE.png",
        description:
          "金克丝扔出3颗持续{{ grenadeduration }}秒的嚼火者手雷，手雷会在接触到敌方英雄时爆炸，将其<status>禁锢</status>{{ rootduration }}秒并对附近敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JinxR",
        name: "超究极死神飞弹！",
        icon: "JinxR.png",
        description:
          "金克丝发射一枚飞弹，在首次命中敌方英雄后爆炸，造成<physicalDamage>{{ damagefloor }}到{{ damagemax }}+{{ percentdamage }}%已损失生命值的物理伤害</physicalDamage>，飞弹在飞行时间超过1秒后会持续提升伤害。目标附近的敌人受到{{ aoedamagemult*100 }}%伤害。<br /><br /><rules>对野怪的已损失生命值伤害无法超过{{ monsterexecutemax }}。</rules>{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      JinxP: null,
      JinxQ: null,
      JinxW: null,
      JinxE: null,
      JinxR: null,
    },
  };
}
export { importModule };
