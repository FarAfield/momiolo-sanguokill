function importModule() {
  return {
    type: "champion",
    id: "Vex",
    title: "愁云使者",
    name: "薇古丝",
    avatar: "Vex.png",
    skins: [
      { name: "default", skin: "Vex_0.jpg" },
      { name: "黎明使者 薇古丝", skin: "Vex_1.jpg" },
      { name: "至高天 薇古丝", skin: "Vex_10.jpg" },
    ],
    spells: [
      {
        id: "VexP",
        name: "终焉暮气",
        icon: "VexP.png",
        description:
          "薇古丝周期性地获得强化，使她的下一个基础技能可以恐惧敌人并打断冲刺。当一名附近的敌人冲刺时，薇古丝会施加一个标记，该标记可被消耗来造成额外伤害，并缩短她强化状态的冷却时间。",
      },
      {
        id: "VexQ",
        name: "寒心波云",
        icon: "VexQ.png",
        description:
          "薇古丝发射一道迷雾波，造成<magicDamage>{{ qdamagecalc }}魔法伤害</magicDamage>。在短暂的延迟后，迷雾波会变得更小更快。<br /><br />在命中敌人时会消耗其身上的<keywordMajor>暮气</keywordMajor>效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VexW",
        name: "生人勿近",
        icon: "VexW.png",
        description:
          "薇古丝获得持续{{ shieldduration }}秒的<shield>{{ shieldcalc }}护盾值</shield>并且放射一道冲击波来造成<magicDamage>{{ wdamagecalc }}魔法伤害</magicDamage>。<br /><br />在命中敌人时会消耗其身上的<keywordMajor>暮气</keywordMajor>效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VexE",
        name: "溟濛渐染",
        icon: "VexE.png",
        description:
          "薇古丝命令【黑影】飞向一个区域，在其飞行时提升其体型。在抵达后，它会造成<magicDamage>{{ edamagecalc }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。<br /><br />用这个技能击杀一个敌人，会使<keywordMajor>终焉暮气</keywordMajor>的冷却时间缩短{{ gloomcdnonchamptooltip*100 }}%。<br /><br />对命中的敌人们施加<keywordMajor>暮气</keywordMajor>效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VexR",
        name: "愁煞",
        icon: "VexR.png",
        description:
          "黑影激动地向前涌动，造成<magicDamage>{{ spell.vexr:rdamagecalc }}魔法伤害</magicDamage>并将命中的第一位敌方英雄标记4秒。<br /><br /><recast>再次施放</recast>：冲刺至被标记的英雄，在抵达时造成<magicDamage>{{ spell.vexr:recastdamagecalc }}魔法伤害</magicDamage>。<br /><br />如果被标记的英雄在受到此技能伤害后的{{ spell.vexr:takedownwindow }}秒内阵亡，那么这个技能的冷却时间会暂时重置。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: { VexP: null, VexQ: null, VexW: null, VexE: null, VexR: null },
  };
}
export { importModule };
