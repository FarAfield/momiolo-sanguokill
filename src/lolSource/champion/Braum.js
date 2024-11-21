function importModule() {
  return {
    type: "champion",
    id: "Braum",
    title: "弗雷尔卓德之心",
    name: "布隆",
    avatar: "Braum.png",
    skins: [
      { name: "default", skin: "Braum_0.jpg" },
      { name: "屠龙勇士 布隆", skin: "Braum_1.jpg" },
      { name: "猛虎 布隆", skin: "Braum_2.jpg" },
      { name: "布隆·狮心", skin: "Braum_3.jpg" },
      { name: "圣诞老人 布隆", skin: "Braum_10.jpg" },
      { name: "黑帮管家 布隆", skin: "Braum_11.jpg" },
      { name: "糖果大战 布隆", skin: "Braum_24.jpg" },
      { name: "泳池派对 布隆", skin: "Braum_33.jpg" },
    ],
    spells: [
      {
        id: "BraumP",
        name: "震荡猛击",
        icon: "BraumP.png",
        description:
          "布隆的普通攻击会对目标施加震荡猛击效果。一旦施加了第一层震荡猛击，<font color='#FFF673'>友军</font>的普通攻击也会对目标叠加震荡猛击。<br><br>在效果到达4层后，目标会被击晕并受到魔法伤害。在接下来的数秒里，布隆和友军无法再次对目标叠加震荡猛击的层数，但布隆的攻击会对目标造成额外魔法伤害。",
      },
      {
        id: "BraumQ",
        name: "寒冬之咬",
        icon: "BraumQ.png",
        description:
          "布隆驱动盾牌里的冷冻冰块，对命中的第一个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和在{{ e5 }}秒里持续衰减的{{ e2 }}%<status>减速</status>。<br /><br />施加一层<keywordMajor>震荡猛击</keywordMajor>。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BraumW",
        name: "挺身而出",
        icon: "BraumW.png",
        description:
          "布隆跃向一名友方英雄或小兵。在抵达时，布隆为目标提供持续{{ e1 }}秒的<scaleArmor>{{ grantedallyarmor }}护甲</scaleArmor>和<scaleMR>{{ grantedallymr }}魔法抗性</scaleMR>。布隆为他自己提供相同持续时间的<scaleArmor>{{ grantedbraumarmor }}护甲</scaleArmor>和<scaleMR>{{ grantedbraummr }}魔法抗性</scaleMR>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BraumE",
        name: "坚不可摧",
        icon: "BraumE.png",
        description:
          "布隆将他的盾牌举起{{ e2 }}秒，拦截来自选定方向的所有敌方弹体，使其命中布隆然后被摧毁。布隆格挡的首个弹体不会造成伤害，并且后续弹体造成的伤害降低{{ e3 }}%。<br /><br />布隆在举盾时获得<speed>{{ e4 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BraumR",
        name: "冰川裂隙",
        icon: "BraumR.png",
        description:
          "布隆猛砸地面并向前发出一道裂隙，来<status>击飞</status>沿途和布隆身边的敌人，并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。被命中的第一个目标会被<status>击飞</status>{{ minknockup }}到{{ maxknockup }}秒，取决于其与布隆之间的距离。被命中的其他目标也会被击飞{{ minknockup }}秒。<br /><br />裂隙还会留下一个持续{{ slowzoneduration }}秒的地带，可使敌人<status>减速</status>{{ movespeedmod }}%。<br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      BraumP: null,
      BraumQ: null,
      BraumW: null,
      BraumE: null,
      BraumR: null,
    },
  };
}
export { importModule };
