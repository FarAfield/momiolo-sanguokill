function importModule() {
  return {
    type: "champion",
    id: "Sylas",
    title: "解脱者",
    name: "塞拉斯",
    avatar: "Sylas.png",
    skins: [
      { name: "default", skin: "Sylas_0.jpg" },
      { name: "窃魂修罗 塞拉斯", skin: "Sylas_1.jpg" },
      { name: "弗雷尔卓德 塞拉斯", skin: "Sylas_8.jpg" },
      { name: "源计划：逆流 塞拉斯", skin: "Sylas_13.jpg" },
      { name: "至臻 源计划：逆流 塞拉斯", skin: "Sylas_14.jpg" },
      { name: "幻灵战斗狼 塞拉斯", skin: "Sylas_24.jpg" },
      { name: "灰烬杀手 塞拉斯", skin: "Sylas_34.jpg" },
      { name: "北极星发明家 塞拉斯", skin: "Sylas_36.jpg" },
      { name: "暗星 塞拉斯", skin: "Sylas_46.jpg" },
    ],
    spells: [
      {
        id: "SylasP",
        name: "破敌禁法",
        icon: "SylasP.png",
        description:
          "在施放一次技能后，塞拉斯会储存一层【破敌禁法】效果。塞拉斯的普攻将消耗一层效果并环绕自身挥舞他的盈能锁链来对命中的敌人造成额外魔法伤害。当塞拉斯拥有一层【破敌禁法】效果时，他会获得攻击速度。 ",
      },
      {
        id: "SylasQ",
        name: "锁链鞭击",
        icon: "SylasQ.png",
        description:
          "塞拉斯甩出他的锁链，造成<magicDamage>{{ damage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamountcalc }}<status>减速</status>。锁链交叉的位置会被引爆，进一步造成<magicDamage>{{ explosiondamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SylasW",
        name: "弑君突刺",
        icon: "SylasW.png",
        description:
          "塞拉斯带着魔法之力跃向一名敌人，造成<magicDamage>{{ mindamage }}魔法伤害</magicDamage>。如果对敌方英雄造成伤害，那么会基于塞拉斯的已损失生命值来治疗塞拉斯<healing>{{ minhealing }}</healing>到<healing>{{ maxhealing }}生命值</healing>(在{{ maxexecutethreshold*100 }}%生命值或以下时达到最大值)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SylasE",
        name: "潜掠/强掳",
        icon: "SylasE.png",
        description:
          "塞拉斯快速突进至一个位置，并准备好一次<recast>再次施放</recast>，持续3.5秒。<br /><br /><recast>再次施放：</recast>塞拉斯挥出他的锁链，将他自身拉向命中的第一个敌人并造成<magicDamage>{{ damage }}魔法伤害</magicDamage>和{{ knockupduration }}秒<status>击飞</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SylasR",
        name: "其人之道",
        icon: "SylasR.png",
        description:
          "塞拉斯劫掠一位敌方英雄，以使他自身可以施放该敌人的终极技能，基于他自身的终极技能等级并使用他自身的属性。<br /><br />从一名敌人处劫掠技能后，会进入一段相当于{{ pertargetcooldown }}%目标终极技能冷却时间的、只针对该名敌人的冷却阶段(基于塞拉斯的技能急速)，最小值为{{ minimumenemycooldown }}秒，期间无法再次劫掠该名敌人的终极技能。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SylasP: null,
      SylasQ: null,
      SylasW: null,
      SylasE: null,
      SylasR: null,
    },
  };
}
export { importModule };
