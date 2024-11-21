function importModule() {
  return {
    type: "champion",
    id: "Rammus",
    title: "披甲龙龟",
    name: "拉莫斯",
    avatar: "Rammus.png",
    skins: [
      { name: "default", skin: "Rammus_0.jpg" },
      { name: "国王 拉莫斯", skin: "Rammus_1.jpg" },
      { name: "铬金铠甲 拉莫斯", skin: "Rammus_2.jpg" },
      { name: "熔火之心 拉莫斯", skin: "Rammus_3.jpg" },
      { name: "极度深寒 拉莫斯", skin: "Rammus_4.jpg" },
      { name: "忍龟 拉莫斯", skin: "Rammus_5.jpg" },
      { name: "全金属狂潮 拉莫斯", skin: "Rammus_6.jpg" },
      { name: "沙之守护 拉莫斯", skin: "Rammus_7.jpg" },
      { name: "制胜金球 拉莫斯", skin: "Rammus_8.jpg" },
      { name: "海克斯科技 拉莫斯", skin: "Rammus_16.jpg" },
      { name: "宇航员 拉莫斯", skin: "Rammus_17.jpg" },
      { name: "榴莲龙龟 拉莫斯", skin: "Rammus_26.jpg" },
    ],
    spells: [
      {
        id: "RammusP",
        name: "锥刺甲壳",
        icon: "RammusP.png",
        description: "拉莫斯的普攻造成额外魔法伤害，这个伤害可从护甲值中获益。",
      },
      {
        id: "RammusQ",
        name: "动力冲刺",
        icon: "RammusQ.png",
        description:
          "拉莫斯蜷缩为球状，获得<speed>{{ minimummovespeed }}移动速度</speed>，并在{{ e4 }}秒里持续加速至<speed>{{ maximummovespeed }}移动速度</speed>。拉莫斯会在与一名敌人碰撞后停下，对附近的敌人们造成<magicDamage>{{ powerballdamage }}魔法伤害</magicDamage>、<status>击退</status>以及持续{{ e3 }}秒的{{ e2 }}%<status>减速</status>。<br /><br /><recast>再次施放</recast>：拉莫斯提前结束这个技能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RammusW",
        name: "尖刺防御",
        icon: "RammusW.png",
        description:
          "拉莫斯进入持续{{ buffduration }}秒的防御姿态，获得<scaleArmor>{{ F1 }}护甲(%i:scaleArmor%)</scaleArmor>和<scaleMR>{{ F2 }}魔抗(%i:scaleMR%)</scaleMR>。在激活状态下，<spellName>锥刺甲壳</spellName>的伤害提升{{ passivedamageampcalc }}并且还会伤害那些攻击拉莫斯的敌人们。<br /><br />拉莫斯的每次攻击会使这个持续时间提升{{ bonusdurationperauto }}秒(最大值：{{ maxbonusduration }}秒)。<br /><br /><recast>再次施放</recast>：拉莫斯提前结束这个技能。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RammusE",
        name: "狂乱嘲讽",
        icon: "RammusE.png",
        description:
          "拉莫斯<status>嘲讽</status>一名敌方英雄或野怪{{ e1 }}秒，并获得持续{{ e1 }}秒的<attackSpeed>{{ e2 }}%攻击速度</attackSpeed>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RammusR",
        name: "冲天猛撞",
        icon: "RammusR.png",
        description:
          "拉莫斯跃到空中然后猛撞进一个区域，造成<magicDamage>{{ initialdamagecalc }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。区域中心的敌人会基于拉莫斯的飞跃距离受到额外伤害(至多为<magicDamage>{{ tooltipmaxdamagecalc }}魔法伤害</magicDamage>)。如果在<spellName>动力冲刺</spellName>状态下施放，那么还会将区域中心的敌人们<status>击飞</status>{{ knockupduration }}秒。<br /><br />拉莫斯随后在{{ buffduration }}秒里持续在区域内引发共{{ numberofpulses }}道余震，每道造成<magicDamage>{{ pulsedamagecalc }}魔法伤害</magicDamage>并叠加<status>减速</status>效果(至多为{{ maxslow }}%)。<br /><br />这个技能的距离会从拉莫斯的<speed>移动速度</speed>中获得提升。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RammusP: null,
      RammusQ: null,
      RammusW: null,
      RammusE: null,
      RammusR: null,
    },
  };
}
export { importModule };
