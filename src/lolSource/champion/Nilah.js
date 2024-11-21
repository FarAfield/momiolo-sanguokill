function importModule() {
  return {
    type: "champion",
    id: "Nilah",
    title: "不羁之悦",
    name: "尼菈",
    avatar: "Nilah.png",
    skins: [
      { name: "default", skin: "Nilah_0.jpg" },
      { name: "星之守护者 尼菈", skin: "Nilah_1.jpg" },
      { name: "魔女 尼菈", skin: "Nilah_11.jpg" },
    ],
    spells: [
      {
        id: "NilahP",
        name: "喜色川流",
        icon: "NilahP.png",
        description:
          "尼菈在对小兵进行补刀时可获得提升过的经验值，并且能够增强与分享附近的来自她友方的治疗和护盾效果。",
      },
      {
        id: "NilahQ",
        name: "游刃万变",
        icon: "NilahQ.png",
        description:
          "<spellPassive>被动：</spellPassive>尼菈获得{{ critarmorpen }}护甲穿透，并且她对英雄进行的攻击会回复自身<healing>{{ critlifesteal }}实际伤害值的生命值</healing>。来自这个效果的过量治疗将转化为一个持续{{ shieldduration }}秒的<shield>护盾</shield>。<br /><br /><spellActive>主动：</spellActive>尼菈甩出她的鞭刃，造成<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>，可通过她的暴击几率提升。如果命中了一个敌方单位或建筑物，尼菈就会获得125攻击距离和<attackSpeed>{{ bonusattackspeedcalc }}%攻击速度</attackSpeed>，并且她的攻击会在一个锥形范围内造成<physicalDamage>{{ attacktotaldamagetooltip }}物理伤害</physicalDamage>，这些效果持续{{ buffduration }}秒。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NilahW",
        name: "轻纱飞漾",
        icon: "NilahW.png",
        description:
          "尼菈将自身裹入迷雾中{{ baseduration }}秒，从而变为幽灵状态、获得<speed>{{ movespeedpercent*100 }}%移动速度</speed>、躲避攻击并使所受的<magicDamage>魔法伤害</magicDamage>降低{{ magicdamagereduction*100 }}%。<br /><br />在激活期间，她接触到的任何友方英雄也都会裹入迷雾中，获得持续{{ sharebaseduration }}秒的相同增益。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NilahE",
        name: "纵情逐流",
        icon: "NilahE.png",
        description:
          "尼菈冲刺并穿过一个单位，对她途经的任何敌人们造成<physicalDamage>{{ dashdamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NilahR",
        name: "神恩激荡",
        icon: "NilahR.png",
        description:
          "尼菈挥舞她的鞭刃，在1秒里持续造成<physicalDamage>{{ damagepertickcalctooltip }}物理伤害</physicalDamage>，然后用一次<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>的爆发来完成挥舞，并将附近的敌人们<status>拉拽</status>向她。<br /><br />尼菈对她自身和附近的友方英雄们进行治疗，治疗量相当于<healing>她对敌方英雄们造成的{{ champhealingpercent }} (+{{ spell.nilahq:critlifesteal }} 游刃万变)实际伤害值(非英雄单位为{{ otherhealingpercent*100 }}%)</healing>，并将任何过量治疗转化为一个持续{{ duration }}秒的<shield>护盾</shield>。<br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      NilahP: null,
      NilahQ: null,
      NilahW: null,
      NilahE: null,
      NilahR: null,
    },
  };
}
export { importModule };
