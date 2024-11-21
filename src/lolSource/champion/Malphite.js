function importModule() {
  return {
    type: "champion",
    id: "Malphite",
    title: "熔岩巨兽",
    name: "墨菲特",
    avatar: "Malphite.png",
    skins: [
      { name: "default", skin: "Malphite_0.jpg" },
      { name: "三叶草 墨菲特", skin: "Malphite_1.jpg" },
      { name: "珊瑚礁 墨菲特", skin: "Malphite_2.jpg" },
      { name: "石破天惊 墨菲特", skin: "Malphite_3.jpg" },
      { name: "黑曜石守护者 墨菲特", skin: "Malphite_4.jpg" },
      { name: "冰川巨兽 墨菲特", skin: "Malphite_5.jpg" },
      { name: "霸天巨兽 墨菲特", skin: "Malphite_6.jpg" },
      { name: "无畏号 墨菲特", skin: "Malphite_7.jpg" },
      { name: "奥德赛 墨菲特", skin: "Malphite_16.jpg" },
      { name: "暗星 墨菲特", skin: "Malphite_23.jpg" },
      { name: "至臻 暗星 墨菲特", skin: "Malphite_24.jpg" },
      { name: "FPX 墨菲特", skin: "Malphite_25.jpg" },
      { name: "古神 墨菲特", skin: "Malphite_27.jpg" },
      { name: "春晖山神 墨菲特", skin: "Malphite_37.jpg" },
    ],
    spells: [
      {
        id: "MalphiteP",
        name: "花岗岩护盾",
        icon: "MalphiteP.png",
        description:
          "墨菲特被岩石护盾保护，最多吸收10%最大生命值的伤害，若数秒内墨菲特未受到攻击，护盾将重置。",
      },
      {
        id: "MalphiteQ",
        name: "地震碎片",
        icon: "MalphiteQ.png",
        description:
          "墨菲特朝一名敌人发出一块大地碎片，造成<magicDamage>{{ qdamagecalc }}魔法伤害</magicDamage>，并对目标造成持续{{ slowduration }}秒的{{ e2 }}%<status>减速</status>。墨菲特还会窃取目标的这一部分速度，来获得持续{{ slowduration }}秒的与这个<status>减速</status>效果等额的<speed>移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MalphiteW",
        name: "雷霆拍击",
        icon: "MalphiteW.png",
        description:
          "<spellPassive>被动：</spellPassive>墨菲特获得<scaleArmor>{{ bonusarmorpassive*100 }}%护甲(%i:scaleArmor%{{ f1 }})</scaleArmor>。这个效果会在<spellName>花岗岩护盾</spellName>激活时提升至<scaleArmor>{{ bonusarmorpassive*300 }}%(%i:scaleArmor%{{ f2 }})</scaleArmor>。<br /><br /><spellPassive>主动：</spellPassive>墨菲特的下次攻击造成额外的<physicalDamage>{{ totalbonusdamage }}物理伤害</physicalDamage>，并会引发一阵余震，以在一个锥形范围内造成<physicalDamage>{{ thunderclapsplash }}物理伤害</physicalDamage>。在接下来的{{ thunderclapbuffduration }}秒内，他的攻击会继续引发余震。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MalphiteE",
        name: "大地震颤",
        icon: "MalphiteE.png",
        description:
          "墨菲特锤击地面，对周围敌人造成<magicDamage>{{ edamagecalc }}魔法伤害</magicDamage>并减少他们{{ asreduction }}%<attackSpeed>攻击速度</attackSpeed>，持续{{ duration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MalphiteR",
        name: "势不可挡",
        icon: "MalphiteR.png",
        description:
          "墨菲特携着山崩之力冲锋，进行不可阻挡的突进。在突进结束时，墨菲特会<status>击飞</status>{{ knockupduration }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      MalphiteP: null,
      MalphiteQ: null,
      MalphiteW: null,
      MalphiteE: null,
      MalphiteR: null,
    },
  };
}
export { importModule };
