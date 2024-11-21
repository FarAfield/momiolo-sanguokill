function importModule() {
  return {
    type: "champion",
    id: "Nasus",
    title: "沙漠死神",
    name: "内瑟斯",
    avatar: "Nasus.png",
    skins: [
      { name: "default", skin: "Nasus_0.jpg" },
      { name: "星空之门 内瑟斯", skin: "Nasus_1.jpg" },
      { name: "法老王朝 内瑟斯", skin: "Nasus_2.jpg" },
      { name: "死亡骑士 内瑟斯", skin: "Nasus_3.jpg" },
      { name: "警用试作体K-9 内瑟斯", skin: "Nasus_4.jpg" },
      { name: "炼狱魔犬 内瑟斯", skin: "Nasus_5.jpg" },
      { name: "单身贵族 内瑟斯", skin: "Nasus_6.jpg" },
      { name: "创世之神 内瑟斯", skin: "Nasus_10.jpg" },
      { name: "北辰之威 内瑟斯", skin: "Nasus_11.jpg" },
      { name: "战地机甲 内瑟斯", skin: "Nasus_16.jpg" },
      { name: "太空律动 “狗头” 内瑟斯", skin: "Nasus_25.jpg" },
      { name: "海珀利安小队 S02-阿努比斯 内瑟斯", skin: "Nasus_35.jpg" },
      { name: "黑夜使者 内瑟斯", skin: "Nasus_45.jpg" },
    ],
    spells: [
      {
        id: "NasusP",
        name: "吞噬灵魂",
        icon: "NasusP.png",
        description: "内瑟斯吸取敌人的生命能量，从而获得生命偷取加成。",
      },
      {
        id: "NasusQ",
        name: "汲魂痛击",
        icon: "NasusQ.png",
        description:
          "内瑟斯的下次攻击造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。用这个攻击击杀一名敌人后，会使其伤害永久提升{{ basicstacks }}，击杀英雄、大型小兵和大型野怪的伤害提升为{{ bigstacks }}。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NasusW",
        name: "枯萎",
        icon: "NasusW.png",
        description:
          "内瑟斯使一名英雄衰老，使其<status>减速</status>{{ slowbase }}%，并在{{ duration }}秒内持续提升至{{ maxslowtooltiponly }}%。目标的<attackSpeed>攻击速度</attackSpeed>也会降低，相当于该<status>减速</status>幅度的{{ attackspeedslowmult*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NasusE",
        name: "灵魂烈焰",
        icon: "NasusE.png",
        description:
          "内瑟斯引发一团灵魂烈焰，造成<magicDamage>{{ initialdamage }}魔法伤害</magicDamage>。区域内的敌人们会失去<scaleArmor>{{ e2 }}%护甲</scaleArmor>并在{{ e3 }}秒里持续受到共<magicDamage>{{ totaldotdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NasusR",
        name: "死神降临",
        icon: "NasusR.png",
        description:
          "沙漠风暴赐予内瑟斯力量，使他在15秒的持续时间内获得<healing>{{ bonushealth }}最大生命值</healing>，以及{{ initialresistgain }}<scaleArmor>护甲</scaleArmor>与<scaleMR>魔法抗性</scaleMR>。<br /><br />在风暴肆虐时，他每秒对周围目标造成<magicDamage>{{ damagecalc }}最大生命值的魔法伤害</magicDamage>，并且<spellName>汲魂痛击</spellName>的冷却时间缩短{{ qcdr*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      NasusP: null,
      NasusQ: null,
      NasusW: null,
      NasusE: null,
      NasusR: null,
    },
  };
}
export { importModule };
