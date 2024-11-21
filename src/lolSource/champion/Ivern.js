function importModule() {
  return {
    type: "champion",
    id: "Ivern",
    title: "翠神",
    name: "艾翁",
    avatar: "Ivern.png",
    skins: [
      { name: "default", skin: "Ivern_0.jpg" },
      { name: "糖果之王 艾翁", skin: "Ivern_1.jpg" },
      { name: "灌篮高手 艾翁", skin: "Ivern_2.jpg" },
      { name: "古神 艾翁", skin: "Ivern_11.jpg" },
      { name: "宇航员 艾翁", skin: "Ivern_20.jpg" },
    ],
    spells: [
      {
        id: "IvernP",
        name: "森林之友",
        icon: "IvernP.png",
        description:
          "艾翁无法攻击非史诗野怪，也无法被非史诗野怪攻击。艾翁可以在野怪营地创造神奇的小植被，小植被可以持续成长。当小植被完全成长后，艾翁就可以送走野怪来获得金币和经验。",
      },
      {
        id: "IvernQ",
        name: "根深敌固",
        icon: "IvernQ.png",
        description:
          "艾翁召唤一束荆棘，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并<status>禁锢</status>命中的第一个敌人{{ rootduration }}秒。友军在攻击<status>禁锢</status>的敌人时会冲刺到攻击距离处。<br /><br /><recast>再次施放：</recast>艾翁直接冲刺到这个被<status>禁锢</status>的敌人身边。<br /><br /><rules>命中非史诗级野怪会使<spellName>根深敌固</spellName>的冷却时间缩减50%。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "IvernW",
        name: "揠苗助攻",
        icon: "IvernW.png",
        description:
          "<spellPassive>被动：</spellPassive>在草丛中时或离开草丛后的{{ buffduration }}秒内，艾翁的攻击造成额外的<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。附近的友军们将获得持续{{ allybuffduration }}秒的此效果，其攻击会因此造成额外的<magicDamage>{{ totalallydamage }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>艾翁生成一片草丛，从而将该区域显形{{ revealduration }}秒。草丛会存留至艾翁的队伍失去它其中的视野，或至多至{{ maxbrushduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "IvernE",
        name: "种豆得瓜",
        icon: "IvernE.png",
        description:
          "艾翁为一名友方英雄或小菊提供<shield>{{ totalshield }}护盾值</shield>。{{ shieldduration }}秒后，护盾会爆裂，对敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。<br /><br />如果在护盾存留时引爆<spellName>种豆得瓜</spellName>且没有命中任何敌方英雄，那么该友军将获得持续{{ shieldduration }}秒的<shield>{{ totalshield }}护盾值</shield>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "IvernR",
        name: "小菊！",
        icon: "IvernR.png",
        description:
          "艾翁召唤出他的护卫好友小菊跃入纷争，持续{{ daisyduration }}秒。<br /><br /><spellActive>小菊，猛击！：</spellActive>小菊对相同英雄或史诗级野怪的每第3次连续的攻击将发出一道冲击波，对命中的所有敌人造成<magicDamage> {{ totalshockwavedamage }}魔法伤害</magicDamage>和{{ shockwaveccduration }}秒<status>击飞</status>。这个效果每{{ shockwavecd }}秒仅触发一次。<br /><br /><recast>再次施放：</recast>指示小菊进行攻击或移动。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      IvernP: null,
      IvernQ: null,
      IvernW: null,
      IvernE: null,
      IvernR: null,
    },
  };
}
export { importModule };
