function importModule() {
  return {
    type: "champion",
    id: "Velkoz",
    title: "虚空之眼",
    name: "维克兹",
    avatar: "Velkoz.png",
    skins: [
      { name: "default", skin: "Velkoz_0.jpg" },
      { name: "战地机甲 维克兹", skin: "Velkoz_1.jpg" },
      { name: "苍穹之光 维克兹", skin: "Velkoz_2.jpg" },
      { name: "这货不是维克兹", skin: "Velkoz_3.jpg" },
      { name: "地狱火 维克兹", skin: "Velkoz_4.jpg" },
      { name: "黯晶之眼 维克兹", skin: "Velkoz_11.jpg" },
      { name: "天才蜂 维克兹", skin: "Velkoz_20.jpg" },
    ],
    spells: [
      {
        id: "VelkozP",
        name: "有机体解构",
        icon: "VelkozP.png",
        description:
          "维克兹的技能会对命中的敌人施加<keywordName>有机体解构</keywordName>效果。如果累积到3层效果，敌人就会受到爆发性的真实伤害。",
      },
      {
        id: "VelkozQ",
        name: "等离子裂变",
        icon: "VelkozQ.png",
        description:
          "维克兹发射一束等离子，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和在{{ slowduration }}秒里持续衰减的{{ slowamount*100 }}%<status>减速</status>。在到达它的距离终点，或是命中一个目标，或是<recast>再次施放</recast>此技能时，等离子束会分裂成新的两束并呈90度角发射出去。<br /><br />用这个技能击杀一个单位，就会回复<scaleMana>{{ tooltipmanarefund }}法力</scaleMana>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VelkozW",
        name: "虚空裂隙",
        icon: "VelkozW.png",
        description:
          "维克兹打开一道虚空裂隙，造成<magicDamage>{{ initialdamage }}魔法伤害</magicDamage>。然后裂隙会喷发，造成<magicDamage>{{ secondarydamage }}魔法伤害</magicDamage>。<br /><br />这个技能有2层充能({{ ammorechargetime }}秒刷新时间)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VelkozE",
        name: "构造分解",
        icon: "VelkozE.png",
        description:
          "维克兹瓦解一个附近的区域，导致它爆炸，造成{{ stunduration }}秒<status>击飞</status>和<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。靠近维克兹的敌人们将被<status>击退</status>，而不是<status>击飞</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VelkozR",
        name: "生命形态瓦解射线",
        icon: "VelkozR.png",
        description:
          "维克兹引导一道能量射线来跟随鼠标指针，在2.5秒里持续造成共<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和{{ e3 }}%<status>减速</status>。对近期被<spellName>有机体解构</spellName>伤害过的敌人们造成<trueDamage>真实伤害</trueDamage>作为替代。<br /><br />射线内的敌人会周期性地获得<keywordMajor>解构</keywordMajor>层数。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      VelkozP: null,
      VelkozQ: null,
      VelkozW: null,
      VelkozE: null,
      VelkozR: null,
    },
  };
}
export { importModule };
