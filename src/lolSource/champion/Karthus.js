function importModule() {
  return {
    type: "champion",
    id: "Karthus",
    title: "死亡颂唱者",
    name: "卡尔萨斯",
    avatar: "Karthus.png",
    skins: [
      { name: "default", skin: "Karthus_0.jpg" },
      { name: "幽灵幻影 卡尔萨斯", skin: "Karthus_1.jpg" },
      { name: "自由女神 卡尔萨斯", skin: "Karthus_2.jpg" },
      { name: "死神 卡尔萨斯", skin: "Karthus_3.jpg" },
      { name: "五杀摇滚主唱 卡尔萨斯", skin: "Karthus_4.jpg" },
      { name: "Fnatic 卡尔萨斯", skin: "Karthus_5.jpg" },
      { name: "卡尔萨斯·祸害之光", skin: "Karthus_9.jpg" },
      { name: "地狱火 卡尔萨斯", skin: "Karthus_10.jpg" },
      { name: "五杀摇滚 III：遗失的章节 卡尔萨斯", skin: "Karthus_17.jpg" },
      { name: "永恒之森 卡尔萨斯", skin: "Karthus_26.jpg" },
    ],
    spells: [
      {
        id: "KarthusP",
        name: "死亡契约",
        icon: "KarthusP.png",
        description: "在死亡时，卡尔萨斯会化为一个灵体，能够继续施放技能。",
      },
      {
        id: "KarthusQ",
        name: "荒芜",
        icon: "KarthusQ.png",
        description:
          "卡尔萨斯生成一道魔法爆裂，造成<magicDamage>{{ qdamage }}魔法伤害</magicDamage>。如果爆裂仅命中了一名敌人，它会转而造成<magicDamage>{{ qsingletargetdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KarthusW",
        name: "痛苦之墙",
        icon: "KarthusW.png",
        description:
          "卡尔萨斯生成一个持续{{ e4 }}秒的墙体。穿过它的敌人们会受到<scaleMR>{{ e1 }}%魔法抗性</scaleMR>削减，持续{{ e5 }}秒，以及在此期间持续衰减的{{ e3 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KarthusE",
        name: "亵渎",
        icon: "KarthusE.png",
        description:
          "<spellPassive>被动：</spellPassive>当卡尔萨斯击杀了一个单位时，他会回复<scaleMana>{{ e2 }}法力</scaleMana>。<br /><br /><toggle>激活：</toggle>卡尔萨斯生成一个死灵光环，每秒对附近的敌人们造成<magicDamage>{{ totaldps }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KarthusR",
        name: "安魂曲",
        icon: "KarthusR.png",
        description:
          "卡尔萨斯引导3秒，然后对敌方英雄们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，无视距离。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KarthusP: null,
      KarthusQ: null,
      KarthusW: null,
      KarthusE: null,
      KarthusR: null,
    },
  };
}
export { importModule };
