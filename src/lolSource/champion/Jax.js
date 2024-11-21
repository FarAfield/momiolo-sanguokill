function importModule() {
  return {
    type: "champion",
    id: "Jax",
    title: "武器大师",
    name: "贾克斯",
    avatar: "Jax.png",
    skins: [
      { name: "default", skin: "Jax_0.jpg" },
      { name: "冰球队员 贾克斯", skin: "Jax_1.jpg" },
      { name: "万夫莫开 贾克斯", skin: "Jax_2.jpg" },
      { name: "宗师级钓鱼训练师 贾克斯", skin: "Jax_3.jpg" },
      { name: "卧虎藏龙 贾克斯", skin: "Jax_4.jpg" },
      { name: "百夫长 贾克斯", skin: "Jax_5.jpg" },
      { name: "少林武僧 贾克斯", skin: "Jax_6.jpg" },
      { name: "复仇武神 贾克斯", skin: "Jax_7.jpg" },
      { name: "SKT T1 贾克斯", skin: "Jax_8.jpg" },
      { name: "光明骑士 贾克斯", skin: "Jax_12.jpg" },
      { name: "武神 贾克斯", skin: "Jax_13.jpg" },
      { name: "王国机神白虎 贾克斯", skin: "Jax_14.jpg" },
      { name: "征服者 贾克斯", skin: "Jax_20.jpg" },
      { name: "至臻 征服者 贾克斯", skin: "Jax_21.jpg" },
      { name: "至高天 贾克斯", skin: "Jax_22.jpg" },
      { name: "新卧虎藏龙 贾克斯", skin: "Jax_32.jpg" },
      { name: "源计划：孤狼 贾克斯", skin: "Jax_33.jpg" },
    ],
    spells: [
      {
        id: "JaxP",
        name: "无情连打",
        icon: "JaxP.png",
        description: "贾克斯连续的普通攻击，会持续地提高他的攻击速度。",
      },
      {
        id: "JaxQ",
        name: "跳斩",
        icon: "JaxQ.png",
        description:
          "贾克斯跳向一个友方或敌方单位或守卫，如果目标是敌人则会造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JaxW",
        name: "蓄力一击",
        icon: "JaxW.png",
        description:
          "贾克斯给他的武器充能，使他的下次攻击或<spellName>跳斩</spellName>造成额外的<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JaxE",
        name: "反击风暴",
        icon: "JaxE.png",
        description:
          "贾克斯进入一个最多持续{{ dodgeduration }}秒的防御姿态，能够躲闪掉一切即将到来的攻击，并且减少{{ aoedamagereduction }}%来自群体技能的伤害。在{{ dodgeduration }}秒后，或<recast>再次施放</recast>后，贾克斯会造成<magicDamage>{{ totaldamage }} + {{ percenthealthdamage }}%最大生命值的魔法伤害</magicDamage>并使附近的敌人<status>晕眩</status>{{ stunduration }}秒。<br /><br />贾克斯每躲掉一次攻击，这个伤害值就会提升{{ percentincreasedperdodge*100 }}%，最多可提升至最大值<magicDamage>{{ maxdamage }} + {{ maxpercenthealthdamage }}%最大生命值</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JaxR",
        name: "武器大师",
        icon: "JaxR.png",
        description:
          "<spellPassive>被动：</spellPassive>{{ passivefallofftime }}秒内的每第三次攻击造成额外的<magicDamage>{{ onhitdamage }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>贾克斯将他的灯柱砸落，对附近的敌人们造成<magicDamage>{{ swingdamagetotal }}魔法伤害</magicDamage>。如果他命中了一名英雄，那么他会获得<scaleArmor>{{ basearmor }}护甲</scaleArmor>和<scaleMR>{{ basemr }}魔法抗性</scaleMR>，并且每额外命中一个英雄就会获得额外的<scaleArmor>{{ bonusarmor }}护甲</scaleArmor>和<scaleMR>{{ bonusmr }}魔法抗性</scaleMR>，持续{{ duration }}秒。在此期间，他每第二次攻击（而非每第三次攻击）造成额外的<magicDamage>魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: { JaxP: null, JaxQ: null, JaxW: null, JaxE: null, JaxR: null },
  };
}
export { importModule };
