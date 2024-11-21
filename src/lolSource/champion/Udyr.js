function importModule() {
  return {
    type: "champion",
    id: "Udyr",
    title: "兽灵行者",
    name: "乌迪尔",
    avatar: "Udyr.png",
    skins: [
      { name: "default", skin: "Udyr_0.jpg" },
      { name: "武力全开 乌迪尔", skin: "Udyr_1.jpg" },
      { name: "四神之力 乌迪尔", skin: "Udyr_2.jpg" },
      { name: "灵魂守卫 乌迪尔", skin: "Udyr_3.jpg" },
      { name: "这货不是乌迪尔", skin: "Udyr_4.jpg" },
      { name: "龙神之力 乌迪尔", skin: "Udyr_5.jpg" },
      { name: "墨影行者 乌迪尔", skin: "Udyr_6.jpg" },
    ],
    spells: [
      {
        id: "UdyrP",
        name: "众灵纽带",
        icon: "UdyrP.png",
        description:
          "乌迪尔的四个基础技能会让他在四种姿态之间来回转换，并且再次施放同一技能会带来终极技能助益。此外，在使用一个技能后，乌迪尔的下两次攻击获得攻击速度。",
      },
      {
        id: "UdyrQ",
        name: "狂暴爪击",
        icon: "UdyrQ.png",
        description:
          "<spellActive>爪击姿态：</spellActive>乌迪尔获得<attackSpeed>{{ attackspeedbase*100 }}%攻击速度</attackSpeed>并且他攻击造成<physicalDamage>{{ onhitdamage }}物理伤害</physicalDamage> %i:OnHit%<OnHit>攻击特效</OnHit>，持续{{ attackspeeddurationbase }}秒。此外，乌迪尔在这个姿态中的下两次攻击造成额外的<physicalDamage>{{ maxhponhit1 }}最大生命值的物理伤害</physicalDamage>并获得{{ attackrange }}距离。<br /><br /><keywordMajor>觉醒：</keywordMajor>将额外<attackSpeed>攻击速度</attackSpeed>提升至<attackSpeed>{{ empoweredtotalas }}</attackSpeed>并且将百分比生命值伤害提升至<physicalDamage>{{ q2totalonhithpdamage }}</physicalDamage>。此外，乌迪尔的下两次攻击会召唤闪电进行6次打击，对落单的目标造成共计<magicDamage>{{ empoweredlightningbonusmax }}最大生命值的魔法伤害</magicDamage>(如果可能的话，闪电打击会弹射至附近的其它目标)。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "UdyrW",
        name: "坚铁甲胄",
        icon: "UdyrW.png",
        description:
          "<spellPassive>甲胄姿态：</spellPassive>乌迪尔获得持续{{ shieldduration }}秒的<shield>{{ totalshield }}护盾值</shield>。此外，乌迪尔的下两次攻击具有{{ lifesteal*100 }}%生命偷取并回复<healing>{{ lifeonhit }}生命值</healing>。<br /><br /><keywordMajor>觉醒：</keywordMajor>获得<shield>{{ recastshield }}护盾值</shield>，在{{ shieldduration }}秒里持续回复<healing>{{ recastheal }}生命值</healing>，并且乌迪尔的下两次攻击转而具有{{ lifesteal*200 }}%生命偷取并回复<healing>{{ lifeonhitawakened }}生命值</healing>。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "UdyrE",
        name: "踏火蛮冲",
        icon: "UdyrE.png",
        description:
          "<spellActive>蛮冲姿态：</spellActive>乌迪尔获得在{{ movespeedduration }}秒里持续衰减的<speed>{{ movespeed*100 }}%移动速度</speed>。此外，乌迪尔的攻击会使他冲刺到目标处并造成{{ stunduration }}秒<status>晕眩</status>。(对每个目标各有{{ icd }}秒冷却时间)。<br /><br /><keywordMajor>觉醒：</keywordMajor>免疫<status>定身</status>和<status>限制</status>效果，并额外提供持续{{ unstoppableduration }}秒的<speed>{{ movespeedbonus }}移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "UdyrR",
        name: "极凌飓风",
        icon: "UdyrR.png",
        description:
          "<spellActive>飓风姿态：</spellActive>乌迪尔召唤冰川风暴环绕自身{{ buffduration }}秒，每秒对附近的敌人造成<magicDamage>{{ stormdamage }}魔法伤害</magicDamage>，并对这些敌人造成{{ slowpotency*100 }}%<status>减速</status>。此外，乌迪尔在这个姿态中的下两次攻击对风暴中的敌人造成<magicDamage>{{ pulsedamage }}魔法伤害</magicDamage>。<br /><br /><keywordMajor>觉醒：</keywordMajor>释放风暴，使它跟随乌迪尔最后攻击的那名敌人，在持续期间造成额外的<magicDamage>{{ percenthpblast }}最大生命值的魔法伤害</magicDamage>，和额外的{{ empoweredslow }}<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      UdyrP: null,
      UdyrQ: null,
      UdyrW: null,
      UdyrE: null,
      UdyrR: null,
    },
  };
}
export { importModule };
