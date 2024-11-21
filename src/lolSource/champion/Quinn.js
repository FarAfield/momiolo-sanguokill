function importModule() {
  return {
    type: "champion",
    id: "Quinn",
    title: "德玛西亚之翼",
    name: "奎因",
    avatar: "Quinn.png",
    skins: [
      { name: "default", skin: "Quinn_0.jpg" },
      { name: "血羽凤凰 奎因", skin: "Quinn_1.jpg" },
      { name: "勇敢的心 奎因", skin: "Quinn_2.jpg" },
      { name: "死亡之鹰 奎因", skin: "Quinn_3.jpg" },
      { name: "觅心之翼 奎因", skin: "Quinn_4.jpg" },
      { name: "光明骑士 奎因", skin: "Quinn_5.jpg" },
      { name: "星之守护者 奎因", skin: "Quinn_14.jpg" },
    ],
    spells: [
      {
        id: "QuinnP",
        name: "侵扰",
        icon: "QuinnP.png",
        description:
          "华洛，奎因的德玛西亚鹰，会周期性地将敌人标记为<font color='#FFF673'>易损</font>状态。奎因对<font color='#FFF673'>易损</font>目标的第一次普通攻击将造成额外物理伤害。",
      },
      {
        id: "QuinnQ",
        name: "炫目攻势",
        icon: "QuinnQ.png",
        description:
          "奎因命令华洛进行俯冲，将命中的第一个敌人标记为<keywordMajor>易损</keywordMajor>、降低其视野半径{{ e3 }}秒并对所有周围的敌人们造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。<br /><br />如果命中的第一个敌人不是英雄，那么该敌人会还会被<status>缴械</status>{{ e3 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "QuinnW",
        name: "敏锐感知",
        icon: "QuinnW.png",
        description:
          "<spellPassive>被动：</spellPassive>攻击一名<keywordMajor>易损</keywordMajor>目标会为奎因提供<attackSpeed>{{ attackspeedbonus*100 }}%攻击速度</attackSpeed>和<speed>{{ e3 }}%移动速度</speed>，持续{{ e1 }}秒。<br /><br /><spellActive>主动：</spellActive>华洛显形附近的一大片区域，持续{{ e5 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "QuinnE",
        name: "旋翔掠杀",
        icon: "QuinnE.png",
        description:
          "奎因冲刺向一名敌人，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>并将其标记为<keywordMajor>易损</keywordMajor>状态。奎因随后会从目标处向后跳开，将其<status>击退</status>并对其造成在{{ e3 }}秒里持续衰减的{{ e1 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "QuinnR",
        name: "深入敌后",
        icon: "QuinnR.png",
        description:
          "奎因召唤华洛，在引导2秒后进行合体，获得<speed>{{ movementspeedmod*100 }}%移动速度</speed>并允许她<recast>再次施放</recast>这个技能。攻击或使用<spellName>炫目攻势</spellName>或<spellName>旋翔掠杀</spellName>都会自动地<recast>再次施放</recast>这个技能。<br /><br /><recast>再次施放</recast>：奎因和华洛表演一次空中特技，造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>、将英雄们标记为<keywordMajor>易损</keywordMajor>并结束这个技能。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      QuinnP: null,
      QuinnQ: null,
      QuinnW: null,
      QuinnE: null,
      QuinnR: null,
    },
  };
}
export { importModule };
