function importModule() {
  return {
    type: "champion",
    id: "Skarner",
    title: "上古领主",
    name: "斯卡纳",
    avatar: "Skarner.png",
    skins: [
      { name: "default", skin: "Skarner_0.jpg" },
      { name: "沙暴巨蝎 斯卡纳", skin: "Skarner_1.jpg" },
      { name: "远土之灵 斯卡纳", skin: "Skarner_2.jpg" },
      { name: "战地机甲 斯卡纳", skin: "Skarner_3.jpg" },
      { name: "沙之守护 斯卡纳", skin: "Skarner_4.jpg" },
      { name: "天蝎星神 斯卡纳", skin: "Skarner_5.jpg" },
    ],
    spells: [
      {
        id: "SkarnerP",
        name: "战栗",
        icon: "SkarnerP.png",
        description:
          "斯卡纳的普通攻击、撼地、擎天和毒刺贯体都会施加战栗效果。在满层战栗时，敌人们会在其持续期间内受到最大生命值魔法伤害。",
      },
      {
        id: "SkarnerQ",
        name: "撼地 / 擎天",
        icon: "SkarnerQ.png",
        description:
          "斯卡纳从地面掘出一块巨石，使他的下三次攻击拥有<attackSpeed>{{ attackspeed*100 }}%攻击速度</attackSpeed>并且对附近敌人们造成<physicalDamage>{{ abilitydamage }}物理伤害</physicalDamage>。 他的最后一次攻击将对被影响的敌人们造成额外的<physicalDamage>{{ maxhppercent*100 }}%最大生命值物理伤害</physicalDamage>和持续{{ slowduration }}秒的{{ slowpercent*100 }}%<status>减速</status>。<br /><br /><recast>再次施放：</recast>斯卡纳结束这个技能并扔出他的巨石，对命中的第一个敌人——及其周围的其它敌人们——造成<physicalDamage>{{ spell.skarnerq:abilitydamage }} + {{ spell.skarnerq:maxhppercent*100 }}%最大生命值物理伤害</physicalDamage>和持续{{ spell.skarnerq:slowduration }}秒的{{ spell.skarnerq:slowpercent*100 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SkarnerW",
        name: "震地壁垒",
        icon: "SkarnerW.png",
        description:
          "斯卡纳获得持续{{ shieldduration }}秒的<shield>{{ initialshield }}护盾值</shield>并引发一阵地震，来对附近的敌人们造成<magicDamage>{{ damage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ sloweffect*-100 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SkarnerE",
        name: "以绪塔尔冲击",
        icon: "SkarnerE.png",
        description:
          "斯卡纳向前冲锋，朝着所选方向行驶并无视地形。如果斯卡纳碰上了一个英雄或大型野怪，那么他会在冲锋的剩余期间对其进行拖拽。<br /><br />拖着一个敌人碰撞到一个墙体时，会对该敌人造成<physicalDamage>{{ pindamage }}物理伤害</physicalDamage>和{{ stunduration }}秒<status>晕眩</status>。<br /><br />斯卡纳可以<recast>再次释放</recast>这个技能来提前结束他的冲锋。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SkarnerR",
        name: "毒刺贯体",
        icon: "SkarnerR.png",
        description:
          "斯卡纳向前甩出他的尾巴，对最先命中的3个英雄造成<magicDamage>{{ damage }}魔法伤害</magicDamage>和{{ duration }}秒<status>压制</status>。那些被命中的英雄会在这个技能的持续期间被斯卡纳拖行。<br /><br />如果斯卡纳至少命中了一个英雄，那么他会获得持续{{ speedboostduration }}秒的<speed>{{ speedboostamount*100 }}%移动速度</speed>。<br /><br />如果<spellName>撼地</spellName>处于激活状态，那么斯卡纳将先施放<spellName>擎天</spellName>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SkarnerP: null,
      SkarnerQ: null,
      SkarnerW: null,
      SkarnerE: null,
      SkarnerR: null,
    },
  };
}
export { importModule };
