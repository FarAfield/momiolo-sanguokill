function importModule() {
  return {
    type: "champion",
    id: "Olaf",
    title: "狂战士",
    name: "奥拉夫",
    avatar: "Olaf.png",
    skins: [
      { name: "default", skin: "Olaf_0.jpg" },
      { name: "烈焰猛士 奥拉夫", skin: "Olaf_1.jpg" },
      { name: "冰河时代 奥拉夫", skin: "Olaf_2.jpg" },
      { name: "铁哥们儿 奥拉夫", skin: "Olaf_3.jpg" },
      { name: "五杀摇滚鼓手 奥拉夫", skin: "Olaf_4.jpg" },
      { name: "黑暗骑士 奥拉夫", skin: "Olaf_5.jpg" },
      { name: "牛扒狂战 奥拉夫", skin: "Olaf_6.jpg" },
      { name: "SKT T1 奥拉夫", skin: "Olaf_15.jpg" },
      { name: "屠龙勇士 奥拉夫", skin: "Olaf_16.jpg" },
      { name: "光明哨兵 奥拉夫", skin: "Olaf_25.jpg" },
      { name: "五杀摇滚 III：遗失的章节 奥拉夫", skin: "Olaf_35.jpg" },
      { name: "地狱火 奥拉夫", skin: "Olaf_44.jpg" },
    ],
    spells: [
      {
        id: "OlafP",
        name: "狂战之怒",
        icon: "OlafP.png",
        description: "奥拉夫基于已损失生命值获得攻击速度和生命偷取。",
      },
      {
        id: "OlafQ",
        name: "逆流投掷",
        icon: "OlafQ.png",
        description:
          "奥拉夫扔出一把斧头，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>和至多持续{{ e3 }}秒(基于斧头移动距离)的{{ slowamount*100 }}%<status>减速</status>。被斧头命中的英雄还会损失<scaleArmor>{{ shredamount*100 }}%护甲</scaleArmor>，持续{{ debuffduration }}秒。<br /><br />如果奥拉夫拾起了斧头，那么这个技能的冷却时间会缩短至{{ tooltipcdrefund }}秒，如果在斧头被扔出{{ tooltipcdrefund }}秒后拾起斧头，则完全返还冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "OlafW",
        name: "挺过去",
        icon: "OlafW.png",
        description:
          "奥拉夫获得持续{{ duration }}秒的<attackSpeed>{{ attackspeed*100 }}%攻击速度</attackSpeed>，以及持续{{ shieldduration }}秒的<shield>{{ baseshield }}外加{{ shieldpercmissinghp*100 }}%已损失生命值的护盾值(最大值为{{ maxshieldcalc }}护盾值，在低于{{ thresholdformax*100 }}%时提供)</shield>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "OlafE",
        name: "鲁莽挥击",
        icon: "OlafE.png",
        description:
          "奥拉夫狂野地挥舞他的双斧，造成<trueDamage>{{ totaldamage }}真实伤害</trueDamage>。如果该敌人阵亡，那么会返还此技能的消耗。<br /><br />攻击会使这个技能的冷却时间缩短1秒，在攻击野怪时，缩短值提升至2秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "OlafR",
        name: "诸神黄昏",
        icon: "OlafR.png",
        description:
          "<spellPassive>被动：</spellPassive>奥拉夫获得<scaleArmor>{{ resists }}护甲</scaleArmor>和<scaleMR>{{ resists }}魔法抗性</scaleMR>。<br /><br /><spellActive>主动：</spellActive>奥拉夫净化掉他身上的所有<status>定身</status>和<status>限制</status>效果并且在接下来的{{ duration }}秒内免疫这些效果。在激活时，奥拉夫获得<scaleAD>{{ ad }}攻击力</scaleAD>。用一次攻击或<spellName>鲁莽挥击</spellName>命中一名英雄时，会使持续时间延长{{ durationextension }}秒。<br /><br />此外，奥拉夫会在朝着敌方英雄时获得<speed>{{ haste*100 }}%移动速度</speed>，持续{{ hasteduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      OlafP: null,
      OlafQ: null,
      OlafW: null,
      OlafE: null,
      OlafR: null,
    },
  };
}
export { importModule };
