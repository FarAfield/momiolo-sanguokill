function importModule() {
  return {
    type: "champion",
    id: "Pantheon",
    title: "不屈之枪",
    name: "潘森",
    avatar: "Pantheon.png",
    skins: [
      { name: "default", skin: "Pantheon_0.jpg" },
      { name: "斯巴达之魂 潘森", skin: "Pantheon_1.jpg" },
      { name: "万人敌 潘森", skin: "Pantheon_2.jpg" },
      { name: "英仙座珀尔修斯 潘森", skin: "Pantheon_3.jpg" },
      { name: "钢铁意志 潘森", skin: "Pantheon_4.jpg" },
      { name: "大夏武士 潘森", skin: "Pantheon_5.jpg" },
      { name: "屠龙勇士 潘森", skin: "Pantheon_6.jpg" },
      { name: "丧尸杀手 潘森", skin: "Pantheon_7.jpg" },
      { name: "面包之王 潘森", skin: "Pantheon_8.jpg" },
      { name: "未来战士 潘森", skin: "Pantheon_16.jpg" },
      { name: "破败军团 潘森", skin: "Pantheon_25.jpg" },
      { name: "至臻 飞升战神 潘森", skin: "Pantheon_26.jpg" },
      { name: "灰烬征服者 潘森", skin: "Pantheon_36.jpg" },
    ],
    spells: [
      {
        id: "PantheonP",
        name: "矢志不退",
        icon: "PantheonP.png",
        description: "在数次技能或攻击后，潘森的下一个技能会得到强化。",
      },
      {
        id: "PantheonQ",
        name: "贯星长枪",
        icon: "PantheonQ.png",
        description:
          '<span class="colorFF8C00">秒放：</span>潘森刺出他的长枪，对命中的敌人们造成<physicalDamage>{{ tapdamagecalc }}物理伤害</physicalDamage>。返还此技能{{ tapcooldownrefund*100 }}%的冷却时间。<br /><br /><span class="colorFF8C00">蓄力：</span>潘森挥出他的长枪，对命中的首个敌人造成<physicalDamage>{{ holddamagecalc }}物理伤害</physicalDamage>并对后续目标造成的伤害减少{{ damagefalloff*100 }}%。<br /><br />此技能会在对抗低于{{ crithealththreshold*100 }}%生命值的敌人时获得强化，造成<physicalDamage>{{ executedamagecalcmodified }}物理伤害</physicalDamage>作为替代。<br /><br /><span class="colorEDDA74">矢志不退加成：</span>造成额外的<physicalDamage>{{ empowereddamagecalc }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "PantheonW",
        name: "斗盾跃击",
        icon: "PantheonW.png",
        description:
          "潘森跃向他的目标，<status>晕眩</status>{{ stunduration }}秒并造成<physicalDamage>{{ maxhealthdamagecalc }}最大生命值物理伤害</physicalDamage>。<br /><br /><keywordMajor>矢志不退加成：</keywordMajor>潘森的下一次攻击会打击{{ empowerednumhits }}次，总共造成<physicalDamage>{{ empowereddamagemultcalcmodified }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "PantheonE",
        name: "神佑枪阵",
        icon: "PantheonE.png",
        description:
          '潘森架起他的圣盾并与选定方向上的敌人交战{{ shieldduration }}秒，变得免疫来自所选方向的伤害(防御塔除外)并在持续期间造成<physicalDamage>{{ damagecalc }}物理伤害</physicalDamage>。在引导之后，潘森会用他的圣盾进行猛击，造成<physicalDamage>{{ shielddamagecalc }}物理伤害</physicalDamage>。<br /><br /><span class="colorEDDA74">矢志不退加成：</span>当潘森猛击他的圣盾时，获得持续{{ resistsduration }}秒的<scaleArmor>{{ resistscalc }}护甲</scaleArmor>和<scaleMR>{{ resistscalc }}魔法抗性</scaleMR>，以及持续{{ speedduration }}秒的<speed>{{ speedamount*100 }}%移动速度</speed>。<br />{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "PantheonR",
        name: "大荒星陨",
        icon: "PantheonR.png",
        description:
          '<spellPassive>被动：</spellPassive>潘森获得{{ armorpenetration*100 }}%护甲穿透。<br /><br /><spellActive>主动：</spellActive>潘森聚集他的力量以跃至空中。他会从天上掷出他的长枪，在小范围内造成<physicalDamage>{{ spell.pantheonq:holddamagecalc }}物理伤害</physicalDamage>和持续{{ spearslowduration }}秒的{{ spearslow*100 }}%<status>减速</status>。<br /><br />潘森随后会如陨石一般落向目标区域。对一条直线上的敌人最多造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>(最多降低至{{ edgedamagereduction*100 }}%伤害，极小值出现于区域的边缘)。<br /><br />这个技能会立刻使<span class="colorEDDA74">矢志不退</span>准备就绪。{{ spellmodifierdescriptionappend }}',
      },
    ],
    effects: {
      PantheonP: null,
      PantheonQ: null,
      PantheonW: null,
      PantheonE: null,
      PantheonR: null,
    },
  };
}
export { importModule };
