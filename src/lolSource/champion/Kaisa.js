function importModule() {
  return {
    type: "champion",
    id: "Kaisa",
    title: "虚空之女",
    name: "卡莎",
    avatar: "Kaisa.png",
    skins: [
      { name: "default", skin: "Kaisa_0.jpg" },
      { name: "弹幕天使 卡莎", skin: "Kaisa_1.jpg" },
      { name: "K/DA 卡莎", skin: "Kaisa_14.jpg" },
      { name: "至臻 K/DA 卡莎", skin: "Kaisa_15.jpg" },
      { name: "iG 卡莎", skin: "Kaisa_16.jpg" },
      { name: "电玩女神 卡莎", skin: "Kaisa_17.jpg" },
      { name: "K/DA ALL OUT 卡莎", skin: "Kaisa_26.jpg" },
      { name: "至臻 K/DA ALL OUT 卡莎", skin: "Kaisa_27.jpg" },
      { name: "神龙尊者 玉境灵龙 卡莎", skin: "Kaisa_29.jpg" },
      { name: "至臻 K/DA 卡莎 (2022)", skin: "Kaisa_39.jpg" },
      { name: "星之守护者 卡莎", skin: "Kaisa_40.jpg" },
      { name: "墨之影武者 卡莎", skin: "Kaisa_48.jpg" },
      { name: "天龙之子 卡莎", skin: "Kaisa_59.jpg" },
      { name: "暗星 卡莎", skin: "Kaisa_69.jpg" },
    ],
    spells: [
      {
        id: "KaisaP",
        name: "体表活肤",
        icon: "KaisaP.png",
        description:
          "卡莎的普通攻击会叠加电浆，造成不断提升的额外魔法伤害。友军的定身效果也可以帮忙叠加电浆。此外，卡莎可通过购买装备来升级她的基础技能，让它们拥有更多强大的属性。",
      },
      {
        id: "KaisaQ",
        name: "艾卡西亚暴雨",
        icon: "KaisaQ.png",
        description:
          "卡莎发射{{ e2 }}发弹体并在附近的敌人中间四散，每一发造成<physicalDamage>{{ totalindividualmissiledamage }}物理伤害</physicalDamage>，至多至最大值{{ maxdamage }}伤害。对英雄或野怪的每发额外弹体造成{{ e3 }}%伤害。<br /><br /><keywordMajor>进化版</keywordMajor>：卡莎转而发射{{ e7 }}发弹体。<br />当前：<physicalDamage>{{ f11.1 }}/{{ e6 }}额外攻击力</physicalDamage>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KaisaW",
        name: "虚空索敌",
        icon: "KaisaW.png",
        description:
          "卡莎发射一道虚空震波来对命中的第一个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>、施加{{ e4 }}层<keywordMajor>电浆</keywordMajor>效果并提供其<keywordStealth>真实视野</keywordStealth>，持续{{ spell.kaisapassive:pduration }}秒。<br /><br /><keywordMajor>进化版</keywordMajor>：卡莎转而施加{{ e5 }}层<keywordMajor>电浆</keywordMajor>效果并在命中一名英雄时使冷却时间缩短{{ e3 }}%。<br />当前：<scaleAP>{{ f2.1 }}/{{ e2 }}法术强度</scaleAP>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KaisaE",
        name: "极限超载",
        icon: "KaisaE.png",
        description:
          "卡莎极限超载她的虚空能量，获得<speed>{{ totalmovespeed }}移动速度</speed>并且在超载时变为幽灵状态，随后获得持续{{ e2 }}秒的<attackSpeed>{{ e5 }}%攻击速度</attackSpeed>。<br /><br />每次攻击还会使此技能的冷却时间缩短{{ e4 }}秒。<br /><br /><keywordMajor>进化版</keywordMajor>：卡莎还会<keywordStealth>隐形</keywordStealth>{{ e7 }}秒。<br />当前：<attackSpeed>{{ f10.1 }}%/{{ e6 }}%额外攻击速度</attackSpeed>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KaisaR",
        name: "猎手本能",
        icon: "KaisaR.png",
        description:
          "卡莎跃迁到一个位置上，该位置处于一名身上带有<keywordMajor>电浆</keywordMajor>效果的敌方英雄的附近，并获得持续{{ rshieldduration }}秒的<shield>{{ rcalculatedshieldvalue }}护盾值</shield>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KaisaP: null,
      KaisaQ: null,
      KaisaW: null,
      KaisaE: null,
      KaisaR: null,
    },
  };
}
export { importModule };
