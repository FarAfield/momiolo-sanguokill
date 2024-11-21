function importModule() {
  return {
    type: "champion",
    id: "Viktor",
    title: "机械先驱",
    name: "维克托",
    avatar: "Viktor.png",
    skins: [
      { name: "default", skin: "Viktor_0.jpg" },
      { name: "全金属狂潮 维克托", skin: "Viktor_1.jpg" },
      { name: "初号机 维克托", skin: "Viktor_2.jpg" },
      { name: "造物主 维克托", skin: "Viktor_3.jpg" },
      { name: "死亡誓约 维克托", skin: "Viktor_4.jpg" },
      { name: "灵能特工 维克托", skin: "Viktor_5.jpg" },
      { name: "西部魔影 天才机械师 维克托", skin: "Viktor_14.jpg" },
    ],
    spells: [
      {
        id: "ViktorP",
        name: "光荣进化",
        icon: "ViktorP.png",
        description: "维克托在击杀敌人时能够强化他的基础技能。",
      },
      {
        id: "ViktorQ",
        name: "虹吸能量",
        icon: "ViktorQ.png",
        description:
          "维克托引爆一名敌方单位，造成<magicDamage>{{ totalmissiledamage }}魔法伤害</magicDamage>并为维克托提供持续{{ buffduration }}秒的<shield>{{ shieldlevelscaling }}护盾值</shield>。<br /><br />维克托在3.5秒内的下一次攻击会造成<magicDamage>{{ attacktotaldmg }}魔法伤害</magicDamage>。<br /><br /><keywordMajor>升级版：</keywordMajor>提供<shield>{{ totalaugmentedshieldvalue }}护盾值</shield>并且维克托还会获得持续{{ buffduration }}秒的<speed>{{ augmentmovespeedbonus }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ViktorW",
        name: "重力场",
        icon: "ViktorW.png",
        description:
          "维克托部署一个持续{{ fieldduration }}秒的重力限制设备，使其中的敌人<status>减速</status>{{ slowpotency*-1 }}%。敌人在其中驻留1.5秒后，就会被<status>晕眩</status>{{ stunduration }}秒。<br /><br /><keywordMajor>升级版被动效果：</keywordMajor>维克托的非终极技能会造成持续1秒的{{ augmentslow }}%<status>减速</status>。<br /><br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ViktorE",
        name: "死亡射线",
        icon: "ViktorE.png",
        description:
          "维克托朝所选方向发射一道死亡射线，对命中的敌人们造成<magicDamage>{{ laserdamage }}魔法伤害</magicDamage>。<br /><br /><keywordMajor>升级版：</keywordMajor>一道余波会跟随死亡射线，造成<magicDamage>{{ aftershockdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ViktorR",
        name: "混乱风暴",
        icon: "ViktorR.png",
        description:
          "维克托在一个区域内召唤一道持续{{ stormduration }}秒的混乱风暴，对周围的敌人们立刻造成<magicDamage>{{ initialburstdamage }}魔法伤害</magicDamage>随后每秒造成<magicDamage>{{ subsequentburstdamage }}魔法伤害</magicDamage>。混乱风暴会自动跟随它近期造成过伤害的英雄。<br /><br /><recast>再次施放：</recast>维克托手动移动混乱风暴。<br /><br /><keywordMajor>升级版：</keywordMajor>混乱风暴的移动速度加快{{ augmentboost*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ViktorP: null,
      ViktorQ: null,
      ViktorW: null,
      ViktorE: null,
      ViktorR: null,
    },
  };
}
export { importModule };
