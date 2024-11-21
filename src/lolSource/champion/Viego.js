function importModule() {
  return {
    type: "champion",
    id: "Viego",
    title: "破败之王",
    name: "佛耶戈",
    avatar: "Viego.png",
    skins: [
      { name: "default", skin: "Viego_0.jpg" },
      { name: "福牛守护者 佛耶戈", skin: "Viego_1.jpg" },
      { name: "五杀摇滚之噪音 佛耶戈", skin: "Viego_10.jpg" },
      { name: "EDG 佛耶戈", skin: "Viego_19.jpg" },
      { name: "国王 佛耶戈", skin: "Viego_21.jpg" },
      { name: "斗魂觉醒 佛耶戈", skin: "Viego_30.jpg" },
      { name: "2024 全球总决赛 佛耶戈", skin: "Viego_37.jpg" },
    ],
    spells: [
      {
        id: "ViegoP",
        name: "君命已决",
        icon: "ViegoP.png",
        description:
          "倒在佛耶戈面前的敌方英雄们会变为幽魂。通过攻击一个幽魂，佛耶戈可以暂时夺取该英雄躯体的控制权，获得相当于他目标一部分最大生命值的治疗效果并获得该英雄的基础技能和装备的使用权。他会将其终极技能替换为他自己终极技能的一次免费施放。",
      },
      {
        id: "ViegoQ",
        name: "破败王剑",
        icon: "ViegoQ.png",
        description:
          "<spellPassive>被动：</spellPassive>佛耶戈的攻击造成额外的<physicalDamage>{{ totalpercenthealthonhit }}当前生命值的物理伤害</physicalDamage>。如果敌人近期被他用一个技能伤害过，那么他对该敌人的第一次攻击会进行两次打击，造成<physicalDamage>{{ secondattackdamage }}物理伤害</physicalDamage>并回复<healing>{{ healmodvschamps*100 }}%实际伤害值的生命值</healing>。这些被动加成会在<keywordMajor>占据</keywordMajor>期间保留。<br /><br /><spellActive>主动：</spellActive>佛耶戈向前戳刺，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ViegoW",
        name: "千载幽咽",
        icon: "ViegoW.png",
        description:
          "<charge>开始蓄力：</charge>佛耶戈开始聚集黑雾，自身<status>减速</status>{{ selfslowpercent*100 }}%。<br /><br /><release>释放：</release>佛耶戈向前冲刺并将已聚集的黑雾猛掷出去。对命中的第一个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，并基于蓄力时间对其造成{{ stunduration }}到{{ maxstuntt }}秒<status>晕眩</status> 。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ViegoE",
        name: "茫茫焦土",
        icon: "ViegoE.png",
        description:
          "佛耶戈向前派出一个幽鬼去萦绕命中的第一个地形，用黑雾将其笼罩{{ mistduration }}秒。佛耶戈在黑雾中时会获得<keywordStealth>伪装</keywordStealth>，<speed>{{ totalmovespeed }}移动速度</speed>，和<attackSpeed>{{ attackspeed*100 }}%攻击速度</attackSpeed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ViegoR",
        name: "痛贯天灵",
        icon: "ViegoR.png",
        description:
          "佛耶戈遗弃他当前<keywordMajor>占据</keywordMajor>的任一灵魂并传送。在抵达时，他会攻击当前生命值百分比最低的英雄，暂时使其<status>减速</status>{{ slowpercent*100 }}%并造成<physicalDamage>{{ totaldamage }}+{{ totalpercenthealth }}%已损失生命值的物理伤害</physicalDamage>。附近的其他敌人会被<status>击退</status>并受到<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ViegoP: null,
      ViegoQ: null,
      ViegoW: null,
      ViegoE: null,
      ViegoR: null,
    },
  };
}
export { importModule };
