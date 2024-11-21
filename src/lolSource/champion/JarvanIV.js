function importModule() {
  return {
    type: "champion",
    id: "JarvanIV",
    title: "德玛西亚皇子",
    name: "嘉文四世",
    avatar: "JarvanIV.png",
    skins: [
      { name: "default", skin: "JarvanIV_0.jpg" },
      { name: "孤胆英豪 嘉文四世", skin: "JarvanIV_1.jpg" },
      { name: "屠龙勇士 嘉文四世", skin: "JarvanIV_2.jpg" },
      { name: "龙骑统帅 嘉文四世", skin: "JarvanIV_3.jpg" },
      { name: "凯旋英雄 嘉文四世", skin: "JarvanIV_4.jpg" },
      { name: "吕布 奉先", skin: "JarvanIV_5.jpg" },
      { name: "Fnatic 嘉文四世", skin: "JarvanIV_6.jpg" },
      { name: "暗星 嘉文四世", skin: "JarvanIV_7.jpg" },
      { name: "SSG 嘉文四世", skin: "JarvanIV_8.jpg" },
      { name: "海克斯科技 嘉文四世", skin: "JarvanIV_9.jpg" },
      { name: "泳池派对 嘉文四世", skin: "JarvanIV_11.jpg" },
      { name: "福牛守护者 嘉文四世", skin: "JarvanIV_21.jpg" },
      { name: "2021 全球总决赛 嘉文四世", skin: "JarvanIV_30.jpg" },
      { name: "黑夜使者 嘉文四世", skin: "JarvanIV_35.jpg" },
    ],
    spells: [
      {
        id: "JarvanIVP",
        name: "战争律动",
        icon: "JarvanIVP.png",
        description:
          "嘉文四世对一名敌人发起的第一次普攻会造成基于目标当前生命值的额外物理伤害。这个效果在数秒内无法重复作用于同一目标。",
      },
      {
        id: "JarvanIVQ",
        name: "巨龙撞击",
        icon: "JarvanIVQ.png",
        description:
          "嘉文延伸他的长枪，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>并移除<scaleArmor>{{ e2 }}%护甲</scaleArmor>，持续{{ e3 }}秒。<br /><br />如果长枪与<spellName>德邦军旗</spellName>连接，那么嘉文会将自己拉向它，将沿途的敌人<status>击飞</status>0.75秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JarvanIVW",
        name: "黄金圣盾",
        icon: "JarvanIVW.png",
        description:
          "嘉文召唤一个圣盾，对附近的敌人造成持续{{ e5 }}秒的{{ e2 }}%<status>减速</status>并为他提供<shield>{{ baseshield }}护盾值</shield>，每命中一个敌方英雄会提升<shield>{{ bonusshield }}</shield>护盾值。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JarvanIVE",
        name: "德邦军旗",
        icon: "JarvanIVE.png",
        description:
          "<spellPassive>被动：</spellPassive>嘉文获得<attackSpeed>{{ permanentattackspeed*100 }}%攻击速度</attackSpeed>。<br /><br /><spellActive>主动：</spellActive>嘉文将一面军旗投掷到地上，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并为附近的友军们提供持续{{ e4 }}秒的<attackSpeed>{{ e3 }}%攻击速度</attackSpeed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JarvanIVR",
        name: "天崩地裂",
        icon: "JarvanIVR.png",
        description:
          "嘉文勇猛地跃向一名敌方英雄，对目标及周围的敌人造成<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>，并在目标周围生成一个由不可通过地形构成的竞技场，持续{{ wallduration }}秒。<br /><br />嘉文可以<recast>再次施放</recast>来使该地形倒塌。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      JarvanIVP: null,
      JarvanIVQ: null,
      JarvanIVW: null,
      JarvanIVE: null,
      JarvanIVR: null,
    },
  };
}
export { importModule };
