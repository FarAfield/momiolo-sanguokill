function importModule() {
  return {
    type: "champion",
    id: "Darius",
    title: "诺克萨斯之手",
    name: "德莱厄斯",
    avatar: "Darius.png",
    skins: [
      { name: "default", skin: "Darius_0.jpg" },
      { name: "铁血帝皇 德莱厄斯", skin: "Darius_1.jpg" },
      { name: "生化骑士 德莱厄斯", skin: "Darius_2.jpg" },
      { name: "勇敢的心 德莱厄斯", skin: "Darius_3.jpg" },
      { name: "灌篮高手 德莱厄斯", skin: "Darius_4.jpg" },
      { name: "热血班长 德莱厄斯", skin: "Darius_8.jpg" },
      { name: "恐惧新星 德莱厄斯", skin: "Darius_14.jpg" },
      { name: "神王 德莱厄斯", skin: "Darius_15.jpg" },
      { name: "西部魔影 德莱厄斯", skin: "Darius_16.jpg" },
      { name: "福牛守护者 德莱厄斯", skin: "Darius_24.jpg" },
      { name: "地下都市 梦魇 德莱厄斯", skin: "Darius_33.jpg" },
      { name: "灵魂莲华 德莱厄斯", skin: "Darius_43.jpg" },
      { name: "青花瓷 德莱厄斯", skin: "Darius_54.jpg" },
      { name: "圣洁神王 德莱厄斯", skin: "Darius_64.jpg" },
    ],
    spells: [
      {
        id: "DariusP",
        name: "出血",
        icon: "DariusP.png",
        description:
          "德莱厄斯的攻击和伤害技能会导致敌人流血，在5秒里持续造成物理伤害，最多叠加5次。在他的目标达到最大层数后，德莱厄斯会进入激怒状态并获得巨额攻击力。",
      },
      {
        id: "DariusQ",
        name: "大杀四方",
        icon: "DariusQ.png",
        description:
          "德莱厄斯举起他的斧头然后挥舞一圈，斧刃造成<physicalDamage>{{ bladedamage }}物理伤害</physicalDamage>并且斧柄造成<physicalDamage>{{ handledamage }}伤害</physicalDamage>。被斧柄命中的敌人不会被施加<keywordMajor>出血</keywordMajor>。<br /><br />德莱厄斯每用斧刃命中一个敌方英雄或大型野怪就会回复<healing>{{ e5 }}%已损失生命值</healing>，至多回复<healing>{{ e7 }}%</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DariusW",
        name: "致残打击",
        icon: "DariusW.png",
        description:
          "德莱厄斯的下次攻击造成<physicalDamage>{{ empoweredattackdamage }}物理伤害</physicalDamage>和持续{{ e5 }}秒的{{ e2 }}%<status>减速</status>。<br /><br />如果这个技能击杀了目标，那么会返还其法力消耗并缩短其{{ e3 }}%的冷却时间。<br /><br /><rules>这个技能会在造成伤害时触发技能特效。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DariusE",
        name: "无情铁手",
        icon: "DariusE.png",
        description:
          "<spellPassive>被动：</spellPassive>德莱厄斯获得{{ e1 }}%护甲穿透。<br /><br /><spellActive>主动：</spellActive>德莱厄斯用他的斧头进行钩拽，造成<status>拖拽</status>、<status>击飞</status>和持续{{ e3 }}秒的{{ e2 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DariusR",
        name: "诺克萨斯断头台",
        icon: "DariusR.png",
        description:
          "德莱厄斯跳向一名敌人并进行一次致命猛击，造成<trueDamage>{{ damage }}真实伤害</trueDamage>。目标身上每有一层<keywordMajor>出血</keywordMajor>，这个技能就会造成额外的{{ rdamagepercentperhemostack*100 }}%伤害，至多达到<trueDamage>{{ maximumdamage }}伤害</trueDamage>。<br /><br />如果这个技能击杀了目标，那么德莱厄斯就可以在{{ rrecastduration }}秒内<recast>再次施放</recast>这个技能。这个技能在技能等级达到3时，即可无需消耗法力并在击杀时完全刷新技能的冷却时间。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      DariusP: null,
      DariusQ: null,
      DariusW: null,
      DariusE: null,
      DariusR: null,
    },
  };
}
export { importModule };
