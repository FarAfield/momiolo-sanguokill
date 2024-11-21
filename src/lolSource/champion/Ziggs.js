function importModule() {
  return {
    type: "champion",
    id: "Ziggs",
    title: "爆破鬼才",
    name: "吉格斯",
    avatar: "Ziggs.png",
    skins: [
      { name: "default", skin: "Ziggs_0.jpg" },
      { name: "科学狂人 吉格斯", skin: "Ziggs_1.jpg" },
      { name: "少校 吉格斯", skin: "Ziggs_2.jpg" },
      { name: "泳池派对 吉格斯", skin: "Ziggs_3.jpg" },
      { name: "雪球也能爆炸！ 吉格斯", skin: "Ziggs_4.jpg" },
      { name: "奥术大师 吉格斯", skin: "Ziggs_5.jpg" },
      { name: "战场BOSS 吉格斯", skin: "Ziggs_6.jpg" },
      { name: "奥德赛 吉格斯", skin: "Ziggs_7.jpg" },
      { name: "糖果大战 吉格斯", skin: "Ziggs_14.jpg" },
      { name: "海克斯科技 吉格斯", skin: "Ziggs_23.jpg" },
      { name: "小蜜蜂 吉格斯", skin: "Ziggs_24.jpg" },
      { name: "魂蔷薇 吉格斯", skin: "Ziggs_33.jpg" },
    ],
    spells: [
      {
        id: "ZiggsP",
        name: "一触即发",
        icon: "ZiggsP.png",
        description:
          "每过一段时间，吉格斯的下次普通攻击就会造成额外的魔法伤害。这个冷却时间会在吉格斯每用一次技能时得到减少。",
      },
      {
        id: "ZiggsQ",
        name: "弹跳炸弹",
        icon: "ZiggsQ.png",
        description:
          "吉格斯扔出一个会弹跳的炸弹，对敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZiggsW",
        name: "定点爆破",
        icon: "ZiggsW.png",
        description:
          "吉格斯扔出一个炸药包，会在{{ bombduration }}秒后或者在<recast>再次施放</recast>该技能后爆炸。爆炸会对敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，并将他们<status>击</status><status>退</status>。吉格斯也会被震开，但不会受到伤害。<br /><br />【定点爆破】会自动摧毁生命值低于{{ turretdestroypercent*100 }}%的防御塔。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZiggsE",
        name: "海克斯爆破雷区",
        icon: "ZiggsE.png",
        description:
          "吉格斯布下敌人一踩就炸的感应雷区，对踩中地雷的敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ e4 }}秒的{{ slow*-100 }}%<status>减速</status>。地雷持续{{ e3 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZiggsR",
        name: "科学的地狱火炮",
        icon: "ZiggsR.png",
        description:
          "吉格斯扔出他的终极造物，在爆炸范围的中心区域造成<magicDamage>{{ empowereddamage }}魔法伤害</magicDamage>，或在边缘区域造成<magicDamage>{{ blastdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ZiggsP: null,
      ZiggsQ: null,
      ZiggsW: null,
      ZiggsE: null,
      ZiggsR: null,
    },
  };
}
export { importModule };
