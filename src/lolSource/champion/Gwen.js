function importModule() {
  return {
    type: "champion",
    id: "Gwen",
    title: "灵罗娃娃",
    name: "格温",
    avatar: "Gwen.png",
    skins: [
      { name: "default", skin: "Gwen_0.jpg" },
      { name: "太空律动 “百万调音” 格温", skin: "Gwen_1.jpg" },
      { name: "咖啡甜心 格温", skin: "Gwen_11.jpg" },
      { name: "斗魂觉醒 格温", skin: "Gwen_20.jpg" },
      { name: "女帝 格温", skin: "Gwen_30.jpg" },
    ],
    spells: [
      {
        id: "GwenP",
        name: "千穿百孔",
        icon: "GwenP.png",
        description:
          "格温的攻击会造成基于目标生命值的额外魔法伤害。她自身会获得治疗效果，数额相当于这个效果对英雄造成的一部分伤害值。",
      },
      {
        id: "GwenQ",
        name: "快刀剪乱",
        icon: "GwenQ.png",
        description:
          "<spellPassive>被动</spellPassive>：格温的每次攻击在命中敌人时会获得1层充能， (最大4层，持续{{ buffduration }}秒)。<br /><br /><spellActive>主动</spellActive>：消耗全部充能。格温进行(1+充能层数)次剪切，每次剪切造成<magicDamage>{{ miniswipedamage }}魔法伤害</magicDamage>，然后进行最终剪切来造成<magicDamage>{{ finalswipedamage }}魔法伤害</magicDamage>。<br /><br />对每次剪切的中心区域的敌人们造成的伤害将有{{ truedamageconversion*100 }}%转化为<trueDamage>真实伤害</trueDamage>，并对其施加<spellName>千穿百孔</spellName>。<br /><rules><br />对小兵造成{{ minionmod*100 }}%伤害。<br />低于{{ executethreshold*100 }}%生命值的小兵们会受到{{ executebonus }}%额外伤害而非削减过的伤害。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GwenW",
        name: "丝缕缠流",
        icon: "GwenW.png",
        description:
          "格温召唤圣霭结界，使她对结界之外的所有敌人(防御塔除外)来说处于无法被选取状态，持续{{ zoneduration }}秒或直到她离开结界为止。在结界中，格温获得{{ totalresists }}<scaleArmor>护甲</scaleArmor>和<scaleMR>魔法抗性</scaleMR>。<br /><br />格温可以<recast>再次施放</recast>这个技能，来将结界召唤到她所在的位置，但只有1次机会。格温在第一次尝试离开结界时会自动进行<recast>再次施放</recast>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GwenE",
        name: "断续疾走",
        icon: "GwenE.png",
        description:
          "格温冲刺并强化她的攻击{{ buffduration }}秒。<br /><br />强化攻击获得<attackSpeed>{{ bonusattackspeed }}攻击速度</attackSpeed>，<magicDamage>{{ onhitdamage }}附加魔法伤害</magicDamage>%i:OnHit% <OnHit>攻击特效</OnHit>，{{ bonusattackrange }}攻击距离，并且首次攻击在命中一名敌人时会返还此技能{{ cdrefund*100 }}%冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GwenR",
        name: "引针簇射",
        icon: "GwenR.png",
        description:
          "<spellActive>第一段施放：</spellActive>掷出一根针来对命中的所有敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，以及持续{{ debuffduration }}秒的{{ initialslow*-100 }}%<status>减速</status>，并施加<spellName>千穿百孔</spellName>。格温可以在6秒内<recast>再次施放</recast>这个技能至多2次(每次施放之间的冷却时间为{{ lockouttime }}秒)。<br /><br /><recast>第二段施放：</recast>发射3根针来造成<magicDamage>{{ totaldamage3 }}魔法伤害</magicDamage><br /><recast>第三段施放：</recast>发射5根针来造成<magicDamage>{{ totaldamage5 }}魔法伤害</magicDamage>{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      GwenP: null,
      GwenQ: null,
      GwenW: null,
      GwenE: null,
      GwenR: null,
    },
  };
}
export { importModule };
