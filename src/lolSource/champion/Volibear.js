function importModule() {
  return {
    type: "champion",
    id: "Volibear",
    title: "不灭狂雷",
    name: "沃利贝尔",
    avatar: "Volibear.png",
    skins: [
      { name: "default", skin: "Volibear_0.jpg" },
      { name: "雷霆领主 沃利贝尔", skin: "Volibear_1.jpg" },
      { name: "北地风暴 沃利贝尔", skin: "Volibear_2.jpg" },
      { name: "符文战熊 沃利贝尔", skin: "Volibear_3.jpg" },
      { name: "警长 沃利贝尔", skin: "Volibear_4.jpg" },
      { name: "怒熊 沃利贝尔", skin: "Volibear_5.jpg" },
      { name: "坚韧不屈 沃利贝尔", skin: "Volibear_6.jpg" },
      { name: "神龙尊者 均衡之龙 沃利贝尔", skin: "Volibear_7.jpg" },
      { name: "至臻 神龙尊者 均衡之龙 沃利贝尔", skin: "Volibear_9.jpg" },
      { name: "墨影之灵 沃利贝尔", skin: "Volibear_19.jpg" },
    ],
    spells: [
      {
        id: "VolibearP",
        name: "狂雷渐起",
        icon: "VolibearP.png",
        description:
          "沃利贝尔的攻击和技能会提供攻击速度，并且最终使他的攻击对附近的敌人们造成额外魔法伤害。",
      },
      {
        id: "VolibearQ",
        name: "擂首一击",
        icon: "VolibearQ.png",
        description:
          "沃利贝尔获得<speed>{{ minspeedcalc }}移动速度</speed>，在朝着敌方英雄时翻倍至<speed>{{ maxspeedcalc }}</speed>，持续{{ duration }}秒。在激活时，沃利贝尔的下次攻击会造成<physicalDamage>{{ calculateddamage }}物理伤害</physicalDamage>并使目标<status>晕眩</status>{{ stunduration }}秒。<br /><br />如果在沃利贝尔对一个目标造成<status>晕眩</status>效果前被敌人<status>定身</status>的话，那么他会因发怒而提前结束这个技能但刷新它的冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VolibearW",
        name: "暴怒撕咬",
        icon: "VolibearW.png",
        description:
          "沃利贝尔猛拍一名敌人，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，并标记目标{{ markduration }}秒。<br /><br />如果这个技能施放在一个被标记的目标身上，那么这个技能的伤害会提升至<physicalDamage>{{ empowereddamage }}</physicalDamage>，并且沃利贝尔会回复<healing>{{ baseheal }}生命值+他{{ percentmissinghealthhealingratio }}的已损失生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VolibearE",
        name: "霹天雳地",
        icon: "VolibearE.png",
        description:
          "沃利贝尔在目标区域召唤一道闪电箭，造成<magicDamage>{{ totaldamagetooltip }}加上{{ percentdamage*100 }}%最大生命值的魔法伤害</magicDamage>并使敌人<status>减速</status>{{ slowamount*100 }}%，持续{{ slowduration }}秒。<br /><br />如果沃利贝尔在闪电落点区域内，他还会获得一层<shield>{{ shieldapratiotooltip }}加上{{ shieldamount*100 }}%最大生命值的护盾</shield>，持续{{ shieldduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VolibearR",
        name: "天声震落",
        icon: "VolibearR.png",
        description:
          "沃利贝尔变换形态并跃向一个目标区域，获得<healing>{{ healthamount }}生命值</healing>和{{ bonusattackrange }}攻击距离，持续{{ transformduration }}秒。<br /><br />在着陆时，附近的敌方防御塔会<status>失效</status>{{ towerdisableduration }}秒，并受到<physicalDamage>{{ towerdamagetooltip }}物理伤害</physicalDamage>。附近的敌人会被<status>减速</status>{{ slowamount*100 }}%，减速效果会在1秒里持续衰减。被沃利贝尔直接压住的敌人们会受到<physicalDamage>{{ sweetspotdamagetooltip }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      VolibearP: null,
      VolibearQ: null,
      VolibearW: null,
      VolibearE: null,
      VolibearR: null,
    },
  };
}
export { importModule };
