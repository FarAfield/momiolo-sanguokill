function importModule() {
  return {
    type: "champion",
    id: "Smolder",
    title: "炽炎雏龙",
    name: "斯莫德",
    avatar: "Smolder.png",
    skins: [
      { name: "default", skin: "Smolder_0.jpg" },
      { name: "天龙之子 斯莫德", skin: "Smolder_1.jpg" },
    ],
    spells: [
      {
        id: "SmolderP",
        name: "龙之研习",
        icon: "SmolderP.png",
        description:
          "用技能命中英雄和用超级灼热龙息 击杀敌人时会提供一层龙之研习。层数会提升斯莫德各基础技能的伤害。",
      },
      {
        id: "SmolderQ",
        name: "超级灼热龙息",
        icon: "SmolderQ.png",
        description:
          "斯莫德喷出烈焰，造成<physicalDamage>{{ tooltipqdamage }}物理伤害</physicalDamage> + <magicDamage>{{ passive_damage_increase }}魔法伤害</magicDamage>。<br /><br />基于<spellName>龙之研习</spellName>的层数，这个技能会不断进化以获得以下效果：<li><keywordMajor>{{ stacktier1 }}层</keywordMajor>：伤害目标周围的所有敌人。</li><li><keywordMajor>{{ stacktier2 }}层</keywordMajor>：在目标后侧引发<spellName>{{ tier2_numberofblowback }}</spellName>次爆炸，造成{{ tier2_blowbackpercentagedamage }}%此技能伤害。</li><li><keywordMajor>{{ stacktier3 }}层</keywordMajor>：灼烧目标，在{{ tier3_dotlength }}秒里持续造成共<trueDamage>{{ tier3_burn }}最大生命值的真实伤害</trueDamage>。 敌方英雄如果在灼烧期间跌到<trueDamage>{{ tier3_executethreshold }}</trueDamage>总生命值以下，则会被立刻击杀。</li>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SmolderW",
        name: "阿嚏！",
        icon: "SmolderW.png",
        description:
          "斯莫德发出一个萌萌的烈焰喷嚏，造成<physicalDamage>{{ initialdamage }}物理伤害</physicalDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。<br /><br />命中英雄时会引发一次爆炸，造成<physicalDamage>{{ explosiondamage }}物理伤害</physicalDamage> + <magicDamage>{{ passive_damage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SmolderE",
        name: "扑棱，扑棱，扑棱！",
        icon: "SmolderE.png",
        description:
          "斯莫德展翅高飞，获得<speed>{{ movespeed*100 }}%移动速度</speed>并无视地形，持续{{ duration }}秒。<br /><br />飞行时，斯莫德轰击生命值最低的敌方英雄<spellName>{{ totalnumberofattacks }}</spellName>次(向下取整)，每次命中造成<physicalDamage>{{ damageperhit }}物理伤害</physicalDamage> + <magicDamage>{{ passive_damage_increase }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SmolderR",
        name: "妈----！",
        icon: "SmolderR.png",
        description:
          "斯莫德的妈妈从天空喷吐烈焰，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。中心的敌人们会转而受到<physicalDamage>{{ tooltiponly_totalsweetspotdamage }}</physicalDamage>伤害和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。<br /><br />斯莫德的妈妈如果命中了她的儿子，则会为他治疗<healing>{{ momhealcalc }}生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SmolderP: null,
      SmolderQ: null,
      SmolderW: null,
      SmolderE: null,
      SmolderR: null,
    },
  };
}
export { importModule };
