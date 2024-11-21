function importModule() {
  return {
    type: "champion",
    id: "Renekton",
    title: "荒漠屠夫",
    name: "雷克顿",
    avatar: "Renekton.png",
    skins: [
      { name: "default", skin: "Renekton_0.jpg" },
      { name: "星河战队 雷克顿", skin: "Renekton_1.jpg" },
      { name: "荒野之咬 雷克顿", skin: "Renekton_2.jpg" },
      { name: "血石战神 雷克顿", skin: "Renekton_3.jpg" },
      { name: "符文战神 雷克顿", skin: "Renekton_4.jpg" },
      { name: "枯萎之壤 雷克顿", skin: "Renekton_5.jpg" },
      { name: "泳池派对 雷克顿", skin: "Renekton_6.jpg" },
      { name: "猛龙 雷克顿", skin: "Renekton_7.jpg" },
      { name: "SKT T1 雷克顿", skin: "Renekton_8.jpg" },
      { name: "鳄霸 雷克顿", skin: "Renekton_9.jpg" },
      { name: "海克斯科技 雷克顿", skin: "Renekton_17.jpg" },
      { name: "黯晶巨鳄 雷克顿", skin: "Renekton_18.jpg" },
      { name: "源计划：泯灭 雷克顿", skin: "Renekton_26.jpg" },
      { name: "黎明使者 雷克顿", skin: "Renekton_33.jpg" },
      { name: "2023 全球总决赛 雷克顿", skin: "Renekton_42.jpg" },
    ],
    spells: [
      {
        id: "RenektonP",
        name: "怒之领域",
        icon: "RenektonP.png",
        description:
          "雷克顿的攻击会产生【怒气】，在它的生命值较低时产生更多【怒气】。【怒气】可以强化他的基础技能，使它们具有额外效果。",
      },
      {
        id: "RenektonQ",
        name: "巨鳄狂袭",
        icon: "RenektonQ.png",
        description:
          "雷克顿挥舞他的战刃，造成<physicalDamage>{{ basicdamage }}物理伤害</physicalDamage>，此外，每命中一个非英雄单位就会回复<healing>{{ nonchamphealing }}生命值</healing>，每命中一位英雄就会回复<healing>{{ champhealing }}</healing>(最多回复<healing>{{ e4 }}生命值</healing>)。他每命中一个非英雄单位还会生成<keywordMajor>2.5怒气</keywordMajor>，且每命中一位英雄生成<keywordMajor>10怒气</keywordMajor>(最多生成<keywordMajor>30怒气</keywordMajor>)。<br /><br /><keywordMajor>怒气加成</keywordMajor>：伤害提升至<physicalDamage>{{ empdamage }}物理伤害</physicalDamage>并且对非英雄单位的治疗效果提升至<healing>{{ empnonchamphealing }}生命值</healing>，对英雄的治疗效果提升至<healing>{{ empchamphealing }}生命值</healing>(最多回复<healing>{{ e9 }}生命值</healing>)。不会生成任何<keywordMajor>怒气</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RenektonW",
        name: "冷酷捕猎",
        icon: "RenektonW.png",
        description:
          "雷克顿的下次攻击会进行两次打击，造成{{ e3 }}秒<status>晕眩</status>和共计<physicalDamage>{{ basictotaldamage }}物理伤害</physicalDamage>。命中一名英雄会生成额外的<keywordMajor>{{ e7 }}怒气</keywordMajor>。<br /><br /><keywordMajor>怒气加成</keywordMajor>：雷克顿转而进行三次打击，摧毁<shield>护盾</shield>然后造成<physicalDamage>{{ emptotaldamage }}物理伤害</physicalDamage>和{{ e4 }}秒<status>晕眩</status>。不会生成任何<keywordMajor>怒气</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RenektonE",
        name: "横冲直撞",
        icon: "RenektonE.png",
        description:
          "雷克顿进行冲刺，造成<physicalDamage>{{ basicdamage }}物理伤害</physicalDamage>。他每命中一名非英雄单位就会生成<keywordMajor>{{ e4 }}怒气</keywordMajor>，每命中一位英雄就会生成<keywordMajor>{{ e5 }}怒气</keywordMajor>。如果至少命中一名敌人，那么雷克顿就能在{{ e8 }}秒内<recast>再次施放</recast>这个技能一次。<br /><br /><keywordMajor>怒气加成</keywordMajor>：<recast>再次施放</recast>的冲刺造成<physicalDamage>{{ empdamage }}物理伤害</physicalDamage>作为替代并移除<scaleArmor>{{ e2 }}%护甲</scaleArmor>，持续{{ e9 }}秒。不会生成<keywordMajor>怒气</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RenektonR",
        name: "终极统治",
        icon: "RenektonR.png",
        description:
          "雷克顿用黑暗能量笼罩自身，持续{{ buffduration }}秒，获得<healing>{{ healthgain }}最大生命值</healing>和<keywordMajor>{{ furyoncast }}怒气</keywordMajor>。在激活时，他每秒造成<magicDamage>{{ totaldamagepersecond }}魔法伤害</magicDamage>并获得<keywordMajor>{{ furypersecond }}怒气</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RenektonP: null,
      RenektonQ: null,
      RenektonW: null,
      RenektonE: null,
      RenektonR: null,
    },
  };
}
export { importModule };
