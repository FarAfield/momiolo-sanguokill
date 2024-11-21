function importModule() {
  return {
    type: "champion",
    id: "Sion",
    title: "亡灵战神",
    name: "赛恩",
    avatar: "Sion.png",
    skins: [
      { name: "default", skin: "Sion_0.jpg" },
      { name: "钢铁终结者 赛恩", skin: "Sion_1.jpg" },
      { name: "武仙座海格力斯 赛恩", skin: "Sion_2.jpg" },
      { name: "原野伐木工 赛恩", skin: "Sion_3.jpg" },
      { name: "战争机器 赛恩", skin: "Sion_4.jpg" },
      { name: "霸天零式 赛恩", skin: "Sion_5.jpg" },
      { name: "创世之神 赛恩", skin: "Sion_14.jpg" },
      { name: "黯晶战神 赛恩", skin: "Sion_22.jpg" },
      { name: "西部魔影 合成天使 赛恩", skin: "Sion_30.jpg" },
      { name: "星界圣骑 赛恩", skin: "Sion_40.jpg" },
    ],
    spells: [
      {
        id: "SionP",
        name: "死亡荣耀",
        icon: "SionP.png",
        description:
          "在被击杀后，赛恩会回光返照一段时间并且生命值会快速衰减。在此期间，他的攻击会变得超快，获得生命偷取，并且每次攻击会额外造成基于目标最大生命值的额外伤害。",
      },
      {
        id: "SionQ",
        name: "残虐猛击",
        icon: "SionQ.png",
        description:
          "<charge>开始蓄力</charge>：赛恩开始为一次重型猛击蓄力，最多2秒。<br /><br /><release>释放</release>：赛恩将斧头重重砸下，暂时<status>减速</status>并基于蓄力时间造成<physicalDamage>{{ mindamagetotal }}到{{ maxdamagetotal }}物理伤害</physicalDamage>。如果赛恩蓄力了至少1秒，那么敌人还会被<status>击飞</status>，并基于蓄力时间被<status>晕眩</status>{{ basestuntime }}到2.25秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SionW",
        name: "灵魂熔炉",
        icon: "SionW.png",
        description:
          "<spellPassive>被动</spellPassive>：赛恩每击杀一个单位就会获得<scaleHealth>{{ hpperkill }}最大生命值</scaleHealth>，或在参与击杀英雄、击杀大型小兵或大型野怪后获得{{ hpperchampkill }}最大生命值。<br /><br /><spellActive>主动</spellActive>：赛恩获得<shield>{{ totalshield }}护盾值</shield>，持续6秒。在{{ e7 }}秒后，如果护盾仍然存在，那么赛恩就能<recast>再次施放</recast>来引爆护盾，造成<magicDamage>{{ totaldamage }}外加{{ e4 }}%最大生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SionE",
        name: "杀手怒吼",
        icon: "SionE.png",
        description:
          "赛恩发射一道冲击波，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamount }}%<status>减速</status>，并移除<scaleArmor>{{ armorshred }}%护甲</scaleArmor>，持续{{ armorshredduration }}秒。被命中的非英雄单位会被<status>击退</status>。被<status>击退</status>的单位会在击中其他敌人时造成等额伤害和效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SionR",
        name: "蛮横冲撞",
        icon: "SionR.png",
        description:
          "赛恩朝着一个方向不可阻挡地冲锋8秒，可用鼠标指针来调整方向。赛恩会在碰撞到一名敌方英雄或墙体后、或是<recast>再次施放</recast>此技能后停下。 <br /><br />在冲锋结束时，赛恩基于行进距离造成<physicalDamage>{{ mindamagetotal }}到{{ maxdamagetotal }}物理伤害</physicalDamage>。紧靠着赛恩的敌人们会基于赛恩的行进距离被<status>晕眩</status>{{ minstunduration }}到{{ maxstunduration }}秒。更大范围内的敌人们会被<status>减速</status>{{ slowamount }}%，持续3秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SionP: null,
      SionQ: null,
      SionW: null,
      SionE: null,
      SionR: null,
    },
  };
}
export { importModule };
