function importModule() {
  return {
    type: "champion",
    id: "Galio",
    title: "正义巨像",
    name: "加里奥",
    avatar: "Galio.png",
    skins: [
      { name: "default", skin: "Galio_0.jpg" },
      { name: "幽蓝梦魇 加里奥", skin: "Galio_1.jpg" },
      { name: "机械迷城 加里奥", skin: "Galio_2.jpg" },
      { name: "战地之王 加里奥", skin: "Galio_3.jpg" },
      { name: "地狱之门卫士 加里奥", skin: "Galio_4.jpg" },
      { name: "风执事 加里奥", skin: "Galio_5.jpg" },
      { name: "鸡里奥", skin: "Galio_6.jpg" },
      { name: "地狱火 加里奥", skin: "Galio_13.jpg" },
      { name: "龙族卫士 加里奥", skin: "Galio_19.jpg" },
      { name: "剪纸仙灵 加里奥", skin: "Galio_28.jpg" },
    ],
    spells: [
      {
        id: "GalioP",
        name: "巨像重击",
        icon: "GalioP.png",
        description:
          "每过若干秒，加里奥的下次普攻就能在小范围内造成额外魔法伤害。",
      },
      {
        id: "GalioQ",
        name: "战争罡风",
        icon: "GalioQ.png",
        description:
          "加里奥发射两道罡风，每道造成<magicDamage>{{ qmissiledamage }}魔法伤害</magicDamage>。当罡风汇聚时，它们会合成一股龙卷风，在{{ superqduration }}秒内持续造成相当于各敌人<magicDamage>{{ percentsuperqdamagett }}%最大生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GalioW",
        name: "杜朗护盾",
        icon: "GalioW.png",
        description:
          "<spellPassive>被动：</spellPassive>如果加里奥在{{ passiveshieldooctimer }}秒内没有受到伤害，那么他就会获得<shield>{{ totalpassiveshield }}魔法护盾</shield>。<br /><br /><charge>开始蓄力：</charge>加里奥使即将到来的魔法伤害降低{{ magicdamagereduction }}，使即将到来的物理伤害降低{{ physicaldamagereduction }}，并且自身<status>减速</status>{{ e3 }}%。<br /><br /><release>释放：</release>加里奥<status>嘲讽</status>附近的敌方英雄{{ e4 }}到{{ e7 }}秒，造成<magicDamage>{{ mintotaldamage }}</magicDamage>到<magicDamage>{{ maxtotaldamage }}魔法伤害</magicDamage>，并使伤害减免的持续时长刷新至{{ e8 }}秒。嘲讽的持续时长、伤害和距离取决于他的蓄力时长。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GalioE",
        name: "正义冲拳",
        icon: "GalioE.png",
        description:
          "加里奥挟着一股强劲向前猛冲，将命中的第一个敌方英雄<status>击飞</status>{{ knockupduration }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。沿途的其它敌人将受到<magicDamage>{{ pvedamage }}魔法伤害</magicDamage>。<br /><br />加里奥的猛冲将在命中地形时停下。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GalioR",
        name: "英雄登场",
        icon: "GalioR.png",
        description:
          "加里奥选定一个友方英雄的位置作为他的着陆位置，并为该区域的所有友方英雄提供<spellName>杜朗护盾</spellName>的被动<shield>护盾</shield>，护盾持续{{ temporarywshieldduration }}秒。然后加里奥会飞往他的着陆地带。<br /><br />当加里奥着陆时，他会造成{{ stundurationouter }}秒<status>击飞</status>和<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      GalioP: null,
      GalioQ: null,
      GalioW: null,
      GalioE: null,
      GalioR: null,
    },
  };
}
export { importModule };
