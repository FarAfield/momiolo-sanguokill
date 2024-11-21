function importModule() {
  return {
    type: "champion",
    id: "Elise",
    title: "蜘蛛女皇",
    name: "伊莉丝",
    avatar: "Elise.png",
    skins: [
      { name: "default", skin: "Elise_0.jpg" },
      { name: "死亡绽放 伊莉丝", skin: "Elise_1.jpg" },
      { name: "胜利女神 伊莉丝", skin: "Elise_2.jpg" },
      { name: "腥红之月 伊莉丝", skin: "Elise_3.jpg" },
      { name: "SKT T1 伊莉丝", skin: "Elise_4.jpg" },
      { name: "银河魔装机神 伊莉丝", skin: "Elise_5.jpg" },
      { name: "魅惑女巫 伊莉丝", skin: "Elise_6.jpg" },
      { name: "幽梦玫瑰 伊莉丝", skin: "Elise_15.jpg" },
      { name: "魔女 伊莉丝", skin: "Elise_24.jpg" },
    ],
    spells: [
      {
        id: "EliseP",
        name: "蜘蛛女皇",
        icon: "EliseP.png",
        description:
          "人类形态：每当伊莉丝的技能命中一名敌人时，就会有一只小蜘蛛准备就绪。<br><br>蜘蛛形态：普攻造成额外魔法伤害并回复自身生命值。",
      },
      {
        id: "EliseQ",
        name: "神经毒素 / 剧毒之蜇",
        icon: "EliseQ.png",
        description:
          "<keywordMajor>人类形态</keywordMajor>：伊莉丝注入神经毒素，造成<magicDamage>{{ basedamage }}外加 {{ humanpercenthealth }}当前生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EliseW",
        name: "自爆蜘蛛 / 掠行狂暴",
        icon: "EliseW.png",
        description:
          "<keywordMajor>人类形态</keywordMajor>：伊莉丝召唤一个爆炸蜘蛛朝着一个位置移动，并在它接近一名敌人或3秒后爆炸。这个蜘蛛造成<magicDamage>{{ spell.elisehumanw:totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EliseE",
        name: "结茧 / 盘丝",
        icon: "EliseE.png",
        description:
          "<keywordMajor>人类形态</keywordMajor>：伊莉丝发射一颗蜘蛛茧，<status>晕眩</status>并使命中的第一个敌人显形{{ stunduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "EliseR",
        name: "蜘蛛形态",
        icon: "EliseR.png",
        description:
          "<keywordMajor>人类形态</keywordMajor>：伊莉丝变形为一只令人生畏的蜘蛛，变成近战，获得一套<keywordMajor>蜘蛛形态</keywordMajor>技能的使用权并且还可以召唤出所有休眠中的<keywordMajor>小蜘蛛</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      EliseP: null,
      EliseQ: null,
      EliseW: null,
      EliseE: null,
      EliseR: null,
    },
  };
}
export { importModule };
