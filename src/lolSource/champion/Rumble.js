function importModule() {
  return {
    type: "champion",
    id: "Rumble",
    title: "机械公敌",
    name: "兰博",
    avatar: "Rumble.png",
    skins: [
      { name: "default", skin: "Rumble_0.jpg" },
      { name: "热带丛林 兰博", skin: "Rumble_1.jpg" },
      { name: "独眼海盗 兰博", skin: "Rumble_2.jpg" },
      { name: "银河魔装机神 兰博", skin: "Rumble_3.jpg" },
      { name: "废土男爵 兰博", skin: "Rumble_4.jpg" },
      { name: "太空律动 “串烧大师” 兰博", skin: "Rumble_13.jpg" },
      { name: "咖啡甜心 兰博", skin: "Rumble_23.jpg" },
    ],
    spells: [
      {
        id: "RumbleP",
        name: "机械重组",
        icon: "RumbleP.png",
        description:
          "兰博的技能都能使其获得热量。当兰博的热量达到50%时，他会处于危险温度状态，所有基础技能都会获得额外效果。当热量达到100%时，他会进入过热状态，获得额外的攻击速度并让他的普通攻击造成额外伤害，但也会让他在数秒内无法施放技能。",
      },
      {
        id: "RumbleQ",
        name: "纵火盛宴",
        icon: "RumbleQ.png",
        description:
          "兰博点燃他的火焰喷射器，在{{ flamespitterduration }}秒里持续造成共<magicDamage>{{ flatdamage }}外加{{ healthdamage*100 }}%最大生命值的魔法伤害</magicDamage>，对小兵降低至<attention>{{ minionmod*100 }}%</attention>。<br /><br /><keywordMajor>危险温度：</keywordMajor>提升至<magicDamage>{{ empowereddamage }}外加{{ empoweredhealth }}最大生命值的魔法伤害</magicDamage>。<br /><br /><rules>对野怪的百分比伤害的上限为{{ monstercap }}。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RumbleW",
        name: "破碎护盾",
        icon: "RumbleW.png",
        description:
          "兰博开启一道屏障，获得持续{{ shieldduration.1 }}秒的<shield>{{ totalshield }}护盾值</shield>和持续{{ movespeedduration }}秒的<speed>{{ movespeed*100 }}%移动速度</speed>。<br /><br /><keywordMajor>危险温度：</keywordMajor>屏障转而提供<shield>{{ empoweredshield }}护盾值</shield>和<speed>{{ empoweredms }}移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RumbleE",
        name: "电子鱼叉",
        icon: "RumbleE.png",
        description:
          "兰博发射一柄电子鱼叉，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>、持续{{ slowduration }}秒的{{ baseslowamount }}%<status>减速</status>、以及持续{{ shredduration }}秒的{{ percmagicpen*100 }}%<scaleMR>魔抗</scaleMR>击碎效果。<br /><br />命中一名已被此技能<status>减速</status>的敌人时，会将<status>减速</status>提升至{{ empoweredslowamount }}%并使敌人的<scaleMR>魔抗</scaleMR>降低{{ enhancedmagicpen*100 }}%。<br /><br /><keywordMajor>危险温度：</keywordMajor>鱼叉转而造成<magicDamage>{{ empdamage }}魔法伤害</magicDamage>并且<status>减速</status>和<scaleMR>魔抗击碎</scaleMR>效果提升50%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RumbleR",
        name: "恒温灼烧",
        icon: "RumbleR.png",
        description:
          "兰博发射一列火箭，生成一道燃烧小径，造成{{ slowamount }}%<status>减速</status>并在{{ trailduration }}秒里持续造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />兰博可以在施放这个技能时，通过点击并拖拽来控制燃烧小径的方向。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RumbleP: null,
      RumbleQ: null,
      RumbleW: null,
      RumbleE: null,
      RumbleR: null,
    },
  };
}
export { importModule };
