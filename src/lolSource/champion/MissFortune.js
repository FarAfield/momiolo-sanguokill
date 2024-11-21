function importModule() {
  return {
    type: "champion",
    id: "MissFortune",
    title: "赏金猎人",
    name: "厄运小姐",
    avatar: "MissFortune.png",
    skins: [
      { name: "default", skin: "MissFortune_0.jpg" },
      { name: "西部牛仔 厄运小姐", skin: "MissFortune_1.jpg" },
      { name: "法国皇室 厄运小姐", skin: "MissFortune_2.jpg" },
      { name: "特工狂花 厄运小姐", skin: "MissFortune_3.jpg" },
      { name: "圣诞糖果棒 厄运小姐", skin: "MissFortune_4.jpg" },
      { name: "荒野女警 厄运小姐", skin: "MissFortune_5.jpg" },
      { name: "黑帮狂花 厄运小姐", skin: "MissFortune_6.jpg" },
      { name: "电玩女神 厄运小姐", skin: "MissFortune_7.jpg" },
      { name: "女船长 厄运小姐", skin: "MissFortune_8.jpg" },
      { name: "泳池派对 厄运小姐", skin: "MissFortune_9.jpg" },
      { name: "星之守护者 厄运小姐", skin: "MissFortune_15.jpg" },
      { name: "武装战姬 厄运小姐", skin: "MissFortune_16.jpg" },
      { name: "睡衣守护者 厄运小姐", skin: "MissFortune_17.jpg" },
      { name: "魅惑女巫 厄运小姐", skin: "MissFortune_18.jpg" },
      { name: "至臻 魅惑女巫 厄运小姐", skin: "MissFortune_20.jpg" },
      { name: "破败军团 厄运小姐", skin: "MissFortune_21.jpg" },
      { name: "幻灵战斗队长 厄运小姐", skin: "MissFortune_31.jpg" },
      { name: "幻灵战斗兔司令 厄运小姐", skin: "MissFortune_32.jpg" },
      { name: "至臻 魅惑女巫 厄运小姐 (2022)", skin: "MissFortune_33.jpg" },
      { name: "绝息圣堂 厄运小姐", skin: "MissFortune_40.jpg" },
      { name: "至臻 绝息圣堂 厄运小姐", skin: "MissFortune_41.jpg" },
      { name: "青花瓷 厄运小姐", skin: "MissFortune_50.jpg" },
      { name: "女帝 厄运小姐", skin: "MissFortune_60.jpg" },
    ],
    spells: [
      {
        id: "MissFortuneP",
        name: "厄运的眷顾",
        icon: "MissFortuneP.png",
        description: "在对一个新目标进行普攻时，厄运小姐会造成额外物理伤害。",
      },
      {
        id: "MissFortuneQ",
        name: "一箭双雕",
        icon: "MissFortuneQ.png",
        description:
          "厄运小姐发射一次弹跳射击，对一个敌人及其身后的另一个敌人造成<physicalDamage>{{ totaldamagetooltip }}物理伤害</physicalDamage>。<br /><br />第二段射击可以暴击。如果第一段射击击杀了它的目标，那么第二段射击就必定暴击。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MissFortuneW",
        name: "大步流星",
        icon: "MissFortuneW.png",
        description:
          "<passive>被动：</passive>如果{{ passivebasemsooc }}秒内没有受到伤害，厄运小姐就会获得<speed>{{ passivebasems }}移动速度</speed>。再过{{ passivemaxmsextraooc }}秒后，这个加成会提升至<speed>{{ passivemaxms }}</speed>。<br /><br /><active>主动：</active>获得被动效果的全额<speed>移动速度</speed>加成并提供<attackSpeed>{{ activeas*100 }}%攻击速度</attackSpeed>，持续{{ activeduration }} 秒。<br /><br /><spellName>厄运的眷顾</spellName>会使这个技能的冷却时间缩短{{ lovetaprefund }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MissFortuneE",
        name: "枪林弹雨",
        icon: "MissFortuneE.png",
        description:
          "厄运小姐发射一阵弹雨，来显形一个区域，造成{{ totalslowamount }}<status>减速</status>和每秒<magicDamage>{{ totaldamagepersecond }}魔法伤害</magicDamage>，持续{{ baseduration }}秒(总共<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MissFortuneR",
        name: "弹幕时间",
        icon: "MissFortuneR.png",
        description:
          "厄运小姐向前方锥形地带引导一阵弹幕，在{{ totalchannelduration }}秒里持续发射共{{ totalwaves }}波，每波弹幕造成<physicalDamage>{{ physicaldamageperwave }}物理伤害</physicalDamage>(总共<physicalDamage>{{ totalphysicaldamage }}物理伤害</physicalDamage>)。<br /><br />每一波都可以暴击来造成%i:scaleCrit% <physicalDamage>{{ physicalcritperwave }}物理伤害</physicalDamage>(总共%i:scaleCrit%<physicalDamage>{{ totalphysicalcritdamage }}物理伤害</physicalDamage>)。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      MissFortuneP: null,
      MissFortuneQ: null,
      MissFortuneW: null,
      MissFortuneE: null,
      MissFortuneR: null,
    },
  };
}
export { importModule };
