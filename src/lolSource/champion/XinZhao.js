function importModule() {
  return {
    type: "champion",
    id: "XinZhao",
    title: "德邦总管",
    name: "赵信",
    avatar: "XinZhao.png",
    skins: [
      { name: "default", skin: "XinZhao_0.jpg" },
      { name: "特战先锋 赵信", skin: "XinZhao_1.jpg" },
      { name: "皇家守卫 赵信", skin: "XinZhao_2.jpg" },
      { name: "绞肉机角斗士 赵信", skin: "XinZhao_3.jpg" },
      { name: "翼骑统领 赵信", skin: "XinZhao_4.jpg" },
      { name: "赵云 子龙", skin: "XinZhao_5.jpg" },
      { name: "秘密特工 赵信", skin: "XinZhao_6.jpg" },
      { name: "屠龙勇士 赵信", skin: "XinZhao_13.jpg" },
      { name: "穿星魔锋 赵信", skin: "XinZhao_20.jpg" },
      { name: "黑暗骑士 赵信", skin: "XinZhao_27.jpg" },
      { name: "猛虎下山 赵信", skin: "XinZhao_36.jpg" },
    ],
    spells: [
      {
        id: "XinZhaoP",
        name: "果决",
        icon: "XinZhaoP.png",
        description: "每第三次攻击造成额外伤害并治疗赵信自身。",
      },
      {
        id: "XinZhaoQ",
        name: "三重爪击",
        icon: "XinZhaoQ.png",
        description:
          "赵信的下3次普攻造成额外的<physicalDamage>{{ bonusdamage }}物理伤害</physicalDamage>并使他的其它技能的冷却时间缩短1秒。第3次普攻还会<status>击飞</status>目标{{ e2 }}秒。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "XinZhaoW",
        name: "风斩电刺",
        icon: "XinZhaoW.png",
        description:
          "赵信进行斩击，造成<physicalDamage>{{ slashdamage }}</physicalDamage>物理伤害，随后进行刺击，造成物理伤害<physicalDamage>{{ thrustdamage }}</physicalDamage>。被这次刺击命中的敌人们会受到{{ e7 }}秒的{{ e6 }}%<status>减速</status>。<br /><br />被这次刺击命中的英雄和大型野怪会被施加持续{{ markduration }}秒的<keywordMajor>被挑战</keywordMajor>标记并且如果不在<keywordStealth>潜行</keywordStealth>状态还会被显形。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "XinZhaoE",
        name: "无畏冲锋",
        icon: "XinZhaoE.png",
        description:
          "赵信对一名敌人发起冲锋，对附近的敌人们造成<magicDamage>{{ chargedamage }}魔法伤害</magicDamage>和持续{{ e6 }}秒的{{ baseslowamount }}%<status>减速</status>。<br /><br />赵信自身还会获得<attackSpeed>{{ e3 }}%攻击速度</attackSpeed>，持续{{ e4 }}秒。<br /><br />以被<keywordMajor>挑战</keywordMajor>的敌人为目标时，<spellName>无畏冲锋</spellName>的施放距离会获得提升。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "XinZhaoR",
        name: "新月护卫",
        icon: "XinZhaoR.png",
        description:
          "赵信会给他最近一次用攻击或<spellName>无畏冲锋</spellName>造成过伤害的英雄施加<keywordMajor>被挑战</keywordMajor>标记，持续{{ markduration }}秒。<br /><br />赵信环绕自身释放一次横扫，造成<physicalDamage>{{ totaldamage }}外加{{ percentcurrenthealthdamage*100 }}%当前生命值的物理伤害</physicalDamage>并<status>击退</status>所有<keywordMajor>未被挑战</keywordMajor>的敌人们。<br />  <br />随后，赵信会免疫来自横扫范围外侧敌人的伤害，持续{{ missiledefensebaseduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      XinZhaoP: null,
      XinZhaoQ: null,
      XinZhaoW: null,
      XinZhaoE: null,
      XinZhaoR: null,
    },
  };
}
export { importModule };
