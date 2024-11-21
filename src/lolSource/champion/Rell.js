function importModule() {
  return {
    type: "champion",
    id: "Rell",
    title: "镕铁少女",
    name: "芮尔",
    avatar: "Rell.png",
    skins: [
      { name: "default", skin: "Rell_0.jpg" },
      { name: "女帝 芮尔", skin: "Rell_1.jpg" },
      { name: "星之守护者 芮尔", skin: "Rell_10.jpg" },
      { name: "西部魔影 芮尔", skin: "Rell_20.jpg" },
    ],
    spells: [
      {
        id: "RellP",
        name: "溃敌沉力",
        icon: "RellP.png",
        description: "芮尔的攻击和技能会在命中时窃取护甲和魔法抗性。",
      },
      {
        id: "RellQ",
        name: "裂阵",
        icon: "RellQ.png",
        description:
          "芮尔戳刺她的骑枪，使目标们<status>晕眩</status>{{ stunduration }}秒、摧毁所有<shield>护盾</shield>，并造成<magicDamage>{{ damage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RellW",
        name: "驭铁术：轰落",
        icon: "RellW.png",
        description:
          "芮尔化马为甲，<status>击飞</status>敌人{{ spell.rellw_dismount:stunduration }}秒并造成<magicDamage>{{ spell.rellw_dismount:dismountdamage }}魔法伤害</magicDamage>。芮尔获得<shield>{{ spell.rellw_dismount:shield }}护盾值</shield>，持续到她再次上马为止。<br /><br />芮尔随后进入披甲形态，获得<scaleArmor>{{ spell.rellw_dismount:resistanceincrease*100 }}%额外护甲</scaleArmor>和<scaleMR>魔法抗性</scaleMR>、<attackSpeed>{{ spell.rellw_dismount:dismountedasboost*100 }}%攻击速度</attackSpeed>和{{ spell.rellw_dismount:dismountedrangeboost }}攻击距离，但移动速度<status>减缓</status><slow>{{ spell.rellw_dismount:dismountedmspenalty*-100 }}%</slow>。在这个形态中，她可以使用<spellName>驭铁术：驾临</spellName>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RellE",
        name: "全速冲锋",
        icon: "RellE.png",
        description:
          "<spellPassive>被动 - 铁骑疾行：</spellPassive>芮尔在骑乘状态时获得<speed>{{ passivemovespeed }}移动速度</speed>，这个加成在战斗中会削减至<speed>{{ combatmstooltiponly }}</speed>。<br /><br /><spellActive>主动 - 全速冲锋：</spellActive>芮尔和一名友军进行冲锋，获得在{{ duration }}秒里持续升温的<speed>至多{{ basems*100 }}%移动速度</speed>，这个加成会在朝着敌人们或与你的目标友军移动时翻倍至<speed>{{ maxms*100 }}%</speed>。<br /><br />此外，芮尔的下次攻击或<spellName>裂阵</spellName>会在一个区域内爆炸，造成<magicDamage>{{ damage }}外加{{ percenthealthdamage*100 }}%最大生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RellR",
        name: "极涌",
        icon: "RellR.png",
        description:
          "芮尔喷发出有磁性的怒火，粗暴地将附近敌方英雄向她<status>拉拽</status>。随后芮尔会持续将附近敌人向她<status>拖曳</status>并在接来的{{ duration }}秒里持续造成共<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RellP: null,
      RellQ: null,
      RellW: null,
      RellE: null,
      RellR: null,
    },
  };
}
export { importModule };
