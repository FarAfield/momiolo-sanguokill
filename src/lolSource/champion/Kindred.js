function importModule() {
  return {
    type: "champion",
    id: "Kindred",
    title: "永猎双子",
    name: "千珏",
    avatar: "Kindred.png",
    skins: [
      { name: "default", skin: "Kindred_0.jpg" },
      { name: "黯焰双魂 千珏", skin: "Kindred_1.jpg" },
      { name: "银河魔装机神 千珏", skin: "Kindred_2.jpg" },
      { name: "灵魂莲华 千珏", skin: "Kindred_3.jpg" },
      { name: "青花瓷 千珏", skin: "Kindred_12.jpg" },
      { name: "猫狗大战 千珏", skin: "Kindred_22.jpg" },
      { name: "DRX 千珏", skin: "Kindred_23.jpg" },
      { name: "至臻 青花瓷 千珏", skin: "Kindred_33.jpg" },
    ],
    spells: [
      {
        id: "KindredP",
        name: "千珏之印",
        icon: "KindredP.png",
        description:
          "千珏可以标记敌人进行狩猎。成功完成一次狩猎，将永久强化千珏的基础技能。每完成4次狩猎，还会提升千珏的普攻距离。",
      },
      {
        id: "KindredQ",
        name: "乱箭之舞",
        icon: "KindredQ.png",
        description:
          "千珏进行翻滚，对至多3名敌人发射一根箭矢，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>并提供持续{{ e8 }}秒的<attackSpeed>{{ totalqattackspeed }}攻击速度</attackSpeed>。<br /><br />在<spellName>狼灵狂热</spellName>之中时，这个技能的冷却时间会缩短至{{ e4 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KindredW",
        name: "狼灵狂热",
        icon: "KindredW.png",
        description:
          "<spellPassive>被动：</spellPassive>千珏会在移动和攻击时获得层数。在100层时，千珏的下一次攻击会回复至多<healing>{{ attackheal }}生命值</healing>(基于它们的已损失生命值)。<br /><br /><spellActive>主动：</spellActive>千珏划出一块领地，命令狼灵去撕咬被羊灵攻击过的最后一名敌人。狼灵的撕咬造成<magicDamage>{{ basewolfdamage }}</magicDamage>外加<magicDamage>{{ percentwolfdamage }}当前生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KindredE",
        name: "横生惧意",
        icon: "KindredE.png",
        description:
          "千珏弱化一名敌人，对其造成持续{{ slowduration }}秒的{{ totalslow }}%<status>减速</status>。<br /><br />千珏在{{ totalduration }}秒内对目标进行的第三次攻击会引导狼灵扑击该敌人，造成<physicalDamage>{{ basebitedamage }}</physicalDamage>外加<physicalDamage>{{ percentbitedamage }}已损失生命值的物理伤害</physicalDamage>。<br /><br />狼灵的扑击会对低于{{ healththreshold }}生命值的目标进行暴击，造成<physicalDamage>{{ basebitedamage }}</physicalDamage>外加<physicalDamage>{{ critdamage }}已损失生命值的物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KindredR",
        name: "羊灵生息",
        icon: "KindredR.png",
        description:
          "千珏赐福于地面{{ e2 }}秒，使其中的友方、敌方或中立单位不会阵亡。在降至10%生命值时，仍留在该区域内的单位就不会受到伤害或治疗效果了。<br /><br />当赐福结束时，其中的所有单位都会治疗<healing>{{ e1 }}生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KindredP: null,
      KindredQ: null,
      KindredW: null,
      KindredE: null,
      KindredR: null,
    },
  };
}
export { importModule };
