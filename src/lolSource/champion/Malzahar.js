function importModule() {
  return {
    type: "champion",
    id: "Malzahar",
    title: "虚空先知",
    name: "玛尔扎哈",
    avatar: "Malzahar.png",
    skins: [
      { name: "default", skin: "Malzahar_0.jpg" },
      { name: "元老议会 玛尔扎哈", skin: "Malzahar_1.jpg" },
      { name: "暗影王子 玛尔扎哈", skin: "Malzahar_2.jpg" },
      { name: "魔灵 玛尔扎哈", skin: "Malzahar_3.jpg" },
      { name: "至高君王 玛尔扎哈", skin: "Malzahar_4.jpg" },
      { name: "冰雪节 玛尔扎哈", skin: "Malzahar_5.jpg" },
      { name: "战场BOSS 玛尔扎哈", skin: "Malzahar_6.jpg" },
      { name: "海克斯科技 玛尔扎哈", skin: "Malzahar_7.jpg" },
      { name: "创世之神 玛尔扎哈", skin: "Malzahar_9.jpg" },
      { name: "小蜜蜂 玛尔扎哈", skin: "Malzahar_18.jpg" },
      { name: "虚空执事 玛尔扎哈", skin: "Malzahar_28.jpg" },
      { name: "荣誉使者 玛尔扎哈", skin: "Malzahar_38.jpg" },
      { name: "至高天 玛尔扎哈", skin: "Malzahar_39.jpg" },
    ],
    spells: [
      {
        id: "MalzaharP",
        name: "虚空穿越",
        icon: "MalzaharP.png",
        description:
          "玛尔扎哈如果近期没有受到伤害或控制效果，就会获得巨幅伤害减免和免疫控制的效果，并且这个效果在受到伤害后还会残留一小段时间。",
      },
      {
        id: "MalzaharQ",
        name: "虚空召唤",
        icon: "MalzaharQ.png",
        description:
          "玛尔扎哈开启两扇通往虚空的传送门，在短暂的延迟后，能量就会从虚空之中喷发，并且在两道传送门之间对流，对击中的敌人造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>并使其<status>沉默</status>{{ e2 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MalzaharW",
        name: "虚空虫群",
        icon: "MalzaharW.png",
        description:
          "<spellPassive>被动：</spellPassive>玛尔扎哈的其它技能在施放时会为他提供一层效果(最多可叠到{{ stackcap }}层)。<br /><br /><spellActive>主动：</spellActive>玛尔扎哈召唤一个虚灵，并且每层效果会额外召唤一个虚灵。虚灵持续{{ voidlingduration }}秒并且每次命中造成额外的<magicDamage>{{ voidlingbonusdamagetooltip }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MalzaharE",
        name: "煞星幻象",
        icon: "MalzaharE.png",
        description:
          "玛尔扎哈给目标造成可怕的幻象，在{{ duration }}秒里对一名敌人持续造成共<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。在此期间，对目标使用<spellName>虚空召唤</spellName>或<spellName>冥府之握</spellName>会刷新幻象的持续时间。<br /><br />如果目标被击杀，玛尔扎哈会获得<scaleMana>{{ manarestore }}法力</scaleMana>并且幻象会传播给相距最近的敌人。<br /><br /><rules>煞星幻象会处决低于{{ minionexecutethreshold }}生命值的小兵。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MalzaharR",
        name: "冥府之握",
        icon: "MalzaharR.png",
        description:
          "玛尔扎哈<status>压制</status>一名敌方英雄并在{{ e4 }}秒里持续造成共<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>。一个负能量地带会在他目标周围生成，在{{ e3 }}秒里持续造成共<magicDamage>{{ zonedamagetooltip }}最大生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      MalzaharP: null,
      MalzaharQ: null,
      MalzaharW: null,
      MalzaharE: null,
      MalzaharR: null,
    },
  };
}
export { importModule };
