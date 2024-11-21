function importModule() {
  return {
    type: "champion",
    id: "Hecarim",
    title: "战争之影",
    name: "赫卡里姆",
    avatar: "Hecarim.png",
    skins: [
      { name: "default", skin: "Hecarim_0.jpg" },
      { name: "血石骑士 赫卡里姆", skin: "Hecarim_1.jpg" },
      { name: "幽魂骑士 赫卡里姆", skin: "Hecarim_2.jpg" },
      { name: "无头骑士 赫卡里姆", skin: "Hecarim_3.jpg" },
      { name: "电玩战魂 赫卡里姆", skin: "Hecarim_4.jpg" },
      { name: "永恒之森 赫卡里姆", skin: "Hecarim_5.jpg" },
      { name: "创世之神 赫卡里姆", skin: "Hecarim_6.jpg" },
      { name: "零之枪骑 赫卡里姆", skin: "Hecarim_7.jpg" },
      { name: "西部魔影 赫卡里姆", skin: "Hecarim_8.jpg" },
      { name: "人马星神 赫卡里姆", skin: "Hecarim_14.jpg" },
      { name: "车骑之力 赫卡里姆", skin: "Hecarim_22.jpg" },
      { name: "北极星守护者 赫卡里姆", skin: "Hecarim_31.jpg" },
    ],
    spells: [
      {
        id: "HecarimP",
        name: "征战之路",
        icon: "HecarimP.png",
        description: "赫卡里姆获得相当于他一部分额外移动速度的攻击力加成。",
      },
      {
        id: "HecarimQ",
        name: "暴走",
        icon: "HecarimQ.png",
        description:
          "赫卡里姆顺劈周围的敌人，造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>。如果这个技能命中了敌人，那么他会获得一层效果，来使这次技能的冷却时间降低{{ rampagecooldownreduction }}秒并提升此技能{{ rampagebonusdamageperc }}%伤害，持续{{ e6 }}秒。这个效果至多可达{{ e2 }}层。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "HecarimW",
        name: "恐惧之灵",
        icon: "HecarimW.png",
        description:
          "赫卡里姆在{{ buffduration }}秒里对附近的敌人们持续造成共<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />赫卡里姆获得<passive>{{ resistamount }}</passive> <scaleArmor>护甲</scaleArmor>和<scaleMR>魔法抗性</scaleMR>并治疗自身，治疗数额相当于这些敌人受到的来自赫卡里姆的<healing>{{ leechamount }}%伤害</healing>和来自赫卡里姆友军的<healing>{{ allytooltipleachvalue }}%伤害</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "HecarimE",
        name: "毁灭冲锋",
        icon: "HecarimE.png",
        description:
          "赫卡里姆变为幽灵状态，并获得<speed>{{ minmovespeed*100 }}%移动速度</speed>，在{{ e5 }}秒里持续提升至<speed>{{ maxmovespeed*100 }}%</speed>。他的下次攻击会<status>击退</status>目标并造成<physicalDamage>{{ mindamage }}</physicalDamage>到<physicalDamage>{{ maxdamage }}物理伤害</physicalDamage>。<status>击退</status>距离和伤害随此技能期间的位移距离而增长。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "HecarimR",
        name: "暗影冲击",
        icon: "HecarimR.png",
        description:
          "赫卡里姆召唤幽魂骑兵并向前冲锋，造成<magicDamage>{{ damagedone }}魔法伤害</magicDamage>。赫卡里姆会在他冲锋的终点释放一道冲击波，来使敌人们<status>恐惧</status>{{ feardurationmin }}到{{ feardurationmax }}秒，随冲锋距离提升。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      HecarimP: null,
      HecarimQ: null,
      HecarimW: null,
      HecarimE: null,
      HecarimR: null,
    },
  };
}
export { importModule };
