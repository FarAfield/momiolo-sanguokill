function importModule() {
  return {
    type: "champion",
    id: "Veigar",
    title: "邪恶小法师",
    name: "维迦",
    avatar: "Veigar.png",
    skins: [
      { name: "default", skin: "Veigar_0.jpg" },
      { name: "白魔法师 维迦", skin: "Veigar_1.jpg" },
      { name: "冰壶选手 维迦", skin: "Veigar_2.jpg" },
      { name: "灰胡子魔法师 维迦", skin: "Veigar_3.jpg" },
      { name: "绿野仙踪 维迦", skin: "Veigar_4.jpg" },
      { name: "魔导绅士 维迦", skin: "Veigar_5.jpg" },
      { name: "穿着正装的恶魔 维迦", skin: "Veigar_6.jpg" },
      { name: "邪恶圣诞老人 维迦", skin: "Veigar_7.jpg" },
      { name: "最终BOSS 维迦", skin: "Veigar_8.jpg" },
      { name: "欧米伽小队 天雷爆破手", skin: "Veigar_9.jpg" },
      { name: "永恒之森 维迦", skin: "Veigar_13.jpg" },
      { name: "我，怒角 维迦", skin: "Veigar_23.jpg" },
      { name: "宇航员 维迦", skin: "Veigar_32.jpg" },
      { name: "小怪兽训练师 维迦", skin: "Veigar_41.jpg" },
      { name: "蜂大王 维迦", skin: "Veigar_51.jpg" },
      { name: "魔域梦魇 维迦", skin: "Veigar_60.jpg" },
    ],
    spells: [
      {
        id: "VeigarP",
        name: "超凡邪力",
        icon: "VeigarP.png",
        description:
          "维迦是最强大的恶魔，甚至能对符文之地之心发起攻击——并且他只会越来越强大！用技能攻击一名敌人、击杀单位或拆毁防御塔都会为维迦永久提升法术强度加成。",
      },
      {
        id: "VeigarQ",
        name: "黑暗祭祀",
        icon: "VeigarQ.png",
        description:
          "维迦释放一束黑暗能量，对命中的头2个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />用此技能击杀一个单位，还会为维迦提供{{ spell.veigarpassive:dqkillstacks }}层<keywordMajor>超凡邪恶</keywordMajor>效果。大型小兵和大型野怪会提供{{ spell.veigarpassive:dqkillstackslarge }}层作为替代。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VeigarW",
        name: "黑暗物质",
        icon: "VeigarW.png",
        description:
          "维迦召唤黑暗物质将从天而降，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />每{{ spell.veigarpassive:pstacksperdarkmattercdr }}层<keywordMajor>超凡邪力</keywordMajor>会使这个技能的冷却时间减少{{ spell.veigarpassive:darkmattercdrincrement*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VeigarE",
        name: "扭曲空间",
        icon: "VeigarE.png",
        description:
          "维迦扭曲空间的边缘，创造一个牢笼来使途径的敌人<status>晕眩</status>{{ e1 }}秒。牢笼持续3秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "VeigarR",
        name: "能量爆裂",
        icon: "VeigarR.png",
        description:
          "维迦用源力魔法引爆目标一名敌方英雄，造成<magicDamage>{{ mindamage }}到{{ maxdamage }}魔法伤害</magicDamage>，伤害提升幅度基于目标的已损失生命值。目标生命值在33%以下即可造成最大伤害。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      VeigarP: null,
      VeigarQ: null,
      VeigarW: null,
      VeigarE: null,
      VeigarR: null,
    },
  };
}
export { importModule };
