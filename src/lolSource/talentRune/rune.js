function importModule() {
  return [
    {
      type: "rune",
      id: "Electrocute",
      name: "电刑",
      image: "Electrocute.png",
      description:
        "在3秒内用3个<b>独立的</b>攻击或技能命中一位英雄时，会造成额外的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>。",
      effects: {
        Electrocute: null,
      },
    },
    {
      type: "rune",
      id: "DarkHarvest",
      name: "黑暗收割",
      image: "DarkHarvest.png",
      description:
        "伤害一名低生命值的英雄时会造成<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>并从该猎物身上收割灵魂。",
      effects: {
        DarkHarvest: null,
      },
    },
    {
      type: "rune",
      id: "HailOfBlades",
      name: "丛刃",
      image: "HailOfBlades.png",
      description: "在攻击敌方英雄时，提供大幅攻击速度给最先的3次攻击。",
      effects: {
        HailOfBlades: null,
      },
    },
    {
      type: "rune",
      id: "GlacialAugment",
      name: "冰川增幅",
      image: "GlacialAugment.png",
      description:
        "定身一名敌方英雄时会引发3道冰川射线来减速附近的敌人们并降低他们对你的队友们的伤害。",
      effects: {
        GlacialAugment: null,
      },
    },
    {
      type: "rune",
      id: "UnsealedSpellBook",
      name: "启封的秘籍",
      image: "UnsealedSpellBook.png",
      description:
        "在非战斗状态下置换召唤师技能。置换到独特的召唤师技能时将提升你未来进行置换的速率。",
      effects: {
        UnsealedSpellBook: null,
      },
    },
    {
      type: "rune",
      id: "FirstStrike",
      name: "先攻",
      image: "FirstStrike.png",
      description:
        "在你率先发起与英雄的战斗时，造成7%额外伤害，持续3秒，并基于该额外伤害提供金币。",
      effects: {
        FirstStrike: null,
      },
    },
    {
      type: "rune",
      id: "PressTheAttack",
      name: "强攻",
      image: "PressTheAttack.png",
      description:
        "连续3次命中一名敌方英雄将造成额外伤害，并增加你的伤害，直到你离开与英雄的战斗状态。",
      effects: {
        PressTheAttack: null,
      },
    },
    {
      type: "rune",
      id: "LethalTempo",
      name: "致命节奏",
      image: "LethalTempoTemp.png",
      description:
        "攻击一个敌方英雄会为你提供攻击速度，至多至6层。在满层时，攻击还会附带<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>额外自适应伤害</font></lol-uikit-tooltipped-keyword>。",
      effects: {
        LethalTempo: null,
      },
    },
    {
      type: "rune",
      id: "FleetFootwork",
      name: "迅捷步法",
      image: "FleetFootwork.png",
      description:
        "攻击和移动会积攒能量层数。在100层时，你的下次攻击会治疗你并提升<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>。",
      effects: {
        FleetFootwork: null,
      },
    },
    {
      type: "rune",
      id: "Conqueror",
      name: "征服者",
      image: "Conqueror.png",
      description:
        "在攻击敌方英雄时提供适应之力。在达到12层后，将你的一部分伤害转化为等额的治疗效果。",
      effects: {
        Conqueror: null,
      },
    },
    {
      type: "rune",
      id: "GraspOfTheUndying",
      name: "不灭之握",
      image: "GraspOfTheUndying.png",
      description:
        "在战斗中每过4秒，你对一个英雄发起的下一次普攻将会造成额外魔法伤害、治疗你、并永久提升你的生命值。",
      effects: {
        GraspOfTheUndying: null,
      },
    },
    {
      type: "rune",
      id: "Aftershock",
      name: "余震",
      image: "VeteranAftershock.png",
      description:
        "在你<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Immobilize'>定身</lol-uikit-tooltipped-keyword>一个敌方英雄后提供防御属性，稍后会在你的周围造成爆发性的魔法伤害。",
      effects: {
        Aftershock: null,
      },
    },
    {
      type: "rune",
      id: "Guardian",
      name: "守护者",
      image: "Guardian.png",
      description:
        "守护你选作技能目标的友军和那些距离你非常近的友军们。如果你和一个被守护的友军即将承受伤害，那么你们两个都会获得一层护盾。",
      effects: {
        Guardian: null,
      },
    },
    {
      type: "rune",
      id: "SummonAery",
      name: "召唤：艾黎",
      image: "SummonAery.png",
      description:
        "你的攻击和技能会向目标派出艾黎，来对敌方英雄造成伤害或为友方英雄套上护盾。",
      effects: {
        SummonAery: null,
      },
    },
    {
      type: "rune",
      id: "ArcaneComet",
      name: "奥术彗星",
      image: "ArcaneComet.png",
      description: "用一个技能对一名英雄造成伤害时，会在其位置处召唤一颗彗星。",
      effects: {
        ArcaneComet: null,
      },
    },
    {
      type: "rune",
      id: "PhaseRush",
      name: "相位猛冲",
      image: "PhaseRush.png",
      description:
        "用3次<b>独立</b>的攻击或技能命中一名敌方英雄时，会提供爆发性的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>和减速抵抗。 ",
      effects: {
        PhaseRush: null,
      },
    },
    {
      type: "rune",
      id: "Predator",
      name: "掠食者",
      image: "Predator.png",
      description: "",
      effects: {
        Predator: null,
      },
    },
    {
      type: "rune",
      id: "MoneyReward",
      name: "赏金",
      image: "MoneyReward.png",
      description: "",
      effects: {
        MoneyReward: null,
      },
    },
  ];
}
export { importModule };
