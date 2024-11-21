function importModule() {
  return {
    type: "champion",
    id: "Illaoi",
    title: "海兽祭司",
    name: "俄洛伊",
    avatar: "Illaoi.png",
    skins: [
      { name: "default", skin: "Illaoi_0.jpg" },
      { name: "虚空使者 俄洛伊", skin: "Illaoi_1.jpg" },
      { name: "抵抗军炎魔 俄洛伊", skin: "Illaoi_2.jpg" },
      { name: "水瓶星神 俄洛伊", skin: "Illaoi_10.jpg" },
      { name: "净雪之月 俄洛伊", skin: "Illaoi_18.jpg" },
      { name: "幻灵巨熊 俄洛伊", skin: "Illaoi_27.jpg" },
    ],
    spells: [
      {
        id: "IllaoiP",
        name: "古神先知",
        icon: "IllaoiP.png",
        description:
          "俄洛伊和她创造的<font color='#669900'>躯壳</font>会在附近的不可穿越的地形上生成触手。触手会挥向灵魂，<font color='#669900'>躯壳</font>，以及俄洛伊的【严酷训诫】的受害者们。触手会在命中敌人时造成物理伤害，如果命中目标是英雄还会治疗俄洛伊。",
      },
      {
        id: "IllaoiQ",
        name: "触手猛击",
        icon: "IllaoiQ.png",
        description:
          "<passive>被动：</passive><keywordMajor>猛击</keywordMajor>伤害提升<physicalDamage>{{ tentacledamageamp*100 }}%</physicalDamage>(当前<physicalDamage>{{ f1 }}物理伤害</physicalDamage>)。<br /><br /><active>主动：</active>俄洛伊挥舞她的神像，使一条触手向前<keywordMajor>猛击</keywordMajor>。\t{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "IllaoiW",
        name: "严酷训诫",
        icon: "IllaoiW.png",
        description:
          "俄洛伊的下次攻击会使她跃向目标，造成额外的<physicalDamage>{{ healthpercenttotaltooltip }}最大生命值的物理伤害</physicalDamage>。当她进行打击时，附近的触手会对目标进行<keywordMajor>猛击</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "IllaoiE",
        name: "灵魂试炼",
        icon: "IllaoiE.png",
        description:
          "俄洛伊从一名敌方英雄身上扯出灵魂，持续{{ spiritduration }}秒。灵魂能像英雄一样被攻击，并且所受的{{ echopercenttooltiponly }}伤害会传递给本体。<br /><br />如果灵魂死亡或者离本体过远，那么目标会被标记{{ vesselduration }}秒，并被<status>减速</status>{{ slowamount*100 }}%，持续{{ slowduration }}秒。被标记的敌人将每<scaleLevel>{{ f1 }}</scaleLevel>秒生成一条触手。<br /><br />触手会每{{ timebetweenvesseltentacleslams }}秒自动<keywordMajor>猛击</keywordMajor>一次灵魂和被标记的敌人。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "IllaoiR",
        name: "过界信仰",
        icon: "IllaoiR.png",
        description:
          "俄洛伊将她的神像砸入地面，对附近的敌人造成<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>并且每命中一个敌方英雄就会生成一条触手。<br /><br />在接下来的{{ duration }}秒里，触手无法被选取， <keywordMajor>猛击</keywordMajor>变快50%，并且【W严酷训诫】的基础冷却时间降至2秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      IllaoiP: null,
      IllaoiQ: null,
      IllaoiW: null,
      IllaoiE: null,
      IllaoiR: null,
    },
  };
}
export { importModule };
