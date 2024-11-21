function importModule() {
  return {
    type: "champion",
    id: "Neeko",
    title: "万花通灵",
    name: "妮蔻",
    avatar: "Neeko.png",
    skins: [
      { name: "default", skin: "Neeko_0.jpg" },
      { name: "冬境仙灵 妮蔻", skin: "Neeko_1.jpg" },
      { name: "星之守护者 妮蔻", skin: "Neeko_10.jpg" },
      { name: "至臻 星之守护者 妮蔻", skin: "Neeko_11.jpg" },
      { name: "山海绘卷 妮蔻", skin: "Neeko_12.jpg" },
      { name: "至臻 星之守护者 妮蔻 (2022)", skin: "Neeko_21.jpg" },
      { name: "魅惑女巫 妮蔻", skin: "Neeko_22.jpg" },
      { name: "妖怪艺术家 妮蔻", skin: "Neeko_31.jpg" },
      { name: "超级COSPLAY粉丝 妮蔻", skin: "Neeko_40.jpg" },
    ],
    spells: [
      {
        id: "NeekoP",
        name: "天生幻魅",
        icon: "NeekoP.png",
        description:
          "妮蔻可以假扮成一名友方英雄。承受来自敌方英雄的伤害或是施放伤害型的技能都会打破这个假扮状态。",
      },
      {
        id: "NeekoQ",
        name: "盛开花种",
        icon: "NeekoQ.png",
        description:
          "妮蔻扔出一颗种子以造成<magicDamage>{{ explosiondamage }}魔法伤害</magicDamage>。如果种子击杀了一个单位或命中了一个英雄或大型野怪，那么它会再次盛开，造成<magicDamage>{{ seconddamage }}魔法伤害</magicDamage>。最多可额外盛开2次。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NeekoW",
        name: "两生花影",
        icon: "NeekoW.png",
        description:
          "<passive>被动：</passive>每第三次攻击造成<magicDamage>{{ passivebonusdamagecalc }}额外魔法伤害</magicDamage>并使妮蔻获得持续{{ passivehasteduration }}秒的<speed>{{ passivehaste }}%移动速度</speed>提升。<br /><br /><active>主动：</active>妮蔻<keywordStealth>隐形</keywordStealth>{{ stealthduration }}秒并投射出一个持续{{ cloneduration }}秒的复制体。妮蔻和复制体会获得持续{{ hasteduration }}秒的<speed>{{ haste }}%移动速度</speed> 。<br /><br /><rules>可通过使用“移动宠物点击”热键或通过<recast>再次施放</recast>这个技能来控制复制体。<br />复制体会镜像模仿她的技能施放、表情和回城。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NeekoE",
        name: "缠结倒刺",
        icon: "NeekoE.png",
        description:
          "妮蔻掷出一团倒刺，造成<magicDamage>{{ basedamage }}魔法伤害</magicDamage>和{{ minrootduration }}秒的<status>禁锢</status>效果。<br /><br />倒刺会在命中一名敌方英雄后强化，长得更大、动得更快、并且<status>禁锢</status>时长变为{{ maxrootduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NeekoR",
        name: "怒放",
        icon: "NeekoR.png",
        description:
          "在短暂延迟后，妮蔻会跃入空中，对所有附近的敌人造成{{ delayuntilexplosion }}秒<status>击飞</status>。然后她会猛然着陆，对附近的所有敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和{{ stunduration }}秒<status>晕眩</status>效果。<br /><br /><rules>如果妮蔻处于假扮状态时，那么这个技能的准备阶段不会被敌人看见。妮蔻会在施放这个技能的{{ delaybeforepassiveremoval }}秒后打破她的假扮状态。</rules>{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      NeekoP: null,
      NeekoQ: null,
      NeekoW: null,
      NeekoE: null,
      NeekoR: null,
    },
  };
}
export { importModule };
