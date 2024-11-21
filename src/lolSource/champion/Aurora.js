function importModule() {
  return {
    type: "champion",
    id: "Aurora",
    title: "双界灵兔",
    name: "阿萝拉",
    avatar: "Aurora.png",
    skins: [
      { name: "default", skin: "Aurora_0.jpg" },
      { name: "幻灵战斗兔 阿萝拉", skin: "Aurora_1.jpg" },
    ],
    spells: [
      {
        id: "AuroraP",
        name: "驱灵奇术",
        icon: "AuroraP.png",
        description:
          "阿萝拉的技能或攻击伤害能从敌人身上抽离出灵物。被抽离的灵物会跟在阿萝拉身边，为她恢复生命值并给予她额外移动速度。",
      },
      {
        id: "AuroraQ",
        name: "飞去来咒",
        icon: "AuroraQ.png",
        description:
          "朝一个方向发射诅咒能量，对沿途所有敌人造成<magicDamage>{{ damage }}魔法伤害</magicDamage>和持续{{ markduration }}秒的诅咒印记。<br /><br /><recast>再次施放：</recast>终止诅咒，将该敌人的一部分灵魂抽回到自己身上，对途经的敌人造成至多<magicDamage>{{ q2damagemax }}魔法伤害</magicDamage>(基于其已损失生命值)。第一次命中后的伤害降低至20%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AuroraW",
        name: "灵纱洞开",
        icon: "AuroraW.png",
        description:
          "跳向一个方向。落地时，进入精神领域，<keywordStealth>隐形</keywordStealth>{{ invisduration }}秒并进入<keywordMajor>双界行者</keywordMajor>状态。<br /><br />参与击杀一个敌方英雄后，会重置该技能的冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AuroraE",
        name: "怪奇喷涌",
        icon: "AuroraE.png",
        description:
          "打开界域之窗，施放出一道灵魂魔法洪流，对区域内的所有敌人造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowpercent*-100 }}%<status>减速</status>（减速效果持续衰减）。<br /><br />施放该技能后，阿萝拉会向后位移一小段距离。<br /><br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AuroraR",
        name: "双界合一",
        icon: "AuroraR.png",
        description:
          "跳向一个方向。落地时，阿萝拉将双界合二为一，发出一道灵魂能量激波，对命中的敌人们造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>和持续2秒的{{ slowpercent*-100 }}%<status>减速</status>。<br /><br />交界领域会持续存在{{ areaduration }}秒，强化阿萝拉的<keywordMajor>双界行者</keywordMajor>效果，并让她能够从区域边缘传送至另一侧边缘。<br /><br />任何尝试进入或离开该区域的敌人都会被推向中心，同时获得持续{{ stunduration }}秒的{{ exitslowpercent*-100 }}%<status>减速</status>。<br /><br />阿萝拉可以<recast>再次施放</recast>这个技能来提前结束区域效果。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AuroraP: null,
      AuroraQ: null,
      AuroraW: null,
      AuroraE: null,
      AuroraR: null,
    },
  };
}
export { importModule };
