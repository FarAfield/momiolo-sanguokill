function importModule() {
  return {
    type: "champion",
    id: "Riven",
    title: "放逐之刃",
    name: "锐雯",
    avatar: "Riven.png",
    skins: [
      { name: "default", skin: "Riven_0.jpg" },
      { name: "刺客信条 锐雯", skin: "Riven_1.jpg" },
      { name: "血色精锐 锐雯", skin: "Riven_2.jpg" },
      { name: "兔女郎 锐雯", skin: "Riven_3.jpg" },
      { name: "冠军之刃 锐雯", skin: "Riven_4.jpg" },
      { name: "替父从军 花木兰", skin: "Riven_5.jpg" },
      { name: "电玩勇者 锐雯", skin: "Riven_6.jpg" },
      { name: "冠军之刃 锐雯 2016", skin: "Riven_7.jpg" },
      { name: "黎明使者 锐雯", skin: "Riven_16.jpg" },
      { name: "未来战士 锐雯", skin: "Riven_18.jpg" },
      { name: "玉剑传说 武剑仙", skin: "Riven_20.jpg" },
      { name: "至臻 玉剑传说 武剑仙", skin: "Riven_22.jpg" },
      { name: "灵魂莲华 锐雯", skin: "Riven_23.jpg" },
      { name: "光明哨兵 锐雯", skin: "Riven_34.jpg" },
      { name: "幻灵战斗兔 锐雯", skin: "Riven_44.jpg" },
      { name: "至臻 玉剑传说 武剑仙 (2022)", skin: "Riven_45.jpg" },
      { name: "绝息圣堂 锐雯", skin: "Riven_55.jpg" },
      { name: "伏虎之力 锐雯", skin: "Riven_63.jpg" },
    ],
    spells: [
      {
        id: "RivenP",
        name: "符文之刃",
        icon: "RivenP.png",
        description:
          "锐雯的技能会为她的剑刃充能，并且她的普通攻击会消耗充能来造成额外伤害。",
      },
      {
        id: "RivenQ",
        name: "折翼之舞",
        icon: "RivenQ.png",
        description:
          "锐雯向前冲刺，造成<physicalDamage>{{ firstslashdamage }}物理伤害</physicalDamage>。她可以<recast>再次施放</recast>这个技能两次。第一次<recast>再次施放</recast>和初始效果相同，但第二次会有不同的效果：<br /><br /><recast>再次施放</recast>: 锐雯向前跃起并猛劈，对附近的敌人们造成<physicalDamage>{{ firstslashdamage }}物理伤害</physicalDamage>和0.75秒<status>击飞</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RivenW",
        name: "震魂怒吼",
        icon: "RivenW.png",
        description:
          "锐雯的剑爆发出一股符文能量，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>和{{ e5 }}秒<status>晕眩</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RivenE",
        name: "勇往直前",
        icon: "RivenE.png",
        description:
          "锐雯快速冲刺并获得持续1.5秒的<shield>{{ totalshield }}护盾值</shield>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RivenR",
        name: "放逐之锋",
        icon: "RivenR.png",
        description:
          "锐雯的武器激荡着灵体能量，为她提供<physicalDamage>{{ bonusad }}攻击力</physicalDamage>，并且伤害型技能和攻击获得距离提升，持续{{ duration }}秒。在此期间，她可以进行<recast>再次施放</recast>。<br /><br /><recast>再次施放</recast>：锐雯发射一道疾风斩来造成<physicalDamage>{{ mindamage }}</physicalDamage>到<physicalDamage>{{ maxdamage }}物理伤害</physicalDamage>，基于目标们的已损失生命值。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RivenP: null,
      RivenQ: null,
      RivenW: null,
      RivenE: null,
      RivenR: null,
    },
  };
}
export { importModule };
