function importModule() {
  return {
    type: "champion",
    id: "Gragas",
    title: "酒桶",
    name: "古拉加斯",
    avatar: "Gragas.png",
    skins: [
      { name: "default", skin: "Gragas_0.jpg" },
      { name: "深潜蛙人 古拉加斯", skin: "Gragas_1.jpg" },
      { name: "乡村农夫 古拉加斯", skin: "Gragas_2.jpg" },
      { name: "圣诞老人 古拉加斯", skin: "Gragas_3.jpg" },
      { name: "品酒大师 古拉加斯", skin: "Gragas_4.jpg" },
      { name: "飞车暴走族 古拉加斯", skin: "Gragas_5.jpg" },
      { name: "美酒节特使 古拉加斯", skin: "Gragas_6.jpg" },
      { name: "狂热球迷 古拉加斯", skin: "Gragas_7.jpg" },
      { name: "Fnatic 古拉加斯", skin: "Gragas_8.jpg" },
      { name: "古拉加斯·碎桶者", skin: "Gragas_9.jpg" },
      { name: "冰原核弹 古拉加斯", skin: "Gragas_10.jpg" },
      { name: "光明骑士 古拉加斯", skin: "Gragas_11.jpg" },
      { name: "太空律动 “电音酒桶” 古拉加斯", skin: "Gragas_20.jpg" },
      { name: "西部魔影 古拉加斯", skin: "Gragas_29.jpg" },
      { name: "超级音乐粉丝 古拉加斯", skin: "Gragas_39.jpg" },
    ],
    spells: [
      {
        id: "GragasP",
        name: "欢乐时光",
        icon: "GragasP.png",
        description: "古拉加斯可周期性地使用一个技能来治疗自身。",
      },
      {
        id: "GragasQ",
        name: "滚动酒桶",
        icon: "GragasQ.png",
        description:
          "古拉加斯滚动出一个酒桶，该酒桶会在{{ e4 }}秒后爆炸， 造成<magicDamage>{{ mindamage }}魔法伤害</magicDamage>到<magicDamage>{{ maxdamage }}魔法伤害</magicDamage>和持续{{ e3 }}秒的{{ e2 }}到{{ effect2amount*1.5 }}%<status>减速</status>。伤害和<status>减速</status>会基于该酒桶在爆炸前的时长来提升。<br /><br />古拉加斯可以<recast>再次施放</recast>这个技能来提前引爆该酒桶。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GragasW",
        name: "醉酒狂暴",
        icon: "GragasW.png",
        description:
          "古拉加斯畅饮他的佳酿，使即将到来的伤害降低{{ damagereduction }}，持续{{ defenseduration }}秒。在完成他的畅饮后，他的下次攻击对目标及目标身边的敌人们造成额外的<magicDamage>{{ totaldamage }}</magicDamage>外加<magicDamage>{{ maxhppercentdamage }}%最大生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GragasE",
        name: "肉弹冲击",
        icon: "GragasE.png",
        description:
          "古拉加斯向前冲锋，撞击命中的第一名敌人，使附近的敌人<status>击飞</status>{{ stunduration }}秒并对其造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />当古拉加斯撞到一个敌人时，这个技能的冷却时间会缩短{{ cooldownrefund*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GragasR",
        name: "爆破酒桶",
        icon: "GragasR.png",
        description:
          "古拉加斯猛抛他的酒桶，造成<magicDamage>{{ damagedone }}魔法伤害</magicDamage>并将敌人们从爆炸中心<status>击退</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      GragasP: null,
      GragasQ: null,
      GragasW: null,
      GragasE: null,
      GragasR: null,
    },
  };
}
export { importModule };
