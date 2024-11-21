function importModule() {
  return {
    type: "champion",
    id: "Yasuo",
    title: "疾风剑豪",
    name: "亚索",
    avatar: "Yasuo.png",
    skins: [
      { name: "default", skin: "Yasuo_0.jpg" },
      { name: "西部牛仔 亚索", skin: "Yasuo_1.jpg" },
      { name: "源计划：风 亚索", skin: "Yasuo_2.jpg" },
      { name: "腥红之月 亚索", skin: "Yasuo_3.jpg" },
      { name: "黑夜使者 亚索", skin: "Yasuo_9.jpg" },
      { name: "奥德赛 亚索", skin: "Yasuo_10.jpg" },
      { name: "战场BOSS 亚索", skin: "Yasuo_17.jpg" },
      { name: "真实伤害 亚索", skin: "Yasuo_18.jpg" },
      { name: "至臻 真实伤害 亚索", skin: "Yasuo_35.jpg" },
      { name: "灵魂莲华 亚索", skin: "Yasuo_36.jpg" },
      { name: "断浪之刃 亚索", skin: "Yasuo_45.jpg" },
      { name: "神龙尊者 昼日真龙 亚索", skin: "Yasuo_54.jpg" },
      { name: "神龙尊者 夜月幻龙 亚索", skin: "Yasuo_55.jpg" },
      { name: "墨之影武者 亚索", skin: "Yasuo_56.jpg" },
      { name: "至臻 墨之影武者 亚索", skin: "Yasuo_57.jpg" },
      { name: "预知之眼 亚索", skin: "Yasuo_68.jpg" },
      { name: "幻灵孤狼 亚索", skin: "Yasuo_77.jpg" },
      { name: "创世 黑夜使者 亚索", skin: "Yasuo_87.jpg" },
    ],
    spells: [
      {
        id: "YasuoP",
        name: "浪客之道",
        icon: "YasuoP.png",
        description:
          "亚索的暴击几率提升。此外，亚索在移动时会为一层护盾攒能。护盾会在他受到来自英雄或野怪的伤害时触发。",
      },
      {
        id: "YasuoQ",
        name: "斩钢闪",
        icon: "YasuoQ.png",
        description:
          "亚索进行戳刺，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。如果他命中了，那么他会获得一层持续{{ gatheringstormduration }}秒的层数。当他拥有2层时，这个技能的下次施放将会发射出一道远程龙卷风，造成等值伤害和{{ knockupdurationtooltiponly }}秒<status>击飞</status>。<br /><br />如果在冲刺期间施放，那么这个技能会呈环状进行打击而非直接戳刺。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YasuoW",
        name: "风之障壁",
        icon: "YasuoW.png",
        description:
          "亚索形成一个持续4秒的气流浮墙，来阻挡敌方的飞行道具。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YasuoE",
        name: "踏前斩",
        icon: "YasuoE.png",
        description:
          "亚索冲刺并穿过一个目标，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。这个技能每次施放后都会为{{ stackduration }}秒内的后续施放提供<magicDamage>{{ bonusdamageperstack }}</magicDamage>额外伤害，至多可叠加{{ maxstacks }}次。<br /><br />这个技能对每个目标有{{ e2 }}秒冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YasuoR",
        name: "狂风绝息斩",
        icon: "YasuoR.png",
        description:
          "亚索传送到一名<status>浮空</status>的敌方英雄身边，造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>并使所有附近<status>浮空</status>的敌人们维持此状态至多{{ rknockupduration }}秒。亚索还会获得满额<keywordMajor>剑意</keywordMajor>，但会失去所有所有<spellName>斩钢闪</spellName>层数。<br /><br />之后，亚索的暴击会无视<scaleArmor>{{ rpercentarmorpen }}%额外护甲</scaleArmor>，持续{{ rbuffduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      YasuoP: null,
      YasuoQ: null,
      YasuoW: null,
      YasuoE: null,
      YasuoR: null,
    },
  };
}
export { importModule };
