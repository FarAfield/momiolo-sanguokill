function importModule() {
  return {
    type: "champion",
    id: "Senna",
    title: "涤魂圣枪",
    name: "赛娜",
    avatar: "Senna.png",
    skins: [
      { name: "default", skin: "Senna_0.jpg" },
      { name: "真实伤害 赛娜", skin: "Senna_1.jpg" },
      { name: "至臻 真实伤害 赛娜", skin: "Senna_9.jpg" },
      { name: "西部天使 赛娜", skin: "Senna_10.jpg" },
      { name: "源计划：魅灵 赛娜", skin: "Senna_16.jpg" },
      { name: "月蚀骑士 赛娜", skin: "Senna_26.jpg" },
      { name: "至臻 月蚀骑士 赛娜", skin: "Senna_27.jpg" },
      { name: "魅惑女巫 赛娜", skin: "Senna_36.jpg" },
      { name: "星之守护者 赛娜", skin: "Senna_46.jpg" },
      { name: "北极星神 赛娜", skin: "Senna_56.jpg" },
    ],
    spells: [
      {
        id: "SennaP",
        name: "赦除",
        icon: "SennaP.png",
        description:
          "当赛娜附近有单位死亡时，这些单位的灵魂会周期性地被黑雾所捕获。赛娜可以攻击这些灵魂来解脱他们，并吸收使他们困在死界的黑雾。黑雾会为她的圣枪提供燃料，提升她的攻击力、攻击距离和暴击几率。<br><br>赛娜的圣物火炮需要更长的射击时间，造成额外伤害，并暂时为她提供她目标的一部分移动速度。",
      },
      {
        id: "SennaQ",
        name: "黑暗洞灭",
        icon: "SennaQ.png",
        description:
          "赛娜发射一束洞灭之影来洞穿一名友军或一名敌人，对敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>和持续{{ slowduration }}秒的{{ totalslow }}<status>减速</status>。给友方英雄回复<healing>{{ totalheal }}生命值</healing>。<br /><br />攻击会使这个技能的冷却时间缩短{{ cdreductiononhit }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SennaW",
        name: "无尽厮守",
        icon: "SennaW.png",
        description:
          "赛娜向前发射一道黑雾，对命中的第一个敌人造成 <physicalDamage>{{ damage }}物理伤害</physicalDamage>。在{{ delaytime }}秒的延迟后，对目标及目标附近的其它敌人造成{{ rootduration }}秒<status>禁锢</status>效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SennaE",
        name: "黑雾咒附",
        icon: "SennaE.png",
        description:
          "赛娜融入一团黑雾，持续{{ buffduration }}秒，并变成幽魂。进入黑雾的友方英雄会变成<keywordStealth>伪装状态</keywordStealth>，并在离开时变成幽魂。幽魂获得<speed>{{ totalms }}移动速度</speed>，无法被选中，并且在附近没有敌方英雄时会隐藏自己的身份。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SennaR",
        name: "暗影燎原",
        icon: "SennaR.png",
        description:
          "赛娜发射一道光束，对命中的所有敌方英雄造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。在更广范围内被命中的友方英雄会获得<shield>{{ totalshield }}护盾值</shield>，持续{{ shieldduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SennaP: null,
      SennaQ: null,
      SennaW: null,
      SennaE: null,
      SennaR: null,
    },
  };
}
export { importModule };
