function importModule() {
  return {
    type: "champion",
    id: "Lissandra",
    title: "冰霜女巫",
    name: "丽桑卓",
    avatar: "Lissandra.png",
    skins: [
      { name: "default", skin: "Lissandra_0.jpg" },
      { name: "血石妖后 丽桑卓", skin: "Lissandra_1.jpg" },
      { name: "刀锋女王 丽桑卓", skin: "Lissandra_2.jpg" },
      { name: "源代码 丽桑卓", skin: "Lissandra_3.jpg" },
      { name: "魔女 丽桑卓", skin: "Lissandra_4.jpg" },
      { name: "暗星女王 丽桑卓", skin: "Lissandra_12.jpg" },
      { name: "青花瓷 丽桑卓", skin: "Lissandra_23.jpg" },
      { name: "至臻 青花瓷 丽桑卓", skin: "Lissandra_33.jpg" },
      { name: "太空律动 “噪音女王” 丽桑卓", skin: "Lissandra_34.jpg" },
    ],
    spells: [
      {
        id: "LissandraP",
        name: "冰脉驱役",
        icon: "LissandraP.png",
        description:
          "当一名敌方英雄在丽桑卓附近阵亡时，该英雄会变成一个冰封奴仆。冰封奴仆会寻找活着的敌人，使身边敌人的移动速度减少。在一段延迟后，冰封奴仆会从极度冰寒中粉碎，对附近目标造成魔法伤害。",
      },
      {
        id: "LissandraQ",
        name: "寒冰碎片",
        icon: "LissandraQ.png",
        description:
          "丽桑卓扔出一杆冰矛，冰矛会在命中第一个敌人后碎裂，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>、持续{{ e2 }}秒的{{ e3 }}%<status>减速</status>，并且还会对该敌人身后的敌人们造成伤害和减速。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LissandraW",
        name: "冰霜之环",
        icon: "LissandraW.png",
        description:
          "丽桑卓生成一个冰封领域，<status>禁锢</status>附近的敌人们{{ e2 }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LissandraE",
        name: "冰川之径",
        icon: "LissandraE.png",
        description:
          "丽桑卓向前放出一个冰爪，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。丽桑卓可以在冰爪飞行时<recast>再次施放</recast>来传送到它所在的位置。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LissandraR",
        name: "冰封陵墓",
        icon: "LissandraR.png",
        description:
          "丽桑卓将她自身或一名敌方英雄裹进黑冰之中。敌人会被<status>晕眩</status>{{ enemycastduration }}秒。在自我施放时，丽桑卓进入凝滞状态{{ selfcastduration }}秒并回复<healing>{{ healamount }}生命值</healing>，每{{ selfcastmissinghpperabove }}%已损失生命值会使回复量提升{{ selfcastmissinghpratio }}%。<br /><br />之后，黑冰会从目标处开始蔓延，造成<magicDamage>{{ calculateddamage }}魔法伤害</magicDamage>。黑冰存在{{ slowduration }}秒，会使敌人<status>减速</status>{{ slowamount*-100 }}%。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      LissandraP: null,
      LissandraQ: null,
      LissandraW: null,
      LissandraE: null,
      LissandraR: null,
    },
  };
}
export { importModule };
