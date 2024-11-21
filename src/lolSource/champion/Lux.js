function importModule() {
  return {
    type: "champion",
    id: "Lux",
    title: "光辉女郎",
    name: "拉克丝",
    avatar: "Lux.png",
    skins: [
      { name: "default", skin: "Lux_0.jpg" },
      { name: "奥术光辉 拉克丝", skin: "Lux_1.jpg" },
      { name: "游侠法师 拉克丝", skin: "Lux_2.jpg" },
      { name: "ODST地狱伞兵 拉克丝", skin: "Lux_3.jpg" },
      { name: "星际迷航 拉克丝", skin: "Lux_4.jpg" },
      { name: "钢铁军团 拉克丝", skin: "Lux_5.jpg" },
      { name: "星之守护者 拉克丝", skin: "Lux_6.jpg" },
      { name: "大元素使 拉克丝", skin: "Lux_7.jpg" },
      { name: "春晖神女 拉克丝", skin: "Lux_8.jpg" },
      { name: "睡衣守护者 拉克丝", skin: "Lux_14.jpg" },
      { name: "战斗学院 拉克丝", skin: "Lux_15.jpg" },
      { name: "至臻 战斗学院 拉克丝", skin: "Lux_16.jpg" },
      { name: "暗星女王 拉克丝", skin: "Lux_17.jpg" },
      { name: "耀星女神 拉克丝", skin: "Lux_18.jpg" },
      { name: "太空律动 “闪耀灯球” 拉克丝", skin: "Lux_19.jpg" },
      { name: "青花瓷 拉克丝", skin: "Lux_29.jpg" },
      { name: "斗魂觉醒 拉克丝", skin: "Lux_38.jpg" },
      { name: "至臻 战斗学院 拉克丝 (2022)", skin: "Lux_39.jpg" },
      { name: "至臻 青花瓷 拉克丝", skin: "Lux_40.jpg" },
      { name: "至高天 拉克丝", skin: "Lux_42.jpg" },
      { name: "花仙子 拉克丝", skin: "Lux_61.jpg" },
    ],
    spells: [
      {
        id: "LuxP",
        name: "光芒四射",
        icon: "LuxP.png",
        description:
          "拉克丝的伤害类技能会对敌人施加【启明】效果，持续若干秒。拉克丝的下一次攻击将会消耗【启明】效果，来对目标造成额外魔法伤害（基于拉克丝等级）。",
      },
      {
        id: "LuxQ",
        name: "光之束缚",
        icon: "LuxQ.png",
        description:
          "拉克丝朝目标地点发射一团光球，<status>束缚</status>前2名敌人{{ e3 }}秒并对每个敌人造<magicDamage>{{ totaldamagett }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LuxW",
        name: "曲光屏障",
        icon: "LuxW.png",
        description:
          "拉克丝扔出她的魔杖，为它途经的友军提供持续{{ e3 }}秒的<shield>{{ totalshieldtt }}护盾</shield>。随后它会折返，为它途经的友军提供等额的<shield>护盾</shield>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LuxE",
        name: "透光奇点",
        icon: "LuxE.png",
        description:
          "拉克丝创造一个光明地带，显形该区域并使区域中的敌人<status>减速</status>{{ e1 }}%。在{{ e3 }}秒后或<recast>再次施放</recast>这个技能后，它会爆炸，造成<magicDamage>{{ totaldamagett }}魔法伤害</magicDamage>并<status>减速</status>额外的{{ slowlingerduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LuxR",
        name: "终极闪光",
        icon: "LuxR.png",
        description:
          "拉克丝发射一束耀目的光能射线，对一条直线上的所有敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: { LuxP: null, LuxQ: null, LuxW: null, LuxE: null, LuxR: null },
  };
}
export { importModule };
