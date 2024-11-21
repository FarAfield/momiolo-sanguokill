function importModule() {
  return {
    type: "champion",
    id: "Kassadin",
    title: "虚空行者",
    name: "卡萨丁",
    avatar: "Kassadin.png",
    skins: [
      { name: "default", skin: "Kassadin_0.jpg" },
      { name: "寒冰王座 卡萨丁", skin: "Kassadin_1.jpg" },
      { name: "深海一号 卡萨丁", skin: "Kassadin_2.jpg" },
      { name: "虚空前世 卡萨丁", skin: "Kassadin_3.jpg" },
      { name: "先驱行者 卡萨丁", skin: "Kassadin_4.jpg" },
      { name: "掠星魔刃 卡萨丁", skin: "Kassadin_5.jpg" },
      { name: "伯爵 卡萨丁", skin: "Kassadin_6.jpg" },
      { name: "海克斯科技 卡萨丁", skin: "Kassadin_14.jpg" },
      { name: "冲击之刃 卡萨丁", skin: "Kassadin_15.jpg" },
      { name: "神龙尊者 星界之龙 卡萨丁", skin: "Kassadin_24.jpg" },
    ],
    spells: [
      {
        id: "KassadinP",
        name: "虚空之石",
        icon: "KassadinP.png",
        description: "卡萨丁所受的魔法伤害减少，并无视单位的碰撞体积。",
      },
      {
        id: "KassadinQ",
        name: "虚无法球",
        icon: "KassadinQ.png",
        description:
          "卡萨丁发射一颗虚无能量法球，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并打断引导技能。卡萨丁还会获得<shield>{{ totalshield }}魔法护盾</shield>，持续1.5秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KassadinW",
        name: "虚空之刃",
        icon: "KassadinW.png",
        description:
          "<spellPassive>被动：</spellPassive>卡萨丁的攻击造成额外的<magicDamage>{{ onhitdamage }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>卡萨丁给他的剑刃充能，使他的下次攻击造成<magicDamage>{{ activedamage }}魔法伤害</magicDamage>并回复<scaleMana>{{ e1 }}%已损失法力值</scaleMana>，对抗英雄时提升至<scaleMana>{{ e4 }}%</scaleMana>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KassadinE",
        name: "能量脉冲",
        icon: "KassadinE.png",
        description:
          "<spellPassive>被动：</spellPassive>卡萨丁附近每有任一个技能施放，<spellName>能量脉冲</spellName>的冷却时间就会缩短{{ reductionperspellcast }}秒。<br /><br /><spellActive>主动：</spellActive>卡萨丁释放一道虚空脉冲，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ e3 }}秒的{{ e2 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KassadinR",
        name: "虚空行走",
        icon: "KassadinR.png",
        description:
          "卡萨丁传送到附近的目标区域，着陆时对身边的所有敌方单位造成<magicDamage>{{ basedamage }}魔法伤害</magicDamage>。<br /><br />每在{{ rstackduration }}秒内连续施放一次虚空行走，法力消耗就会翻倍，并造成额外的<magicDamage>{{ bonusdamage }}魔法伤害</magicDamage>。消耗和伤害提升最多可叠加{{ maxstacks }}次。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KassadinP: null,
      KassadinQ: null,
      KassadinW: null,
      KassadinE: null,
      KassadinR: null,
    },
  };
}
export { importModule };
