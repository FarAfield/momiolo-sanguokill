function importModule() {
  return {
    type: "champion",
    id: "Qiyana",
    title: "元素女皇",
    name: "奇亚娜",
    avatar: "Qiyana.png",
    skins: [
      { name: "default", skin: "Qiyana_0.jpg" },
      { name: "战场BOSS 奇亚娜", skin: "Qiyana_1.jpg" },
      { name: "真实伤害 奇亚娜", skin: "Qiyana_2.jpg" },
      { name: "至臻 真实伤害 奇亚娜", skin: "Qiyana_10.jpg" },
      { name: "女帝 奇亚娜", skin: "Qiyana_11.jpg" },
      { name: "冲击之刃 奇亚娜", skin: "Qiyana_20.jpg" },
      { name: "至臻 真实伤害 奇亚娜 (2022)", skin: "Qiyana_21.jpg" },
      { name: "春晖神女 奇亚娜", skin: "Qiyana_30.jpg" },
      { name: "灵之菊 奇亚娜", skin: "Qiyana_40.jpg" },
    ],
    spells: [
      {
        id: "QiyanaP",
        name: "凌人贵气",
        icon: "QiyanaP.png",
        description: "奇亚娜对每名敌人发起的第一次普攻或技能会造成额外伤害。",
      },
      {
        id: "QiyanaQ",
        name: "元素之怒 / 以绪塔尔之锋",
        icon: "QiyanaQ.png",
        description:
          "如果奇亚娜并未拥有一个<keywordMajor>附魔</keywordMajor>，那么她会进行斩击，对小范围内的敌人们造成<physicalDamage>{{ vanilladamage }}物理伤害</physicalDamage>。如果她已有一个<keywordMajor>附魔</keywordMajor>，那么这个技能会获得额外距离并基于<keywordMajor>附魔</keywordMajor>类型获得一个额外效果：<li><keywordMajor>寒冰附魔</keywordMajor>：暂时<status>禁锢</status>，然后是持续{{ slowduration }}秒的{{ slowpotency*-100 }}%<status>减速</status>。<li><keywordMajor>岩石附魔</keywordMajor>：对低于{{ critthreshold*100 }}%生命值的敌人们造成额外的<physicalDamage>{{ tremordamage }}物理伤害</physicalDamage>。<li><keywordMajor>荒野附魔</keywordMajor>：留下一条小径，来使奇亚娜<keywordStealth>隐形</keywordStealth>并提供<speed>{{ haste*100 }}%移动速度</speed>。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "QiyanaW",
        name: "方圆塑令",
        icon: "QiyanaW.png",
        description:
          "<spellPassive>被动：</spellPassive>当奇亚娜的武器已被<keywordMajor>附魔</keywordMajor>时，她会获得<attackSpeed>{{ attackspeed*100 }}%攻击速度</attackSpeed>并且她的攻击造成额外的<magicDamage>{{ onhitdamage }}魔法伤害</magicDamage>。她还会在相应地形类型附近获得非战斗状态下的<speed>{{ passivems*100 }}%移动速度</speed>。<br /><br /><spellActive>主动：</spellActive>奇亚娜突进向一个附近的草丛、地形或河流，然后用该地形类型来<keywordMajor>附魔</keywordMajor>她的武器。这会刷新<spellName>元素之怒 / 以绪塔尔之锋</spellName>的冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "QiyanaE",
        name: "天纵之勇",
        icon: "QiyanaE.png",
        description:
          "奇亚娜冲刺并经过一名敌人，并对其造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "QiyanaR",
        name: "惊才绝景",
        icon: "QiyanaR.png",
        description:
          "奇亚娜放出一道冲击波来<status>击退</status>敌人们并在它命中墙体时爆炸。爆炸会沿着地形的完整边缘行进，<status>晕眩</status>0.5到{{ stunduration }}秒并造成<physicalDamage>{{ damage }}</physicalDamage>外加<physicalDamage>{{ missinghealthdamagerock }}最大生命值的物理伤害</physicalDamage>。 <status>晕眩</status>时长会随着爆炸的移动距离而缩短。<br /><br />冲击波途经的任何河流与草丛也会在短暂延迟后爆炸，造成等值的伤害和<status>晕眩</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      QiyanaP: null,
      QiyanaQ: null,
      QiyanaW: null,
      QiyanaE: null,
      QiyanaR: null,
    },
  };
}
export { importModule };
