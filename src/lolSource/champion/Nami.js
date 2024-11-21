function importModule() {
  return {
    type: "champion",
    id: "Nami",
    title: "唤潮鲛姬",
    name: "娜美",
    avatar: "Nami.png",
    skins: [
      { name: "default", skin: "Nami_0.jpg" },
      { name: "锦鲤 娜美", skin: "Nami_1.jpg" },
      { name: "河水之灵 娜美", skin: "Nami_2.jpg" },
      { name: "鲛妮座人 娜美", skin: "Nami_3.jpg" },
      { name: "海皇姬 娜美", skin: "Nami_7.jpg" },
      { name: "SKT T1 娜美", skin: "Nami_8.jpg" },
      { name: "源代码 娜美", skin: "Nami_9.jpg" },
      { name: "玉剑传说 寒潭夭夭", skin: "Nami_15.jpg" },
      { name: "双鱼星神 娜美", skin: "Nami_24.jpg" },
      { name: "魅惑女巫 娜美", skin: "Nami_32.jpg" },
      { name: "太空律动 “魔音海妖” 娜美", skin: "Nami_41.jpg" },
      { name: "至臻 太空律动 “魔音海妖” 娜美", skin: "Nami_42.jpg" },
      { name: "魔女 娜美", skin: "Nami_51.jpg" },
    ],
    spells: [
      {
        id: "NamiP",
        name: "踏浪之行",
        icon: "NamiP.png",
        description:
          "每当娜美的技能命中友方英雄时，他们都会暂时获得移动速度加成。",
      },
      {
        id: "NamiQ",
        name: "碧波之牢",
        icon: "NamiQ.png",
        description:
          "娜美掷出一个泡泡，<status>晕眩</status>敌人{{ e2 }}秒并造成<magicDamage>{{ totaldamagett }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NamiW",
        name: "冲击之潮",
        icon: "NamiW.png",
        description:
          "娜美释放一股在友方英雄和敌方英雄之间交替弹跳的水流。每个目标只会被弹到一次，并且水流至多可弹{{ maxtargets }}个目标。<li>为友方英雄回复<healing>{{ totalheal }}生命值</healing>并弹向附近的一名敌方英雄身上。<li>对敌方英雄造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并弹向附近的一名友方英雄身上。<br />每次弹跳会使伤害和治疗数额修正{{ bouncescaling }}。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NamiE",
        name: "唤潮之佑",
        icon: "NamiE.png",
        description:
          "娜美强化一位友方英雄的下{{ hitcount }}次普通攻击和技能，持续{{ buffduration }}秒，使其可以对目标造成持续{{ slowduration }}秒的{{ totalslow }}<status>减速</status>，并造成额外的<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NamiR",
        name: "怒涛之啸",
        icon: "NamiR.png",
        description:
          "娜美召唤一阵怒涛，<status>击飞</status>敌人0.5秒，<status>减速</status>敌人{{ e4 }}%并造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>。<status>减速</status>的持续时间会基于怒涛的行进距离而提升，至多持续{{ e5 }}秒。<br /><br />被怒涛命中的友方英雄会获得<spellName>踏浪之行</spellName>的双倍加速效果。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      NamiP: null,
      NamiQ: null,
      NamiW: null,
      NamiE: null,
      NamiR: null,
    },
  };
}
export { importModule };
