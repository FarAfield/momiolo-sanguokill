function importModule() {
  return {
    type: "champion",
    id: "Brand",
    title: "复仇焰魂",
    name: "布兰德",
    avatar: "Brand.png",
    skins: [
      { name: "default", skin: "Brand_0.jpg" },
      { name: "末日余生 布兰德", skin: "Brand_1.jpg" },
      { name: "V字仇杀者 布兰德", skin: "Brand_2.jpg" },
      { name: "冰晶之核 布兰德", skin: "Brand_3.jpg" },
      { name: "丧尸 布兰德", skin: "Brand_4.jpg" },
      { name: "灵魂烈焰 布兰德", skin: "Brand_5.jpg" },
      { name: "战场BOSS 布兰德", skin: "Brand_6.jpg" },
      { name: "苍穹之光 布兰德", skin: "Brand_7.jpg" },
      { name: "神龙尊者 魔龙布兰德", skin: "Brand_8.jpg" },
      { name: "焰执事 布兰德", skin: "Brand_21.jpg" },
      { name: "至臻 焰执事 布兰德", skin: "Brand_22.jpg" },
      { name: "妖怪艺术家 布兰德", skin: "Brand_33.jpg" },
      { name: "至高天 布兰德", skin: "Brand_42.jpg" },
    ],
    spells: [
      {
        id: "BrandP",
        name: "炽热之焰",
        icon: "BrandP.png",
        description:
          "布兰德的技能会对他的目标施加【烈焰焚身】效果，在4秒里持续造成伤害，最多可叠加3次。如果布兰德击杀了身上带有【烈焰焚身】的敌人，那么他会回复法力值。当【炽热之焰】在一名英雄或大型野怪身上叠至满层时，它会变得不稳定。它会在2秒内爆炸，在目标附近的区域施加法术特效并造成大量伤害。",
      },
      {
        id: "BrandQ",
        name: "火焰烙印",
        icon: "BrandQ.png",
        description:
          "布兰德放出一团火球，对命中的第一个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />如果目标被<keywordMajor>烈焰焚身</keywordMajor>，那么还会被<status>晕眩</status>1.5秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BrandW",
        name: "烈焰之柱",
        icon: "BrandW.png",
        description:
          "布兰德生成一团纯火之柱，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />被<keywordMajor>烈焰焚身</keywordMajor>的单位们会转而受到<magicDamage>{{ empowereddamage }}伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BrandE",
        name: "烈火燃烧",
        icon: "BrandE.png",
        description:
          "布兰德在目标身上引发一阵强力的爆裂，对附近的单位们造成<magicDamage>{{ edamagecalc }}魔法伤害</magicDamage>。<br /><br />如果目标带有<keywordMajor>烈焰焚身</keywordMajor>，那么扩散距离翻倍。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BrandR",
        name: "烈焰风暴",
        icon: "BrandR.png",
        description:
          "布兰德释放一颗破坏力极强的火焰之种，火焰之种会在布兰德或另一名敌人之间弹跳至多5次，每次弹跳时对敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。弹跳会优先以带有即将满层的<keywordMajor>炽热之焰</keywordMajor>效果的英雄为目标。<br /><br />如果目标带有<keywordMajor>烈焰焚身</keywordMajor>，则会被暂时<status>减速</status>{{ slowamount }}%。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      BrandP: null,
      BrandQ: null,
      BrandW: null,
      BrandE: null,
      BrandR: null,
    },
  };
}
export { importModule };
