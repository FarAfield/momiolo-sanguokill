function importModule() {
  return {
    type: "champion",
    id: "MonkeyKing",
    title: "齐天大圣",
    name: "孙悟空",
    avatar: "MonkeyKing.png",
    skins: [
      { name: "default", skin: "MonkeyKing_0.jpg" },
      { name: "三昧真火 孙悟空", skin: "MonkeyKing_1.jpg" },
      { name: "斗战胜佛 孙悟空", skin: "MonkeyKing_2.jpg" },
      { name: "定海神珍 孙悟空", skin: "MonkeyKing_3.jpg" },
      { name: "地狱行者 孙悟空", skin: "MonkeyKing_4.jpg" },
      { name: "美猴王 孙悟空", skin: "MonkeyKing_5.jpg" },
      { name: "破空枪骑 孙悟空", skin: "MonkeyKing_6.jpg" },
      { name: "战斗学院 孙悟空", skin: "MonkeyKing_7.jpg" },
      { name: "永恒之森 孙悟空", skin: "MonkeyKing_16.jpg" },
    ],
    spells: [
      {
        id: "MonkeyKingP",
        name: "金刚不坏",
        icon: "MonkeyKingP.png",
        description:
          "孙悟空在与英雄或野怪战斗时，会获得可叠加的护甲和最大生命值回复。",
      },
      {
        id: "MonkeyKingQ",
        name: "粉碎打击",
        icon: "MonkeyKingQ.png",
        description:
          "孙悟空和他的<keywordMajor>分身</keywordMajor>的下次攻击提升{{ attackrangebonus }}距离，造成<physicalDamage>{{ bonusdamagett }}额外物理伤害</physicalDamage>，并移除目标<scaleArmor>{{ armorshredpercent*100 }}%护甲</scaleArmor>，持续{{ shredduration }}秒。<br /><br />每当孙悟空或他的<keywordMajor>分身</keywordMajor>用一次攻击或技能命中一名敌人时，这个技能的冷却时间就会缩短{{ cooldowndecrease }}秒。<br /><br /><rules>这个技能会在造成伤害时触发技能特效。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MonkeyKingW",
        name: "真假猴王",
        icon: "MonkeyKingW.png",
        description:
          "孙悟空突进并变为<keywordStealth>隐形</keywordStealth>状态，持续{{ stealthduration }}秒，同时留下一个持续{{ cloneduration }}秒的不能移动的<keywordMajor>分身</keywordMajor>。<br /><br /><keywordMajor>分身</keywordMajor>会攻击附近的近期被孙悟空造成过伤害的敌人并会模拟他的终极技能，造成{{ clonedamagemod*100 }}%的常规伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MonkeyKingE",
        name: "腾云突击",
        icon: "MonkeyKingE.png",
        description:
          "孙悟空突进至目标敌人处，并放出多个<keywordMajor>分身</keywordMajor>来对附近的至多{{ extratargets }}个额外敌人进行模拟突进。每个被击中的敌人会受到<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。他和他的<keywordMajor>分身</keywordMajor>获得持续{{ attackspeedduration }}秒的<attackSpeed>{{ attackspeed*100 }}%攻击速度</attackSpeed>。<br /><br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MonkeyKingR",
        name: "大闹天宫",
        icon: "MonkeyKingR.png",
        description:
          "孙悟空获得<speed>{{ movespeed*100 }}%移动速度</speed>并旋转他的金箍棒，<status>击飞</status> 附近的敌人{{ knockupduration }}秒并在{{ spinduration }}秒里持续造成共<physicalDamage>{{ totaldamagett }}加上 {{ percenthpdamagett }}最大生命值的物理伤害</physicalDamage>。<br /><br />这个技能可以在{{ recastwindow }}秒里再施放一次，随后会进入冷却阶段。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      MonkeyKingP: null,
      MonkeyKingQ: null,
      MonkeyKingW: null,
      MonkeyKingE: null,
      MonkeyKingR: null,
    },
  };
}
export { importModule };
