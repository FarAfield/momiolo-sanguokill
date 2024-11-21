function importModule() {
  return {
    type: "champion",
    id: "Sett",
    title: "腕豪",
    name: "瑟提",
    avatar: "Sett.png",
    skins: [
      { name: "default", skin: "Sett_0.jpg" },
      { name: "王国机神苍狼 瑟提", skin: "Sett_1.jpg" },
      { name: "神龙尊者 炎龙瑟提", skin: "Sett_8.jpg" },
      { name: "至臻 神龙尊者 炎龙瑟提", skin: "Sett_9.jpg" },
      { name: "泳池派对 瑟提", skin: "Sett_10.jpg" },
      { name: "龙腾虎跃 瑟提", skin: "Sett_19.jpg" },
      { name: "灵魂莲华 瑟提", skin: "Sett_38.jpg" },
      { name: "斗魂觉醒 瑟提", skin: "Sett_45.jpg" },
      { name: "心之钢 瑟提", skin: "Sett_56.jpg" },
    ],
    spells: [
      {
        id: "SettP",
        name: "沙场豪情",
        icon: "SettP.png",
        description:
          "瑟提的普通攻击会交替使用左重拳和右重拳。右重拳稍微强一些和快一些。瑟提还很讨厌失败，因此会基于他的已损失生命值而获得额外的生命回复。",
      },
      {
        id: "SettQ",
        name: "屈人之威",
        icon: "SettQ.png",
        description:
          "瑟提手痒难耐，渴望打架，在朝着敌方英雄移动时获得<speed>{{ msamount*100 }}%移动速度</speed>，持续{{ msduration }}秒。<br /><br />此外，瑟提的下两次攻击造成额外的<physicalDamage>{{ basedamage }}外加{{ maxhealthdamagecalc }}最大生命值的物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SettW",
        name: "蓄意轰拳",
        icon: "SettW.png",
        description:
          "<spellPassive>被动：</spellPassive>瑟提将受到的{{ damagestored*100 }}%伤害储存为<keywordMajor>豪意</keywordMajor>，储量上限为<keywordMajor>{{ maxgrit }}</keywordMajor>。<keywordMajor>豪意</keywordMajor>在停止受到伤害的{{ adrenalinestoragewindow }}秒后会快速衰减。<br /><br /><spellActive>主动：</spellActive>瑟提将所有<keywordMajor>豪意</keywordMajor>迸发出来，获得<shield>{{ shieldconversion*100 }}%迸发豪意值的护盾值</shield>，护盾值会在{{ shieldmaxduration }}秒里持续衰减。瑟提随后会轰出一记重拳，对中央的所有敌人造成<trueDamage>{{ damagecalc }}外加{{ damageconversion }}迸发豪意值的真实伤害</trueDamage>(最大伤害为<trueDamage>{{ f1 }}</trueDamage>)。不在中央的敌人会受到<physicalDamage>物理伤害</physicalDamage>作为替代。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SettE",
        name: "强手裂颅",
        icon: "SettE.png",
        description:
          "瑟提将他两侧的敌人猛撞到一起，造成<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>并使他们<status>减速</status>{{ slowamount*100 }}%，持续{{ slowduration }}秒。如果瑟提在每侧都至少擒住了一名敌人，那么所有敌人还会被<status>晕眩</status>{{ stunduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SettR",
        name: "叹为观止",
        icon: "SettR.png",
        description:
          "瑟提擒住一名敌方英雄，并在扛着该英雄前行时将其<status>压制</status>，然后将该英雄猛摔到地上，对着陆点附近的所有敌人造成<physicalDamage>{{ damagecalc }}外加{{ maxhealthdamage*100 }}%被擒英雄的额外生命值的物理伤害</physicalDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。敌人离瑟提着陆的位置越远，受到的伤害越低。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SettP: null,
      SettQ: null,
      SettW: null,
      SettE: null,
      SettR: null,
    },
  };
}
export { importModule };
