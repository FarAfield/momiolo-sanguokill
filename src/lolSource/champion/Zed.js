function importModule() {
  return {
    type: "champion",
    id: "Zed",
    title: "影流之主",
    name: "劫",
    avatar: "Zed.png",
    skins: [
      { name: "default", skin: "Zed_0.jpg" },
      { name: "冲击之刃 劫", skin: "Zed_1.jpg" },
      { name: "SKT T1 劫", skin: "Zed_2.jpg" },
      { name: "源计划：阴 劫", skin: "Zed_3.jpg" },
      { name: "冠军之隐 劫", skin: "Zed_10.jpg" },
      { name: "死亡誓约 劫", skin: "Zed_11.jpg" },
      { name: "天煞 劫", skin: "Zed_13.jpg" },
      { name: "灵能特工 劫", skin: "Zed_15.jpg" },
      { name: "至臻 源计划：阴 劫", skin: "Zed_30.jpg" },
      { name: "影执事 劫", skin: "Zed_31.jpg" },
      { name: "至高天 劫", skin: "Zed_38.jpg" },
      { name: "玉剑传说 无劫", skin: "Zed_49.jpg" },
      { name: "腥红之月 劫", skin: "Zed_58.jpg" },
    ],
    spells: [
      {
        id: "ZedP",
        name: "影忍法！灭魂劫",
        icon: "ZedP.png",
        description:
          "劫的普通攻击会对低生命值的目标造成额外魔法伤害。这个特效在数秒内只能对相同的敌方英雄生效一次。",
      },
      {
        id: "ZedQ",
        name: "影奥义！诸刃",
        icon: "ZedQ.png",
        description:
          "劫和他的<keywordMajor>影分身</keywordMajor>一起将他们的手里剑向前方掷出，每一枚手里剑都会对命中的第一个敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，并对之后的每个敌人造成<physicalDamage>{{ passthroughdamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZedW",
        name: "影奥义！分身",
        icon: "ZedW.png",
        description:
          "<spellPassive>被动：</spellPassive>当劫和他的<keywordMajor>影分身</keywordMajor>用相同技能击中一名敌方英雄时，劫会回复<keywordMajor>{{ e3 }}能量</keywordMajor>。<br /><br /><spellActive>主动：</spellActive>劫的<keywordMajor>影分身</keywordMajor>向前突进，并在一个地方维持{{ e5 }}秒。<recast>再次施放</recast>这个技能会让劫与这个<keywordMajor>影分身</keywordMajor>互换位置。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZedE",
        name: "影奥义！鬼斩",
        icon: "ZedE.png",
        description:
          "劫和他的<keywordMajor>影分身</keywordMajor>进行斩击，对附近的敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。<br /><br />每个被劫的斩击所命中的敌方英雄都会使<spellName>影奥义！分身</spellName>的冷却时间减少{{ shadowhitcdr }}秒。<br /><br />被<keywordMajor>影分身</keywordMajor>的斩击所击中的敌人，将会被<status>减速</status>{{ movespeedmod*-100 }}%，持续{{ slowduration }}秒。被多个斩击同时击中的敌人，将会被<status>减速</status>{{ movespeedmodbonus*-100 }}%，但不会受到额外伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZedR",
        name: "禁奥义！瞬狱影杀阵",
        icon: "ZedR.png",
        description:
          "劫变得不可被选取，突进向一位敌方英雄，并将其标记。{{ rdeathmarkduration }}秒后，标记会触发，对目标造成<physicalDamage>{{ rcalculateddamage }}物理伤害</physicalDamage>，加上印记激活期间劫所造成的伤害总和的{{ rdamageamp*100 }}%。<br /><br />突进会留下一个<keywordMajor>影分身</keywordMajor>在身后，持续{{ rshadowdurationdisplayed }}秒。<recast>再次施放</recast>此技能会使劫与这个<keywordMajor>影分身</keywordMajor>互换位置。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: { ZedP: null, ZedQ: null, ZedW: null, ZedE: null, ZedR: null },
  };
}
export { importModule };
