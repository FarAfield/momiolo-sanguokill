function importModule() {
  return {
    type: "champion",
    id: "Janna",
    title: "风暴之怒",
    name: "迦娜",
    avatar: "Janna.png",
    skins: [
      { name: "default", skin: "Janna_0.jpg" },
      { name: "暴风女神 迦娜", skin: "Janna_1.jpg" },
      { name: "海克斯科技 迦娜", skin: "Janna_2.jpg" },
      { name: "寒冰女皇 迦娜", skin: "Janna_3.jpg" },
      { name: "胜利女神 迦娜", skin: "Janna_4.jpg" },
      { name: "女主播 迦娜", skin: "Janna_5.jpg" },
      { name: "Fnatic 迦娜", skin: "Janna_6.jpg" },
      { name: "星之守护者 迦娜", skin: "Janna_7.jpg" },
      { name: "玉剑传说 风仙子", skin: "Janna_8.jpg" },
      { name: "魅惑女巫 迦娜", skin: "Janna_13.jpg" },
      { name: "沙之守护 迦娜", skin: "Janna_20.jpg" },
      { name: "女帝 迦娜", skin: "Janna_27.jpg" },
      { name: "水晶玫瑰 迦娜", skin: "Janna_36.jpg" },
      { name: "海珀利安小队 X09-星环灵风 迦娜", skin: "Janna_45.jpg" },
      { name: "至臻 海珀利安小队 X09-星环灵风 迦娜", skin: "Janna_46.jpg" },
      { name: "天龙之子 迦娜", skin: "Janna_56.jpg" },
    ],
    spells: [
      {
        id: "JannaP",
        name: "顺风而行",
        icon: "JannaP.png",
        description:
          "迦娜的友军在朝她移动时获得移动速度。<br><br>迦娜的普攻和【和风守护】会附带一部分额外移动速度的额外魔法伤害。",
      },
      {
        id: "JannaQ",
        name: "飓风呼啸",
        icon: "JannaQ.png",
        description:
          "迦娜召唤一道在{{ maxduration }}秒里持续聚集的飓风，随后沿路猛刮出去。飓风对目标造成<magicDamage>{{ minimumdamage }} - {{ maxdamage }}魔法伤害</magicDamage>和{{ baseknockup }} - {{ maxknockup }}秒<status>击飞</status>。移动距离、伤害和<status>击飞</status>时长都基于飓风聚集的时长。迦娜可以<recast>再次施放</recast>来提前将飓风刮出去。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JannaW",
        name: "和风守护",
        icon: "JannaW.png",
        description:
          "<spellPassive>被动：</spellPassive>迦娜获得<speed>{{ totalms }}移动速度</speed>并处在幽灵状态。<br /><br /><spellActive>主动：</spellActive>迦娜的风灵打击一名敌人，对其造成持续{{ slowduration }}秒的{{ totalslow }}<status>减速</status>和<magicDamage>{{ totaldamage }} + {{ spell.tailwindself:bonusdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JannaE",
        name: "风暴之眼",
        icon: "JannaE.png",
        description:
          "迦娜为一个友军或防御塔提供持续{{ shieldduration }}秒的<shield>{{ totalshield }}护盾值</shield>。在护盾存在时，该友军目标获得<scaleAD>{{ totalad }}攻击力</scaleAD>。<br /><br />迦娜在每次用一个技能使一名敌方英雄的移动速度受损时，会使这个冷却时间缩短{{ ecdrefundforcc*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JannaR",
        name: "复苏季风",
        icon: "JannaR.png",
        description:
          "迦娜召唤一阵魔法季风，<status>击退</status>附近的敌人们然后在{{ e3 }}秒里持续治疗附近的友军共<healing>{{ totalheal }}生命值</healing>。移动或使用技能都会提前结束这阵季风。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      JannaP: null,
      JannaQ: null,
      JannaW: null,
      JannaE: null,
      JannaR: null,
    },
  };
}
export { importModule };
