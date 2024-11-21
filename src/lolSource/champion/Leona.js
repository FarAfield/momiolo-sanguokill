function importModule() {
  return {
    type: "champion",
    id: "Leona",
    title: "曙光女神",
    name: "蕾欧娜",
    avatar: "Leona.png",
    skins: [
      { name: "default", skin: "Leona_0.jpg" },
      { name: "瓦尔基里 蕾欧娜", skin: "Leona_1.jpg" },
      { name: "神圣守卫 蕾欧娜", skin: "Leona_2.jpg" },
      { name: "钢铁烈阳 蕾欧娜", skin: "Leona_3.jpg" },
      { name: "泳池派对 蕾欧娜", skin: "Leona_4.jpg" },
      { name: "源计划：山 蕾欧娜", skin: "Leona_8.jpg" },
      { name: "烧烤女神 蕾欧娜", skin: "Leona_9.jpg" },
      { name: "日蚀骑士 蕾欧娜", skin: "Leona_10.jpg" },
      { name: "月蚀骑士 蕾欧娜", skin: "Leona_11.jpg" },
      { name: "王国机神朱雀 蕾欧娜", skin: "Leona_12.jpg" },
      { name: "战斗学院 蕾欧娜", skin: "Leona_21.jpg" },
      { name: "DWG 蕾欧娜", skin: "Leona_22.jpg" },
      { name: "至臻 战斗学院 蕾欧娜", skin: "Leona_23.jpg" },
      { name: "烈阳执事 蕾欧娜", skin: "Leona_33.jpg" },
      { name: "西部魔影 大小姐 蕾欧娜", skin: "Leona_34.jpg" },
      { name: "水晶圣骑 蕾欧娜", skin: "Leona_50.jpg" },
      { name: "幻灵狮心 蕾欧娜", skin: "Leona_52.jpg" },
      { name: "至臻 幻灵狮心 蕾欧娜", skin: "Leona_53.jpg" },
    ],
    spells: [
      {
        id: "LeonaP",
        name: "日光",
        icon: "LeonaP.png",
        description:
          "技能会在敌人身上施加【日光】效果，持续1.5秒。在此期间，蕾欧娜友军对这些目标造成伤害时，会触发【日光】，使目标受到额外的魔法伤害。",
      },
      {
        id: "LeonaQ",
        name: "破晓之盾",
        icon: "LeonaQ.png",
        description:
          "蕾欧娜的下次攻击会<status>晕眩</status>目标{{ e1 }}秒，并造成额外的<magicDamage>{{ totaldamagetooltip }}</magicDamage>魔法伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LeonaW",
        name: "日蚀",
        icon: "LeonaW.png",
        description:
          "蕾欧娜举起她的盾牌，使即将到来的伤害降低{{ flatdamagereduction }}并获得<scaleArmor>{{ bonusarmortooltip }}护甲</scaleArmor>和<scaleMR>{{ bonusmrtooltip }}魔法抗性</scaleMR>，持续{{ e3 }}秒。之后，她的盾牌会爆炸，对附近的敌人造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>。如果她命中了至少一名敌人，那么她会将<scaleArmor>护甲</scaleArmor>和<scaleMR>魔法抗性</scaleMR>加成延续额外的{{ e3 }}秒。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LeonaE",
        name: "天顶之刃",
        icon: "LeonaE.png",
        description:
          "蕾欧娜用光明之剑进行猛刺，造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>。最后一个被命中的敌方英雄将会被<status>禁锢</status>{{ e2 }}秒，并且蕾欧娜将会冲向该英雄。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LeonaR",
        name: "日炎耀斑",
        icon: "LeonaR.png",
        description:
          "蕾欧娜召唤一道太阳光束，造成<magicDamage>{{ explosioncalculateddamage }}魔法伤害</magicDamage>并使敌人<status>减速</status>{{ slowpercent }}%，持续{{ ccduration }}秒。处于区域正中的敌人会受到<status>晕眩</status>效果而非<status>减速</status>效果。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      LeonaP: null,
      LeonaQ: null,
      LeonaW: null,
      LeonaE: null,
      LeonaR: null,
    },
  };
}
export { importModule };
