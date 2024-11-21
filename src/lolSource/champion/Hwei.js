function importModule() {
  return {
    type: "champion",
    id: "Hwei",
    title: "异画师",
    name: "彗",
    avatar: "Hwei.png",
    skins: [
      { name: "default", skin: "Hwei_0.jpg" },
      { name: "北极星使者 彗", skin: "Hwei_1.jpg" },
    ],
    spells: [
      {
        id: "HweiP",
        name: "落款",
        icon: "HweiP.png",
        description:
          "彗准备在那些受到他的技能伤害的敌人们身上留下落款。<br><br>用另一个伤害型技能命中时，即可完成他的落款，将其留在敌人脚下。落款会在短暂延迟后引爆，对范围内的所有敌人造成魔法伤害。",
      },
      {
        id: "HweiQ",
        name: "主题：灾",
        icon: "HweiQ.png",
        description:
          "彗描绘出眼中所见的灾难，来对敌人们造成大量伤害。<br /><br /><spellName>没骨火</spellName><br />彗发射一颗炽热的快速火球，火球在命中第一个敌人时爆炸，对区域内的所有敌人造成<magicDamage>{{ tooltip_qqdamage }}外加{{ tooltip_qqbonusdamage }}%最大生命值的魔法伤害</magicDamage>。<br /><br /><spellName>攒聚雷</spellName><br />彗在一段延迟后降下一道远距离落雷，造成<magicDamage>{{ tooltip_qwdamage }}魔法伤害</magicDamage>。命中一个孤立无援或被<status>定身</status>的目标时会将这个伤害至多提升至<magicDamage>{{ tooltip_qwbonusdamage }}魔法伤害</magicDamage>，基于目标的已损失生命值。<br /><br /><spellName>连皴山</spellName><br />彗释放一道长距离、缓慢的喷发路径，在一个区域内造成<magicDamage>{{ tooltip_qedamage }}魔法伤害</magicDamage>并留下持续{{ spell.hweiqe:duration }}秒的岩浆池来对敌人造成{{ spell.hweiqe:slowpercent }}%<status>减速</status>和<magicDamage>每秒{{ tooltip_qedamagepersecond }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "HweiW",
        name: "主题：靖",
        icon: "HweiW.png",
        description:
          "彗画下眼中所见到的宁静来为他和友方英雄们提供功能性。<br /><br /><spellName>飞染</spellName><br />彗画出一条激流来使友军提升<speed>{{ tooltip_wqmovespeed }}移动速度</speed>。<br /><br /><spellName>渲浓</spellName><br />彗画下一汪池水来持续为其中的友方英雄提供<shield>{{ tooltip_wwshieldamount }}护盾值</shield>并且对友军时减少{{ spell.hweiww:tooltipallymod*100 }}%护盾值。<br /><br /><spellName>宿墨</spellName><br />彗在身边点出三团光芒来强化他的下三次技能或攻击，每次造成额外的<magicDamage>{{ tooltip_weonhitdamage }}魔法伤害</magicDamage>并回复<scaleMana>{{ tooltip_weonhitmanarestore }}法力值</scaleMana>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "HweiE",
        name: "主题：悚",
        icon: "HweiE.png",
        description:
          "彗描绘出恐怖景象来控制敌人们。<br /><br /><spellName>阴沉变意</spellName><br />彗投射出一张恐怖面容来对命中的第一个敌人造成{{ tooltip_eqfleeduration }}秒<status>逃跑</status>和<magicDamage>{{ tooltip_eqdamage }}魔法伤害</magicDamage>。<br /><br /><spellName>滞涩幽瞳</spellName><br />彗画出一颗眼眸来停留并提供视野，它会锁定进入其中的第一个敌方英雄并对其发射一颗追踪飞弹，这颗飞弹会<status>禁锢</status>命中的第一个敌人{{ tooltip_ewrootduration }}秒并造成<magicDamage>{{ tooltip_ewdamage }}魔法伤害</magicDamage>。<br /><br /><spellName>双钩血喉</spellName><br />彗在目标位置画出一张大口来将敌人们<status>拖拽</status>向它的中心。大口对被捕获的敌人们造成<magicDamage>{{ tooltip_eedamage }}魔法伤害</magicDamage>和在1.25秒内持续衰减的{{ tooltip_eeslowamount }}%<status>减速</status>。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "HweiR",
        name: "焚心绚华绘",
        icon: "HweiR.png",
        description:
          "彗将深重的绝望附着在一名敌方英雄上，持续{{ duration }}秒。绝望会持续扩大，每0.25秒对敌人们施加一层可叠加的{{ slowpercentperstack }}%<status>减速</status>，并造成<magicDamage>每秒{{ damageovertime }}魔法伤害</magicDamage>。<br /><br />在完成的同时，绝望会碎裂，造成<magicDamage>{{ damage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      HweiP: null,
      HweiQ: null,
      HweiW: null,
      HweiE: null,
      HweiR: null,
    },
  };
}
export { importModule };
