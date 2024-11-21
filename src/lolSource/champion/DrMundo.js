function importModule() {
  return {
    type: "champion",
    id: "DrMundo",
    title: "祖安狂人",
    name: "蒙多医生",
    avatar: "DrMundo.png",
    skins: [
      { name: "default", skin: "DrMundo_0.jpg" },
      { name: "战栗之毒 蒙多", skin: "DrMundo_1.jpg" },
      { name: "健美教练 蒙多", skin: "DrMundo_2.jpg" },
      { name: "律政大亨 蒙多", skin: "DrMundo_3.jpg" },
      { name: "蒙多蒙多", skin: "DrMundo_4.jpg" },
      { name: "嗜血行刑 蒙多", skin: "DrMundo_5.jpg" },
      { name: "战争血统 蒙多", skin: "DrMundo_6.jpg" },
      { name: "暗杀星 蒙多", skin: "DrMundo_7.jpg" },
      { name: "泳池派对 蒙多", skin: "DrMundo_8.jpg" },
      { name: "硬汉 蒙多", skin: "DrMundo_9.jpg" },
      { name: "冰封王子 蒙多", skin: "DrMundo_10.jpg" },
      { name: "妖怪艺术家 蒙多医生", skin: "DrMundo_21.jpg" },
    ],
    spells: [
      {
        id: "DrMundoP",
        name: "想去哪就去哪",
        icon: "DrMundoP.png",
        description:
          "蒙多医生抵抗他受到的第一个定身效果，但会失去生命值并在附近掉落一罐化学药剂。蒙多医生可移动到化学药剂上来拾取它，从而回复生命值并缩短这个技能的冷却时间。<br><br>蒙多医生也会显著提升生命回复。<br>",
      },
      {
        id: "DrMundoQ",
        name: "病毒屠刀",
        icon: "DrMundoQ.png",
        description:
          "蒙多医生掷出一把沾染病菌的骨锯，对命中的第一个敌人造成<magicDamage>{{ currenthealthdamage*100 }}%当前生命值的魔法伤害</magicDamage>，并对其造成持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。<br /><br />如果骨锯命中了一名英雄或野怪，蒙多医生会回复<healing>{{ healthrestoreonhitchampionmonster }}生命值</healing>。如果骨锯命中了一个非英雄非野怪的单位，蒙多医生则会回复<healing>{{ healthrestoreonhitminion }}生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DrMundoW",
        name: "电击疗法",
        icon: "DrMundoW.png",
        description:
          "蒙多医生为一台除颤器充电，每秒对附近的敌人们造成<magicDamage>{{ damagepertick*4 }}魔法伤害</magicDamage>，至多持续{{ duration }}秒。此外，他会将在最初{{ grayhealthinitialduration }}秒里受到的{{ grayhealthstorageinitial }}伤害值和在剩余时长里受到的{{ grayhealthstorage*100 }}%伤害值储存为灰色生命值，并能<recast>再次施放</recast>这个技能。<br /><br /><recast>再次施放：</recast>引爆除颤器，对附近的敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。如果这个效果命中了至少一名敌方英雄，那么蒙多医生会回复<healing>{{ grayhealthbigmod*100 }}%的灰色生命值</healing>，否则蒙多医生会转而回复<healing>{{ grayhealthsmallmod*100 }}%的灰色生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DrMundoE",
        name: "大力行医",
        icon: "DrMundoE.png",
        description:
          "<spellPassive>被动：</spellPassive>蒙多医生获得<physicalDamage>{{ passivebonusad }}攻击力</physicalDamage>。<br /><br /><spellActive>主动：</spellActive>蒙多医生粗暴地挥舞他的“医用”手提包，使他的下次攻击造成额外的<physicalDamage>{{ additionaldamage }}物理伤害</physicalDamage>，基于他的已损失生命值至多提升至{{ maxdamageamptooltip }}。如果击杀了目标敌人，蒙多还会将其拍飞，对其途经的所有敌人造成<physicalDamage>{{ additionaldamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "DrMundoR",
        name: "极限剂量",
        icon: "DrMundoR.png",
        description:
          "蒙多将化学药剂注入体内，获得<healing>相当于他{{ missinghealthheal*100 }}%已损失生命值的最大生命值</healing>、<speed>{{ speedboostamount*100 }}%移动速度</speed>、并在{{ duration }}秒里持续回复共<healing>{{ maxhealthhot*100 }}%最大生命值</healing>。<br /><br />在3级时，附近的每个敌方英雄都会使这两种治疗效果提升额外的{{ bonuspernearbychampion*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      DrMundoP: null,
      DrMundoQ: null,
      DrMundoW: null,
      DrMundoE: null,
      DrMundoR: null,
    },
  };
}
export { importModule };
