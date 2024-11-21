function importModule() {
  return {
    type: "champion",
    id: "MasterYi",
    title: "无极剑圣",
    name: "易",
    avatar: "MasterYi.png",
    skins: [
      { name: "default", skin: "MasterYi_0.jpg" },
      { name: "暗影 易", skin: "MasterYi_1.jpg" },
      { name: "星战 易", skin: "MasterYi_2.jpg" },
      { name: "天人合一 易", skin: "MasterYi_3.jpg" },
      { name: "侍魂 易", skin: "MasterYi_4.jpg" },
      { name: "铁血剑豪 易", skin: "MasterYi_5.jpg" },
      { name: "源计划：林 易", skin: "MasterYi_9.jpg" },
      { name: "斩星魔剑 易", skin: "MasterYi_10.jpg" },
      { name: "玉剑传说 无极", skin: "MasterYi_11.jpg" },
      { name: "持胡萝卜的雪人 易", skin: "MasterYi_17.jpg" },
      { name: "腥红之月 易", skin: "MasterYi_24.jpg" },
      { name: "灵能特工 易", skin: "MasterYi_33.jpg" },
      { name: "无极执事 易", skin: "MasterYi_42.jpg" },
      { name: "灵魂莲华 易", skin: "MasterYi_52.jpg" },
      { name: "至臻 灵魂莲华 易", skin: "MasterYi_53.jpg" },
      { name: "墨之影武者 易", skin: "MasterYi_89.jpg" },
      { name: "天龙之子 易", skin: "MasterYi_96.jpg" },
    ],
    spells: [
      {
        id: "MasterYiP",
        name: "双重打击",
        icon: "MasterYiP.png",
        description: "易大师每攻击数次，就会同时对目标进行2次打击。",
      },
      {
        id: "MasterYiQ",
        name: "阿尔法突袭",
        icon: "MasterYiQ.png",
        description:
          "易变得【不可被选取】并对他目标附近的敌人发起快速打击，对命中的所有敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，至多命中{{ alphastrikebounces }}名敌人。<br /><br />如果没有其他目标，那么这个技能可以重复打击相同敌人，每次后续打击造成{{ subsequenthitmultiplier*100 }}%物理伤害(<physicalDamage>{{ subesquentdamage }}</physicalDamage>)，对单个目标的最大伤害值为<physicalDamage>{{ singletotaldamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MasterYiW",
        name: "冥想",
        icon: "MasterYiW.png",
        description:
          "易开始引导，并在{{ healduration }}秒里持续回复共<healing>{{ totalheal }}生命值</healing>。这个治疗效果可基于易大师的已损失生命值而提升，最多可提升至{{ maxmissinghealthpercent*100 }}%。<br /><br />在引导时和随后的{{ drlinger }}秒里，他还会获得{{ initialdr }}伤害减免，这个效果会在最初的{{ initialextradrduration }}秒后降低至{{ damagereduction*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MasterYiE",
        name: "无极剑道",
        icon: "MasterYiE.png",
        description:
          "易的攻击造成额外的<trueDamage>{{ totaldamage }}真实伤害</trueDamage>，持续{{ duration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MasterYiR",
        name: "高原血统",
        icon: "MasterYiR.png",
        description:
          "<spellPassive>被动：</spellPassive>在参与击杀后，易大师的普通技能的剩余冷却时间会减少{{ rcooldownrefund*100 }}%。<br /><br /><spellActive>主动：</spellActive>获得<speed>{{ rmsbonus }}%移动速度</speed>，<attackSpeed>{{ rasbonus }}%攻击速度</attackSpeed>，并且免疫<status>减速</status>效果，持续{{ rduration }}秒。每次参与击杀后都会使此技能的持续时间延长{{ rkillassistextension }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      MasterYiP: null,
      MasterYiQ: null,
      MasterYiW: null,
      MasterYiE: null,
      MasterYiR: null,
    },
  };
}
export { importModule };
