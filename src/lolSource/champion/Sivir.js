function importModule() {
  return {
    type: "champion",
    id: "Sivir",
    title: "战争女神",
    name: "希维尔",
    avatar: "Sivir.png",
    skins: [
      { name: "default", skin: "Sivir_0.jpg" },
      { name: "战场公主 希维尔", skin: "Sivir_1.jpg" },
      { name: "亮丽女神 希维尔", skin: "Sivir_2.jpg" },
      { name: "女猎手 希维尔", skin: "Sivir_3.jpg" },
      { name: "钢铁之心 希维尔", skin: "Sivir_4.jpg" },
      { name: "创战纪 希维尔", skin: "Sivir_5.jpg" },
      { name: "冰雪风暴 希维尔", skin: "Sivir_6.jpg" },
      { name: "光明骑士 希维尔", skin: "Sivir_7.jpg" },
      { name: "胜利女神 希维尔", skin: "Sivir_8.jpg" },
      { name: "新创战纪 希维尔", skin: "Sivir_9.jpg" },
      { name: "送披萨的小姐姐 希维尔", skin: "Sivir_10.jpg" },
      { name: "腥红之月 希维尔", skin: "Sivir_16.jpg" },
      { name: "奥德赛 希维尔", skin: "Sivir_25.jpg" },
      { name: "咖啡甜心 希维尔", skin: "Sivir_34.jpg" },
      { name: "日蚀骑士 希维尔", skin: "Sivir_43.jpg" },
      { name: "剪纸仙灵 希维尔", skin: "Sivir_50.jpg" },
      { name: "至臻 剪纸仙灵 希维尔", skin: "Sivir_51.jpg" },
      { name: "伏虎之力 希维尔", skin: "Sivir_61.jpg" },
      { name: "十五周年纪念 希维尔", skin: "Sivir_70.jpg" },
    ],
    spells: [
      {
        id: "SivirP",
        name: "敏锐疾行",
        icon: "SivirP.png",
        description: "希维尔在攻击一名敌方英雄时，会短暂地获得移动速度提升。",
      },
      {
        id: "SivirQ",
        name: "回旋之刃",
        icon: "SivirQ.png",
        description:
          "希维尔像挥舞回力标一样挥出她的十字刃，对命中的所有敌人造成<physicalDamage>{{ totaldamage }}</physicalDamage>。命中非英雄单位时，会使对每个后续目标的伤害减少，减到{{ falloffminimum*100 }}%为止。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SivirW",
        name: "弹射",
        icon: "SivirW.png",
        description:
          "在接下来的{{ buffduration }}秒里，希维尔获得<attackSpeed>{{ ricochetattackspeed*100 }}%攻击速度</attackSpeed>并且她的普攻会获得强化，弹射到附近的其它敌人上，每次弹射造成<physicalDamage>{{ bouncedamage }}物理伤害</physicalDamage>，至多弹射{{ maxbounces }}次。<br /><br />如果生成弹射的那次攻击造成了暴击，那么该次普攻的所有弹射都会暴击。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SivirE",
        name: "法术护盾",
        icon: "SivirE.png",
        description:
          "希维尔制造一层持续{{ e1 }}秒的法术屏障，来格挡一次即将到来的敌方技能。如果希维尔成功格挡了一次技能，那么就会回复<healing>{{ totalheal }}生命值</healing>并触发【敏锐疾行】。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SivirR",
        name: "狩猎",
        icon: "SivirR.png",
        description:
          "希维尔在战斗中引领附近的友军，为他们提供持续{{ ultduration }}秒的<speed>{{ maxms*100 }}%移动速度</speed>。<br /><br />战争女神在【狩猎】激活期间，希维尔对英雄进行的攻击会使她的基础技能的冷却时间缩短0.5秒。<br /><br />参与击杀近期造成过伤害的敌人会刷新【狩猎】的持续时长。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SivirP: null,
      SivirQ: null,
      SivirW: null,
      SivirE: null,
      SivirR: null,
    },
  };
}
export { importModule };
