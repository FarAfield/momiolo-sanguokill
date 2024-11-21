function importModule() {
  return {
    type: "champion",
    id: "Bard",
    title: "星界游神",
    name: "巴德",
    avatar: "Bard.png",
    skins: [
      { name: "default", skin: "Bard_0.jpg" },
      { name: "永恒之森 巴德", skin: "Bard_1.jpg" },
      { name: "冰雪游神 巴德", skin: "Bard_5.jpg" },
      { name: "巴德·吟游诗人", skin: "Bard_6.jpg" },
      { name: "宇航员 巴德", skin: "Bard_8.jpg" },
      { name: "咖啡甜心 巴德", skin: "Bard_17.jpg" },
      { name: "山海绘卷 巴德", skin: "Bard_26.jpg" },
      { name: "T1 巴德", skin: "Bard_35.jpg" },
    ],
    spells: [
      {
        id: "BardP",
        name: "旅者的召唤",
        icon: "BardP.png",
        description:
          "<font color='#FF9900'>木灵：</font>巴德吸引小型灵体来强化他的普攻以造成额外魔法伤害。当巴德收集到足够的<font color='#cccc00'>调和之音</font>时，这些木灵还会造成范围伤害并使命中的敌人减速。<br><br><font color='#FF9900'>调和之音：</font>远古的<font color='#cccc00'>调和之音</font>会随机出现，用来让巴德收集。这些调和之音会提供经验值，回复法力值，并提供脱战状态下的移动速度加成。",
      },
      {
        id: "BardQ",
        name: "星界束缚",
        icon: "BardQ.png",
        description:
          "巴德发射一束能量弹，对命中的头两个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。第一个被命中的敌人会被施加持续{{ slowduration }}秒的{{ slowamountpercentage }}%<status>减速</status>。<br /><br />如果该能量弹命中了第二个敌人或一个墙体，那么被命中的敌人都会被<status>晕眩</status>{{ stunduration }}秒。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BardW",
        name: "游神圣坛",
        icon: "BardW.png",
        description:
          "巴德升起一座生命圣坛，圣坛会为第一个进入的友方英雄提供在{{ movespeed_duration }}秒里持续衰减的<speed>{{ calc_movespeed }}移动速度</speed>并为其回复至少<healing>{{ initialheal }}生命值</healing>。圣坛会不断成长，在存在{{ chargeuptime }}秒后即可满额回复<healing>{{ maxheal }}生命值</healing>。<br /><br />巴德最多可同时拥有{{ maxpacks }}座圣坛。如果有一名敌方英雄进入圣坛，那么该圣坛就会被摧毁。<br /><br />这个技能有{{ ammo_limit }}层充能。<br /><br />当前已激活的圣坛数：{{ f1 }} / {{ f2 }}{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BardE",
        name: "神奇旅程",
        icon: "BardE.png",
        description:
          "巴德在附近的地形上开启一道单向传送门，持续{{ e1 }}秒。传送门附近的任何英雄都可以通过移动到它上面来进入传送门。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BardR",
        name: "调和命运",
        icon: "BardR.png",
        description:
          "巴德朝一个区域投出神奇的防护能量，使命中的所有单位和建筑物都进入凝滞状态{{ rstasisduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      BardP: null,
      BardQ: null,
      BardW: null,
      BardE: null,
      BardR: null,
    },
  };
}
export { importModule };
