function importModule() {
  return {
    type: "champion",
    id: "TahmKench",
    title: "河流之王",
    name: "塔姆",
    avatar: "TahmKench.png",
    skins: [
      { name: "default", skin: "TahmKench_0.jpg" },
      { name: "五星大厨 塔姆", skin: "TahmKench_1.jpg" },
      { name: "海牛大大 塔姆", skin: "TahmKench_2.jpg" },
      { name: "纳财大帝 塔姆", skin: "TahmKench_3.jpg" },
      { name: "秩序之舌 塔姆", skin: "TahmKench_11.jpg" },
      { name: "西部魔影 恶魔大亨 塔姆", skin: "TahmKench_20.jpg" },
      { name: "山海绘卷 塔姆", skin: "TahmKench_30.jpg" },
    ],
    spells: [
      {
        id: "TahmKenchP",
        name: "培养品味",
        icon: "TahmKenchP.png",
        description:
          "塔姆将他那庞大身躯的分量夹杂在他的攻击和技能中，从而使他能造成基于自身总生命值的额外伤害。对敌方英雄造成伤害时，塔姆可以在目标身上叠加<spellName>培养品味</spellName>的层数。当敌方英雄身上的层数到达3时，塔姆可以使用<spellName>大快朵颐</spellName>来吞噬这名敌方英雄。",
      },
      {
        id: "TahmKenchQ",
        name: "巨舌鞭笞",
        icon: "TahmKenchQ.png",
        description:
          '对命中的第一个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%减速。<br /><br />在命中英雄时，塔姆会回复他<healing>{{ baseheal }} +{{ percenthealthhealing*100 }}%的已损失生命值</healing>并施加一层<spellName>培养品味</spellName>效果并造成<magicDamage>{{ spell.tahmkenchpassive:totaldamage }}额外魔法伤害</magicDamage>。如果目标英雄已经被叠加了3层<spellName>培养品味</spellName>，那么该英雄还会被晕眩{{ stunduration }}秒，并且层数会被消耗掉。<br /><br />当你的舌头处在半空中，且命中了远处已经被叠加了3层<spellName>培养品味</spellName>的敌方英雄时，激活<span class="color0bf7de">大快朵颐</span>即可将其吞噬。{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "TahmKenchW",
        name: "深渊潜航",
        icon: "TahmKenchW.png",
        description:
          '下潜然后重新出现在目标位置，对一个区域内的所有敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和{{ knockupduration }}秒击飞效果。如果命中至少一名敌方英雄，则会返还{{ champrefund*100 }}%的冷却时间和法力消耗。<br /><br /><span class="color0bf7de">被吞噬</span>的友方英雄能够被带着一起潜航（但总能够提前下船）。{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "TahmKenchE",
        name: "厚实表皮",
        icon: "TahmKenchE.png",
        description:
          "<passive>被动：</passive>塔姆通过<spellName>厚实表皮</spellName>将他所受的{{ greyhealthratio*100 }}%伤害储存起来，并会在附近至少有{{ enhancedthreshold }}名敌方英雄时提升至{{ greyhealthratioenhanced*100 }}%。如果塔姆在{{ ooctimer }}秒内没有受到伤害，<spellName>厚实表皮</spellName>将快速消耗来治疗塔姆，数额相当于{{ greyhealthhealingratio }}已储存的伤害值。<br /><br /><active>主动：</active>将<spellName>厚实表皮</spellName>已储存的所有伤害值转换为一层<shield>护盾</shield>，持续{{ shieldduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TahmKenchR",
        name: "大快朵颐",
        icon: "TahmKenchR.png",
        description:
          "塔姆吞噬一名英雄若干秒。他可以再次施放这个技能来将其吐出。<br /><br /><specialRules>敌方英雄：</specialRules>需要3层<spellName>培养品味</spellName>。至多被吞噬{{ enemyduration }}秒并受到<magicDamage>{{ basedamage }} (+目标{{ percenthpdamage }}最大生命值)魔法伤害</magicDamage>。在这个效果期间，塔姆自身被减速{{ slowamount*100 }}%并被<keywordName>缚地</keywordName>。<br /><br /><specialRules>友方英雄：</specialRules>至多被吞噬{{ allyduration }}秒并在被吐出后获得持续衰减的<shield>{{ totalshield }}护盾值</shield>。友方英雄可以选择提前离开。在这个效果期间，塔姆自身被<keywordName>缚地</keywordName>，但他可以施放<keywordName>深渊潜航</keywordName>并获得持续{{ allyduration }}秒的<speed>{{ allyspeedamount*100 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TahmKenchP: null,
      TahmKenchQ: null,
      TahmKenchW: null,
      TahmKenchE: null,
      TahmKenchR: null,
    },
  };
}
export { importModule };
