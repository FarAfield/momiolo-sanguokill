function importModule() {
  return {
    type: "champion",
    id: "Lucian",
    title: "圣枪游侠",
    name: "卢锡安",
    avatar: "Lucian.png",
    skins: [
      { name: "default", skin: "Lucian_0.jpg" },
      { name: "职业杀手 卢锡安", skin: "Lucian_1.jpg" },
      { name: "夺命前锋 卢锡安", skin: "Lucian_2.jpg" },
      { name: "源计划：雷 卢锡安", skin: "Lucian_6.jpg" },
      { name: "觅心游侠 卢锡安", skin: "Lucian_7.jpg" },
      { name: "西部魔影 卢锡安", skin: "Lucian_8.jpg" },
      { name: "德玛西亚警官 卢锡安", skin: "Lucian_9.jpg" },
      { name: "未来战士 卢锡安", skin: "Lucian_18.jpg" },
      { name: "至臻 未来战士 卢锡安", skin: "Lucian_19.jpg" },
      { name: "胜利枪神 卢锡安", skin: "Lucian_25.jpg" },
      { name: "正义之枪 卢锡安", skin: "Lucian_31.jpg" },
      { name: "海珀利安小队 Z01-猎户座 卢锡安", skin: "Lucian_40.jpg" },
      { name: "北极星守护者 卢锡安", skin: "Lucian_52.jpg" },
    ],
    spells: [
      {
        id: "LucianP",
        name: "圣光银弹",
        icon: "LucianP.png",
        description:
          "每使用一个技能时，卢锡安的下次普通攻击都会连射2次。当卢锡安从另一位友军处获得治疗或护盾、或者有一名附近的敌方英雄被定身时，他的下2次普通攻击造成额外魔法伤害。",
      },
      {
        id: "LucianQ",
        name: "透体圣光",
        icon: "LucianQ.png",
        description:
          "卢锡安发射一束透体圣光，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LucianW",
        name: "热诚烈弹",
        icon: "LucianW.png",
        description:
          "卢锡安发射一颗子弹，子弹会在到达射程终点或命中第一个敌人时爆炸，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，暂时显形敌人们并将其标记6秒。<br /><br />当卢锡安或一名友方英雄对被标记的敌人造成伤害时，卢锡安会获得持续1秒的<speed>{{ e2 }}移动速度</speed>。友方英雄在触发这个效果时，将也会为卢锡安提供<attention>警惕</attention>效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LucianE",
        name: "冷酷追击",
        icon: "LucianE.png",
        description:
          "卢锡安进行冲刺。<br /><br />当卢锡安用<spellName>圣光银弹</spellName>命中一名敌人时，这个技能的冷却时间会缩短{{ e1 }}秒(对英雄时缩短{{ e2 }}秒)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LucianR",
        name: "圣枪洗礼",
        icon: "LucianR.png",
        description:
          "卢锡安朝一个方向快速发射<keywordMajor>{{ totalnumshots }}</keywordMajor>颗子弹，持续{{ duration }}秒或直到他<recast>再次施放</recast>。每颗子弹对命中的第一个敌人造成<physicalDamage>{{ damageperbullet }}物理伤害</physicalDamage>。<br /><br />在发射时，卢锡安可以使用<spellName>冷酷追击</spellName>。<br /><br />总伤害：<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage><br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      LucianP: null,
      LucianQ: null,
      LucianW: null,
      LucianE: null,
      LucianR: null,
    },
  };
}
export { importModule };
