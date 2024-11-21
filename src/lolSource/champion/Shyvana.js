function importModule() {
  return {
    type: "champion",
    id: "Shyvana",
    title: "龙血武姬",
    name: "希瓦娜",
    avatar: "Shyvana.png",
    skins: [
      { name: "default", skin: "Shyvana_0.jpg" },
      { name: "钢之逆鳞 希瓦娜", skin: "Shyvana_1.jpg" },
      { name: "骸骨之爪 希瓦娜", skin: "Shyvana_2.jpg" },
      { name: "黯黑魔龙 希瓦娜", skin: "Shyvana_3.jpg" },
      { name: "冰霜亚龙 希瓦娜", skin: "Shyvana_4.jpg" },
      { name: "冠军之血 希瓦娜", skin: "Shyvana_5.jpg" },
      { name: "银河魔装机神 希瓦娜", skin: "Shyvana_6.jpg" },
      { name: "破败军团 希瓦娜", skin: "Shyvana_8.jpg" },
      { name: "玉剑传说 舞龙卫", skin: "Shyvana_17.jpg" },
    ],
    spells: [
      {
        id: "ShyvanaP",
        name: "龙族之怒",
        icon: "ShyvanaP.png",
        description:
          "希瓦娜对巨龙们造成额外伤害并获得护甲加成和魔法抗性加成。被希瓦娜或她的友军击败的元素亚龙们会为她提供额外的护甲和魔法抗性加成。",
      },
      {
        id: "ShyvanaQ",
        name: "龙牙突刺",
        icon: "ShyvanaQ.png",
        description:
          "希瓦娜的下次攻击会进行两次打击，造成<physicalDamage>{{ firsthitdamagecalc }}</physicalDamage>接<physicalDamage>{{ secondhitdamagecalc }}物理伤害</physicalDamage>。她的下2次攻击获得<speed> {{ bonusas }}%攻击速度</speed>。<br /><br />攻击会使这个技能的冷却时间缩短{{ cdreductiononhit }}秒。<br /><br /><keywordMajor>魔龙形态：</keywordMajor>这些强化攻击会命中希瓦娜前方的所有单位。<br /><br /><rules>这个技能会在造成伤害时触发技能特效。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ShyvanaW",
        name: "烈火燎原",
        icon: "ShyvanaW.png",
        description:
          "希瓦娜召唤一道烈焰风暴环绕于她，获得<speed>{{ finalmsperc }}不断衰减的移动速度</speed>并且每秒造成<magicDamage>{{ damagepertickcalc }}魔法伤害</magicDamage>，持续{{ baseduration }}秒。 <br /><br />烈焰风暴还会使希瓦娜的攻击对周围的敌人们造成额外的<magicDamage>{{ damageonhitcalc }}魔法伤害</magicDamage>并使这个技能的持续时间延长{{ bonusdurationonhit }}秒。<br /><br /><keywordMajor>魔龙形态：</keywordMajor>烈焰风暴的半径得到提升。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ShyvanaE",
        name: "烈焰吐息",
        icon: "ShyvanaE.png",
        description:
          "希瓦娜释放一团火球来造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>并标记{{ markduration }}秒。火球会在命中第一个英雄时停下。<br /><br />希瓦娜对被标记目标的攻击会造成额外的<magicDamage>{{ percenthpdamageonhit }}%最大生命值的魔法伤害</magicDamage>。<br /><br /><keywordMajor>魔龙形态：</keywordMajor>火球一旦命中或到达终点就会爆炸，造成额外的<magicDamage>{{ dragonexplosioncalc }}魔法伤害</magicDamage>并灼烧大地，在4秒里持续造成共<magicDamage>{{ dragondamagetotalcalc }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ShyvanaR",
        name: "魔龙降世",
        icon: "ShyvanaR.png",
        description:
          "<spellPassive>被动： </spellPassive>希瓦娜每秒生成<keywordMajor>{{ furygainpertick }}怒气</keywordMajor>，并且攻击生成额外的<keywordMajor>{{ furygainonhit }}怒气</keywordMajor>。<br /><br /><spellActive>主动： </spellActive>希瓦娜变形为<keywordMajor>魔龙形态</keywordMajor>，获得<healing>{{ bonushp }}最大生命值</healing>并向前飞行，造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>并将敌人们<status>击退</status>向她的目标位置。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ShyvanaP: null,
      ShyvanaQ: null,
      ShyvanaW: null,
      ShyvanaE: null,
      ShyvanaR: null,
    },
  };
}
export { importModule };
