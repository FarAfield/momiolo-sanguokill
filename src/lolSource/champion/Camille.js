function importModule() {
  return {
    type: "champion",
    id: "Camille",
    title: "青钢影",
    name: "卡蜜尔",
    avatar: "Camille.png",
    skins: [
      { name: "default", skin: "Camille_0.jpg" },
      { name: "源代码 卡蜜尔", skin: "Camille_1.jpg" },
      { name: "魔女 卡蜜尔", skin: "Camille_2.jpg" },
      { name: "iG 卡蜜尔", skin: "Camille_10.jpg" },
      { name: "莫测之影 卡蜜尔", skin: "Camille_11.jpg" },
      { name: "海珀利安小队 Y03-权天使 卡蜜尔", skin: "Camille_21.jpg" },
      { name: "北极星钢影 卡蜜尔", skin: "Camille_31.jpg" },
      { name: "至臻 北极星钢影 卡蜜尔", skin: "Camille_32.jpg" },
    ],
    spells: [
      {
        id: "CamilleP",
        name: "适应性防御",
        icon: "CamilleP.png",
        description:
          "对敌方英雄发起的普攻会基于该英雄的伤害类型（物理或魔法）提供一层专门吸收该类型伤害的护盾，护盾的生命值相当于卡蜜尔的一部分最大生命值，持续一小段时间。",
      },
      {
        id: "CamilleQ",
        name: "精准礼仪",
        icon: "CamilleQ.png",
        description:
          "卡蜜尔的下次攻击造成额外的<physicalDamage>{{ bonusdamage }}物理伤害</physicalDamage>并为她提供<speed>{{ msbonus*100 }}%移动速度</speed>，持续{{ msduration }}秒。这个技能可以在接下来的{{ qtotalrecasttime }}秒里无消耗地<recast>再次施放</recast>。<br /><br />如果<recast>再次施放</recast>的攻击与第一段攻击相距至少{{ qrampuptime }}秒，那么额外伤害会提升至<physicalDamage>{{ empoweredbonusdamage }}</physicalDamage>，并且该次攻击的{{ damageconversionpercentage }}伤害转化为<trueDamage>真实伤害</trueDamage>。<br /><br /><rules>这个技能会在造成伤害时触发技能特效。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CamilleW",
        name: "战术横扫",
        icon: "CamilleW.png",
        description:
          "卡蜜尔蓄力然后切割，造成<physicalDamage>{{ basedamagetotal }}物理伤害</physicalDamage>。<br /><br />被外沿命中的敌人会被<status>减速</status>{{ slowpercentage }}%，减速效果会在{{ slowduration }}秒里持续衰减，并会受到额外的<physicalDamage>{{ outeredgetooltip }}最大生命值的物理伤害</physicalDamage>。卡蜜尔会回复<healing>对敌方英雄们的{{ outerconehealingratio }}%实际额外伤害值的生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CamilleE",
        name: "钩索",
        icon: "CamilleE.png",
        description:
          "卡蜜尔发射一个可附着在地形上的钩索，并将卡蜜尔拉到钩索处，并使此技能可以在1秒内<recast>再次施放</recast>。<br /><br /><recast>再次施放：</recast>卡蜜尔从墙体上跳下，与命中的第一个敌方英雄进行碰撞。在着陆时，她会对附近的敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>并对附近的敌方英雄造成{{ knockupduration }}秒<status>晕眩</status>。朝着敌方英雄突进时，突进距离翻倍并在碰撞后提供<attackSpeed>{{ asbuff*100 }}%攻击速度</attackSpeed>，持续{{ asduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CamilleR",
        name: "海克斯最后通牒",
        icon: "CamilleR.png",
        description:
          "卡蜜尔暂时变得无法被选取，并且跳向一个敌方英雄，打断引导状态并将该英雄锁定在一个区域内，并且该英雄怎样都无法逃出这个区域，持续{{ rduration }}秒。其它敌人会被<status>震开</status>。她的攻击会对目标敌人造成额外的<magicDamage>{{ rpercentcurrenthpdamage }}%当前生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      CamilleP: null,
      CamilleQ: null,
      CamilleW: null,
      CamilleE: null,
      CamilleR: null,
    },
  };
}
export { importModule };
