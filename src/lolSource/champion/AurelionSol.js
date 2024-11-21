function importModule() {
  return {
    type: "champion",
    id: "AurelionSol",
    title: "铸星龙王",
    name: "奥瑞利安·索尔",
    avatar: "AurelionSol.png",
    skins: [
      { name: "default", skin: "AurelionSol_0.jpg" },
      { name: "灰烬领主 奥瑞利安·索尔", skin: "AurelionSol_1.jpg" },
      { name: "霸天龙神 奥瑞利安 · 索尔", skin: "AurelionSol_2.jpg" },
      { name: "圣龙 奥瑞利安 · 索尔", skin: "AurelionSol_11.jpg" },
      { name: "墨影之灵 奥瑞利安 · 索尔", skin: "AurelionSol_21.jpg" },
      { name: "青花瓷 奥瑞利安 · 索尔", skin: "AurelionSol_31.jpg" },
    ],
    spells: [
      {
        id: "AurelionSolP",
        name: "星海焕然",
        icon: "AurelionSolP.png",
        description:
          "奥瑞利安·索尔的伤害型技能会将敌人们化为<font color='#3458eb'>星尘</font>，星尘可用来永久增强他的每个技能。 ",
      },
      {
        id: "AurelionSolQ",
        name: "星河冲荡",
        icon: "AurelionSolQ.png",
        description:
          '奥瑞利安·索尔喷吐星焰，至多持续{{ maxchannelduration }}秒，每秒对首个命中的敌人造成<magicDamage>{{ damagepersecond }}魔法伤害</magicDamage>并对附近的敌人们造成{{ aoemodifier*100 }}%此伤害。<br /><br />对相同敌人每进行一整秒的吐息，就会造成一次爆发性的<magicDamage>{{ burstdamage }}魔法伤害</magicDamage>外加<magicDamage>{{ burstbonustruedamagetochamps }}最大生命值的魔法伤害</magicDamage>，并且如果这个敌人是英雄，还会吸收<span class="color3458eb">{{ qmassstolen }}星尘</span>。{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "AurelionSolW",
        name: "星穹流丽",
        icon: "AurelionSolW.png",
        description:
          "奥瑞利安·索尔向一个方向飞行。在飞行时，<spellName>星河冲荡</spellName>没有冷却时间，没有最大引导时长，并且它的固定伤害提升{{ truedamagebonus*100 }}%。<br /><br />参与击杀那些在{{ resetwindow }}秒内被你造成过伤害的英雄后，会返还这个技能{{ tooltiptakedowncooldownmultiplier }}%的冷却时间。<br /><br /><recast>再次施放：</recast>提前结束飞行。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AurelionSolE",
        name: "星芒凝汇",
        icon: "AurelionSolE.png",
        description:
          '奥瑞利安·索尔召唤一个黑洞，对敌人们每秒造成<magicDamage>{{ damagepersecond }}魔法伤害</magicDamage>并缓慢地将他们<status>拉拽</status>向黑洞的中心，持续{{ duration }}秒。黑洞中心的敌人一旦低于<scaleHealth>{{ currentexecutionthreshold }}%最大生命值</scaleHealth>就会立刻阵亡。<br /><br />每有一名敌人在黑洞中阵亡，以及一名敌方英雄在黑洞中每被困住一秒，黑洞就会吸收<span class="color3458eb">星尘</span>。{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "AurelionSolR",
        name: "星天落瀑",
        icon: "AurelionSolR.png",
        description:
          '奥瑞利安·索尔从诸天摘取一颗巨型星星并将其砸入大地中，对敌人造成<magicDamage>{{ maxdamagetooltip }}魔法伤害</magicDamage>、{{ stunduration }}秒<status>晕眩</status>并且每命中一名英雄就会吸收<span class="color3458eb">{{ massstolen }}星尘</span>。<br /><br />收集<span class="color3458eb">{{ calamitystacks }}星尘</span>时会使下一个<spellName>星落</spellName>转变为<spellName>天瀑</spellName>。<br /><br /><spellName>天瀑</spellName>：奥瑞利安·索尔从宇宙中拖来一个星座的怒火，在一个更大的区域造成<magicDamage>{{ r2damage }}魔法伤害</magicDamage>，对命中的敌人们造成{{ stunduration }}秒<status>击飞</status>，并释放一道巨型冲击波，对英雄和史诗级野怪造成<magicDamage>{{ shockwavedamage }}魔法伤害</magicDamage>并对命中的所有敌人造成持续1秒的{{ shockwaveslow*100 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}',
      },
    ],
    effects: {
      AurelionSolP: null,
      AurelionSolQ: null,
      AurelionSolW: null,
      AurelionSolE: null,
      AurelionSolR: null,
    },
  };
}
export { importModule };
