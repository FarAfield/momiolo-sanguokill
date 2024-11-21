function importModule() {
  return {
    type: "champion",
    id: "Kayn",
    title: "影流之镰",
    name: "凯隐",
    avatar: "Kayn.png",
    skins: [
      { name: "default", skin: "Kayn_0.jpg" },
      { name: "摄魂猎手 凯隐", skin: "Kayn_1.jpg" },
      { name: "奥德赛 凯隐", skin: "Kayn_2.jpg" },
      { name: "黑夜使者 凯隐", skin: "Kayn_8.jpg" },
      { name: "至臻 黑夜使者 凯隐", skin: "Kayn_9.jpg" },
      { name: "净雪之月 凯隐", skin: "Kayn_15.jpg" },
      { name: "心之钢 凯隐", skin: "Kayn_20.jpg" },
    ],
    spells: [
      {
        id: "KaynP",
        name: "暗裔魔镰",
        icon: "KaynP.png",
        description:
          "凯隐使用的是一把上古神兵，并且一直都在与附在武器上的暗裔灵体拉亚斯特为了身体的控制权而战斗着。要么<font color='#fe5c50'>暗裔杀手</font>将获胜，要么凯隐将统御拉亚斯特并变为<font color='#8484fb'>影流刺客</font>。<br><hr><font color='#fe5c50'>暗裔杀手：</font>治疗自身，数额相当于一部分对敌方英雄造成的技能伤害值。<br><br><font color='#8484fb'>影流刺客：</font>在与敌方英雄作战的最初几秒里，造成额外伤害。",
      },
      {
        id: "KaynQ",
        name: "巨镰横扫",
        icon: "KaynQ.png",
        description:
          "凯隐冲刺然后旋转他的镰刀，对他途经的敌人们造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，然后对附近的敌人们再次造成等额伤害。<br /><br /><keywordMajor>暗裔杀手：</keywordMajor>转而造成<physicalDamage>{{ darkinflatdamage }}外加{{ darkinpercentdamage }}最大生命值的物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KaynW",
        name: "利刃纵贯",
        icon: "KaynW.png",
        description:
          "凯隐向上挥出他的镰刀，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>和在{{ e5 }}秒里持续衰减的{{ e3 }}%<status>减速</status>。<br /><br /><keywordMajor>影流刺客：</keywordMajor>凯隐可在使用这个技能时移动并提升这个技能的距离。<br /><br /><keywordMajor>暗裔杀手：</keywordMajor>还会<status>击飞</status>命中的敌人{{ e2 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KaynE",
        name: "掠影步",
        icon: "KaynE.png",
        description:
          "凯隐获得<speed>{{ e1 }}%移动速度</speed>，变为【幽灵】状态，并能在地形中移动，持续{{ e2 }}秒。当他第一次进入地形时，他会治疗自身<healing>{{ totalhealing }}生命值</healing>。<br /><br />被<status>定身</status>或是在地形外连续停留{{ e3 }}秒，就会提前结束这个技能。<br /><br /><keywordMajor>影流刺客：</keywordMajor>获得<speed>{{ e5 }}%移动速度</speed>，免疫<status>减速</status>并使冷却时间缩短至{{ assassincdreduction }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KaynR",
        name: "裂舍影",
        icon: "KaynR.png",
        description:
          "<spellPassive>被动：</spellPassive>被凯隐造成过伤害的英雄们会被标记3.15秒。<br /><br />凯隐侵入一名被标记的敌方英雄，变为不可被选取状态。在{{ infestduration }}秒后或<recast>再次施放</recast>后，凯隐会破体而出，对该敌方英雄造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>。<br /><br /><keywordMajor>影流刺客：</keywordMajor>提升这个技能的距离，凯隐离开时的移动距离，并在离开时刷新<spellName>暗裔魔镰</spellName>的冷却时间。<br /><br /><keywordMajor>暗裔杀手：</keywordMajor>转而造成<physicalDamage>{{ slayerdamage }}最大生命值的物理伤害</physicalDamage>并回复<healing>{{ healvalue }}生命值</healing>({{ slayerhealpercent*100 }}%伤害数额)。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KaynP: null,
      KaynQ: null,
      KaynW: null,
      KaynE: null,
      KaynR: null,
    },
  };
}
export { importModule };
