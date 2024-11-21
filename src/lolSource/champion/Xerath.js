function importModule() {
  return {
    type: "champion",
    id: "Xerath",
    title: "远古巫灵",
    name: "泽拉斯",
    avatar: "Xerath.png",
    skins: [
      { name: "default", skin: "Xerath_0.jpg" },
      { name: "符文生物 泽拉斯", skin: "Xerath_1.jpg" },
      { name: "战地法师 泽拉斯", skin: "Xerath_2.jpg" },
      { name: "枯萎之壤 泽拉斯", skin: "Xerath_3.jpg" },
      { name: "沙之守护 泽拉斯", skin: "Xerath_4.jpg" },
      { name: "暗星 泽拉斯", skin: "Xerath_5.jpg" },
      { name: "欲望之主 泽拉斯", skin: "Xerath_12.jpg" },
      { name: "宇航员 泽拉斯", skin: "Xerath_21.jpg" },
      { name: "水晶巫灵 泽拉斯", skin: "Xerath_30.jpg" },
    ],
    spells: [
      {
        id: "XerathP",
        name: "法力澎湃",
        icon: "XerathP.png",
        description:
          "泽拉斯的普通攻击会周期性地恢复法力值。每当泽拉斯击杀了一个单位时，这个冷却时间就会缩短。",
      },
      {
        id: "XerathQ",
        name: "奥能脉冲",
        icon: "XerathQ.png",
        description:
          "<charge>开始蓄力：</charge>泽拉斯开始积蓄一次奥术光束，自身逐步<status>减速</status>，至多可达50%。<br /><br /><release>释放：</release>泽拉斯发射光束，造成<magicDamage>{{ tooltiptotaldamage }}魔法伤害</magicDamage>。距离随蓄力时间提升。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "XerathW",
        name: "毁灭之眼",
        icon: "XerathW.png",
        description:
          "泽拉斯引爆目标区域的奥术能量，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并使敌人<status>减速</status>{{ slowamount*100 }}%，持续{{ slowduration }}秒。区域中心的敌人会受到<magicDamage>{{ sweetspottotaldamage }}魔法伤害</magicDamage>，并被<status>减速</status>{{ sweetspotslowamount*100 }}%，减速效果会在{{ slowduration }}秒里持续衰减。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "XerathE",
        name: "冲击法球",
        icon: "XerathE.png",
        description:
          "泽拉斯发射一颗原生魔法之球，基于飞行距离使命中第一个的敌人<status>晕眩</status>至多{{ maxstunduration }}秒，并造成<magicDamage>{{ tooltiptotaldamage }}魔法伤害</magicDamage>。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "XerathR",
        name: "奥术仪式",
        icon: "XerathR.png",
        description:
          "泽拉斯飞升至他的真正形态并引导{{ e1 }}秒。在此期间，他可以<recast>再次施放</recast>此技能至多{{ e2 }}次。<br /><br /><recast>再次施放：</recast>泽拉斯发射一道魔法炮击，造成<magicDamage>{{ tooltiptotaldamage }}魔法伤害</magicDamage>。每次命中英雄时，炮击都会造成额外的<magicDamage>{{ rampdamagecalc }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      XerathP: null,
      XerathQ: null,
      XerathW: null,
      XerathE: null,
      XerathR: null,
    },
  };
}
export { importModule };
