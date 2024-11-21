function importModule() {
  return {
    type: "champion",
    id: "Lillia",
    title: "含羞蓓蕾",
    name: "莉莉娅",
    avatar: "Lillia.png",
    skins: [
      { name: "default", skin: "Lillia_0.jpg" },
      { name: "灵魂莲华 莉莉娅", skin: "Lillia_1.jpg" },
      { name: "黑夜使者 莉莉娅", skin: "Lillia_10.jpg" },
      { name: "山海绘卷 莉莉娅", skin: "Lillia_19.jpg" },
      { name: "花仙子 莉莉娅", skin: "Lillia_28.jpg" },
    ],
    spells: [
      {
        id: "LilliaP",
        name: "梦满枝",
        icon: "LilliaP.png",
        description:
          "用一个技能命中一位英雄或野怪，将持续造成额外的最大生命值伤害。",
      },
      {
        id: "LilliaQ",
        name: "飞花挞",
        icon: "LilliaQ.png",
        description:
          "<spellPassive>被动：</spellPassive>莉莉娅的技能在命中时会提供<speed>{{ prancespeed }}移动速度</speed>，持续{{ pranceduration }}秒，可叠加{{ prancemaxstacks }}层。<br /><br /><spellActive>主动：</spellActive>莉莉娅猛掷她的香炉，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，并在外侧边缘造成额外的<trueDamage>{{ bonustruedamage }}真实伤害</trueDamage> 。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LilliaW",
        name: "惊惶木",
        icon: "LilliaW.png",
        description:
          "莉莉娅进行一次巨大打击，在一个区域内造成<magicDamage>{{ flatdamage }}魔法伤害</magicDamage>。区域中心的敌人会受到<magicDamage>{{ flatdamagesweetspot }}伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LilliaE",
        name: "流涡种",
        icon: "LilliaE.png",
        description:
          "莉莉娅投出一枚种子，种子在着陆时会显形并造成<magicDamage>{{ impactdamagetotal }}魔法伤害</magicDamage>和{{ slowamount*100 }}%<status>减速效果</status>，持续{{ slowduration }}秒，期间还会使目标显形。如果种子未能命中任何东西，那么它将继续滚动，直到命中墙体或一名敌人为止。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LilliaR",
        name: "夜阑谣",
        icon: "LilliaR.png",
        description:
          "莉莉娅使所有带着<keywordMajor>梦尘</keywordMajor>的敌人陷入<status>困倦状态</status>{{ drowsyduration }}秒。此后，他们会陷入<status>昏睡状态</status>{{ sleepduration }}秒。<br /><br />在被伤害惊醒时，他们会受到额外的<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      LilliaP: null,
      LilliaQ: null,
      LilliaW: null,
      LilliaE: null,
      LilliaR: null,
    },
  };
}
export { importModule };
