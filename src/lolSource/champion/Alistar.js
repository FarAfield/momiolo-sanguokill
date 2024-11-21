function importModule() {
  return {
    type: "champion",
    id: "Alistar",
    title: "牛头酋长",
    name: "阿利斯塔",
    avatar: "Alistar.png",
    skins: [
      { name: "default", skin: "Alistar_0.jpg" },
      { name: "暗黑灵魂 阿利斯塔", skin: "Alistar_1.jpg" },
      { name: "金牛座 阿利斯塔", skin: "Alistar_2.jpg" },
      { name: "斗牛士 阿利斯塔", skin: "Alistar_3.jpg" },
      { name: "荒野镖客 阿利斯塔", skin: "Alistar_4.jpg" },
      { name: "巨角幻兽 阿利斯塔", skin: "Alistar_5.jpg" },
      { name: "地狱火 阿利斯塔", skin: "Alistar_6.jpg" },
      { name: "后场堡垒 阿利斯塔", skin: "Alistar_7.jpg" },
      { name: "黑暗骑士 阿利斯塔", skin: "Alistar_8.jpg" },
      { name: "SKT T1 阿利斯塔", skin: "Alistar_9.jpg" },
      { name: "哞利斯塔", skin: "Alistar_10.jpg" },
      { name: "海克斯科技 阿利斯塔", skin: "Alistar_19.jpg" },
      { name: "征服者 阿利斯塔", skin: "Alistar_20.jpg" },
      { name: "黯晶巨牛 阿利斯塔", skin: "Alistar_22.jpg" },
      { name: "福牛守护者 阿利斯塔", skin: "Alistar_29.jpg" },
    ],
    spells: [
      {
        id: "AlistarP",
        name: "凯旋怒吼",
        icon: "AlistarP.png",
        description:
          "阿利斯塔在对敌方英雄造成晕眩或强制位移时，或附近有敌人阵亡时，会积攒他的怒吼层数。在层数攒满后，他会治疗他自己和所有附近的友方英雄。",
      },
      {
        id: "AlistarQ",
        name: "大地粉碎",
        icon: "AlistarQ.png",
        description:
          "阿利斯塔使大地破裂，<status>击飞</status>敌人{{ knockupduration }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AlistarW",
        name: "野蛮冲撞",
        icon: "AlistarW.png",
        description:
          "阿利斯塔顶向一名敌人，将其<status>击退</status>并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AlistarE",
        name: "践踏",
        icon: "AlistarE.png",
        description:
          "阿利斯塔践踏地面，变为幽灵状态并在{{ e3 }}秒里持续对附近的敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。每段践踏在至少伤害到一名敌方英雄时会为阿利斯塔提供一层效果。<br /><br />在{{ e5 }}层效果时，阿利斯塔的下一个对英雄打出的攻击会<status>晕眩</status>目标{{ e6 }}秒并造成额外的<magicDamage>{{ attackbonusdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AlistarR",
        name: "坚定意志",
        icon: "AlistarR.png",
        description:
          "阿利斯塔立刻净化掉所有<status>限制</status>效果并获得{{ rdamagereduction }}%伤害减免，持续{{ rduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AlistarP: null,
      AlistarQ: null,
      AlistarW: null,
      AlistarE: null,
      AlistarR: null,
    },
  };
}
export { importModule };
