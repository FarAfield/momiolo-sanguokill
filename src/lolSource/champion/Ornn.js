function importModule() {
  return {
    type: "champion",
    id: "Ornn",
    title: "山隐之焰",
    name: "奥恩",
    avatar: "Ornn.png",
    skins: [
      { name: "default", skin: "Ornn_0.jpg" },
      { name: "雷霆领主 奥恩", skin: "Ornn_1.jpg" },
      { name: "永恒之森 奥恩", skin: "Ornn_2.jpg" },
      { name: "太空律动 “创乐之神” 奥恩", skin: "Ornn_11.jpg" },
      { name: "嘟！嘟 ！奥恩", skin: "Ornn_20.jpg" },
    ],
    spells: [
      {
        id: "OrnnP",
        name: "活体锻炉",
        icon: "OrnnP.png",
        description:
          "奥恩可使所有来源的护甲和魔抗加成获得额外提升。<br><br>奥恩可在地图的任意位置上花费金钱来锻造非消耗品的装备。<br><br>此外，他能为他自己和友方英雄打造杰作武器。",
      },
      {
        id: "OrnnQ",
        name: "火山突堑",
        icon: "OrnnQ.png",
        description:
          "奥恩猛砸地面，创造一道裂隙来造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，以及持续{{ e6 }}秒的{{ e5 }}%<status>减速</status>。一根熔岩之柱会在裂隙的终点处形成，持续{{ e3 }}秒。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "OrnnW",
        name: "风箱炎息",
        icon: "OrnnW.png",
        description:
          "奥恩向前不可阻挡地重踏，同时喷吐炎息，在{{ breathduration }}秒里持续造成共<magicDamage>{{ maxpercenthpperticktooltip }}%最大生命值的魔法伤害</magicDamage>。被最后一道炎息命中的敌人，会变成<keywordMajor>易碎</keywordMajor>效果，持续{{ brittleduration }}秒。<br /><br />对<keywordMajor>易碎</keywordMajor>状态的敌人施加的下一个<status>定身</status>效果将使该效果的持续时间提升30%并对目标造成额外的<magicDamage>{{ brittlepercentmaxhpcalc }}最大生命值的魔法伤害</magicDamage>。奥恩的普攻会<status>击退</status><keywordMajor>易碎</keywordMajor>状态下的目标，并造成额外伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "OrnnE",
        name: "炽烈冲锋",
        icon: "OrnnE.png",
        description:
          "奥恩冲锋，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。如果奥恩撞到了地形，则会引发冲击波，<status>击飞</status>敌人{{ knockupduration }}秒并将此技能的伤害施加给那些未被冲锋命中的敌人们。<br /><br />奥恩的冲锋会摧毁熔岩之柱和由敌方英雄创造的地形。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "OrnnR",
        name: "熔铸之神的召唤",
        icon: "OrnnR.png",
        description:
          "奥恩召唤一个巨大的岩浆元素来疾奔向他，造成<magicDamage>{{ rdamagecalc }}魔法伤害</magicDamage>，对命中的敌人们施加持续{{ brittledurationtooltiponly }}秒的<keywordMajor>易碎</keywordMajor>和{{ rslowpercentbasepremath }}%<status>减速</status>。<br /><br />奥恩可以<recast>再次施放</recast>这个技能来用头槌进行冲刺。如果他冲刺到了岩浆元素，那么他可以使它重新导向并强化它，使它<status>击飞</status>首个命中的敌方英雄{{ rstunduration }}秒和后续的英雄们{{ minstun }}秒。岩浆元素还会造成<magicDamage>{{ rdamagecalc }}魔法伤害</magicDamage>并施加<keywordMajor>易碎</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      OrnnP: null,
      OrnnQ: null,
      OrnnW: null,
      OrnnE: null,
      OrnnR: null,
    },
  };
}
export { importModule };
