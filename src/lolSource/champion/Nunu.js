function importModule() {
  return {
    type: "champion",
    id: "Nunu",
    title: "雪原双子",
    name: "努努和威朗普",
    avatar: "Nunu.png",
    skins: [
      { name: "default", skin: "Nunu_0.jpg" },
      { name: "荒野巨兽 努努和威朗普", skin: "Nunu_1.jpg" },
      { name: "圣诞狂欢 努努和威朗普", skin: "Nunu_2.jpg" },
      { name: "脏兮兮 努努和威朗普", skin: "Nunu_3.jpg" },
      { name: "合金巨兽 努努和威朗普", skin: "Nunu_4.jpg" },
      { name: "攻城巨兽 努努和威朗普", skin: "Nunu_5.jpg" },
      { name: "暗杀星 努努和威朗普", skin: "Nunu_6.jpg" },
      { name: "丧尸 努努和威朗普", skin: "Nunu_7.jpg" },
      { name: "千纸双子 努努和威朗普", skin: "Nunu_8.jpg" },
      { name: "太空律动 “舞林双子” 努努和威朗普", skin: "Nunu_16.jpg" },
      { name: "小蜜蜂 努努和威朗普", skin: "Nunu_26.jpg" },
      { name: "星界圣骑双子 努努和威朗普", skin: "Nunu_35.jpg" },
      { name: "魔域梦魇 努努和威朗普", skin: "Nunu_44.jpg" },
    ],
    spells: [
      {
        id: "NunuP",
        name: "弗雷尔卓德的召唤",
        icon: "NunuP.png",
        description:
          "努努提升威朗普和一名附近友军的攻击速度和移动速度，并使威朗普的普攻可以伤害目标周围的敌人。",
      },
      {
        id: "NunuQ",
        name: "吞噬",
        icon: "NunuQ.png",
        description:
          "努努请求威朗普撕咬一名敌人，造成<trueDamage>{{ monsterminiondamage }}真实伤害</trueDamage>并在用来对抗小兵和野怪时回复<healing>{{ monsterhealing }}生命值</healing>。在对抗英雄时，它会转而造成<magicDamage>{{ totalchampiondamage }}魔法伤害</magicDamage>并回复<healing>{{ championhealing }}生命值</healing>。<br /><br /><healing>治疗效果</healing>会在努努和威朗普低于{{ lowhealththreshhold*100 }}%生命值时提升{{ lowhealthhealingscalar*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NunuW",
        name: "史上最大雪球！",
        icon: "NunuW.png",
        description:
          "努努和威朗普生成一团雪球，雪球会随着他们的滚动而获得体型与速度的增长。在滚雪球时，他们的转向会变慢，但可通过持续转向来提升转向速度。<br /><br />雪球造成<magicDamage>{{ noimpactsnowballdamage }}</magicDamage>至<magicDamage>{{ maximumsnowballdamage }}魔法伤害</magicDamage>，并在碰撞英雄、大型野怪或墙体后造成{{ baseknockupduration }}到{{ maximumstunduration }}秒的<status>击飞</status>。这些数值受益于已滚动的距离。<br /><br />努努和威朗普可以<recast>再次施放</recast>来提前放走雪球。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NunuE",
        name: "雪球飞射",
        icon: "NunuE.png",
        description:
          "努努投掷3团雪球，每团雪球造成<magicDamage>{{ totalsnowballdamage }}魔法伤害</magicDamage>，并使被3团雪球都命中的敌人们遭受持续{{ slowduration }}秒的{{ slowamount*-100 }}%<status>减速</status>。努努可以<recast>再次施放</recast>这个技能至多2次。<br /><br />在{{ totalspellduration }}秒后，努努会使附近所有已被雪球<status>减速</status>的敌人们<status>禁锢</status>{{ rootduration }}秒并造成额外的<magicDamage>{{ totalrootdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NunuR",
        name: "绝对零度",
        icon: "NunuR.png",
        description:
          "努努和威朗普引导一阵强力的暴风雪，至多引导{{ channelduration }}秒。其中的敌人们会被<status>减速</status>{{ slowstartamount*-100 }}%，在持续期间不断提升至{{ maxslowamount*-100 }}%。努努和威朗普在引导期间也会获得<shield>{{ totalshieldamount }}护盾值</shield>，在之后的{{ shielddecayduration }}秒里持续衰减。<br /><br />当暴风雪结束时，它会爆炸，基于引导时间造成至多<magicDamage>{{ maximumdamage }}魔法伤害</magicDamage>。 努努和威朗普可以<recast>再次施放</recast>来使暴风雪提前结束。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      NunuP: null,
      NunuQ: null,
      NunuW: null,
      NunuE: null,
      NunuR: null,
    },
  };
}
export { importModule };
