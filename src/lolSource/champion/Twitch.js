function importModule() {
  return {
    type: "champion",
    id: "Twitch",
    title: "瘟疫之源",
    name: "图奇",
    avatar: "Twitch.png",
    skins: [
      { name: "default", skin: "Twitch_0.jpg" },
      { name: "首领 图奇", skin: "Twitch_1.jpg" },
      { name: "北风冻原 图奇", skin: "Twitch_2.jpg" },
      { name: "都铎王朝 图奇", skin: "Twitch_3.jpg" },
      { name: "黑金诱惑 图奇", skin: "Twitch_4.jpg" },
      { name: "横行霸道 图奇", skin: "Twitch_5.jpg" },
      { name: "绝影神偷 图奇", skin: "Twitch_6.jpg" },
      { name: "SSW 图奇", skin: "Twitch_7.jpg" },
      { name: "欧米伽小队 毒针狙击手", skin: "Twitch_8.jpg" },
      { name: "狂心冰王 图奇", skin: "Twitch_12.jpg" },
      { name: "图奇 · 影足", skin: "Twitch_27.jpg" },
      { name: "屠龙勇士 图奇", skin: "Twitch_36.jpg" },
      { name: "西部魔影 送葬人 图奇", skin: "Twitch_45.jpg" },
      { name: "奶酪首领 图奇", skin: "Twitch_55.jpg" },
    ],
    spells: [
      {
        id: "TwitchP",
        name: "死亡毒液",
        icon: "TwitchP.png",
        description: "图奇的攻击会使目标感染死亡毒液，每秒造成真实伤害。",
      },
      {
        id: "TwitchQ",
        name: "埋伏",
        icon: "TwitchQ.png",
        description:
          "图奇<keywordStealth>伪装</keywordStealth>并获得<speed>{{ e3 }}%移动速度</speed>，持续{{ e2 }}秒。当附近有无法看见他的敌人时，移动速度提升至{{ e3 }}%。在离开<keywordStealth>伪装</keywordStealth>后，图奇获得<attackSpeed>{{ e1 }}%攻击速度</attackSpeed>，持续{{ e6 }}秒。<br /><br />当一名带有<keywordMajor>毒液</keywordMajor>的敌方英雄阵亡时，这个技能的冷却时间就会刷新。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TwitchW",
        name: "剧毒之桶",
        icon: "TwitchW.png",
        description:
          "图奇扔出一个毒性之桶来添加一层<spellName>死亡毒液</spellName>给所有被桶砸中的敌人，并留下一团毒雾，存留{{ duration }}秒。<br /><br />一直呆在毒雾中的敌人会被<status>减速</status>{{ totalslowamount }}%并且会每秒受到额外的一层<spellName>死亡毒液</spellName>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TwitchE",
        name: "毒性爆发",
        icon: "TwitchE.png",
        description:
          "对附近感染了<spellName>死亡毒液</spellName>的所有敌人造成<physicalDamage>{{ basedamage }}物理伤害</physicalDamage>，此外，每层<spellName>死亡毒液</spellName>额外造成<physicalDamage>{{ physicaldamageperstack }}物理伤害</physicalDamage>和<magicDamage>{{ magicdamageperstack }}魔法伤害</magicDamage>。<br /><br />最大伤害：<physicalDamage>{{ maxphysicaldamage }}物理伤害</physicalDamage>和<magicDamage>{{ maxmagicdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TwitchR",
        name: "火力全开",
        icon: "TwitchR.png",
        description:
          "图奇解开他的十字弩的封印，获得{{ bonusrange }}攻击距离和<scaleAD>{{ bonusad }}攻击力</scaleAD>，并使他的攻击变为穿刺弩箭，持续{{ duration }}秒。这些弩箭会攻击它们沿途的所有敌人，但对每个后续目标造成的伤害减少{{ falloffdamage*100 }}%，最低降至{{ minimumfalloffdamage*100 }}%伤害。<br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TwitchP: null,
      TwitchQ: null,
      TwitchW: null,
      TwitchE: null,
      TwitchR: null,
    },
  };
}
export { importModule };
