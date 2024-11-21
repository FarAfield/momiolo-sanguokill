function importModule() {
  return {
    type: "champion",
    id: "Taric",
    title: "瓦洛兰之盾",
    name: "塔里克",
    avatar: "Taric.png",
    skins: [
      { name: "default", skin: "Taric_0.jpg" },
      { name: "绿水晶光辉 塔里克", skin: "Taric_1.jpg" },
      { name: "紫水晶意志 塔里克", skin: "Taric_2.jpg" },
      { name: "血石诅咒 塔里克", skin: "Taric_3.jpg" },
      { name: "泳池派对 塔里克", skin: "Taric_4.jpg" },
      { name: "塔里克 · 辉盾", skin: "Taric_9.jpg" },
      { name: "太空律动 “爱乐之子” 塔里克", skin: "Taric_18.jpg" },
    ],
    spells: [
      {
        id: "TaricP",
        name: "正气凌人",
        icon: "TaricP.png",
        description:
          "每次施放技能会强化塔里克的下2次普攻，以造成额外魔法伤害，使他的基础技能的冷却时间减少，并且可以快速地连续攻击。",
      },
      {
        id: "TaricQ",
        name: "星光之触",
        icon: "TaricQ.png",
        description:
          "<spellPassive>被动：</spellPassive>每{{ stackcooldown }}秒和打出一次<spellName>正气凌人</spellName>攻击时获得一层效果(最多{{ e6 }}层)。<br /><br /><spellActive>主动：</spellActive>消耗所有层数来为附近的友方英雄们回复<healing>{{ healingperstack }}x层数的生命值</healing>(在{{ e6 }}层时回复<healing>{{ maxstackhealing }}生命值</healing>)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TaricW",
        name: "坚毅壁垒",
        icon: "TaricW.png",
        description:
          "<spellPassive>被动：</spellPassive>塔里克获得<scaleArmor>{{ bonusarmor }}护甲</scaleArmor>并在他和被此技能绑定过的友方英雄之间形成一条灵链。只要他们在彼此附近，该友方英雄就会获得<scaleArmor>{{ bonusarmor }}护甲</scaleArmor>并且塔里克的各个技能也会从他自己和该友方英雄处施放。<br /><br /><spellPassive>主动：</spellPassive>塔里克与一名友方英雄进行绑定，提供持续{{ e3 }}秒的<shield>{{ e2 }}%最大生命值的护盾值</shield>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TaricE",
        name: "炫光",
        icon: "TaricE.png",
        description:
          "塔里克投射一束星光，在{{ e3 }}秒后爆裂，以造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并使敌人们<status>晕眩</status>{{ e2 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TaricR",
        name: "宇宙之辉",
        icon: "TaricR.png",
        description:
          "塔里克召唤来自天堂的保护。在{{ initialdelay }}秒后，附近的所有友方英雄都会免疫伤害{{ invulnduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TaricP: null,
      TaricQ: null,
      TaricW: null,
      TaricE: null,
      TaricR: null,
    },
  };
}
export { importModule };
