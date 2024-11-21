function importModule() {
  return {
    type: "champion",
    id: "Gangplank",
    title: "海洋之灾",
    name: "普朗克",
    avatar: "Gangplank.png",
    skins: [
      { name: "default", skin: "Gangplank_0.jpg" },
      { name: "幽灵船长 普朗克", skin: "Gangplank_1.jpg" },
      { name: "老兵 普朗克", skin: "Gangplank_2.jpg" },
      { name: "大力水手 普朗克", skin: "Gangplank_3.jpg" },
      { name: "英勇玩具兵 普朗克", skin: "Gangplank_4.jpg" },
      { name: "特种部队 普朗克", skin: "Gangplank_5.jpg" },
      { name: "奥斯曼大帝 普朗克", skin: "Gangplank_6.jpg" },
      { name: "昔日霸主 普朗克", skin: "Gangplank_7.jpg" },
      { name: "恐惧新星 普朗克", skin: "Gangplank_8.jpg" },
      { name: "泳池派对 普朗克", skin: "Gangplank_14.jpg" },
      { name: "FPX 普朗克", skin: "Gangplank_21.jpg" },
      { name: "背叛之刃 普朗克", skin: "Gangplank_23.jpg" },
      { name: "源计划：铁腕 普朗克", skin: "Gangplank_33.jpg" },
    ],
    spells: [
      {
        id: "GangplankP",
        name: "烈火审讯",
        icon: "GangplankP.png",
        description: "每过几秒，普朗克的近战攻击就会让他的对手着火。",
      },
      {
        id: "GangplankQ",
        name: "枪火谈判",
        icon: "GangplankQ.png",
        description:
          "{{Spell_GangplankQWrapper_Tooltip_{{ gamemodeinteger }}}}{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GangplankW",
        name: "坏血病疗法",
        icon: "GangplankW.png",
        description:
          "普朗克吃掉大量柑橘类水果，来移除所有<status>限制</status>效果并回复<healing>{{ basehealth }}外加{{ e2 }}%的已损失生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GangplankE",
        name: "火药桶",
        icon: "GangplankE.png",
        description:
          "普朗克放置一个可被普朗克和敌方英雄攻击的火药桶，该火药桶持续{{ e5 }}秒。当一名敌人将火药桶摧毁时，该火药桶会哑火。当普朗克将火药桶摧毁时，该火药桶会爆炸，造成持续{{ e2 }}秒的{{ finalslowamount }}%<status>减速</status>和<physicalDamage>相当于攻击力的伤害</physicalDamage>，并无视{{ e0 }}%护甲。英雄会受到额外的<physicalDamage>{{ e3 }}物理伤害</physicalDamage>。<br /><br />火药桶的生命值会每{{ f5 }}秒衰减一次。火药桶会引爆其它爆炸区域与它有重叠的火药桶，但不会重复对相同目标造成伤害。火药桶的爆炸可通过<spellName>枪火谈判</spellName>来触发并在击杀目标们时提供额外金币。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "GangplankR",
        name: "加农炮幕",
        icon: "GangplankR.png",
        description:
          "普朗克给他的舰船发射信号弹，让它在{{ zoneduration }}秒里朝着目标区域持续发射共{{ totalwavestooltip }}波加农炮弹。每波炮弹造成持续{{ slowduration }}秒的{{ slowpercent }}%<status>减速</status>，并造成<magicDamage>{{ onewavedamage }}魔法伤害</magicDamage>。最大伤害：{{ totaldamagetooltip }}<br /><br />这个技能可在商店中用<spellName>枪火谈判</spellName>来升级。<br /><br /><spellName>随意开火</spellName>：发射6波额外的加农炮弹。<br /><spellName>死亡之女</spellName>：发射一颗巨型加农炮弹，造成<trueDamage>{{ deathsdaughterdamage }}真实伤害</trueDamage>和持续{{ deathsdaughterslowduration }}秒的{{ deathsdaughterslow }}%<status>减速</status>。<br /><spellName>鼓舞士气</spellName>：【加农炮幕】内的友军会获得持续{{ raisemoralehasteduration }}秒的<speed>{{ raisemoralehaste }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      GangplankP: null,
      GangplankQ: null,
      GangplankW: null,
      GangplankE: null,
      GangplankR: null,
    },
  };
}
export { importModule };
