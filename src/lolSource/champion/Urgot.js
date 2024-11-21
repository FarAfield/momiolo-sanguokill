function importModule() {
  return {
    type: "champion",
    id: "Urgot",
    title: "无畏战车",
    name: "厄加特",
    avatar: "Urgot.png",
    skins: [
      { name: "default", skin: "Urgot_0.jpg" },
      { name: "深渊巨蟹 厄加特", skin: "Urgot_1.jpg" },
      { name: "电锯狂人 厄加特", skin: "Urgot_2.jpg" },
      { name: "战地机甲 厄加特", skin: "Urgot_3.jpg" },
      { name: "西部魔影 厄加特", skin: "Urgot_9.jpg" },
      { name: "星之守护者COS 厄加特", skin: "Urgot_15.jpg" },
      { name: "魔域梦魇 厄加特", skin: "Urgot_23.jpg" },
    ],
    spells: [
      {
        id: "UrgotP",
        name: "回响烈焰",
        icon: "UrgotP.png",
        description:
          "厄加特的普攻和【净除】会周期性地触发他腿上的烈焰喷射，造成物理伤害。",
      },
      {
        id: "UrgotQ",
        name: "腐蚀电荷",
        icon: "UrgotQ.png",
        description:
          "厄加特发射一个爆炸性的电荷，对爆炸波及到的敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "UrgotW",
        name: "净除",
        icon: "UrgotW.png",
        description:
          "<spellPassive>被动：</spellPassive>厄加特的其它技能会将命中的最后一名敌方英雄标记5秒。<br /><br /><spellActive>主动：</spellActive>厄加特开始用他的链枪朝着相距最近的敌人开火，优先选择被标记的敌人。他每秒攻击目标{{ e8 }}次并且每次射击造成<physicalDamage>{{ damagepershot }}物理伤害</physicalDamage>。厄加特可以在开火时移动，并且拥有{{ e2 }}%<status>减速</status>抗性，但会失去<speed>{{ e5 }}移动速度</speed>。<br /><br />这个技能在点满技能等级后，可无限持续并且能<toggle>切换</toggle>开启状态和关闭状态。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "UrgotE",
        name: "鄙弃",
        icon: "UrgotE.png",
        description:
          "厄加特向前冲锋，获得持续{{ eshieldduration }}秒的<shield>{{ etotalshieldhealth }}护盾值</shield>。命中的第一个英雄会被<status>晕眩</status>{{ stunduration }}秒并被投向厄加特的身后。厄加特碰撞到的所有敌人都会受到<physicalDamage>{{ edamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "UrgotR",
        name: "超越死亡的恐惧",
        icon: "UrgotR.png",
        description:
          "厄加特发射一个炼金钻头来刺穿命中的第一个敌方英雄。造成<physicalDamage>{{ rcalculateddamage }}物理伤害</physicalDamage>和持续{{ rslowduration }}秒的<status>减速</status>，幅度为每1%已损失生命值提供1%，至多为{{ rmovespeedmod }}%。<br /><br />如果目标的生命值在被刺穿状态下跌至{{ rhealththreshold }}%生命值以下，厄加特就可以<recast>再次施放</recast>这个技能，来<status>压制</status>目标并将其拖过来。在接触到厄加特后，目标会被击杀并且附近敌人会被<status>恐惧</status>{{ rfearduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      UrgotP: null,
      UrgotQ: null,
      UrgotW: null,
      UrgotE: null,
      UrgotR: null,
    },
  };
}
export { importModule };
