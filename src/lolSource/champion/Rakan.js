function importModule() {
  return {
    type: "champion",
    id: "Rakan",
    title: "幻翎",
    name: "洛",
    avatar: "Rakan.png",
    skins: [
      { name: "default", skin: "Rakan_0.jpg" },
      { name: "晨星之翎 洛", skin: "Rakan_1.jpg" },
      { name: "甜心之翎 洛", skin: "Rakan_2.jpg" },
      { name: "SSG 洛", skin: "Rakan_3.jpg" },
      { name: "iG 洛", skin: "Rakan_4.jpg" },
      { name: "星之守护者 洛", skin: "Rakan_5.jpg" },
      { name: "永恒之森 洛", skin: "Rakan_9.jpg" },
      { name: "比翼之心 洛", skin: "Rakan_18.jpg" },
      { name: "绝息圣堂 洛", skin: "Rakan_27.jpg" },
      { name: "星之守护者 净化之翎 洛", skin: "Rakan_36.jpg" },
      { name: "神龙尊者 比翼之龙 洛", skin: "Rakan_37.jpg" },
      { name: "至臻 神龙尊者 比翼之龙 洛", skin: "Rakan_38.jpg" },
    ],
    spells: [
      {
        id: "RakanP",
        name: "异色羽裳",
        icon: "RakanP.png",
        description: "洛会周期性地获得一层护盾。",
      },
      {
        id: "RakanQ",
        name: "微光飞翎",
        icon: "RakanQ.png",
        description:
          "洛掷出一支魔羽，对命中的第一个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />如果魔羽命中了一个英雄或史诗级野怪，洛会在{{ healdelay }}秒后或触碰到一名友方英雄后，为自己和附近的友方回复<healing>{{ totalheal }}生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RakanW",
        name: "盛大登场",
        icon: "RakanW.png",
        description:
          "洛进行冲刺，然后旋至空中，<status>击飞</status>{{ knockupduration }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RakanE",
        name: "轻舞成双",
        icon: "RakanE.png",
        description:
          "洛冲向一名友方英雄，为其提供<shield>{{ totalshield }}护盾值</shield>，持续{{ e3 }}秒。<br /><br />洛可以在{{ e2 }}秒内<recast>再次施放</recast>一次这个技能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RakanR",
        name: "惊鸿过隙",
        icon: "RakanR.png",
        description:
          "洛获得<speed>{{ e5 }}%移动速度</speed>，持续{{ e2 }}秒。洛触碰到敌人时会造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>，并在首次命中时造成持续{{ e3 }}秒的<status>魅惑</status>效果。被触碰的首个敌方英雄，会为洛提供<speed>持续衰减的{{ e6 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RakanP: null,
      RakanQ: null,
      RakanW: null,
      RakanE: null,
      RakanR: null,
    },
  };
}
export { importModule };
