function importModule() {
  return {
    type: "champion",
    id: "Annie",
    title: "黑暗之女",
    name: "安妮",
    avatar: "Annie.png",
    skins: [
      { name: "default", skin: "Annie_0.jpg" },
      { name: "哥特萝莉 安妮", skin: "Annie_1.jpg" },
      { name: "小红帽 安妮", skin: "Annie_2.jpg" },
      { name: "安妮梦游仙境", skin: "Annie_3.jpg" },
      { name: "舞会公主 安妮", skin: "Annie_4.jpg" },
      { name: "冰霜烈焰 安妮", skin: "Annie_5.jpg" },
      { name: "安伯斯与提妮", skin: "Annie_6.jpg" },
      { name: "科学怪熊的新娘 安妮", skin: "Annie_7.jpg" },
      { name: "“你看见过我的熊猫吗？”安妮", skin: "Annie_8.jpg" },
      { name: "甜心宝贝 安妮", skin: "Annie_9.jpg" },
      { name: "海克斯科技 安妮", skin: "Annie_10.jpg" },
      { name: "银河魔装机神 安妮", skin: "Annie_11.jpg" },
      { name: "十周年纪念 安妮", skin: "Annie_12.jpg" },
      { name: "福牛守护者 安妮", skin: "Annie_13.jpg" },
      { name: "咖啡甜心 安妮", skin: "Annie_22.jpg" },
      { name: "魔域梦魇 安妮", skin: "Annie_31.jpg" },
      { name: "北极星使者 安妮", skin: "Annie_40.jpg" },
      { name: "战斗公主 安妮", skin: "Annie_50.jpg" },
    ],
    spells: [
      {
        id: "AnnieP",
        name: "嗜火",
        icon: "AnnieP.png",
        description:
          "在施放4个技能后，安妮的下一次伤害类技能就会对目标造成短暂的晕眩效果。<br><br>安妮在游戏开始时和重生时，会带着满层的【嗜火】。",
      },
      {
        id: "AnnieQ",
        name: "碎裂之火",
        icon: "AnnieQ.png",
        description:
          "安妮投出一团火球，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。如果目标阵亡，那么安妮会返还法力值并缩短50%冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AnnieW",
        name: "焚烧",
        icon: "AnnieW.png",
        description:
          "安妮投射出一阵火焰波，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AnnieE",
        name: "熔岩护盾",
        icon: "AnnieE.png",
        description:
          "安妮为一名友方英雄提供持续{{ shieldduration }}秒的<shield>{{ shieldblocktotal }}护盾值</shield>，以及在{{ movementspeedduration }}秒里持续衰减的<speed>{{ movespeedcalc }}移动速度</speed>。当护盾处于激活状态时，敌人用攻击或技能对护盾造成伤害时会受到<magicDamage>{{ damagereturn }}魔法伤害</magicDamage>，每个护盾受到一次伤害。<br /><br />提伯斯在被召唤出来时总会获得<spellName>熔岩护盾</spellName>的效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AnnieR",
        name: "提伯斯之怒",
        icon: "AnnieR.png",
        description:
          "召唤提伯斯，对目标范围内的敌人造成<magicDamage>{{ initialburstdamage }}魔法伤害</magicDamage>。在接下来的{{ tibberslifetime }}秒里，提伯斯会灼烧附近的敌人，<magicDamage>每秒造成{{ tibbersauradamage }}魔法伤害</magicDamage>。<br /><br />提伯斯在以下情况下会变得暴怒：在被召唤出来时、在安妮晕眩一名敌方英雄时、以及在安妮阵亡时。在暴怒状态下，提伯斯获得<attackSpeed>275%攻击速度</attackSpeed>和在3秒里持续衰减的<speed>100%移动速度</speed>。<br /><br /><recast>再次施放：</recast>手动给提伯斯下达指令。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AnnieP: null,
      AnnieQ: null,
      AnnieW: null,
      AnnieE: null,
      AnnieR: null,
    },
  };
}
export { importModule };
