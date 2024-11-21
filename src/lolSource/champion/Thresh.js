function importModule() {
  return {
    type: "champion",
    id: "Thresh",
    title: "魂锁典狱长",
    name: "锤石",
    avatar: "Thresh.png",
    skins: [
      { name: "default", skin: "Thresh_0.jpg" },
      { name: "深渊恐惧 锤石", skin: "Thresh_1.jpg" },
      { name: "冠军典狱长 锤石", skin: "Thresh_2.jpg" },
      { name: "腥红之月 锤石", skin: "Thresh_3.jpg" },
      { name: "SSW 锤石", skin: "Thresh_4.jpg" },
      { name: "暗星 锤石", skin: "Thresh_5.jpg" },
      { name: "西部魔影 锤石", skin: "Thresh_6.jpg" },
      { name: "未来战士 锤石", skin: "Thresh_13.jpg" },
      { name: "至臻 未来战士 锤石", skin: "Thresh_14.jpg" },
      { name: "FPX 锤石", skin: "Thresh_15.jpg" },
      { name: "灵魂莲华 锤石", skin: "Thresh_17.jpg" },
      { name: "破败解封 锤石", skin: "Thresh_27.jpg" },
      { name: "神龙尊者 钢铁之龙 锤石", skin: "Thresh_28.jpg" },
      { name: "至臻 未来战士 锤石 (2022)", skin: "Thresh_38.jpg" },
      { name: "春晖大帝 锤石", skin: "Thresh_39.jpg" },
      { name: "北极星典狱长 锤石", skin: "Thresh_49.jpg" },
      { name: "洗地专家 锤石", skin: "Thresh_59.jpg" },
    ],
    spells: [
      {
        id: "ThreshP",
        name: "地狱诅咒",
        icon: "ThreshP.png",
        description:
          "锤石可以收割那些死在他身边的敌人们的灵魂，从而为他提供护甲和法术强度。",
      },
      {
        id: "ThreshQ",
        name: "死亡判决",
        icon: "ThreshQ.png",
        description:
          "锤石投出他的镰刀，<status>晕眩</status>命中的第一个单位并将其<status>拉拽</status>向锤石{{ tauntlength }}秒。镰刀造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并且还会在持续期间提供<keywordStealth>真实视野</keywordStealth>。<br /><br />锤石可以<recast>再次施放</recast>这个技能来将自身拉拽到敌人处。<br /><br />如果这个技能命中了，那么它的冷却时间缩短{{ hitbonuscooldown }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ThreshW",
        name: "魂引之灯",
        icon: "ThreshW.png",
        description:
          "锤石扔出他的灯笼，允许一名友军点击它来冲刺到锤石处。<br /><br />灯笼也会提供持续{{ shieldduration }}秒的<shield>{{ totalshield }}护盾值</shield>给锤石和前去触摸灯笼的第一个友方英雄。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ThreshE",
        name: "厄运钟摆",
        icon: "ThreshE.png",
        description:
          "<spellPassive>被动：</spellPassive>锤石的攻击造成额外伤害，伤害值基于与他最后一次攻击相隔的时间。造成<magicDamage>{{ pattackdamagemin }}</magicDamage>到<magicDamage>{{ pattackdamagemax }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>锤石挥舞他的锁链，沿挥舞的方向<status>拉拽</status>或<status>推挤</status>敌人。还会对命中的敌人们造成持续{{ e4 }}秒的{{ e2 }}%<status>减速</status>和<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ThreshR",
        name: "幽冥监牢",
        icon: "ThreshR.png",
        description:
          "锤石生成一个由灵魂墙体组成的监牢，对英雄造成持续{{ e2 }}秒的{{ e3 }}%<status>减速</status>和<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。墙体一经碰撞就会被打破，并且一旦被打破一面墙体，剩余的就不会造成伤害且<status>减速</status>时长减半。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ThreshP: null,
      ThreshQ: null,
      ThreshW: null,
      ThreshE: null,
      ThreshR: null,
    },
  };
}
export { importModule };
