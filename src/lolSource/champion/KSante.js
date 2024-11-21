function importModule() {
  return {
    type: "champion",
    id: "KSante",
    title: "纳祖芒荣耀",
    name: "奎桑提",
    avatar: "KSante.png",
    skins: [
      { name: "default", skin: "KSante_0.jpg" },
      { name: "至高天 奎桑提", skin: "KSante_1.jpg" },
      { name: "至臻 至高天 奎桑提", skin: "KSante_2.jpg" },
      { name: "心之钢 奎桑提", skin: "KSante_8.jpg" },
    ],
    spells: [
      {
        id: "KSanteP",
        name: "血性本能",
        icon: "KSanteP.png",
        description:
          "奎桑提的技能会标记目标来使他的下一次攻击对其造成更多伤害。<br><br>在全盛姿态下，奎桑提的所有攻击和技能造成更多伤害。",
      },
      {
        id: "KSanteQ",
        name: "无双陀斧",
        icon: "KSanteQ.png",
        description:
          "奎桑提猛击他的武器，对敌人们造成<physicalDamage>{{ basedamage }}物理伤害</physicalDamage>和持续{{ slowduration }}秒的{{ slowpercent*100 }}%<status>减速</status>。如果他命中了敌人，那么他会获得一层持续{{ recastwindow }}秒的【无双陀斧】。在2层时，他会转而发射一道冲击波来对敌人们造成持续{{ stunduration }}秒的<status>晕眩</status>和<status>拉拽</status>。<br /><br /><keywordMajor>全盛姿态</keywordMajor>：冷却时间缩短{{ rcooldownreduction.0*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KSanteW",
        name: "辟路先锋",
        icon: "KSanteW.png",
        description:
          "奎桑提架起武器{{ mindurationtooltip }}-{{ maxduration.1 }}秒，变为不可阻挡，并使即将到来的伤害降低{{ damagereduction*100 }}%。然后，他会向前猛撞，造成<physicalDamage>{{ basedamage }} + {{ totalmaxhealthdamage }}最大生命值的物理伤害</physicalDamage>。会对命中的敌人们造成<status>击退</status>和{{ minknockbackduration }}-{{ maxknockbackduration }}秒<status>晕眩</status>(基于蓄力时间)。<br /><br /><keywordMajor>全盛姿态：</keywordMajor>冷却时间会刷新。造成额外的{{ rdamageincreasemin*100 }}-{{ rdamageincreasemax*100 }}%伤害(伤害类型为<trueDamage>真实伤害</trueDamage>，幅度基于蓄力时间)，伤害减免提升至{{ rdamagereduction*100 }}%并且冲刺速度提升，但不再造成<status>击退</status>或<status>晕眩</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KSanteE",
        name: "大步驰援",
        icon: "KSanteE.png",
        description:
          "奎桑提进行冲刺，获得持续{{ shieldduration }}秒的<shield>{{ totalshield }}护盾值</shield>。如果冲刺至一名友方英雄处，那么冲刺距离会显著提升并且该友方英雄也会<shield>获得护盾值</shield>。<br /><br /><keywordMajor>全盛姿态</keywordMajor>：冷却时间缩短{{ cooldownmodao*100 }}%并且冲刺速度提升。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KSanteR",
        name: "傲岸雄姿",
        icon: "KSanteR.png",
        description:
          "奎桑提分开他的陀斧以<status>击退</status>一名敌方英雄，造成<physicalDamage>{{ basedamage }}物理伤害</physicalDamage>，然后冲刺至其后方并获得持续{{ alloutduration }}秒的<keywordMajor>全盛姿态</keywordMajor>。如果该敌人将要命中一段墙体，则会被<status>击退</status>至墙体后，并且奎桑提会对其再次造成<physicalDamage>{{ totaldamageslamdown }}物理伤害</physicalDamage>。<br /><br />在<keywordMajor>全盛姿态</keywordMajor>下，奎桑提的技能会获得升级并且他获得<attackSpeed>{{ attackspeed*100 }}%攻击速度</attackSpeed>、{{ armorpenpercent*100 }}%额外护甲穿透、以及<omnivamp>{{ omnivamp*100 }}%全能吸血</omnivamp>，但失去<healing>{{ healthlost*100 }}%最大生命值</healing>、<scaleArmor>{{ defenseslost*100 }}%额外护甲</scaleArmor>、以及<scaleMR>{{ defenseslost*100 }}%额外魔法抗性</scaleMR>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KSanteP: null,
      KSanteQ: null,
      KSanteW: null,
      KSanteE: null,
      KSanteR: null,
    },
  };
}
export { importModule };
