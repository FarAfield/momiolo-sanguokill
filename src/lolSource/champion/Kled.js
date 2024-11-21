function importModule() {
  return {
    type: "champion",
    id: "Kled",
    title: "暴怒骑士",
    name: "克烈",
    avatar: "Kled.png",
    skins: [
      { name: "default", skin: "Kled_0.jpg" },
      { name: "爵士 克烈", skin: "Kled_1.jpg" },
      { name: "克烈古拉伯爵", skin: "Kled_2.jpg" },
      { name: "黑暗骑士 克烈", skin: "Kled_9.jpg" },
      { name: "狗粮克烈", skin: "Kled_18.jpg" },
    ],
    spells: [
      {
        id: "KledP",
        name: "怯战蜥蜴斯嘎尔",
        icon: "KledP.png",
        description:
          "克烈的可靠坐骑——斯嘎尔——会为他承受伤害。当斯嘎尔的生命值耗尽时，会导致克烈进入非骑乘状态。额外生命值属性只会施加给斯嘎尔。<br><br>在非骑乘状态下时，克烈会更换若干技能并对英雄造成较少伤害。克烈可通过与敌人作战来回复斯嘎尔的勇气。在勇气到达满值时，克烈会骑着拥有部分生命值的斯嘎尔重回骑乘状态。",
      },
      {
        id: "KledQ",
        name: "飞索捕熊器",
        icon: "KledQ.png",
        description:
          "<keywordMajor>骑乘状态：</keywordMajor>克烈扔出一个捕熊器来钩住第一个命中的敌方英雄或大型野怪并造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。<br /><br />如果克烈在一名被钩住的敌人附近呆{{ e3 }}秒，那么他就会将该敌人拽向他，并造成<physicalDamage>{{ totalyankdamage }} 物理伤害</physicalDamage>，<status>拉拽</status>该敌人，造成持续{{ slowduration }}秒的{{ slowamount*-100 }}%<status>减速</status>，并施加持续{{ grievousduration }}秒的{{ grievousamount*100 }}%重伤。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KledW",
        name: "暴烈秉性",
        icon: "KledW.png",
        description:
          "<spellPassive>被动：</spellPassive>克烈的下次攻击会提供<attackSpeed>{{ e2 }}%攻击速度</attackSpeed>，持续4次攻击或{{ e6 }}秒。<br /><br />第四击造成额外的<physicalDamage>{{ e4 }}外加{{ percentdamage }}最大生命值的物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KledE",
        name: "比武",
        icon: "KledE.png",
        description:
          "克烈进行冲刺，对途经的敌人们造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，同时将小兵和小型野怪拉向他。<br /><br />如果这个技能命中了一名敌方英雄或大型野怪，那么克烈会获得持续{{ e4 }}秒的<speed>{{ e5 }}%移动速度</speed>并能在{{ e6 }}秒内<recast>再次施放</recast>这个技能来冲刺并穿过相同目标。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KledR",
        name: "冲啊——！！",
        icon: "KledR.png",
        description:
          "克烈冲向一个区域，留下一条路径，该路径可为友军们提供不断提升的<speed>移动速度</speed>。在开始冲锋后的2秒里，克烈会至多获得<shield>{{ maximumshield }}护盾值</shield>。斯嘎尔会撞击遇到的首个敌方英雄，造成<physicalDamage>{{ minimumdamagetooltip }}</physicalDamage>到<physicalDamage>{{ maximumchargedamage }}最大生命值的物理伤害</physicalDamage>(基于已移动的距离)和短暂的<status>击退</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KledP: null,
      KledQ: null,
      KledW: null,
      KledE: null,
      KledR: null,
    },
  };
}
export { importModule };
