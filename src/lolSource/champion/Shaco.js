function importModule() {
  return {
    type: "champion",
    id: "Shaco",
    title: "恶魔小丑",
    name: "萨科",
    avatar: "Shaco.png",
    skins: [
      { name: "default", skin: "Shaco_0.jpg" },
      { name: "恐怖之源 萨科", skin: "Shaco_1.jpg" },
      { name: "贵族血统 萨科", skin: "Shaco_2.jpg" },
      { name: "胡桃夹子 萨科", skin: "Shaco_3.jpg" },
      { name: "小丑工作坊 萨科", skin: "Shaco_4.jpg" },
      { name: "飞越疯人院 萨科", skin: "Shaco_5.jpg" },
      { name: "武动巅峰 萨科", skin: "Shaco_6.jpg" },
      { name: "万能小丑 萨科", skin: "Shaco_7.jpg" },
      { name: "暗星 萨科", skin: "Shaco_8.jpg" },
      { name: "奥术师 萨科", skin: "Shaco_15.jpg" },
      { name: "地下都市 梦魇 萨科", skin: "Shaco_23.jpg" },
      { name: "北极星使者 萨科", skin: "Shaco_33.jpg" },
      { name: "斗魂觉醒 萨科", skin: "Shaco_43.jpg" },
      { name: "至臻 斗魂觉醒 萨科", skin: "Shaco_44.jpg" },
      { name: "魔域梦魇 萨科", skin: "Shaco_54.jpg" },
    ],
    spells: [
      {
        id: "ShacoP",
        name: "背刺",
        icon: "ShacoP.png",
        description:
          "在目标的背后时，萨科的普攻和【E双面毒刃】会造成额外伤害。",
      },
      {
        id: "ShacoQ",
        name: "欺诈魔术",
        icon: "ShacoQ.png",
        description:
          "萨科传送并变为<keywordStealth>隐形</keywordStealth>，持续{{ stealthduration }}秒。使用<spellName>惊吓魔盒</spellName>或<spellName>幻像</spellName>不会打破<keywordStealth>隐形</keywordStealth>。<br /><br />萨科在<keywordStealth>隐形</keywordStealth>时的下次攻击造成额外的<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。如果从背后进行打击，那么这个攻击会暴击，造成{{ qcritdamagemod }}伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ShacoW",
        name: "惊吓魔盒",
        icon: "ShacoW.png",
        description:
          "萨科生成一个会在{{ e5 }}秒后潜行的陷阱，持续{{ trapduration }}秒。它会在有敌人靠近或显形时触发，<status>恐惧</status>附近的敌方英雄们{{ fearduration }}秒，或小兵和野怪{{ minionfearduration }}秒。<br /><br />一旦激活，陷阱就会在5秒里持续攻击所有附近的敌人们，造成<magicDamage>{{ aoedamage }}魔法伤害</magicDamage>，如果只攻击一个敌人则为<magicDamage>{{ stdamage }}伤害</magicDamage>。<br /><br />惊吓魔盒的攻击对野怪造成额外的<magicDamage>{{ monsterbonusdamage }}</magicDamage>伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ShacoE",
        name: "双面毒刃",
        icon: "ShacoE.png",
        description:
          "<spellPassive>被动：</spellPassive>当这个技能未进入冷却阶段时，萨科的攻击会对目标造成持续{{ slowdurationpassive }}秒的{{ slowamount*-100 }}%<status>减速</status>。<br /><br /><spellActive>主动：</spellActive>萨科扔出一把毒刃，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ slowdurationactive }}秒的{{ slowamount*-100 }}%<status>减速</status>。如果目标低于{{ executehealththreshold*100 }}%生命值，毒刃会转而造成<magicDamage>{{ totalexecutedamage }}伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ShacoR",
        name: "幻像",
        icon: "ShacoR.png",
        description:
          "萨科暂时消失，然后重新出现并制造一个持续{{ clonelifetime }}秒的幻像，幻像会在死亡时爆炸，对附近的敌人造成<magicDamage>{{ explosiontotaldamage }}魔法伤害</magicDamage>并生成三个立即触发的小型<spellName>惊吓魔盒</spellName>。幻像造成萨科{{ cloneaadamagepercent*100 }}%的伤害并承受{{ cloneincomingdamagepercent*100 }}%额外伤害。<br /><br />小型<spellName>惊吓魔盒</spellName>造成<magicDamage>{{ aoedamage }}魔法伤害</magicDamage>，如果只攻击一个敌人则为<magicDamage>{{ stdamage }}魔法伤害</magicDamage>，并让敌人<status>恐惧</status>{{ boxfearduration }}秒。<br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ShacoP: null,
      ShacoQ: null,
      ShacoW: null,
      ShacoE: null,
      ShacoR: null,
    },
  };
}
export { importModule };
