function importModule() {
  return {
    type: "champion",
    id: "Belveth",
    title: "虚空女皇",
    name: "卑尔维斯",
    avatar: "Belveth.png",
    skins: [
      { name: "default", skin: "Belveth_0.jpg" },
      { name: "战场BOSS 卑尔维斯", skin: "Belveth_1.jpg" },
      { name: "星界女神 卑尔维斯", skin: "Belveth_10.jpg" },
      { name: "海魔女 卑尔维斯", skin: "Belveth_19.jpg" },
    ],
    spells: [
      {
        id: "BelvethP",
        name: "溶烛化紫 ",
        icon: "BelvethP.png",
        description:
          "每当卑尔维斯击杀大型小兵和野怪和英雄时，都会获得永久的额外攻速加成。她还会在使用一个技能后获得暂时的攻击速度加成。",
      },
      {
        id: "BelvethQ",
        name: "虚空激流",
        icon: "BelvethQ.png",
        description:
          "卑尔维斯进行冲刺，对她途经的敌人们造成<physicalDamage>{{ basedamage }}物理伤害</physicalDamage>。<br /><br />每个方向都有为期{{ f1 }}秒的独立冷却时间 ，这些冷却时间随她的<attackSpeed>攻击速度</attackSpeed>的提升而缩短。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BelvethW",
        name: "上觐沉渊",
        icon: "BelvethW.png",
        description:
          "卑尔维斯甩尾重击，对敌人们造成<magicDamage>{{ damage }}魔法伤害</magicDamage>、{{ duration }}秒<status>击飞</status>和持续{{ slowduration }}秒的{{ slowpercent*100 }}%<status>减速</status>。如果这个技能击中了一名敌方英雄，则刷新该英雄所在方向的<spellName>虚空激流</spellName>的冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BelvethE",
        name: "搠面皇锋",
        icon: "BelvethE.png",
        description:
          "卑尔维斯引导并斩击她自身的周围区域，获得{{ drpercent*100 }}%伤害减免、{{ totallifesteal }}生命偷取、并在{{ totalduration }}秒持续攻击{{ f2.0 }}次，攻击次数可通过<attackSpeed>攻击速度</attackSpeed>来提升。每次攻击都会打击生命值最低的敌人，基于目标的已损失生命值造成<physicalDamage>{{ damageperstrike }}</physicalDamage>至<physicalDamage>{{ maxdamageperstriketooltip }}物理伤害</physicalDamage>。<br /><br />使用另一个技能或<recast>再次施放</recast>这个技能会使这个技能提前结束。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BelvethR",
        name: "万载豪筵",
        icon: "BelvethR.png",
        description:
          "<spellPassive>被动：</spellPassive>对相同目标的每第二次攻击会造成额外的<trueDamage>{{ finalonhitdamage }}真实伤害</trueDamage>，可无限叠加。参与击杀英雄和史诗级野怪后会留下一片【虚空珊瑚】。<br /><br /><spellActive>主动：</spellActive>消耗【虚空珊瑚】来提供<keywordMajor>{{ passivestacksondevour }}层【溶烛化紫】</keywordMajor>并激活卑尔维斯的真实形态，持续{{ steroidduration }}秒。来自虚空史诗级野怪的【虚空珊瑚】会将持续时长提升至{{ voidduration }}秒并使附近阵亡的小兵们变为【虚空鱼】。在施放时，卑尔维斯<status>减速</status>附近的敌人们然后爆炸，造成<trueDamage>{{ totalexplosiondamage }} + {{ missinghealthdamage*100 }}%已损失生命值的真实伤害</trueDamage>。<br /><br />在她的真实形态下，卑尔维斯获得<healing>{{ maxhealthondevour }}最大生命值</healing>、非战斗状态的<speed>{{ oocms }}移动速度</speed>、{{ bonusaarange }}攻击距离、<attackSpeed>{{ totalasmod*100 }}%总攻击速度</attackSpeed>、并且<spellName>虚空激流</spellName>可以穿过墙体。<br /><br /><br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      BelvethP: null,
      BelvethQ: null,
      BelvethW: null,
      BelvethE: null,
      BelvethR: null,
    },
  };
}
export { importModule };
