function importModule() {
  return {
    type: "champion",
    id: "KogMaw",
    title: "深渊巨口",
    name: "克格莫",
    avatar: "KogMaw.png",
    skins: [
      { name: "default", skin: "KogMaw_0.jpg" },
      { name: "毛毛虫 克格莫", skin: "KogMaw_1.jpg" },
      { name: "索诺拉沙虫 克格莫", skin: "KogMaw_2.jpg" },
      { name: "帝王斑蝶 克格莫", skin: "KogMaw_3.jpg" },
      { name: "圣诞驯鹿 克格莫", skin: "KogMaw_4.jpg" },
      { name: "醒狮 克格莫", skin: "KogMaw_5.jpg" },
      { name: "深海怪鱼 克格莫", skin: "KogMaw_6.jpg" },
      { name: "侏罗纪化石 克格莫", skin: "KogMaw_7.jpg" },
      { name: "战地机甲 克格莫", skin: "KogMaw_8.jpg" },
      { name: "克格汪", skin: "KogMaw_9.jpg" },
      { name: "海克斯科技 克格莫", skin: "KogMaw_10.jpg" },
      { name: "奥术师 克格莫", skin: "KogMaw_19.jpg" },
      { name: "小蜜蜂 克格莫", skin: "KogMaw_28.jpg" },
      { name: "电格莫", skin: "KogMaw_37.jpg" },
      { name: "山海绘卷 克格莫", skin: "KogMaw_46.jpg" },
      { name: "胜利巨口 克格莫", skin: "KogMaw_55.jpg" },
    ],
    spells: [
      {
        id: "KogMawP",
        name: "来自艾卡西亚的惊喜",
        icon: "KogMawP.png",
        description: "在死后4秒，克格莫会爆炸，对周围的敌人造成真实伤害。",
      },
      {
        id: "KogMawQ",
        name: "腐蚀唾液",
        icon: "KogMawQ.png",
        description:
          "<spellPassive>被动：</spellPassive>克格莫获得<attackSpeed>{{ e2 }}%攻击速度</attackSpeed>。<br /><br /><spellActive>主动：</spellActive>克格莫抛射出一团腐蚀性的唾沫，对命中的第一个敌人造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，以及持续{{ e4 }}秒的<scaleArmor>{{ shredamount }}%护甲</scaleArmor>和<scaleMR>魔法抗性</scaleMR>击碎。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KogMawW",
        name: "生化弹幕",
        icon: "KogMawW.png",
        description:
          "克格莫获得{{ e1 }}攻击距离并且他的攻击造成额外的<magicDamage>{{ totalhealthdamage }}最大生命值的魔法伤害</magicDamage>，持续{{ e3 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KogMawE",
        name: "虚空淤泥",
        icon: "KogMawE.png",
        description:
          "克格莫呕出胆汁，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>并留下一条持续{{ e3 }}秒的软泥路径。软泥中的敌人们会被<status>减速</status>{{ slowamount }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KogMawR",
        name: "活体大炮",
        icon: "KogMawR.png",
        description:
          "克格莫朝一个区域发射一团酸液，造成<magicDamage>{{ basedamagecalc }}外加{{ tooltipmissinghealthdamageamp }}%每1%已损失生命值的魔法伤害</magicDamage>并使命中的敌人显形2秒。低于<healing>40%生命值</healing>的敌人们会转而受到<magicDamage>{{ maxdamagecalc }}魔法伤害</magicDamage>。<br /><br />{{ manacostduration }}秒内的后续发射会消耗额外的<scaleMana>{{ basecost }}法力</scaleMana>(最大值：<scaleMana>{{ manacostcap }}法力</scaleMana>)。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KogMawP: null,
      KogMawQ: null,
      KogMawW: null,
      KogMawE: null,
      KogMawR: null,
    },
  };
}
export { importModule };
