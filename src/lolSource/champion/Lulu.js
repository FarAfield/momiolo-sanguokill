function importModule() {
  return {
    type: "champion",
    id: "Lulu",
    title: "仙灵女巫",
    name: "璐璐",
    avatar: "Lulu.png",
    skins: [
      { name: "default", skin: "Lulu_0.jpg" },
      { name: "糖果女巫 璐璐", skin: "Lulu_1.jpg" },
      { name: "邪恶女巫 璐璐", skin: "Lulu_2.jpg" },
      { name: "驯龙女巫 璐璐", skin: "Lulu_3.jpg" },
      { name: "寒冬精灵 璐璐", skin: "Lulu_4.jpg" },
      { name: "泳池派对 璐璐", skin: "Lulu_5.jpg" },
      { name: "星之守护者 璐璐", skin: "Lulu_6.jpg" },
      { name: "创星之灵 璐璐", skin: "Lulu_14.jpg" },
      { name: "睡衣守护者 璐璐", skin: "Lulu_15.jpg" },
      { name: "太空律动 “节奏幻师” 璐璐", skin: "Lulu_26.jpg" },
      { name: "至臻 太空律动 “节奏幻师” 璐璐", skin: "Lulu_27.jpg" },
      { name: "小怪兽训练师 璐璐", skin: "Lulu_37.jpg" },
      { name: "咖啡甜心 璐璐", skin: "Lulu_46.jpg" },
    ],
    spells: [
      {
        id: "LuluP",
        name: "皮克斯，仙灵伙伴",
        icon: "LuluP.png",
        description:
          "每当皮克斯正在跟随的英雄进行攻击时，皮克斯就会发射魔法飞弹。这些飞弹会自动寻敌，但也会被其它单位所拦截。",
      },
      {
        id: "LuluQ",
        name: "闪耀长枪",
        icon: "LuluQ.png",
        description:
          "璐璐和皮克斯各发射一束贯穿魔弹，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和在{{ e3 }}秒里持续衰减的{{ e2 }}%<status>减速</status>。<br /><br />如果两束魔弹都命中了相同的一名敌人，那么会对其造成额外的<magicDamage>{{ bonusmissiledamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LuluW",
        name: "奇思妙想",
        icon: "LuluW.png",
        description:
          "当用在一名友方身上时，璐璐提供<speed>{{ totalms }}移动速度</speed>和<attackSpeed>{{ e7 }}%攻击速度</attackSpeed>，持续{{ e5 }}秒。<br /><br />当用在一名敌人身上时，璐璐会将其<status>变形</status>{{ e3 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LuluE",
        name: "帮忙，皮克斯！",
        icon: "LuluE.png",
        description:
          "在对一名友方施放时，皮克斯会跳到该友方处并提供<spellName>皮克斯，仙灵伙伴</spellName>，持续{{ e1 }}秒。如果该友方是一名英雄，那么皮克斯还会提供<shield>{{ totalshield }}护盾值</shield>，持续{{ e7 }}秒。<br /><br />在对一名敌方英雄使用时，皮克斯会妨碍该英雄，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并提供其<keywordStealth>真实视野</keywordStealth>，持续{{ e6 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LuluR",
        name: "狂野生长",
        icon: "LuluR.png",
        description:
          "璐璐使一名友方英雄巨大化，并<status>击飞</status>周围的敌人{{ knockbackduration }}秒。巨大化的友方英雄会获得<healing>{{ totalbonushealth }}最大生命值</healing>并使周围的敌人们<status>减速</status>{{ slowpercent }}%，持续{{ buffduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      LuluP: null,
      LuluQ: null,
      LuluW: null,
      LuluE: null,
      LuluR: null,
    },
  };
}
export { importModule };
