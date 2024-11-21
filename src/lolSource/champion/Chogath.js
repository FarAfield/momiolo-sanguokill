function importModule() {
  return {
    type: "champion",
    id: "Chogath",
    title: "虚空恐惧",
    name: "科加斯",
    avatar: "Chogath.png",
    skins: [
      { name: "default", skin: "Chogath_0.jpg" },
      { name: "梦魇 科加斯", skin: "Chogath_1.jpg" },
      { name: "绅士 科加斯", skin: "Chogath_2.jpg" },
      { name: "尼斯巨兽 科加斯", skin: "Chogath_3.jpg" },
      { name: "侏罗纪化石 科加斯", skin: "Chogath_4.jpg" },
      { name: "战地巨兽 科加斯", skin: "Chogath_5.jpg" },
      { name: "暴龙 科加斯", skin: "Chogath_6.jpg" },
      { name: "暗星 科加斯", skin: "Chogath_7.jpg" },
      { name: "山海绘卷 科加斯", skin: "Chogath_14.jpg" },
      { name: "绝息圣堂 科加斯", skin: "Chogath_23.jpg" },
      { name: "鳄加斯", skin: "Chogath_32.jpg" },
    ],
    spells: [
      {
        id: "ChogathP",
        name: "肉食者",
        icon: "ChogathP.png",
        description:
          "当科加斯杀死一个单位时，他会回复生命值和法力值。回复的数值会随着科加斯的等级而提升。",
      },
      {
        id: "ChogathQ",
        name: "破裂",
        icon: "ChogathQ.png",
        description:
          "科加斯使大地破裂，<status>击飞</status>敌人{{ e5 }}秒，造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>，并使敌人<status>减速</status>{{ e2 }}%，持续{{ e3 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ChogathW",
        name: "野性尖叫",
        icon: "ChogathW.png",
        description:
          "科加斯进行咆哮，<status>沉默</status>敌人{{ e2 }}秒并造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ChogathE",
        name: "恐惧之刺",
        icon: "ChogathE.png",
        description:
          "科加斯的下三次攻击会发射尖刺，造成<magicDamage>{{ basedamagetotaltooltip }}加上目标{{ maxhealthpercentcalc }}最大生命值的魔法伤害</magicDamage>并使敌人<status>减速</status>{{ slowamountpercentage }}%，减速效果会在{{ e3 }}秒里持续衰减。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ChogathR",
        name: "盛宴",
        icon: "ChogathR.png",
        description:
          "科加斯贪婪地吞吃一名敌人，对英雄造成<trueDamage>{{ rdamage }}真实伤害</trueDamage>或对野怪和小兵造成<trueDamage>{{ rmonsterdamage }}真实伤害</trueDamage>。如果这个技能击杀了敌方单位，那么科加斯会获得一层可叠加的效果，使他的体型变大且提供<healing>{{ rhealthperstack }}最大生命值</healing>。通过吞吃小兵和非史诗级野怪的方式只能获得共{{ rminionmaxstacks }}层效果。 {{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ChogathP: null,
      ChogathQ: null,
      ChogathW: null,
      ChogathE: null,
      ChogathR: null,
    },
  };
}
export { importModule };
