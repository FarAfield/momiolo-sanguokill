function importModule() {
  return {
    type: "champion",
    id: "Garen",
    title: "德玛西亚之力",
    name: "盖伦",
    avatar: "Garen.png",
    skins: [
      { name: "default", skin: "Garen_0.jpg" },
      { name: "战神阿瑞斯 盖伦", skin: "Garen_1.jpg" },
      { name: "黄金骑士 盖伦", skin: "Garen_2.jpg" },
      { name: "铁甲雄心 盖伦", skin: "Garen_3.jpg" },
      { name: "死亡骑士 盖伦", skin: "Garen_4.jpg" },
      { name: "孤高游侠 盖伦", skin: "Garen_5.jpg" },
      { name: "钢铁军团 盖伦", skin: "Garen_6.jpg" },
      { name: "海上霸主 盖伦", skin: "Garen_10.jpg" },
      { name: "张辽 文远", skin: "Garen_11.jpg" },
      { name: "神王 盖伦", skin: "Garen_13.jpg" },
      { name: "德玛西亚警官 盖伦", skin: "Garen_14.jpg" },
      { name: "王国机神玄武 盖伦", skin: "Garen_22.jpg" },
      { name: "至臻 王国机神玄武 盖伦", skin: "Garen_23.jpg" },
      { name: "战斗学院 盖伦", skin: "Garen_24.jpg" },
      { name: "剪纸仙灵 盖伦", skin: "Garen_33.jpg" },
      { name: "堕落神王 盖伦", skin: "Garen_44.jpg" },
    ],
    spells: [
      {
        id: "GarenP",
        name: "坚韧",
        icon: "GarenP.png",
        description:
          "如果盖伦近期没有受到伤害或者被敌方技能命中，那么他会每秒回复若干百分比的总生命值。",
      },
      {
        id: "GarenQ",
        name: "致命打击",
        icon: "GarenQ.png",
        description:
          "盖伦移除身上的所有<status>减速</status>效果并获得<speed>{{ movementspeedamount*100 }}%移动速度</speed>，持续{{ movementspeedduration }}秒。<br /><br />他的下次攻击会使目标<status>沉默</status>{{ silenceduration }}秒并造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GarenW",
        name: "勇气",
        icon: "GarenW.png",
        description:
          "<spellPassive>被动：</spellPassive>击杀一个单位会永久提供<scaleArmor>{{ resistgainonkill }}护甲</scaleArmor>和<scaleMR>{{ resistgainonkill }}魔法抗性</scaleMR>，最多可达{{ resistmax }}。满层时，盖伦获得<scaleArmor>{{ percentarmor }}护甲</scaleArmor>和<scaleMR>{{ percentmr }}魔法抗性</scaleMR>。<br /><br /><spellActive>主动：</spellActive>盖伦加固他的勇气{{ drduration }}秒，使即将到来的伤害减少{{ drpercent*100 }}%。他还会获得<shield>{{ totalshield }}护盾值</shield>和{{ upfronttenacity*100 }}%韧性，持续{{ upfrontduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GarenE",
        name: "审判",
        icon: "GarenE.png",
        description:
          "盖伦快速地旋舞大剑，持续{{ duration }}秒，每旋转一圈造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，共旋转{{ f1 }}圈。相距最近的敌人每圈转而受到<physicalDamage>{{ totaldamagenearest }}物理伤害</physicalDamage>。<br /><br />被{{ stackstoshred }}圈旋转命中的敌方英雄会损失<scaleArmor>{{ shredamount*100 }}%护甲</scaleArmor>，持续{{ shredduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GarenR",
        name: "德玛西亚正义",
        icon: "GarenR.png",
        description:
          "盖伦召唤德玛西亚之力来击杀他的敌人，造成<trueDamage>{{ basedamage }}外加{{ executedamage*100 }}%已损失生命值的真实伤害</trueDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      GarenP: null,
      GarenQ: null,
      GarenW: null,
      GarenE: null,
      GarenR: null,
    },
  };
}
export { importModule };
