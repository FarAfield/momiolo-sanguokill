function importModule() {
  return {
    type: "champion",
    id: "Kayle",
    title: "正义天使",
    name: "凯尔",
    avatar: "Kayle.png",
    skins: [
      { name: "default", skin: "Kayle_0.jpg" },
      { name: "银白审判 凯尔", skin: "Kayle_1.jpg" },
      { name: "末世天使 凯尔", skin: "Kayle_2.jpg" },
      { name: "大天使长米迦勒 凯尔", skin: "Kayle_3.jpg" },
      { name: "战场女武神 凯尔", skin: "Kayle_4.jpg" },
      { name: "圣光审判 凯尔", skin: "Kayle_5.jpg" },
      { name: "钢铁之翼 凯尔", skin: "Kayle_6.jpg" },
      { name: "防暴天使 凯尔", skin: "Kayle_7.jpg" },
      { name: "钢铁审判官 凯尔", skin: "Kayle_8.jpg" },
      { name: "五杀摇滚女声主唱 凯尔", skin: "Kayle_9.jpg" },
      { name: "灵能特工 凯尔", skin: "Kayle_15.jpg" },
      { name: "屠龙勇士 凯尔", skin: "Kayle_24.jpg" },
      { name: "五杀摇滚 III：遗失的章节 凯尔", skin: "Kayle_33.jpg" },
      { name: "食日天使 凯尔", skin: "Kayle_42.jpg" },
      { name: "玉剑传说 翼剑仙", skin: "Kayle_57.jpg" },
      { name: "至高天 凯尔", skin: "Kayle_66.jpg" },
      { name: "至臻 至高天 凯尔", skin: "Kayle_67.jpg" },
    ],
    spells: [
      {
        id: "KayleP",
        name: "登神长阶",
        icon: "KayleP.png",
        description:
          "凯尔的攻击会随着她提升等级和分配技能点而获得增强。她的羽翼将燃起圣焰，逐步提供攻击速度，移动速度，攻击距离，以及攻击附带焰浪。",
      },
      {
        id: "KayleQ",
        name: "耀焰冲击",
        icon: "KayleQ.png",
        description:
          "凯尔发射一把星界之剑，它会停留在命中的第一个敌人身上，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，持续{{ slowduration }}秒的{{ slowpercent }}%<status>减速</status>，并移除目标及其后方敌人们的<scaleArmor>{{ shredpercent }}%护甲</scaleArmor>和<scaleMR>魔法抗性</scaleMR>，持续{{ shredduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KayleW",
        name: "星界恩典",
        icon: "KayleW.png",
        description:
          "凯尔为她自身和一名友方英雄灌注圣光，回复<healing>{{ totalheal }}生命值</healing>并提供持续{{ hasteduration }}秒的<speed>{{ totalhaste }}移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KayleE",
        name: "星火符刃",
        icon: "KayleE.png",
        description:
          "<spellPassive>被动：</spellPassive>攻击造成额外的<magicDamage>{{ epassivetotaldamage }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>凯尔的下次攻击变为远程并造成额外的<magicDamage>{{ activetotalexecutedamage }}已损失生命值的魔法伤害</magicDamage>。这个攻击会在凯尔到达<scaleLevel>{{ spell.kaylepassive:levelforpassiverank2 }}级</scaleLevel>时升级，使它可以在命中目标时爆炸，对附近敌人造成伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KayleR",
        name: "圣裁之刻",
        icon: "KayleR.png",
        description:
          "凯尔令一名友方英雄免疫伤害{{ invulnduration }}秒，随后会净化该英雄身边的区域并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>给附近的敌人们。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KayleP: null,
      KayleQ: null,
      KayleW: null,
      KayleE: null,
      KayleR: null,
    },
  };
}
export { importModule };
