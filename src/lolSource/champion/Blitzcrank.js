function importModule() {
  return {
    type: "champion",
    id: "Blitzcrank",
    title: "蒸汽机器人",
    name: "布里茨",
    avatar: "Blitzcrank.png",
    skins: [
      { name: "default", skin: "Blitzcrank_0.jpg" },
      { name: "铁锈斑斑 布里茨", skin: "Blitzcrank_1.jpg" },
      { name: "钢铁之门 布里茨", skin: "Blitzcrank_2.jpg" },
      { name: "擂台皇帝 布里茨", skin: "Blitzcrank_3.jpg" },
      { name: "陆地王者4WD 布里茨", skin: "Blitzcrank_4.jpg" },
      { name: "戴一个表 布里茨", skin: "Blitzcrank_5.jpg" },
      { name: "苹果机器人 布里茨", skin: "Blitzcrank_6.jpg" },
      { name: "防暴机器人 布里茨", skin: "Blitzcrank_7.jpg" },
      { name: "战场BOSS 布里茨", skin: "Blitzcrank_11.jpg" },
      { name: "暮色枪骑 布里茨", skin: "Blitzcrank_20.jpg" },
      { name: "银白枪骑 布里茨", skin: "Blitzcrank_21.jpg" },
      { name: "大魔法锅 布里茨", skin: "Blitzcrank_22.jpg" },
      { name: "太空律动 “猫猫” 布里和里茨", skin: "Blitzcrank_29.jpg" },
      { name: "胜利机器人 布里茨", skin: "Blitzcrank_36.jpg" },
      { name: "巅峰之星 布里茨", skin: "Blitzcrank_47.jpg" },
      { name: "巨神蜂 布里茨", skin: "Blitzcrank_56.jpg" },
    ],
    spells: [
      {
        id: "BlitzcrankP",
        name: "法力屏障",
        icon: "BlitzcrankP.png",
        description: "布里茨在血量过低时会获得一层基于它法力值的护盾。",
      },
      {
        id: "BlitzcrankQ",
        name: "机械飞爪",
        icon: "BlitzcrankQ.png",
        description:
          "布里茨射出它的右拳，将命中的第一个敌人<status>拉拽</status>向它并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BlitzcrankW",
        name: "过载运转",
        icon: "BlitzcrankW.png",
        description:
          "布里茨进行超级充能，获得<speed>持续衰减的{{ movespeedmod*100 }}%移动速度</speed>和<attackSpeed>{{ attackspeedmod*100 }}%攻击速度</attackSpeed>，持续{{ duration }}秒。<br /><br />持续期间过后，布里茨会<status>减速</status>{{ movespeedmodreduction*100 }}%，持续{{ slowduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BlitzcrankE",
        name: "能量铁拳",
        icon: "BlitzcrankE.png",
        description:
          "布里茨给它的拳头充能，使它的下次攻击可以<status>击飞</status>{{ ccduration }}秒并造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "BlitzcrankR",
        name: "静电力场",
        icon: "BlitzcrankR.png",
        description:
          "<spellPassive>被动：</spellPassive>在这个技能可以使用时，闪电会充盈着布里茨的双拳，标记它攻击的敌人。在1秒后，被标记的敌人会被震击，受到<magicDamage>{{ passivedamage }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>布里茨进行过度充能，对附近的敌人造成<magicDamage>{{ activedamage }}魔法伤害</magicDamage>和{{ silenceduration }}秒<status>沉默</status>效果。敌人的护盾也会被摧毁。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      BlitzcrankP: null,
      BlitzcrankQ: null,
      BlitzcrankW: null,
      BlitzcrankE: null,
      BlitzcrankR: null,
    },
  };
}
export { importModule };
