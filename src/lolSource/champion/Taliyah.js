function importModule() {
  return {
    type: "champion",
    id: "Taliyah",
    title: "岩雀",
    name: "塔莉垭",
    avatar: "Taliyah.png",
    skins: [
      { name: "default", skin: "Taliyah_0.jpg" },
      { name: "弗雷尔卓德 塔莉垭", skin: "Taliyah_1.jpg" },
      { name: "SSG 塔莉垭", skin: "Taliyah_2.jpg" },
      { name: "泳池派对 塔莉垭", skin: "Taliyah_3.jpg" },
      { name: "星之守护者 塔莉垭", skin: "Taliyah_11.jpg" },
      { name: "水晶圣骑 塔莉垭", skin: "Taliyah_21.jpg" },
    ],
    spells: [
      {
        id: "TaliyahP",
        name: "浮石冲",
        icon: "TaliyahP.png",
        description: "塔莉垭在墙体附近时会获得移动速度。",
      },
      {
        id: "TaliyahQ",
        name: "石穿",
        icon: "TaliyahQ.png",
        description:
          "塔莉垭挥出5块石头，每块会在命中的第一个敌人的附近区域内造成<magicDamage>{{ rockdamage }}魔法伤害</magicDamage>并在该区域生成【掘石场】。对相同敌人的后续命中造成的伤害降低{{ extramissilereduceddamagepercent }}%。<br /><br />在掘石场上施放时会消耗{{ e7 }}法力并且冷却时间缩短{{ workedgroundcdr*100 }}%，消耗掉【掘石场】，并挥出一块巨石来对命中的敌人们造成持续{{ slowduration }}秒的{{ slowpercent*100 }}%<status>减速</status>，对首要目标造成<magicDamage>{{ bigrockdamage }}魔法伤害</magicDamage>。被巨石命中的野怪会被<status>晕眩</status>{{ monsterstunduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TaliyahW",
        name: "岩突",
        icon: "TaliyahW.png",
        description:
          "塔莉垭动摇大地，将一个区域内的敌人们<status>强制位移</status>至一个所选方向。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TaliyahE",
        name: "撒石阵",
        icon: "TaliyahE.png",
        description:
          "塔莉垭在一个区域内布下碎石阵，对命中的敌人造成<magicDamage>{{ scatterdamage }}魔法伤害</magicDamage>和{{ slowpercent*100 }}%<status>减速</status>。碎石会在敌人冲刺或被<status>强制位移</status>途经它们时爆炸，造成剩余位移时长+{{ stunduration }}秒<status>晕眩</status>和<magicDamage>{{ detonationdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TaliyahR",
        name: "墙幔",
        icon: "TaliyahR.png",
        description:
          "塔莉垭生成一道巨型土墙，持续{{ e1 }}秒。如果她立刻<recast>再次施放</recast>，那么她将踏上土墙随其一路骑行。移动或受到定身都将结束这段骑行。<br /><br />如果塔莉垭在{{ damagelockouttime }}秒内曾受到过来自英雄或建筑物的伤害，那么她将不能施放这个技能。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TaliyahP: null,
      TaliyahQ: null,
      TaliyahW: null,
      TaliyahE: null,
      TaliyahR: null,
    },
  };
}
export { importModule };
