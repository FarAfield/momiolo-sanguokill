function importModule() {
  return {
    type: "champion",
    id: "Nocturne",
    title: "永恒梦魇",
    name: "魔腾",
    avatar: "Nocturne.png",
    skins: [
      { name: "default", skin: "Nocturne_0.jpg" },
      { name: "蓝焰梦魔 魔腾", skin: "Nocturne_1.jpg" },
      { name: "幻影梦魔 魔腾", skin: "Nocturne_2.jpg" },
      { name: "劫掠梦魇 魔腾", skin: "Nocturne_3.jpg" },
      { name: "鬼影重重 魔腾", skin: "Nocturne_4.jpg" },
      { name: "上古战魂 魔腾", skin: "Nocturne_5.jpg" },
      { name: "恶咒亡魂 魔腾", skin: "Nocturne_6.jpg" },
      { name: "古神 魔腾", skin: "Nocturne_7.jpg" },
      { name: "海克斯科技 魔腾", skin: "Nocturne_16.jpg" },
      { name: "绝息圣堂 魔腾", skin: "Nocturne_17.jpg" },
      { name: "至高天 魔腾", skin: "Nocturne_26.jpg" },
    ],
    spells: [
      {
        id: "NocturneP",
        name: "暗影之刃",
        icon: "NocturneP.png",
        description:
          "每过数秒，魔腾的下次攻击就会对附近敌人造成额外物理伤害，并治疗自己。<br><br>魔腾的普通攻击会减少该技能的冷却时间。",
      },
      {
        id: "NocturneQ",
        name: "梦魇之径",
        icon: "NocturneQ.png",
        description:
          "魔腾扔出一把暗影之刃，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>并留下一条持续{{ e3 }}秒的影径。被击中的敌方英雄们也会留下一条影径。 <br /><br />在影径上移动时，魔腾处于幽灵状态并获得<speed>{{ e1 }}%移动速度</speed>和<physicalDamage>{{ e4 }}攻击力</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NocturneW",
        name: "黑暗庇护",
        icon: "NocturneW.png",
        description:
          "<spellPassive>被动：</spellPassive>魔腾获得<attackSpeed>{{ e1 }}%攻击速度</attackSpeed>。<br /><br /><spellActive>主动：</spellActive>魔腾生成一个持续1.5秒的暗影屏障，来格挡下一个敌方技能。如果格挡掉一个技能，那么这个技能的被动效果提升至<attackSpeed>{{ e1 }}%攻击速度</attackSpeed>，持续{{ e4 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NocturneE",
        name: "无言恐惧",
        icon: "NocturneE.png",
        description:
          "<spellPassive>被动：</spellPassive>魔腾朝着被<status>恐惧</status>的敌人时会获得<speed>{{ tooltipfearms*100 }}%移动速度</speed>。<br /><br /><spellActive>主动：</spellActive>魔腾将一根梦魇灵链植入他的目标，在{{ e3 }}秒里持续造成共<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。如果灵链一直未断裂，目标就会被<status>恐惧</status>{{ e2 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NocturneR",
        name: "鬼影重重",
        icon: "NocturneR.png",
        description:
          "魔腾使地图变暗，降低所有敌方英雄的视野半径并移除其友方视野，持续{{ paranoiaduration }}秒。魔腾能够在持续期间<recast>再次施放</recast>这个技能，来突进到一名敌方英雄的身边并造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      NocturneP: null,
      NocturneQ: null,
      NocturneW: null,
      NocturneE: null,
      NocturneR: null,
    },
  };
}
export { importModule };
