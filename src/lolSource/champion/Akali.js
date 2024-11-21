function importModule() {
  return {
    type: "champion",
    id: "Akali",
    title: "离群之刺",
    name: "阿卡丽",
    avatar: "Akali.png",
    skins: [
      { name: "default", skin: "Akali_0.jpg" },
      { name: "蜂刺 阿卡丽", skin: "Akali_1.jpg" },
      { name: "奈落之炎 阿卡丽", skin: "Akali_2.jpg" },
      { name: "足球宝贝 阿卡丽", skin: "Akali_3.jpg" },
      { name: "实习护士 阿卡丽", skin: "Akali_4.jpg" },
      { name: "腥红之月 鬼武姬 阿卡丽", skin: "Akali_5.jpg" },
      { name: "银色之牙 阿卡丽", skin: "Akali_6.jpg" },
      { name: "铁血女忍 阿卡丽", skin: "Akali_7.jpg" },
      { name: "刺身之拳 阿卡丽", skin: "Akali_8.jpg" },
      { name: "K/DA 阿卡丽", skin: "Akali_9.jpg" },
      { name: "至臻 K/DA 阿卡丽", skin: "Akali_13.jpg" },
      { name: "源计划：暗影 阿卡丽", skin: "Akali_14.jpg" },
      { name: "真实伤害 阿卡丽", skin: "Akali_15.jpg" },
      { name: "K/DA ALL OUT 阿卡丽", skin: "Akali_32.jpg" },
      { name: "地下都市 梦魇 阿卡丽", skin: "Akali_50.jpg" },
      { name: "至臻 K/DA 阿卡丽 (2022)", skin: "Akali_60.jpg" },
      { name: "星之守护者 阿卡丽", skin: "Akali_61.jpg" },
      { name: "DRX 阿卡丽", skin: "Akali_68.jpg" },
      { name: "魔女 阿卡丽", skin: "Akali_70.jpg" },
      { name: "至臻 魔女 阿卡丽", skin: "Akali_71.jpg" },
      { name: "至高天 阿卡丽", skin: "Akali_82.jpg" },
    ],
    spells: [
      {
        id: "AkaliP",
        name: "我流忍法！潜龙印",
        icon: "AkaliP.png",
        description:
          "对一个英雄造成技能伤害时，会在其周围创造一个能量圆环。穿过该圆环时，会增强阿卡丽的下一个攻击的距离和伤害。",
      },
      {
        id: "AkaliQ",
        name: "我流奥义！寒影",
        icon: "AkaliQ.png",
        description:
          "阿卡丽呈弧状掷出苦无，造成<magicDamage>{{ damage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowpercentage*100 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AkaliW",
        name: "我流奥义！霞阵",
        icon: "AkaliW.png",
        description:
          "阿卡丽扔出一颗烟雾弹，来释放一团在{{ baseduration }}秒里不断扩散的烟雾并为她自身提供在{{ movementspeedduration }}秒里不断衰减的<speed>{{ movementspeed }}%移动速度</speed>。<br /><br />在烟雾弹处于激活状态期间，阿卡丽的最大能量值提升{{ energyrestore }}。<br /><br />在处于烟雾之中时，阿卡丽会<keywordStealth>隐形</keywordStealth>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AkaliE",
        name: "我流奥义！隼舞",
        icon: "AkaliE.png",
        description:
          "阿卡丽后空翻并掷出一枚手里剑，造成<magicDamage>{{ e1damage }}魔法伤害</magicDamage>并标记命中的第一个敌人或烟雾弹。阿卡丽可以<recast>再次施放</recast>这个技能来突进至被标记的目标处，并造成<magicDamage>{{ e2damagecalc }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AkaliR",
        name: "我流秘奥义！表里杀缭乱",
        icon: "AkaliR.png",
        description:
          "阿卡丽跃过目标敌方英雄，对沿途的所有敌人造成<magicDamage>{{ cast1damage }}魔法伤害</magicDamage>。<br /><br />阿卡丽可以在{{ cooldownbetweencasts }}秒后<recast>再次施放</recast>以施展一次带穿刺效果的突刺，造成<magicDamage>{{ cast2damagemin }}</magicDamage>到<magicDamage>{{ cast2damagemax }}魔法伤害</magicDamage>(基于已损失的生命值)。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AkaliP: null,
      AkaliQ: null,
      AkaliW: null,
      AkaliE: null,
      AkaliR: null,
    },
  };
}
export { importModule };
