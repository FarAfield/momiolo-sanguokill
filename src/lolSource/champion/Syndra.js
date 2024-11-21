function importModule() {
  return {
    type: "champion",
    id: "Syndra",
    title: "暗黑元首",
    name: "辛德拉",
    avatar: "Syndra.png",
    skins: [
      { name: "default", skin: "Syndra_0.jpg" },
      { name: "仲裁圣女 辛德拉", skin: "Syndra_1.jpg" },
      { name: "亚特兰蒂斯 辛德拉", skin: "Syndra_2.jpg" },
      { name: "方块王后 辛德拉", skin: "Syndra_3.jpg" },
      { name: "冰雪女神 辛德拉", skin: "Syndra_4.jpg" },
      { name: "SKT T1 辛德拉", skin: "Syndra_5.jpg" },
      { name: "星之守护者 辛德拉", skin: "Syndra_6.jpg" },
      { name: "泳池派对 辛德拉", skin: "Syndra_7.jpg" },
      { name: "幽梦玫瑰 辛德拉", skin: "Syndra_16.jpg" },
      { name: "魅惑女巫 辛德拉", skin: "Syndra_25.jpg" },
      { name: "至臻 星之守护者 辛德拉", skin: "Syndra_34.jpg" },
      { name: "灵魂莲华 辛德拉", skin: "Syndra_44.jpg" },
      { name: "魔女 辛德拉", skin: "Syndra_54.jpg" },
    ],
    spells: [
      {
        id: "SyndraP",
        name: "卓尔不凡",
        icon: "SyndraP.png",
        description:
          "辛德拉可通过提升等级和伤害敌人来收集【怒法碎晶】，用来使她的各技能获得强化。<br><br><font color='#FF9900'>暗黑法球</font>：辛德拉可以持有额外一层充能。<br><font color='#FF9900'>驱使念力</font>：额外真实伤害。<br><font color='#FF9900'>弱者退散</font>：提升宽度并减速所有目标。<br><font color='#FF9900'>能量倾泻</font>：处决低生命值的目标。",
      },
      {
        id: "SyndraQ",
        name: "暗黑法球",
        icon: "SyndraQ.png",
        description:
          "辛德拉幻化出一颗<keywordMajor>暗黑法球</keywordMajor>，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。这个<keywordMajor>暗黑法球</keywordMajor>可以存留{{ sphereduration }}秒，并且能被辛德拉的其它技能所操纵。<br /><br /><evolve>{{ spell.syndrapassive:q1upgradethreshold }}块怒法碎晶</evolve>：辛德拉可以储存{{ upgrade1maxammo }}个<keywordMajor>暗黑法球</keywordMajor>充能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SyndraW",
        name: "驱使念力",
        icon: "SyndraW.png",
        description:
          "辛德拉抓取一颗<keywordMajor>暗黑法球</keywordMajor>、一个敌方小兵或一只非史诗级野怪。她在抓取后的至多5秒内可以<recast>再次施放</recast>这个技能。<br /><br /><recast>再次施放</recast>：辛德拉将物体猛掷出去，造成<magicDamage>{{ throwdamage }}魔法伤害</magicDamage>和持续{{ f2 }}秒的{{ totalslowamount }}%<status>减速</status>效果。<br /><br /><evolve>{{ spell.syndrapassive:wupgradethreshold }}块怒法碎晶</evolve>：这个技能造成额外的<trueDamage>{{ tooltiponlypassivebonuspercent }}真实伤害</trueDamage>。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SyndraE",
        name: "弱者退散",
        icon: "SyndraE.png",
        description:
          "辛德拉投出一道原力波，<status>击退</status>敌人们和<keywordMajor>暗黑法球</keywordMajor>并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />被推挤的<keywordMajor>暗黑法球</keywordMajor>会<status>晕眩</status>敌人{{ stunduration }}秒并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br /><evolve>{{ spell.syndrapassive:eupgradethreshold }}块怒法碎晶</evolve>：这个技能的宽度得到提升并且还会对敌人们造成持续{{ upgradedslowduration }}秒的<status>{{ upgradedslowamount*100 }}%</status><status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SyndraR",
        name: "能量倾泻",
        icon: "SyndraR.png",
        description:
          "<spellPassive>被动</spellPassive>：每级<spellName>能量倾泻</spellName>都会为<spellName>暗黑法球</spellName>提供额外的{{ qhasteperrank }}技能急速。<br /><br />辛德拉动用她洪流般的能量，将环绕于她的3颗<keywordMajor>暗黑法球</keywordMajor>外加至多4颗附近的<keywordMajor>暗黑法球</keywordMajor>轰在一名敌方英雄身上。每颗暗黑法球造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>(最大<magicDamage>{{ maxdamagecalc }}魔法伤害</magicDamage>)。<br /><br /><evolve>{{ spell.syndrapassive:rupgradethreshold }}块怒法碎晶</evolve>：这个技能会<danger>处决</danger>低于{{ upgradeexecutethreshold*100 }}%生命值的敌人。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SyndraP: null,
      SyndraQ: null,
      SyndraW: null,
      SyndraE: null,
      SyndraR: null,
    },
  };
}
export { importModule };
