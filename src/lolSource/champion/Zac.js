function importModule() {
  return {
    type: "champion",
    id: "Zac",
    title: "生化魔人",
    name: "扎克",
    avatar: "Zac.png",
    skins: [
      { name: "default", skin: "Zac_0.jpg" },
      { name: "邪恶魔人 扎克", skin: "Zac_1.jpg" },
      { name: "泳池派对 扎克", skin: "Zac_2.jpg" },
      { name: "SKT T1 扎克", skin: "Zac_6.jpg" },
      { name: "战地机甲 扎克", skin: "Zac_7.jpg" },
      { name: "至高天 扎克", skin: "Zac_14.jpg" },
      { name: "香浓芝士 扎克", skin: "Zac_24.jpg" },
    ],
    spells: [
      {
        id: "ZacP",
        name: "细胞分裂",
        icon: "ZacP.png",
        description:
          "扎克每用技能命中一次敌人，自己的一小块粘液就会飞溅出去。扎克可以重新吸收这些粘液，来为自己回复生命值。在承受致命伤害时，扎克会分裂成四块细胞组织，并试图重新结合。如果在短时间后，仍然有细胞组织存活，那么他就会重生，重生时的生命值取决于存活的细胞组织数量。细胞组织会继承一部分扎克的最大生命值、护甲和魔法抗性。这个技能的冷却时间为5分钟。",
      },
      {
        id: "ZacQ",
        name: "延伸打击",
        icon: "ZacQ.png",
        description:
          "扎克伸展他的手臂，将其吸附到命中的第一个敌人身上以造成<magicDamage>{{ damagetooltip }}魔法伤害</magicDamage>并暂时将该敌人<status>减速</status>。扎克的下次攻击会提升距离并且造成相同的伤害和<status>减速</status>。<br /><br />如果扎克用这次攻击命中了一个<i>不同</i>的敌人，那么他会将这两个敌人朝着彼此<status>击飞</status>。如果这两个敌人产生碰撞，那么他们及他们附近的敌人都会受到<magicDamage>{{ damagetooltip }}魔法伤害</magicDamage>并被暂时<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZacW",
        name: "不稳定物质",
        icon: "ZacW.png",
        description:
          "扎克的躯体进行喷溅，对附近的敌人造成<magicDamage>{{ basedamage }}+{{ displaypercentdamage }}最大生命值的魔法伤害</magicDamage>。<br /><br />吸收<keywordMajor>粘液</keywordMajor>可使【不稳定物质】的冷却时间缩短1秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZacE",
        name: "橡筋弹弓",
        icon: "ZacE.png",
        description:
          "<charge>开始蓄力：</charge>扎克将自身绷紧，在{{ e4 }}秒里积攒一次冲刺。<br /><br /><release>释放：</release>扎克将自身发射出去，并<status>击飞</status>着陆点位置的敌人们至多{{ maxstun }}秒(基于蓄力时间)并对他们造成<magicDamage>{{ damage }}魔法伤害</magicDamage>。扎克每命中一名敌方英雄就会生成一团额外的<keywordMajor>粘液</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZacR",
        name: "动感弹球",
        icon: "ZacR.png",
        description:
          "扎克弹跳{{ bounces }}次。弹跳在首次命中敌人时会将其<status>击退</status>并造成<magicDamage>{{ damageperbounce }}魔法伤害</magicDamage>。后续弹跳会造成<magicDamage>{{ damagepersubsequentbounce }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。<br /><br />扎克在此期间持续获得至多<speed>{{ endingms*100 }}%移动速度</speed>并且可以在弹跳时施放<spellName>不稳定物质</spellName>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: { ZacP: null, ZacQ: null, ZacW: null, ZacE: null, ZacR: null },
  };
}
export { importModule };
