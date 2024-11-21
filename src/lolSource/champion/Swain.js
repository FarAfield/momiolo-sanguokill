function importModule() {
  return {
    type: "champion",
    id: "Swain",
    title: "诺克萨斯统领",
    name: "斯维因",
    avatar: "Swain.png",
    skins: [
      { name: "default", skin: "Swain_0.jpg" },
      { name: "北领前线 斯维因", skin: "Swain_1.jpg" },
      { name: "海贼参谋 斯维因", skin: "Swain_2.jpg" },
      { name: "绝代智将 斯维因", skin: "Swain_3.jpg" },
      { name: "驯龙大师 斯维因", skin: "Swain_4.jpg" },
      { name: "海克斯科技 斯维因", skin: "Swain_11.jpg" },
      { name: "水晶玫瑰 斯维因", skin: "Swain_12.jpg" },
      { name: "北极星猎人 斯维因", skin: "Swain_21.jpg" },
    ],
    spells: [
      {
        id: "SwainP",
        name: "狂食鸦群",
        icon: "SwainP.png",
        description:
          "斯维因的鸦群会收集<i>魂屑</i>来治疗斯维因并永久提升他的最大生命值。",
      },
      {
        id: "SwainQ",
        name: "解脱之触",
        icon: "SwainQ.png",
        description:
          "斯维因释放5道恶魔之力，造成<magicDamage>{{ initialdamage }}魔法伤害</magicDamage>，第一道之后的每道恶魔之力造成<magicDamage>{{ extraboltdamage }}魔法伤害</magicDamage>(最大伤害为<magicDamage>{{ maxdamage }}魔法伤害</magicDamage>)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SwainW",
        name: "帝国视界",
        icon: "SwainW.png",
        description:
          '斯维因睁开一只恶魔之眼，来使一个位置显形1.5秒，然后造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slow*-100 }}%<status>减速</status>。<br /><br />被命中的英雄会为斯维因提供一片<span class="size18 colorFF3F3F">魂屑</span>并显形{{ revealduration }}秒。{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "SwainE",
        name: "永不复行",
        icon: "SwainE.png",
        description:
          '斯维因发射一道会折返的恶魔能量波，在命中的第一个敌人身上引爆，对一个区域内的敌人造成<magicDamage>{{ secondarydamage }}魔法伤害</magicDamage>和{{ rootduration }}秒<status>禁锢</status>。<br /><br />用这个技能<status>禁锢</status>一名英雄后，可使斯维因再次施放这个技能来拉拽所有被<spellName>永不复行</spellName><status>禁锢</status>的英雄们，并且每个被他拉拽的英雄将为他提供一个<span class="size18 colorFF3F3F">魂屑</span>。{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "SwainR",
        name: "恶魔升华",
        icon: "SwainR.png",
        description:
          "斯维因使体内的恶魔解脱，每秒造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>并从附近的敌人们身上汲取<healing>{{ healingcalc }}生命值</healing>。他的恶魔能量会持续消耗，但可通过汲取敌方英雄来无限期地充能并且会在参与击杀英雄后完全回复。<br /><br />在{{ demonflarecastdelay }}秒后以及之后的每{{ demonflarecooldowntooltip }}秒，斯维因能够在变身状态下施放<spellName>恶魔耀光</spellName>来对敌人们造成<magicDamage>{{ demonflaredamagetotal }}魔法伤害</magicDamage>和在{{ demonflareslowduration }}秒里持续衰减的{{ demonflareslowamount*100 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SwainP: null,
      SwainQ: null,
      SwainW: null,
      SwainE: null,
      SwainR: null,
    },
  };
}
export { importModule };
