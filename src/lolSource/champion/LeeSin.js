function importModule() {
  return {
    type: "champion",
    id: "LeeSin",
    title: "盲僧",
    name: "李青",
    avatar: "LeeSin.png",
    skins: [
      { name: "default", skin: "LeeSin_0.jpg" },
      { name: "传统僧侣 李青", skin: "LeeSin_1.jpg" },
      { name: "防弹武僧 李青", skin: "LeeSin_2.jpg" },
      { name: "龙的传人 李青", skin: "LeeSin_3.jpg" },
      { name: "至高之拳 李青", skin: "LeeSin_4.jpg" },
      { name: "泳池派对 李青", skin: "LeeSin_5.jpg" },
      { name: "SKT T1 李青", skin: "LeeSin_6.jpg" },
      { name: "地下拳王 李青", skin: "LeeSin_10.jpg" },
      { name: "神拳 李青", skin: "LeeSin_11.jpg" },
      { name: "制胜金靴 李青", skin: "LeeSin_12.jpg" },
      { name: "黑夜使者 李青", skin: "LeeSin_27.jpg" },
      { name: "至臻 黑夜使者 李青", skin: "LeeSin_28.jpg" },
      { name: "FPX 李青", skin: "LeeSin_29.jpg" },
      { name: "神龙尊者 圣龙李青", skin: "LeeSin_31.jpg" },
      { name: "至臻 黑夜使者 李青 (2022)", skin: "LeeSin_39.jpg" },
      { name: "巅峰之星 李青", skin: "LeeSin_41.jpg" },
      { name: "天龙之子 李青", skin: "LeeSin_51.jpg" },
      { name: "圣天龙 李青", skin: "LeeSin_52.jpg" },
      { name: "T1 李青", skin: "LeeSin_68.jpg" },
    ],
    spells: [
      {
        id: "LeeSinP",
        name: "疾风骤雨",
        icon: "LeeSinP.png",
        description:
          "在李青使用一次技能后，他的下两次攻击会获得攻速加成，且回复能量。",
      },
      {
        id: "LeeSinQ",
        name: "天音波/回音击",
        icon: "LeeSinQ.png",
        description:
          "李青发出刺耳的声波定位敌人，对命中的首个敌人造成<physicalDamage>{{ initialdamage }}物理伤害</physicalDamage>，提供目标的真实视野，并使李青可以在接下来的{{ reactivatetime }}秒内<recast>再次施放</recast>。<br /><br /><recast>再次施放：</recast>李青冲向被音波击中的敌人，造成<physicalDamage>{{ recastdamage }}到{{ empowereddamage }}物理伤害</physicalDamage>（基于目标已损失的生命值）。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LeeSinW",
        name: "金钟罩/铁布衫",
        icon: "LeeSinW.png",
        description:
          "李青突进至一名友军或守卫处。如果目标友军是一名英雄，李青会为自己和目标友军提供持续{{ shieldduration }}秒的<shield>{{ shieldamount }}护盾值</shield>，并且这个技能的冷却时间会减少{{ w1cooldownrecovered*100 }}%。李青可以在接下来的{{ w1reactivatetime }}秒内<recast>再次施放</recast>此技能。<br /><br /><recast>再次施放：</recast>李青获得持续{{ lifestealandspellvamptime }}秒的{{ lifestealandspellvamp }}%生命偷取和法术吸血。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LeeSinE",
        name: "天雷破/摧筋断骨",
        icon: "LeeSinE.png",
        description:
          "李青猛击地面，施放冲击波，造成<magicDamage>{{ initialdamage }}魔法伤害</magicDamage>并使命中的敌方单位显形{{ slowduration }}秒。如果这个技能命中了一名敌人，那么李青可以在接下来的{{ reactivatetime }}秒内<recast>再次施放</recast>此技能。<br /><br /><recast>再次施放：</recast>李青使被冲击波击中的敌人造成在{{ slowduration }}秒里持续衰减的{{ slowamount }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "LeeSinR",
        name: "猛龙摆尾",
        icon: "LeeSinR.png",
        description:
          "李青用一记强力的回旋踢<status>击退</status>一名敌方英雄，并造成<physicalDamage>{{ damage }}物理伤害</physicalDamage>。<br /><br />被目标撞到的敌方英雄会被短暂<status>击飞</status>并受到<physicalDamage>物理伤害，伤害值相当于{{ damage }}加上初始目标{{ percenthpcarrythrough }}%的额外生命值</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      LeeSinP: null,
      LeeSinQ: null,
      LeeSinW: null,
      LeeSinE: null,
      LeeSinR: null,
    },
  };
}
export { importModule };
