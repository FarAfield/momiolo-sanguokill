function importModule() {
  return {
    type: "champion",
    id: "Poppy",
    title: "圣锤之毅",
    name: "波比",
    avatar: "Poppy.png",
    skins: [
      { name: "default", skin: "Poppy_0.jpg" },
      { name: "诺克萨斯 波比", skin: "Poppy_1.jpg" },
      { name: "波比的巧克力工坊", skin: "Poppy_2.jpg" },
      { name: "宗师级锻造训练师", skin: "Poppy_3.jpg" },
      { name: "圣诞玩偶 波比", skin: "Poppy_4.jpg" },
      { name: "军神战甲 波比", skin: "Poppy_5.jpg" },
      { name: "血色之锤 波比", skin: "Poppy_6.jpg" },
      { name: "星之守护者 波比", skin: "Poppy_7.jpg" },
      { name: "冰雪驯鹿 波比", skin: "Poppy_14.jpg" },
      { name: "海克斯科技 波比", skin: "Poppy_15.jpg" },
      { name: "宇航员 波比", skin: "Poppy_16.jpg" },
      { name: "魅惑女巫 波比", skin: "Poppy_24.jpg" },
      { name: "咖啡甜心 波比", skin: "Poppy_33.jpg" },
    ],
    spells: [
      {
        id: "PoppyP",
        name: "钢铁大使",
        icon: "PoppyP.png",
        description:
          "波比扔出她的圆盾，圆盾会在命中目标后弹起。波比可以捡起圆盾来获得一个短暂的护盾效果。",
      },
      {
        id: "PoppyQ",
        name: "圣锤猛击",
        icon: "PoppyQ.png",
        description:
          "波比猛砸地面，造成<physicalDamage>{{ basedamage }}</physicalDamage>外加<physicalDamage>{{ healthdamagepercent }}%最大生命值的物理伤害</physicalDamage>并使该地面变得不稳定。 <br /><br />不稳定区域会使敌人<status>减速</status>{{ e3 }}%并在{{ e4 }}秒后喷发，再次造成<physicalDamage>{{ basedamage }}</physicalDamage>外加<physicalDamage>{{ healthdamagepercent }}%最大生命值的物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "PoppyW",
        name: "坚定风采",
        icon: "PoppyW.png",
        description:
          "<spellPassive>被动：</spellPassive>波比获得<scaleArmor>{{ bonusarmor }}护甲</scaleArmor>和<scaleMR>{{ bonusmr }}魔法抗性</scaleMR>。在波比低于{{ passiveempoweredhealthpercent*100 }}%生命值时，这个加成会翻倍。<br /><br /><spellActive>主动：</spellActive>波比获得<speed>{{ e2 }}%移动速度</speed>并投射出一个环绕自身的领域，持续{{ e1 }}秒，该领域可中断敌人的冲刺。被领域中断的敌人们会受到持续{{ groundingduration }}秒的<status>缚地</status>和{{ slowamount*-100 }}%<status>减速</status>，以及<magicDamage>{{ interruptdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "PoppyE",
        name: "英勇冲锋",
        icon: "PoppyE.png",
        description:
          "波比擒抱一名敌人，造成<physicalDamage>{{ tackledamage }}物理伤害</physicalDamage>并将该敌人带向前方。如果波比将目标擒抱到地形上，那么该敌人会被<status>晕眩</status>{{ e3 }}秒并受到额外的<physicalDamage>{{ tackledamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "PoppyR",
        name: "持卫的裁决",
        icon: "PoppyR.png",
        description:
          "<charge>开始施放：</charge>波比开始为她的战锤蓄力，至多{{ channelmaxduration }}秒，自身<status>减速</status>{{ selfslow }}%。<br /><br /><release>释放：</release>波比猛砸地面，生成一道冲击波，来对命中的第一个敌方英雄及其身边的敌人们造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>，将他们朝着他们的水晶枢纽处<status>击退</status>，并使他们在飞行时处在不可被选取状态。冲击波距离和<status>击退</status>距离受益于蓄力时长。<br /><br />未蓄力的挥锤造成<physicalDamage>{{ halfdamage }}物理伤害</physicalDamage>和持续{{ knockupdurationsnap }}秒的<status>击飞</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      PoppyP: null,
      PoppyQ: null,
      PoppyW: null,
      PoppyE: null,
      PoppyR: null,
    },
  };
}
export { importModule };
