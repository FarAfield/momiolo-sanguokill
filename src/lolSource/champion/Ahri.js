function importModule() {
  return {
    type: "champion",
    id: "Ahri",
    title: "九尾妖狐",
    name: "阿狸",
    avatar: "Ahri.png",
    skins: [
      { name: "default", skin: "Ahri_0.jpg" },
      { name: "高丽风情 阿狸", skin: "Ahri_1.jpg" },
      { name: "暗影妖狐 阿狸", skin: "Ahri_2.jpg" },
      { name: "焰尾妖狐 阿狸", skin: "Ahri_3.jpg" },
      { name: "偶像歌手 阿狸", skin: "Ahri_4.jpg" },
      { name: "勇者 阿狸", skin: "Ahri_5.jpg" },
      { name: "风纪委员 阿狸", skin: "Ahri_6.jpg" },
      { name: "电玩女神 阿狸", skin: "Ahri_7.jpg" },
      { name: "星之守护者 阿狸", skin: "Ahri_14.jpg" },
      { name: "K/DA 阿狸", skin: "Ahri_15.jpg" },
      { name: "至臻 K/DA 阿狸", skin: "Ahri_16.jpg" },
      { name: "永恒之森 阿狸", skin: "Ahri_17.jpg" },
      { name: "灵魂莲华 阿狸", skin: "Ahri_27.jpg" },
      { name: "K/DA ALL OUT 阿狸", skin: "Ahri_28.jpg" },
      { name: "魔女 阿狸", skin: "Ahri_42.jpg" },
      { name: "至臻 K/DA 阿狸 (2022)", skin: "Ahri_65.jpg" },
      { name: "魅惑之月 阿狸", skin: "Ahri_66.jpg" },
      { name: "净雪之月 阿狸", skin: "Ahri_76.jpg" },
      { name: "殿堂传奇 阿狸", skin: "Ahri_85.jpg" },
      { name: "联盟不朽 阿狸", skin: "Ahri_86.jpg" },
    ],
    spells: [
      {
        id: "AhriP",
        name: "摄魂夺魄",
        icon: "AhriP.png",
        description:
          "在击杀9个小兵或野怪后，阿狸会治疗自身。<br>在参与击杀一名敌方英雄后，阿狸会以一个更高的治疗效果来治疗自身。",
      },
      {
        id: "AhriQ",
        name: "欺诈宝珠",
        icon: "AhriQ.png",
        description:
          "阿狸投出然后收回她的宝珠，在放出时会沿途对敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，在收回时则会沿途对敌人造成<trueDamage>{{ totaldamage }}真实伤害</trueDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AhriW",
        name: "妖异狐火",
        icon: "AhriW.png",
        description:
          "阿狸释放出3团狐火来追踪附近的敌人们并造成<magicDamage>{{ singlefiredamage }}魔法伤害</magicDamage>，第一团之后的狐火降低至<magicDamage>{{ multifiredamage }}伤害</magicDamage>。她还会获得在{{ movementspeedduration }}秒里持续衰减的<speed>{{ movementspeed*100 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AhriE",
        name: "魅惑妖术",
        icon: "AhriE.png",
        description:
          "阿狸献出红唇热吻，<status>魅惑</status>命中的首个敌人{{ charmduration }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AhriR",
        name: "灵魄突袭",
        icon: "AhriR.png",
        description:
          "阿狸灵活地突进，并对附近的敌人们发射{{ rmaxtargetspercast }}颗灵魄弹，优先选择英雄。这些灵魄弹每颗造成<magicDamage>{{ rcalculateddamage }}魔法伤害</magicDamage>。<spellName>灵魄突袭</spellName>可以在{{ rrecastwindow }}秒内<recast>再次施放</recast>至多2次。<br /><br />在此期间，用<spellName>摄魂夺魄</spellName>吞噬一名英雄的魂魄时，会使再次施放的窗口期至多延长至{{ pdurationextension }}秒并为<spellName>灵魄突袭</spellName>提供一次额外的再次施放(至多可储存至{{ rmaxcasts }}次)。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AhriP: {},
      AhriQ: {},
      AhriW: {},
      AhriE: {},
      AhriR: {},
    },
  };
}
export { importModule };
