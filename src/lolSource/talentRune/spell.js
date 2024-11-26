function importModule() {
  return [
    {
      type: "spell",
      id: "haste",
      name: "幽灵疾步",
      image: "haste.png",
      description: "当前回合内，非指向性技能无法选择你为目标",
      effects: {
        haste: null,
      },
    },
    {
      type: "spell",
      id: "heal",
      name: "治疗术",
      image: "heal.png",
      description:
        "为你和一名目标英雄恢复5点生命，若生命值低于10点，治疗效果翻倍",
      effects: {
        heal: null,
      },
    },
    {
      type: "spell",
      id: "barrier",
      name: "屏障",
      image: "barrier.png",
      description: "获得5点护盾值",
      effects: {
        barrier: null,
      },
    },
    {
      type: "spell",
      id: "exhaust",
      name: "虚弱",
      image: "exhaust.png",
      description: "使目标英雄造成的所有伤害削减50%，持续到回合结束",
      effects: {
        exhaust: null,
      },
    },
    {
      type: "spell",
      id: "snowball",
      name: "标记",
      image: "snowball.png",
      description:
        "沿直线扔出一个雪球标记目标英雄，被标记的影响每次受到伤害时，伤害额外增加1点，持续到回合结束",
      effects: {
        snowball: null,
      },
    },
    {
      type: "spell",
      id: "mana",
      name: "清晰术",
      image: "mana.png",
      description: "为你的英雄回复4点能量，另外两名由你指定的英雄回复2点能量",
      effects: {
        mana: null,
      },
    },
    {
      type: "spell",
      id: "teleport",
      name: "传送",
      image: "teleport.png",
      description: "在其他英雄的出牌阶段，你可以额外插入一次自己的出牌阶段",
      effects: {
        teleport: null,
      },
    },
    {
      type: "spell",
      id: "flash",
      name: "闪现",
      image: "flash.png",
      description: "使英雄朝着你的指针悬停的位置瞬间传送一小段距离。",
      effects: {
        flash: null,
      },
    },
    {
      type: "spell",
      id: "boost",
      name: "净化",
      image: "boost.png",
      description:
        "移除身上的所有限制效果（压制效果和击飞效果除外）和召唤师技能的减益效果，并提供持续3秒的75%韧性。",
      effects: {
        boost: null,
      },
    },
    {
      type: "spell",
      id: "ignite",
      name: "引燃",
      image: "ignite.png",
      description:
        "在5秒的持续时间里对目标敌方英雄造成共5点真实伤害并在持续期间附加重伤效果",
      effects: {
        ignite: null,
      },
    },
    {
      type: "spell",
      id: "smite",
      name: "惩戒",
      image: "smite.png",
      description: "对目标造成4点真实伤害",
      effects: {
        smite: null,
      },
    },
  ];
}

export { importModule };
