function importModule() {
  return {
    type: "champion",
    id: "Heimerdinger",
    title: "大发明家",
    name: "黑默丁格",
    avatar: "Heimerdinger.png",
    skins: [
      { name: "default", skin: "Heimerdinger_0.jpg" },
      { name: "第三类接触 黑默丁格", skin: "Heimerdinger_1.jpg" },
      { name: "拆弹专家 黑默丁格", skin: "Heimerdinger_2.jpg" },
      { name: "创意工坊 黑默丁格", skin: "Heimerdinger_3.jpg" },
      { name: "雪默丁格", skin: "Heimerdinger_4.jpg" },
      { name: "生化博士 黑默丁格", skin: "Heimerdinger_5.jpg" },
      { name: "驯龙学者 黑默丁格", skin: "Heimerdinger_6.jpg" },
      { name: "泳池派对 黑默丁格", skin: "Heimerdinger_15.jpg" },
      { name: "小蜜蜂 黑默丁格", skin: "Heimerdinger_24.jpg" },
    ],
    spells: [
      {
        id: "HeimerdingerP",
        name: "海克斯科技亲和",
        icon: "HeimerdingerP.png",
        description:
          "在友方防御塔和由黑默丁格部署的炮台附近时，获得移动速度加成。",
      },
      {
        id: "HeimerdingerQ",
        name: "H-28 G 进化炮台",
        icon: "HeimerdingerQ.png",
        description:
          "黑默丁格构建一座<keywordMajor>炮台</keywordMajor>来攻击附近的敌人们。黑默丁格同一时间可以拥有{{ maxturrets }}座已激活的炮台。<keywordMajor>炮台</keywordMajor>会缓慢地积攒能量。在满层能量时，它们会发射一次更强的攻击。<br /><br />如果黑默丁格过于远离，那么<keywordMajor>炮台</keywordMajor>将在8秒后解除激活状态。<br /><br />这个技能拥有{{ maxkits }}层充能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "HeimerdingerW",
        name: "海克斯科技微型导弹",
        icon: "HeimerdingerW.png",
        description:
          "黑默丁格释放一道{{ rockets }}颗导弹组成的弹幕，对第一个命中的敌人造成<magicDamage>{{ damage }}魔法伤害</magicDamage>。额外的导弹命中会造成较少伤害。<br /><br />最大伤害值：<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />每有一颗导弹命中英雄，附近的<keywordMajor>炮台</keywordMajor>就会获得20%能量。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "HeimerdingerE",
        name: "CH-2电子风暴手雷",
        icon: "HeimerdingerE.png",
        description:
          "黑默丁格扔出一颗手雷，在一个区域内造成<magicDamage>{{ damage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowpercent.0*100 }}%<status>减速</status>。区域中心的敌人们还会被<status>晕眩</status>{{ stunduration }}秒。<br /><br />命中一名英雄将使附近的<keywordMajor>炮台</keywordMajor>得到完全充能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "HeimerdingerR",
        name: "升级！！！",
        icon: "HeimerdingerR.png",
        description:
          "黑默丁格使他的下一个非终极技能变为升级版。<br /><br /><spellName>H-28Q尖端炮台：</spellName>放置一个持续8秒的升级版<keywordMajor>炮台</keywordMajor>且不算入黑默丁格的最大炮台上限，每次射击造成<magicDamage>{{ qultdamage }}魔法伤害</magicDamage>且每次满能量射击造成<magicDamage>{{ qultdamagebeam }}魔法伤害</magicDamage>。它的攻击会在一个范围内造成伤害，持续2秒的25%<status>减速</status>并且免疫控制效果。<br /><br /><spellName>海克斯导弹集群：</spellName>发射4波导弹，每波造成<magicDamage>{{ wultdamage }}魔法伤害</magicDamage>。被额外的导弹命中的英雄和野怪会受到较少伤害，小兵会受到提升过的伤害。最大伤害值：<magicDamage>{{ wulttotaldamage }}魔法伤害</magicDamage>。<br /><br /><spellName>CH-3X闪电手雷：</spellName>扔出一颗弹跳手雷，该手雷会放电3次，造成<magicDamage>{{ eultdamage }}魔法伤害</magicDamage>。<status>晕眩</status>和<status>减速</status>区域会更大。<br /><br /><recast>再次施放：</recast>取消这个技能。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      HeimerdingerP: null,
      HeimerdingerQ: null,
      HeimerdingerW: null,
      HeimerdingerE: null,
      HeimerdingerR: null,
    },
  };
}
export { importModule };
