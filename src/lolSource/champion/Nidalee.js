function importModule() {
  return {
    type: "champion",
    id: "Nidalee",
    title: "狂野女猎手",
    name: "奈德丽",
    avatar: "Nidalee.png",
    skins: [
      { name: "default", skin: "Nidalee_0.jpg" },
      { name: "雪装 奈德丽", skin: "Nidalee_1.jpg" },
      { name: "丛林猎豹 奈德丽", skin: "Nidalee_2.jpg" },
      { name: "法国女仆 奈德丽", skin: "Nidalee_3.jpg" },
      { name: "艳后 奈德丽", skin: "Nidalee_4.jpg" },
      { name: "魅惑女巫 奈德丽", skin: "Nidalee_5.jpg" },
      { name: "铁血猎手 奈德丽", skin: "Nidalee_6.jpg" },
      { name: "枭姬 孙尚香", skin: "Nidalee_7.jpg" },
      { name: "勇者 奈德丽", skin: "Nidalee_8.jpg" },
      { name: "银河魔装机神 奈德丽", skin: "Nidalee_9.jpg" },
      { name: "黎明使者 奈德丽", skin: "Nidalee_11.jpg" },
      { name: "狮子星神 奈德丽", skin: "Nidalee_18.jpg" },
      { name: "DWG 奈德丽", skin: "Nidalee_27.jpg" },
      { name: "海之歌 奈德丽", skin: "Nidalee_29.jpg" },
      { name: "喵大力", skin: "Nidalee_39.jpg" },
      { name: "灵之菊 奈德丽", skin: "Nidalee_48.jpg" },
    ],
    spells: [
      {
        id: "NidaleeP",
        name: "寻觅",
        icon: "NidaleeP.png",
        description:
          "在穿越草丛进行移动时，奈德丽的移动速度会提升10%，持续2秒，并在朝着1400码内的出现在己方视野内的敌方英雄进行移动时，移动速度加成会提升至30%。<br><br>在【Q标枪投掷】或【W丛林伏击】对敌方英雄或野怪造成伤害后，奈德丽会开始<font color='#FFF673'>捕猎</font>目标英雄，提供其<font color='#ee91d7'>真实视野</font>，持续4秒。在此期间，奈德丽获得10%移动速度加成（在她朝着<font color='#FFF673'>被捕猎</font>的目标移动时，这个加成会提升至30%）并且她的【Q推倒】和【W猛扑】会对这些目标造成强化伤害。",
      },
      {
        id: "NidaleeQ",
        name: "标枪投掷 / 推倒",
        icon: "NidaleeQ.png",
        description:
          "<keywordMajor>人类形态：</keywordMajor>奈德丽投掷她的标枪，造成<magicDamage>{{ humanminimumdamage }}魔法伤害</magicDamage>，基于标枪飞行距离至多提升至<magicDamage>{{ humanmaximumdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NidaleeW",
        name: "丛林伏击 / 猛扑",
        icon: "NidaleeW.png",
        description:
          "<keywordMajor>人类形态：</keywordMajor>奈德丽放置一个持续2分钟的隐形陷阱。当有一个敌人走到它上面时，该敌人会每秒受到<magicDamage>{{ damagepersecond }}魔法伤害</magicDamage>，持续{{ e3 }}秒。<br /><br />最多可以有{{ maxtraps }}个陷阱同时存在。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NidaleeE",
        name: "野性奔腾 / 挥击",
        icon: "NidaleeE.png",
        description:
          "<keywordMajor>人类形态：</keywordMajor>奈德丽为目标回复<healing>{{ totalhealing }}生命值</healing>，这个数额基于已损失生命值至多提升至<healing>{{ maxhealing }}</healing>，并为目标提供持续{{ asduration }}秒的<attackSpeed>{{ bonusas*100 }}%攻击速度</attackSpeed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NidaleeR",
        name: "美洲狮形态",
        icon: "NidaleeR.png",
        description:
          "<spellPassive>被动：</spellPassive>在<keywordMajor>人类形态</keywordMajor>下，施加<keywordMajor>捕猎</keywordMajor>效果会刷新这个技能的冷却时间。<br /><br /><keywordMajor>人类形态：</keywordMajor>奈德丽变形为<keywordMajor>美洲狮形态</keywordMajor>，获得近战攻击并替换她的主动技能。<br /><br /><keywordMajor>美洲狮形态：</keywordMajor>奈德丽变形为<keywordMajor>人类形态</keywordMajor>，获得远程攻击并替换她的主动技能。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      NidaleeP: null,
      NidaleeQ: null,
      NidaleeW: null,
      NidaleeE: null,
      NidaleeR: null,
    },
  };
}
export { importModule };
