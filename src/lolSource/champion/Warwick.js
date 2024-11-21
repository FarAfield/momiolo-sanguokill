function importModule() {
  return {
    type: "champion",
    id: "Warwick",
    title: "祖安怒兽",
    name: "沃里克",
    avatar: "Warwick.png",
    skins: [
      { name: "default", skin: "Warwick_0.jpg" },
      { name: "暗影 沃里克", skin: "Warwick_1.jpg" },
      { name: "披着海牛的狼 沃里克", skin: "Warwick_2.jpg" },
      { name: "狼外婆 沃里克", skin: "Warwick_3.jpg" },
      { name: "冻原猎手 沃里克", skin: "Warwick_4.jpg" },
      { name: "嗜血狂暴 沃里克", skin: "Warwick_5.jpg" },
      { name: "火牙狼人 沃里克", skin: "Warwick_6.jpg" },
      { name: "荒野豺狼 沃里克", skin: "Warwick_7.jpg" },
      { name: "黑暗骑士 沃里克", skin: "Warwick_8.jpg" },
      { name: "海牛狼人 沃里克", skin: "Warwick_9.jpg" },
      { name: "南天之怒 沃里克 ", skin: "Warwick_10.jpg" },
      { name: "源计划：末日 沃里克", skin: "Warwick_16.jpg" },
      { name: "古神 沃里克", skin: "Warwick_35.jpg" },
      { name: "北极星使者 沃里克", skin: "Warwick_45.jpg" },
      { name: "至臻 北极星使者 沃里克", skin: "Warwick_46.jpg" },
    ],
    spells: [
      {
        id: "WarwickP",
        name: "血之饥渴",
        icon: "WarwickP.png",
        description:
          "沃里克的普攻造成额外魔法伤害。如果沃里克的生命值低于50%，那么他会获得等额的治疗效果。如果他的生命值低于25%，则治疗效果提升至三倍。",
      },
      {
        id: "WarwickQ",
        name: "野兽之口",
        icon: "WarwickQ.png",
        description:
          "<tap>秒放：</tap>沃里克向前猛扑并撕咬，造成<magicDamage>{{ basebitedamage }}外加{{ targetpercenthpdamage }}%最大生命值的魔法伤害</magicDamage>和<healing>{{ e3 }}%实际伤害值的治疗效果</healing>。<br /><br /><hold>蓄力：</hold>沃里克猛扑并用它的狼嘴紧咬目标，并跃到目标身后。在紧咬目标时，沃里克会跟随目标的所有移动。在释放他的蓄力后，他会造成等额伤害和治疗效果。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "WarwickW",
        name: "鲜血追猎",
        icon: "WarwickW.png",
        description:
          "<spellPassive>被动：</spellPassive>沃里克可以感知到低于50%生命值的英雄们，朝他们移动时获得<speed>{{ e1 }}%移动速度</speed>并在对抗他们时获得<attackSpeed>{{ e2 }}%攻击速度</attackSpeed>。这些加成在对抗低于20%生命值的敌人们时会提升250%。<br /><br /><spellActive>主动：</spellActive>沃里克可以暂时感知到所有敌人，并在对抗相距最近的敌人时获得这个技能的被动效果，持续8秒，无论该目标有多少生命值。沃里克无法在与英雄战斗时使用这个技能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "WarwickE",
        name: "远祖嗥叫",
        icon: "WarwickE.png",
        description:
          "沃里克获得持续2.5秒的{{ e1 }}%伤害减免。在它结束后，沃里克会发出嗥叫，<status>恐惧</status>附近的敌人{{ e3 }}秒。沃里克可以<recast>再次施放</recast>来提前结束这个技能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "WarwickR",
        name: "无尽束缚",
        icon: "WarwickR.png",
        description:
          "沃里克跳跃一大段距离(随他的<speed>移动速度</speed>增长)，并<status>压制</status>碰撞到的第一个敌方英雄{{ rduration }}秒并且自身处在引导状态。在此期间他持续攻击该英雄3次，造成<magicDamage>{{ damagecumulative }}魔法伤害</magicDamage>。沃里克在引导期间会获得<healing>100%实际伤害值的治疗效果</healing>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      WarwickP: null,
      WarwickQ: null,
      WarwickW: null,
      WarwickE: null,
      WarwickR: null,
    },
  };
}
export { importModule };
