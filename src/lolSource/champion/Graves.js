function importModule() {
  return {
    type: "champion",
    id: "Graves",
    title: "法外狂徒",
    name: "格雷福斯",
    avatar: "Graves.png",
    skins: [
      { name: "default", skin: "Graves_0.jpg" },
      { name: "怒之火炮 格雷福斯", skin: "Graves_1.jpg" },
      { name: "杀出重围 格雷福斯", skin: "Graves_2.jpg" },
      { name: "黑帮教父 格雷福斯", skin: "Graves_3.jpg" },
      { name: "防暴士兵 格雷福斯", skin: "Graves_4.jpg" },
      { name: "泳池派对 格雷福斯", skin: "Graves_5.jpg" },
      { name: "无情重炮 格雷福斯", skin: "Graves_6.jpg" },
      { name: "冰雪节 格雷福斯", skin: "Graves_7.jpg" },
      { name: "胜利枪神 格雷福斯", skin: "Graves_14.jpg" },
      { name: "禁卫机甲 格雷福斯", skin: "Graves_18.jpg" },
      { name: "战斗教授 格雷福斯", skin: "Graves_25.jpg" },
      { name: "光明哨兵 格雷福斯", skin: "Graves_35.jpg" },
      { name: "EDG 格雷福斯", skin: "Graves_42.jpg" },
      { name: "青花瓷 格雷福斯", skin: "Graves_45.jpg" },
    ],
    spells: [
      {
        id: "GravesP",
        name: "新命运",
        icon: "GravesP.png",
        description:
          "格雷福斯的散弹枪拥有一些独特性能。他的弹药打光后就必须重新装弹。每次攻击会发射4颗弹丸，弹丸无法穿透单位。会击退被多颗弹丸命中的非英雄单位。",
      },
      {
        id: "GravesQ",
        name: "穷途末路",
        icon: "GravesQ.png",
        description:
          "格雷福斯发射一个火药卷，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。在1秒或与地形碰撞之后，它会爆炸，对沿途和爆炸附近的敌人们再次造成<physicalDamage>{{ totaldetonationdamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GravesW",
        name: "烟幕弹",
        icon: "GravesW.png",
        description:
          "格雷福斯生成一团黑色烟幕，持续4秒，使其中的敌人<status>减速</status>{{ e2 }}%并无法看到区域之外。初始冲击造成<magicDamage>{{ impactdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GravesE",
        name: "快速拔枪",
        icon: "GravesE.png",
        description:
          "格雷福斯突进并装填一颗<keywordMajor>子弹</keywordMajor>进他的霰弹枪中。他还会获得一层持续4秒的效果(最多{{ e0 }}层)或是在朝着敌人突进时获得2层效果。每层效果为他提供<scaleArmor>{{ e5 }}护甲</scaleArmor>。层数会在对非小兵单位造成伤害时刷新。<br /><br />格雷福斯的攻击每有一颗弹丸命中敌人，就会使这个技能缩短{{ e4 }}秒冷却时间。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GravesR",
        name: "终极爆弹",
        icon: "GravesR.png",
        description:
          "格雷福斯射出一枚爆破弹，并因后坐力而向后位移。爆破弹对命中的第一敌人造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>。在命中一名敌方英雄，或者达到最大射程之后，终极爆弹将会向外爆裂，造成<physicalDamage>{{ falloffdamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      GravesP: null,
      GravesQ: null,
      GravesW: null,
      GravesE: null,
      GravesR: null,
    },
  };
}
export { importModule };
