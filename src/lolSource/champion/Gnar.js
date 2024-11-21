function importModule() {
  return {
    type: "champion",
    id: "Gnar",
    title: "迷失之牙",
    name: "纳尔",
    avatar: "Gnar.png",
    skins: [
      { name: "default", skin: "Gnar_0.jpg" },
      { name: "最后一只恐龙 纳尔", skin: "Gnar_1.jpg" },
      { name: "萌侦探 喵尔摩斯", skin: "Gnar_2.jpg" },
      { name: "冰雪兽 纳尔", skin: "Gnar_3.jpg" },
      { name: "狂狮 纳尔", skin: "Gnar_4.jpg" },
      { name: "银河魔装机神 纳尔", skin: "Gnar_13.jpg" },
      { name: "SSG 纳尔", skin: "Gnar_14.jpg" },
      { name: "宇航员 纳尔", skin: "Gnar_15.jpg" },
      { name: "永恒之森 纳尔", skin: "Gnar_22.jpg" },
      { name: "灵之菊 纳尔", skin: "Gnar_31.jpg" },
    ],
    spells: [
      {
        id: "GnarP",
        name: "狂怒基因",
        icon: "GnarP.png",
        description:
          "在战斗时，纳尔会产生怒气。在怒气到达最大值时，他的下一个技能将使他变形成巨型纳尔，获得强化的生存能力并能使用新的技能。",
      },
      {
        id: "GnarQ",
        name: "投掷回力标 / 投掷顽石",
        icon: "GnarQ.png",
        description:
          "<keywordMajor>小型纳尔：</keywordMajor>纳尔投掷一个回力标，造成<physicalDamage>{{ spell.gnarq:minitotaldamage }}物理伤害</physicalDamage>和持续{{ spell.gnarq:slowduration }}秒的{{ spell.gnarq:slowamount*100 }}%<status>减速</status>。回力标会在命中一名敌人后折返，对后续敌人造成较少伤害。每个敌人只会被命中一次。接住回力标会使这个技能的冷却时间缩短{{ spell.gnarq:minicdrefund*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GnarW",
        name: "亢奋 /  痛殴",
        icon: "GnarW.png",
        description:
          "<keywordMajor>小型纳尔 被动：</keywordMajor>对相同敌人的每第三次攻击或技能造成额外的<magicDamage>{{ spell.gnarw:minitotaldamage }}外加{{ spell.gnarw:minipercenthpdamage*100 }}%最大生命值的魔法伤害</magicDamage>并提供在{{ minihasteduration }}秒里持续衰减的<speed>{{ spell.gnarr:rhypermovementspeedpercent }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GnarE",
        name: "轻跳 / 猛踏",
        icon: "GnarE.png",
        description:
          "<keywordMajor>小型纳尔：</keywordMajor>纳尔进行跳跃，获得持续{{ spell.gnare:miniasduration }}秒的<attackSpeed>{{ spell.gnare:minibas*100 }}%攻击速度</attackSpeed>。如果纳尔落到一个目标上，那么他会继续向更远处弹跳。弹跳一名敌人时会对其造成<physicalDamage>{{ spell.gnare:minitotaldamage }}物理伤害</physicalDamage>并使其暂时<status>减速</status>{{ spell.gnare:movespeedmod*-100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GnarR",
        name: "呐啊！",
        icon: "GnarR.png",
        description:
          "<keywordMajor>小型纳尔被动：</keywordMajor>提升<spellName>亢奋</spellName>的<speed>移动速度</speed>。<br /><br /><keywordMajor>巨型纳尔：</keywordMajor>纳尔猛掷附近的敌人们，造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>，<status>击退</status>，以及持续{{ rccduration }}秒的{{ rslowpercent }}%<status>减速</status>。与墙体产生碰撞的敌人们会转而受到<physicalDamage>{{ walldamage }} 物理伤害</physicalDamage>并被<status>晕眩</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      GnarP: null,
      GnarQ: null,
      GnarW: null,
      GnarE: null,
      GnarR: null,
    },
  };
}
export { importModule };
