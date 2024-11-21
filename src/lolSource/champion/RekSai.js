function importModule() {
  return {
    type: "champion",
    id: "RekSai",
    title: "虚空遁地兽",
    name: "雷克塞",
    avatar: "RekSai.png",
    skins: [
      { name: "default", skin: "RekSai_0.jpg" },
      { name: "上古战魂 雷克塞", skin: "RekSai_1.jpg" },
      { name: "泳池派对 雷克塞", skin: "RekSai_2.jpg" },
      { name: "黯晶巨兽 雷克塞", skin: "RekSai_9.jpg" },
      { name: "永恒之森 雷克塞", skin: "RekSai_17.jpg" },
      { name: "海魔兽 雷克塞", skin: "RekSai_26.jpg" },
    ],
    spells: [
      {
        id: "RekSaiP",
        name: "艾克塞之怒",
        icon: "RekSaiP.png",
        description:
          "雷克塞可通过攻击和命中基础技能来生成怒气。她在位于地下时可消耗怒气来回复生命值。",
      },
      {
        id: "RekSaiQ",
        name: "女王之怒 / 猎物搜寻",
        icon: "RekSaiQ.png",
        description:
          "<keywordMajor>位于地表：</keywordMajor>雷克塞在{{ buffduration }}秒内的下3次普攻会获得<attackSpeed>{{ attackspeed*100 }}%攻击速度</attackSpeed>并对附近的敌人造成额外的<physicalDamage>{{ totaldamagetooltip }}物理伤害</physicalDamage>。攻击会刷新这个技能的持续时长。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RekSaiW",
        name: "遁地 / 破土而出",
        icon: "RekSaiW.png",
        description:
          "<keywordMajor>位于地表：</keywordMajor>雷克塞遁入地下，获得全新的一套技能但不能攻击。她获得<speed>{{ burrowedmovespeed }}移动速度</speed>，视野距离被降低{{ visionradiusmod*-100 }}%，并且附近不可见的敌人在移动时会将其位置显形给雷克塞和她的友军。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RekSaiE",
        name: "狂野之噬 / 挖掘隧道",
        icon: "RekSaiE.png",
        description:
          "<scaleAD>位于地表：</scaleAD>雷克塞撕咬一个目标，造成<physicalDamage>{{ spell.reksaie:basedamagetooltip }}物理伤害</physicalDamage>。在满额<keywordMajor>怒气</keywordMajor>时，这次撕咬会造成额外的<physicalDamage>{{ spell.reksaie:furymaxhealthdamage*100 }}%最大生命值物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RekSaiR",
        name: "虚空猛冲",
        icon: "RekSaiR.png",
        description:
          "雷克塞将一个在之前的{{ preymarkduration }}秒内被她造成过伤害的敌人选为目标，随后会遁入地下，变得无法被选取。片刻之后，她会不可阻挡地跃向目标，造成<physicalDamage>{{ rbasedamagecalc }}加上{{ percentmissinghealthdamage }}%已损失生命值的物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RekSaiP: null,
      RekSaiQ: null,
      RekSaiW: null,
      RekSaiE: null,
      RekSaiR: null,
    },
  };
}
export { importModule };
