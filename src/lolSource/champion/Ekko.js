function importModule() {
  return {
    type: "champion",
    id: "Ekko",
    title: "时间刺客",
    name: "艾克",
    avatar: "Ekko.png",
    skins: [
      { name: "default", skin: "Ekko_0.jpg" },
      { name: "时之砂 艾克", skin: "Ekko_1.jpg" },
      { name: "任性学霸 艾克", skin: "Ekko_2.jpg" },
      { name: "源计划：自由 艾克", skin: "Ekko_3.jpg" },
      { name: "SKT T1 艾克", skin: "Ekko_11.jpg" },
      { name: "不给糖就捣蛋 艾克", skin: "Ekko_12.jpg" },
      { name: "真实伤害 艾克", skin: "Ekko_19.jpg" },
      { name: "未来战士 艾克", skin: "Ekko_28.jpg" },
      { name: "野火首领 艾克", skin: "Ekko_36.jpg" },
      { name: "星之守护者 艾克", skin: "Ekko_45.jpg" },
      { name: "至臻 星之守护者 艾克", skin: "Ekko_46.jpg" },
      { name: "真实伤害 突破界限 艾克", skin: "Ekko_56.jpg" },
    ],
    spells: [
      {
        id: "EkkoP",
        name: "Z型驱动共振",
        icon: "EkkoP.png",
        description:
          "每当艾克对相同目标施放第三次普攻或伤害性技能时，都会造成额外魔法伤害，并且如果目标是英雄，那么艾克还会获得爆发性的移动速度加成。<br><br>",
      },
      {
        id: "EkkoQ",
        name: "时间卷曲器",
        icon: "EkkoQ.png",
        description:
          "艾克投出一个设备，造成<magicDamage>{{ initialdamage }}魔法伤害</magicDamage>。在命中一名英雄或到达它的距离终点后，它会扩展为一个领域来使其中的敌人<status>减速</status>{{ e2 }}%。在它扩展后，艾克会将其召回，造成<magicDamage>{{ recalldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EkkoW",
        name: "时光交错",
        icon: "EkkoW.png",
        description:
          "<spellPassive>被动：</spellPassive>艾克对生命值低于30%的敌方英雄进行的攻击会造成<magicDamage>{{ missinghealthpercent }}已损失生命值的魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>在1.5秒的延迟后，艾克放出一颗时空球体来使其中的敌人<status>减速</status>{{ e0 }}%。如果艾克进入了球体，那么他会将其引爆，造成{{ e2 }}秒<status>晕眩</status>并获得<shield>{{ totalshield }}护盾值</shield>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EkkoE",
        name: "相位俯冲",
        icon: "EkkoE.png",
        description:
          "艾克突进并强化他的下次攻击，以获得额外距离、将他传送到他的目标处、并造成额外的<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EkkoR",
        name: "时空断裂",
        icon: "EkkoR.png",
        description:
          "艾克回到过去的时间点上，进入凝滞状态同时传送回他4秒前所在的位置，并在到达后对附近的所有敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。此外，艾克会治疗自身<healing>{{ totalbaseheal }}</healing>生命值，且最近4秒里每损失1%生命值就会使这个治疗效果提升{{ percenthealampperpercentmissinghealth }}%。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      EkkoP: null,
      EkkoQ: null,
      EkkoW: null,
      EkkoE: null,
      EkkoR: null,
    },
  };
}
export { importModule };
