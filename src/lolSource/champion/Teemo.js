function importModule() {
  return {
    type: "champion",
    id: "Teemo",
    title: "迅捷斥候",
    name: "提莫",
    avatar: "Teemo.png",
    skins: [
      { name: "default", skin: "Teemo_0.jpg" },
      { name: "圣诞开心鬼 提莫", skin: "Teemo_1.jpg" },
      { name: "军情五处 提莫", skin: "Teemo_2.jpg" },
      { name: "密林猎手 提莫", skin: "Teemo_3.jpg" },
      { name: "提莫:'约德尔人的一大步'", skin: "Teemo_4.jpg" },
      { name: "兔宝宝 提莫", skin: "Teemo_5.jpg" },
      { name: "约德尔国队长 提莫", skin: "Teemo_6.jpg" },
      { name: "熊猫 提莫", skin: "Teemo_7.jpg" },
      { name: "欧米伽小队 幽灵特工", skin: "Teemo_8.jpg" },
      { name: "大魔王 提莫", skin: "Teemo_14.jpg" },
      { name: "小蜜蜂 提莫", skin: "Teemo_18.jpg" },
      { name: "灵魂莲华 提莫", skin: "Teemo_25.jpg" },
      { name: "至臻 灵魂莲华 提莫", skin: "Teemo_27.jpg" },
      { name: "招财进宝 提莫", skin: "Teemo_37.jpg" },
      { name: "太空律动 “律动队长” 提莫", skin: "Teemo_47.jpg" },
    ],
    spells: [
      {
        id: "TeemoP",
        name: "游击队军备",
        icon: "TeemoP.png",
        description:
          "如果提莫在短时间内静止站立且不受任何伤害，就会进入无定期的隐形状态。如果提莫在草丛中，他就能在移动的同时进入并保持隐形状态。离开隐形状态后，提莫会获得“出奇制胜”的增益效果，提升攻击速度，持续若干秒。",
      },
      {
        id: "TeemoQ",
        name: "致盲吹箭",
        icon: "TeemoQ.png",
        description:
          "提莫发射一根吹箭，对目标造成{{ blindduration }}秒<status>致盲</status>和<magicDamage>{{ calculateddamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TeemoW",
        name: "小莫快跑",
        icon: "TeemoW.png",
        description:
          "<spellPassive>被动：</spellPassive>提莫获得<speed>{{ passivemovespeedbonus*100 }}%移动速度</speed>，前提是在最近{{ passivecooldownondamagetaken }}秒内未受到来自敌方英雄或防御塔的伤害。<br /><br /><spellActive>主动：</spellActive>提莫急速奔跑，获得持续{{ activemovespeedbuffduration }}秒的<speed>{{ activemovespeedbonus*100 }}%移动速度</speed>，在被攻击时也不会移除。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TeemoE",
        name: "毒性射击",
        icon: "TeemoE.png",
        description:
          "<spellPassive>被动：</spellPassive>提莫的攻击会施加剧毒，造成额外的<magicDamage>{{ impactcalculateddamage }}魔法伤害</magicDamage>外加在{{ poisonduration }}秒里持续造成共<magicDamage>{{ totaldotdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TeemoR",
        name: "种蘑菇",
        icon: "TeemoR.png",
        description:
          "提莫扔出一个蘑菇陷阱，陷阱会在被踩到后爆炸。陷阱<status>减速</status>{{ slowamount }}%并在{{ debuffduration }}秒里持续造成共<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。敌人会被显形相同的持续时长。<br /><br />陷阱持续{{ mushroomduration }}分钟并且是潜行状态。当蘑菇被丢到另一个蘑菇上时，它会在弹跳后着陆。这个技能有{{ maxammo }}层充能({{ ammorechargetime }}秒刷新时间)。<br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TeemoP: null,
      TeemoQ: null,
      TeemoW: null,
      TeemoE: null,
      TeemoR: null,
    },
  };
}
export { importModule };
