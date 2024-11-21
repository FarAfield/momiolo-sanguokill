function importModule() {
  return {
    type: "champion",
    id: "Kennen",
    title: "狂暴之心",
    name: "凯南",
    avatar: "Kennen.png",
    skins: [
      { name: "default", skin: "Kennen_0.jpg" },
      { name: "红色彗星 凯南", skin: "Kennen_1.jpg" },
      { name: "银色闪电 凯南", skin: "Kennen_2.jpg" },
      { name: "空手道 凯南", skin: "Kennen_3.jpg" },
      { name: "医学博士 凯南", skin: "Kennen_4.jpg" },
      { name: "刺客信条 凯南", skin: "Kennen_5.jpg" },
      { name: "腥红之月 凯南", skin: "Kennen_6.jpg" },
      { name: "超级英雄 凯南", skin: "Kennen_7.jpg" },
      { name: "奈落之炎 凯南", skin: "Kennen_8.jpg" },
      { name: "DWG 凯南", skin: "Kennen_23.jpg" },
      { name: "宇航员 凯南", skin: "Kennen_25.jpg" },
    ],
    spells: [
      {
        id: "KennenP",
        name: "【忍法！雷缚印】",
        icon: "KennenP.png",
        description: "凯南在用他的技能命中同一敌方3次后，会将其晕眩。",
      },
      {
        id: "KennenQ",
        name: "奥义！千鸟",
        icon: "KennenQ.png",
        description:
          "凯南投掷一枚手里剑，对命中的第一个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KennenW",
        name: "奥义！电刃",
        icon: "KennenW.png",
        description:
          "<spellPassive>被动：</spellPassive>每第5次攻击造成额外的<magicDamage>{{ totaldamagepassive }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>凯南释放一道电能爆裂，对附近被施加了<spellName>忍法！雷缚印</spellName>的敌人们造成<magicDamage>{{ totaldamageactive }}魔法伤害</magicDamage>。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KennenE",
        name: "奥义！雷铠",
        icon: "KennenE.png",
        description:
          "凯南变成一个闪电球，获得<speed>{{ movement speed*100 }}%移动速度</speed>，在穿过敌人时造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，同时变为幽灵状态，持续{{ duration - as ball }}秒。如果凯南对至少一名敌人造成了伤害，那么他会获得{{ energy refund }}能量。<br /><br />在这个技能结束后，凯南会获得<attackSpeed>{{ attack speed*100 }}%攻击速度</attackSpeed>，持续{{ duration - after ball }}秒。凯南可以通过<recast>再次施放</recast>来提前结束这个技能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KennenR",
        name: "秘奥义！万雷天牢引",
        icon: "KennenR.png",
        description:
          "凯南释放一阵魔法风暴，每{{ kennenrtickrate }}秒对附近的所有敌人造成<magicDamage>{{ pertickdamagecalculated }}魔法伤害</magicDamage>，并且获得<scaleArmor>{{ kennenrdefenses }}护甲</scaleArmor>和<scaleMR>{{ kennenrdefenses }}魔法抗性</scaleMR>，持续{{ kennenrduration }}秒。后续的每次命中会对已被影响的敌人造成{{ damageamp*100 }}%提升伤害。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KennenP: null,
      KennenQ: null,
      KennenW: null,
      KennenE: null,
      KennenR: null,
    },
  };
}
export { importModule };
