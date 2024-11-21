function importModule() {
  return {
    type: "champion",
    id: "Katarina",
    title: "不祥之刃",
    name: "卡特琳娜",
    avatar: "Katarina.png",
    skins: [
      { name: "default", skin: "Katarina_0.jpg" },
      { name: "赏金猎人 卡特琳娜", skin: "Katarina_1.jpg" },
      { name: "红牌！退场！ 卡特琳娜", skin: "Katarina_2.jpg" },
      { name: "海贼魅影 卡特琳娜", skin: "Katarina_3.jpg" },
      { name: "暗夜猫女 卡特琳娜", skin: "Katarina_4.jpg" },
      { name: "前线指挥官 卡特琳娜", skin: "Katarina_5.jpg" },
      { name: "沙漠风暴 卡特琳娜", skin: "Katarina_6.jpg" },
      { name: "夺命美人 卡特琳娜", skin: "Katarina_7.jpg" },
      { name: "闭月之颜 貂蝉", skin: "Katarina_8.jpg" },
      { name: "源计划：雄心 卡特琳娜", skin: "Katarina_9.jpg" },
      { name: "死亡誓约 卡特琳娜", skin: "Katarina_10.jpg" },
      { name: "战斗学院 卡特琳娜", skin: "Katarina_12.jpg" },
      { name: "腥红之月 卡特琳娜", skin: "Katarina_21.jpg" },
      { name: "女帝 卡特琳娜", skin: "Katarina_29.jpg" },
      { name: "西部魔影 执行人 卡特琳娜", skin: "Katarina_37.jpg" },
      { name: "花仙使者 卡特琳娜", skin: "Katarina_47.jpg" },
      { name: "至臻 花仙使者 卡特琳娜", skin: "Katarina_48.jpg" },
    ],
    spells: [
      {
        id: "KatarinaP",
        name: "贪婪",
        icon: "KatarinaP.png",
        description:
          "每当一名在过去3秒被卡特琳娜所伤害的敌方英雄阵亡时，卡特琳娜的技能的冷却时间就会显著减少。<br><br>如果卡特琳娜拾起一把<font color='#FFF673'>匕首</font>，她会用它来斩击附近的所有敌人以造成魔法伤害。",
      },
      {
        id: "KatarinaQ",
        name: "弹射之刃",
        icon: "KatarinaQ.png",
        description:
          "卡特琳娜投掷一把<keywordMajor>匕首</keywordMajor>，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>给目标及附近的{{ maxbounces }}个敌人。<keywordMajor>匕首</keywordMajor>随后会弹落到主要目标身后的地面上。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KatarinaW",
        name: "伺机待发",
        icon: "KatarinaW.png",
        description:
          "卡特琳娜扔出一把<keywordMajor>匕首</keywordMajor>至空中并获得在{{ e2 }}秒里持续衰减的<speed>{{ e4 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KatarinaE",
        name: "瞬步",
        icon: "KatarinaE.png",
        description:
          "卡特琳娜在眨眼间闪烁到目标友军、敌人、或<keywordMajor>匕首</keywordMajor>处。如果目标是敌人，那么卡特琳娜会造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>——如果是其它情况，那么她会对范围内距她最近的敌人造成伤害。<br /><br />拾取一把<keywordMajor>匕首</keywordMajor>将使这个技能的冷却时间缩短<scaleLevel>{{ daggercooldownreduction }}</scaleLevel>秒(<scaleLevel>{{ tooltipdaggerreduction }}</scaleLevel>)。卡特琳娜可以闪烁到目标附近的任一位置。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KatarinaR",
        name: "死亡莲华",
        icon: "KatarinaR.png",
        description:
          "卡特琳娜化身为一道剑刃飓风，快速用一连串匕首攻击相距最近的3名敌方英雄。每把匕首造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>和<physicalDamage>{{ addamagecalc }}物理伤害</physicalDamage>，并施加持续{{ grievousduration }}秒的{{ grievousamount*100 }}%重伤效果。<br /><br />在{{ duration }}秒里持续对每个敌方英雄造成的总伤害：<magicDamage>{{ totaldamagecalc }}魔法伤害</magicDamage>和<physicalDamage>{{ totaladdamagecalc }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KatarinaP: null,
      KatarinaQ: null,
      KatarinaW: null,
      KatarinaE: null,
      KatarinaR: null,
    },
  };
}
export { importModule };
