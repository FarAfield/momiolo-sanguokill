function importModule() {
  return {
    type: "champion",
    id: "Anivia",
    title: "冰晶凤凰",
    name: "艾尼维亚",
    avatar: "Anivia.png",
    skins: [
      { name: "default", skin: "Anivia_0.jpg" },
      { name: "双重冰晶 艾尼维亚", skin: "Anivia_1.jpg" },
      { name: "联盟之喙 艾尼维亚", skin: "Anivia_2.jpg" },
      { name: "重甲猎鹰 艾尼维亚", skin: "Anivia_3.jpg" },
      { name: "钢铁之翼 艾尼维亚", skin: "Anivia_4.jpg" },
      { name: "黯晶凤凰 艾尼维亚", skin: "Anivia_5.jpg" },
      { name: "翼龙 艾尼维亚", skin: "Anivia_6.jpg" },
      { name: "庆典女皇 艾尼维亚", skin: "Anivia_7.jpg" },
      { name: "千纸凤凰 艾尼维亚", skin: "Anivia_8.jpg" },
      { name: "凤凰星神 艾尼维亚", skin: "Anivia_17.jpg" },
      { name: "神凰行者 瑞羽圣凰 艾尼维亚", skin: "Anivia_27.jpg" },
      { name: "魅惑女巫 艾尼维亚", skin: "Anivia_37.jpg" },
      { name: "胜利凤凰 艾尼维亚", skin: "Anivia_46.jpg" },
    ],
    spells: [
      {
        id: "AniviaP",
        name: "寒霜涅槃",
        icon: "AniviaP.png",
        description: "在受到致命伤害后，艾尼维亚将化身为凤凰蛋，然后满血复活。",
      },
      {
        id: "AniviaQ",
        name: "寒冰闪耀",
        icon: "AniviaQ.png",
        description:
          "艾尼维亚发射出一个巨型冰块，造成<magicDamage>{{ totalpassthroughdamage }}魔法伤害</magicDamage>并<keywordMajor>冰冻</keywordMajor>敌人{{ slowduration }}秒，使其<status>减速</status>{{ spell.glacialstorm:slowamount }}%。在到达距离终点时，冰块会爆炸，<status>晕眩</status>敌人{{ stunduration }}秒并造成<magicDamage>{{ totalexplosiondamage }}魔法伤害</magicDamage>。<br /><br />艾尼维亚可以在冰块飞行途中<recast>再次施放</recast>这个技能来将其提前引爆。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AniviaW",
        name: "寒冰屏障",
        icon: "AniviaW.png",
        description:
          "艾尼维亚召唤出一道宽{{ e2 }}码的无法通过的冰墙。冰墙会在融化前持续{{ e1 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AniviaE",
        name: "霜寒刺骨",
        icon: "AniviaE.png",
        description:
          "艾尼维亚用一阵刺骨的寒风冲击一名敌人，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。如果目标身上带有<keywordMajor>冰冻</keywordMajor>效果，则艾尼维亚会转而造成<magicDamage>{{ empowereddamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AniviaR",
        name: "冰川风暴",
        icon: "AniviaR.png",
        description:
          "<toggle>激活：</toggle>艾尼维亚在目标区域召唤出一阵夹杂着冰与雹的强雨，来使敌人<status>减速</status>{{ slowamount }}%并每秒造成<magicDamage>{{ totaldamagepersecond }}魔法伤害</magicDamage>。风暴会在{{ growthtime }}秒里持续提升规模。<br /><br />当风暴完全形成后，它会施加<keywordMajor>冰冻</keywordMajor>效果，使敌人<status>减速</status>{{ slowpercentempoweredtt }}%，并且每秒造成<magicDamage>{{ empowereddamagepersecondtooltiponly }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AniviaP: null,
      AniviaQ: null,
      AniviaW: null,
      AniviaE: null,
      AniviaR: null,
    },
  };
}
export { importModule };
