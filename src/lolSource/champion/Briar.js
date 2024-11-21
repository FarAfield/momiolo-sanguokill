function importModule() {
  return {
    type: "champion",
    id: "Briar",
    title: "狂厄蔷薇",
    name: "贝蕾亚",
    avatar: "Briar.png",
    skins: [
      { name: "default", skin: "Briar_0.jpg" },
      { name: "妖怪艺术家 贝蕾亚", skin: "Briar_1.jpg" },
      { name: "幻灵海魔人 贝蕾亚", skin: "Briar_10.jpg" },
    ],
    spells: [
      {
        id: "BriarP",
        name: "猩红诅咒",
        icon: "BriarP.png",
        description:
          "贝蕾亚的攻击与技能会造成可叠加的流血效果，同时基于这个效果的伤害治疗自身。她永远处于饥饿状态，会根据自己的已损失生命值获得更高的治疗，但缺乏自带的生命回复。",
      },
      {
        id: "BriarQ",
        name: "冲头",
        icon: "BriarQ.png",
        description:
          "贝蕾亚跃向一个单位，将其<status>晕眩</status>{{ stunduration }}秒，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ shredduration }}秒的{{ shredpercent*100 }}%<scaleArmor>护甲削减</scaleArmor>与<scaleMR>魔抗削减</scaleMR>。<br /><br /><rules>如果贝蕾亚在<keywordMajor>血莽</keywordMajor>期间对一个小兵或野怪施放这个技能，那么她会停止将英雄作为优先目标。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BriarW",
        name: "血莽 / 噬击",
        icon: "BriarW.png",
        description:
          "贝蕾亚跳跃并进入一种<keywordMajor>血莽</keywordMajor>状态，自我嘲讽至相距最近的那个敌人，持续{{ berserkduration }}秒，优先以英雄为目标。在<keywordMajor>血莽</keywordMajor>状态下，她获得<attackSpeed>{{ berserkas*100 }}%攻击速度</attackSpeed>和<speed>{{ berserkms*100 }}%移动速度</speed>，并且她的攻击会对目标四周的敌人们造成<physicalDamage>{{ totalaoedamage }}物理伤害</physicalDamage>。<br /><br />贝蕾亚可以<recast>再次施放</recast>这个技能来强化她的下一次攻击。这次攻击造成<physicalDamage>{{ totalattackbonusdamage }} + {{ totalattackpercentmissinghealth }}%已损失生命值的物理伤害</physicalDamage>并<healing>为贝蕾亚提供{{ attackmaxhpheal }}+{{ attackhealpercent*100 }}%已造成伤害值的治疗效果</healing>。<br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BriarE",
        name: "惊吼",
        icon: "BriarE.png",
        description:
          "<charge>开始蓄力</charge>：贝蕾亚移除<keywordMajor>血莽</keywordMajor>并聚集能量，获得{{ drpercent }}%伤害减免并在1秒里持续获得共<healing>{{ percentmaxhpheal }}治疗效果</healing>。<br /><br /><release>释放：</release>贝蕾亚释放一次吼叫，基于蓄力时间造成至多<magicDamage>{{ damage }}魔法伤害</magicDamage>，以及持续{{ slowduration }}秒的{{ slowpercent*100 }}%<status>减速</status>。在完全蓄力后，吼叫会<status>击退</status>敌人们，对那些与墙体碰撞的敌人造成<magicDamage>{{ wallhitdamage }}魔法伤害</magicDamage>和{{ wallstunduration }}秒<status>晕眩</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BriarR",
        name: "毙除",
        icon: "BriarR.png",
        description:
          "贝蕾亚踢出她的囚枷中的血石并飞到被它命中的第一个英雄的位置，将这个英雄标记为她的猎物。在着陆时，她对附近的一切造成<magicDamage>{{ damage }}魔法伤害</magicDamage>并使那些并非她猎物的敌人们<status>逃跑</status>{{ fearduration }}秒。她随后会进入一个强化版<keywordMajor>血莽</keywordMajor>状态并将追击她的猎物直至阵亡才罢休。在此期间，她获得{{ totalresists }}<scaleArmor>护甲</scaleArmor> 和<scaleMR>魔法抗性</scaleMR>、{{ lifestealpercent*100 }}%生命偷取和额外的<speed>{{ extramovespeedpercent*100 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      BriarP: null,
      BriarQ: null,
      BriarW: null,
      BriarE: null,
      BriarR: null,
    },
  };
}
export { importModule };
