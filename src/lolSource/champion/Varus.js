function importModule() {
  return {
    type: "champion",
    id: "Varus",
    title: "惩戒之箭",
    name: "韦鲁斯",
    avatar: "Varus.png",
    skins: [
      { name: "default", skin: "Varus_0.jpg" },
      { name: "夜魔水晶 韦鲁斯", skin: "Varus_1.jpg" },
      { name: "苍穹之光 韦鲁斯", skin: "Varus_2.jpg" },
      { name: "白色死神 韦鲁斯", skin: "Varus_3.jpg" },
      { name: "觅心射手 韦鲁斯", skin: "Varus_4.jpg" },
      { name: "韦鲁斯·迅箭", skin: "Varus_5.jpg" },
      { name: "暗星 韦鲁斯", skin: "Varus_6.jpg" },
      { name: "征服者 韦鲁斯", skin: "Varus_7.jpg" },
      { name: "地狱火 韦鲁斯", skin: "Varus_9.jpg" },
      { name: "源计划：天眼 韦鲁斯", skin: "Varus_16.jpg" },
      { name: "猎户星神 韦鲁斯", skin: "Varus_17.jpg" },
      { name: "西部魔影 天使 韦鲁斯", skin: "Varus_34.jpg" },
      { name: "净雪之月 韦鲁斯", skin: "Varus_44.jpg" },
      { name: "至高天 韦鲁斯", skin: "Varus_53.jpg" },
    ],
    spells: [
      {
        id: "VarusP",
        name: "复仇之欲",
        icon: "VarusP.png",
        description:
          "每完成一次击杀或助攻，韦鲁斯就会暂时获得攻击速度、攻击力和法术强度。如果敌人是个英雄，则这个加成的幅度会更大。",
      },
      {
        id: "VarusQ",
        name: "穿刺之箭",
        icon: "VarusQ.png",
        description:
          "<attention>开始蓄力</attention>：韦鲁斯为一次强力射击深深挽弓，自我<status>减速</status>{{ e7 }}%。在{{ e5 }}秒后，如果未将箭射出去，则韦鲁斯会取消这个技能并返还其{{ e4 }}%法力消耗。<br /><br /><attention>释放：</attention>韦鲁斯将箭射出，造成<physicalDamage>{{ totaldamagemintooltip }}物理伤害</physicalDamage>，每命中一个敌人就会降低{{ e3 }}%(最低降至{{ e9 }}%)。伤害和<keywordMajor>枯萎</keywordMajor>的引爆效果会基于蓄力时间至多提升至{{ maxchargeamp*100 }}%(最大值为<physicalDamage>{{ totaldamagemax }}</physicalDamage>) 。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VarusW",
        name: "枯萎箭袋",
        icon: "VarusW.png",
        description:
          "<spellPassive>被动：</spellPassive>韦鲁斯的攻击造成额外的<magicDamage>{{ onhitdamage }}魔法伤害</magicDamage>并施加一层持续{{ e3 }}秒的<keywordMajor>枯萎</keywordMajor>(最多至{{ e4 }}层)。<br /><br />韦鲁斯的其它技能会引爆<keywordMajor>枯萎</keywordMajor>层数来造成每层<magicDamage>{{ percenthpperstack }}最大生命值伤害</magicDamage>(最大值为<magicDamage>{{ maxpercenthpperstack }}最大生命值伤害</magicDamage>)。引爆英雄和史诗级野怪身上的<keywordMajor>枯萎</keywordMajor>时也会使他基础技能的冷却时间缩短，数额为每层{{ cdrperblightstack*100 }}%基础冷却时间。<br /><br /><spellActive>主动：</spellActive>韦鲁斯的下一个<spellName>穿刺之箭</spellName>会造成额外的<magicDamage>{{ qempowerpercenthp }}已损失生命值的魔法伤害</magicDamage>，并且基于蓄力时间不断提升，至多可达<magicDamage>{{ maxqempowerpercenthp }}已损失生命值伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VarusE",
        name: "恶灵箭雨",
        icon: "VarusE.png",
        description:
          "韦鲁斯射出一阵箭雨，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，并污染地面{{ e3 }}秒，<status>减速</status>敌人{{ e2 }}%并施加<keywordMajor>{{ grievousamount*100 }}%重伤</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VarusR",
        name: "腐败锁链",
        icon: "VarusR.png",
        description:
          "韦鲁斯猛射出一根腐败藤蔓，<status>禁锢</status>命中的第一个敌方英雄{{ e2 }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。被<status>禁锢</status>的敌人们会在此期间持续获得{{ e4 }}层<keywordMajor>枯萎</keywordMajor>。<br /><br />随后腐败藤蔓会从它的目标处向附近未被感染的英雄蔓延。如果它接触到了未被感染的英雄，就会使其承受相同的伤害并被<status>禁锢</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      VarusP: null,
      VarusQ: null,
      VarusW: null,
      VarusE: null,
      VarusR: null,
    },
  };
}
export { importModule };
