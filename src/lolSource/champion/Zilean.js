function importModule() {
  return {
    type: "champion",
    id: "Zilean",
    title: "时光守护者",
    name: "基兰",
    avatar: "Zilean.png",
    skins: [
      { name: "default", skin: "Zilean_0.jpg" },
      { name: "圣诞狂欢 基兰", skin: "Zilean_1.jpg" },
      { name: "嘻哈精神 基兰", skin: "Zilean_2.jpg" },
      { name: "遗迹守护者 基兰", skin: "Zilean_3.jpg" },
      { name: "时间机器 基兰", skin: "Zilean_4.jpg" },
      { name: "腥红之月 基兰", skin: "Zilean_5.jpg" },
      { name: "糖果大战 基兰", skin: "Zilean_6.jpg" },
      { name: "北极星圣贤 基兰", skin: "Zilean_14.jpg" },
    ],
    spells: [
      {
        id: "ZileanP",
        name: "瓶中时光",
        icon: "ZileanP.png",
        description:
          "基兰将时光储存为经验值并能将其提供给他的友军。当他拥有足够的经验值来使一名友方英雄升级时，他就能通过右键点击来传授经验值。基兰自身也会获得等值的经验值。",
      },
      {
        id: "ZileanQ",
        name: "定时炸弹",
        icon: "ZileanQ.png",
        description:
          "基兰在目标地点上投掷一个定时炸弹。炸弹会附着在第一个靠近它周围小范围内的单位身上。<br /><br />{{ e2 }}秒后炸弹会爆炸，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />对已被附着了一颗炸弹的单位放置第二颗炸弹时，就会立刻引爆第一个炸弹，并使爆炸范围内的所有敌人<status>晕眩</status>{{ e4 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZileanW",
        name: "穿梭未来",
        icon: "ZileanW.png",
        description:
          "基兰倒转时间，使他其它基础技能的冷却时间缩短{{ e2 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZileanE",
        name: "时光发条",
        icon: "ZileanE.png",
        description:
          "基兰使一名敌方英雄<status>减速</status>{{ e2 }}%或为一名友方英雄提供<speed>{{ e2 }}%移动速度</speed>，持续{{ e1 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZileanR",
        name: "时光倒流",
        icon: "ZileanR.png",
        description:
          "基兰提供一个保护性的时间符文给一名友方英雄，持续{{ rduration }}秒。如果该目标将要阵亡，那么符文会回溯其时间线，使其凝滞{{ revivestateduration }}秒，然后将其复活并回复<healing>{{ rtotalheal }}生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ZileanP: null,
      ZileanQ: null,
      ZileanW: null,
      ZileanE: null,
      ZileanR: null,
    },
  };
}
export { importModule };
