function importModule() {
  return {
    type: "champion",
    id: "Samira",
    title: "沙漠玫瑰",
    name: "莎弥拉",
    avatar: "Samira.png",
    skins: [
      { name: "default", skin: "Samira_0.jpg" },
      { name: "灵能特工 莎弥拉", skin: "Samira_1.jpg" },
      { name: "太空律动 “音浪狂舞” 莎弥拉", skin: "Samira_10.jpg" },
      { name: "西部魔影 持枪女巫 莎弥拉", skin: "Samira_20.jpg" },
      { name: "斗魂觉醒 莎弥拉", skin: "Samira_30.jpg" },
    ],
    spells: [
      {
        id: "SamiraP",
        name: "悍勇本色",
        icon: "SamiraP.png",
        description:
          "莎弥拉可通过用不同的技能或攻击命中敌人来构建一次连招。莎弥拉在近战距离的攻击会造成额外的魔法伤害。莎弥拉在对被<status>定身</status>的敌人进行攻击时，将冲刺到她的最大攻击距离处。如果该敌人已被<status>击飞</status>，她还会使其短暂保持<status>击飞</status>状态。",
      },
      {
        id: "SamiraQ",
        name: "交火",
        icon: "SamiraQ.png",
        description:
          "莎弥拉进行一次射击，对命中的第一个敌人造成<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>。如果朝着近战距离内的一名敌人施放这个技能，那么莎弥拉会转而用她的剑进行斩击，造成<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SamiraW",
        name: "锋旋",
        icon: "SamiraW.png",
        description:
          "莎弥拉斩击她的周围{{ slashduration }}秒，对敌人造成2段伤害，每段为<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>并摧毁任何进入该区域的敌方飞行道具。<br /><br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SamiraE",
        name: "狂飙",
        icon: "SamiraE.png",
        description:
          "莎弥拉冲刺并越过一名敌人（包含建筑物），斩击沿途的敌人来造成<magicDamage>{{ dashdamage }}魔法伤害</magicDamage>并获得<attackSpeed>{{ bonusattackspeed*100 }}%攻击速度</attackSpeed>，持续3秒。<br /><br />如果一名敌方英雄在受到莎弥拉的伤害后的3秒内阵亡，那么这个技能的冷却时间会重置。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SamiraR",
        name: "炼狱扳机",
        icon: "SamiraR.png",
        description:
          "莎弥拉只能在她当前的<keywordMajor>评价等级</keywordMajor>为S时使用这个技能。使用这个技能会消耗掉所有<keywordMajor>评价等级</keywordMajor>。<br /><br />莎弥拉的武器倾泻出大量的子弹，狂野地在2秒里持续对她周围的所有敌人进行10次射击，每次射击造成<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>并施加{{ lifestealmod*100 }}%效能的生命偷取。这些射击也可以产生暴击。<br /><br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SamiraP: null,
      SamiraQ: null,
      SamiraW: null,
      SamiraE: null,
      SamiraR: null,
    },
  };
}
export { importModule };
