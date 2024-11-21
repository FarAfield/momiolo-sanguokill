function importModule() {
  return {
    type: "champion",
    id: "Leblanc",
    title: "诡术妖姬",
    name: "乐芙兰",
    avatar: "Leblanc.png",
    skins: [
      { name: "default", skin: "Leblanc_0.jpg" },
      { name: "潮流女王 乐芙兰", skin: "Leblanc_1.jpg" },
      { name: "社会名流 乐芙兰", skin: "Leblanc_2.jpg" },
      { name: "幸福女神 乐芙兰", skin: "Leblanc_3.jpg" },
      { name: "邪鸦魅影 乐芙兰", skin: "Leblanc_4.jpg" },
      { name: "永恒之森 乐芙兰", skin: "Leblanc_5.jpg" },
      { name: "源代码 乐芙兰", skin: "Leblanc_12.jpg" },
      { name: "iG 乐芙兰", skin: "Leblanc_19.jpg" },
      { name: "魔女 乐芙兰", skin: "Leblanc_20.jpg" },
      { name: "冠军蔷薇 乐芙兰", skin: "Leblanc_29.jpg" },
      { name: "至臻 魔女 乐芙兰", skin: "Leblanc_33.jpg" },
      { name: "幻执事 乐芙兰", skin: "Leblanc_35.jpg" },
      { name: "魅惑女巫 乐芙兰", skin: "Leblanc_45.jpg" },
      { name: "殿堂传奇 乐芙兰", skin: "Leblanc_55.jpg" },
    ],
    spells: [
      {
        id: "LeblancP",
        name: "镜花水月",
        icon: "LeblancP.png",
        description:
          "当乐芙兰跌至40%最大生命值以下时，她会隐形1秒并创造一个幻像（不能造成伤害），幻像最多可持续8秒。",
      },
      {
        id: "LeblancQ",
        name: "恶意魔印",
        icon: "LeblancQ.png",
        description:
          "乐芙兰对一个敌人投出一个魔印，造成<magicDamage>{{ damage }}魔法伤害</magicDamage>并将其标记{{ markduration }}秒。<br /><br />用一个技能对被标记的目标造成伤害时，会引爆魔印，从而造成<magicDamage>{{ markdamage }}魔法伤害</magicDamage>。<br /><br />如果这两部分伤害中有任一部分击杀了目标，那么乐芙兰就会返还此技能的{{ manarefund*100 }}%法力消耗和此技能的{{ cooldownrefund*100 }}%剩余冷却时间。<br /><br /><rules>初始魔印对小兵造成额外的{{ bonusminiondamage }}伤害。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LeblancW",
        name: "魔影迷踪",
        icon: "LeblancW.png",
        description:
          "乐芙兰冲刺然后对附近的敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。在冲刺后的{{ e3 }}秒里，乐芙兰可以<recast>再次施放</recast>。<br /><br /><recast>再次施放：</recast>乐芙兰回到她的初始位置。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LeblancE",
        name: "幻影锁链",
        icon: "LeblancE.png",
        description:
          "乐芙兰抛出一个锁链来束缚命中的第一个敌人，造成<magicDamage>{{ initialdamage }}魔法伤害</magicDamage>并提供目标的<keywordStealth>真实视野</keywordStealth>。<br /><br />如果目标持续被束缚{{ e3 }}秒，则乐芙兰会将其<status>禁锢</status>{{ e4 }}秒，并造成额外的<magicDamage>{{ delayeddamage }}魔法伤害</magicDamage>。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LeblancR",
        name: "故技重施",
        icon: "LeblancR.png",
        description:
          "乐芙兰故技重施，将她放过的上一个技能再施放一次。故技重施版技能的伤害会获得提升。<br /><br /><spellName>故技重施版恶意魔印</spellName>在施加印记时造成<magicDamage>{{ rq1damage }}魔法伤害</magicDamage>，并在消耗印记时造成<magicDamage>{{ rq2damage }}魔法伤害</magicDamage> 。<br /><spellName>故技重施版魔影迷踪</spellName>造成<magicDamage>{{ rwdamage }}魔法伤害</magicDamage>。<br /><spellName>故技重施版幻影锁链</spellName>在链到目标时造成<magicDamage>{{ re1damage }}魔法伤害</magicDamage>并在<status>禁锢</status>时造成<magicDamage>{{ re2damage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      LeblancP: null,
      LeblancQ: null,
      LeblancW: null,
      LeblancE: null,
      LeblancR: null,
    },
  };
}
export { importModule };
