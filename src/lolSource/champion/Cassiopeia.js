function importModule() {
  return {
    type: "champion",
    id: "Cassiopeia",
    title: "魔蛇之拥",
    name: "卡西奥佩娅",
    avatar: "Cassiopeia.png",
    skins: [
      { name: "default", skin: "Cassiopeia_0.jpg" },
      { name: "荒漠之咬 卡西奥佩娅", skin: "Cassiopeia_1.jpg" },
      { name: "深海妖姬 卡西奥佩娅", skin: "Cassiopeia_2.jpg" },
      { name: "蛇发女妖 卡西奥佩娅", skin: "Cassiopeia_3.jpg" },
      { name: "碧玉之牙 卡西奥佩娅", skin: "Cassiopeia_4.jpg" },
      { name: "上古魔蛇 卡西奥佩娅", skin: "Cassiopeia_8.jpg" },
      { name: "灵魂莲华 卡西奥佩娅", skin: "Cassiopeia_9.jpg" },
      { name: "魔女 卡西奥佩娅", skin: "Cassiopeia_18.jpg" },
      { name: "魅惑女巫 卡西奥佩娅", skin: "Cassiopeia_28.jpg" },
    ],
    spells: [
      {
        id: "CassiopeiaP",
        name: "优雅蛇行",
        icon: "CassiopeiaP.png",
        description: "卡西奥佩娅随等级获得移动速度，但她无法购买鞋子类装备。",
      },
      {
        id: "CassiopeiaQ",
        name: "瘟毒爆炸",
        icon: "CassiopeiaQ.png",
        description:
          "卡西奥佩娅引爆毒性气体，使敌人<keywordMajor>中毒</keywordMajor>并且在{{ e2 }}秒内造成<magicDamage>{{ tooltiptotaldamage }}魔法伤害</magicDamage>。命中一名英雄会为卡西奥佩娅提供在{{ e4 }}秒里持续衰减的<speed>{{ e3 }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CassiopeiaW",
        name: "剧毒迷雾",
        icon: "CassiopeiaW.png",
        description:
          "卡西奥佩娅吐出毒液，留下一团持续{{ e4 }}秒的毒云。毒云内的敌人们每秒受到<magicDamage>{{ damagepersecond }}魔法伤害</magicDamage>，<keywordMajor>中毒</keywordMajor>，<status>缚地</status>，以及<status>减速</status>{{ e2 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CassiopeiaE",
        name: "双生毒牙",
        icon: "CassiopeiaE.png",
        description:
          "卡西奥佩娅发射致命的毒牙，造成<magicDamage>{{ basicdamage }}魔法伤害</magicDamage>。如果敌人已经<keywordMajor>中毒</keywordMajor>，那么还会受到额外的<magicDamage>{{ bonuspoisoneddamage }}魔法伤害</magicDamage>并且卡西奥佩娅回复<healing>{{ healcalc }}生命值</healing>，对抗小兵和小型野怪降低至<healing>{{ healcalcminion }}生命值</healing>。<br /><br />如果这个技能击杀了目标，那么卡西奥佩娅回复<scaleMana>{{ cost }}法力值</scaleMana>。<br /><br />{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CassiopeiaR",
        name: "石化凝视",
        icon: "CassiopeiaR.png",
        description:
          "卡西奥佩娅释放一道震慑敌人的凝视，造成<magicDamage>{{ rdamage }}魔法伤害</magicDamage>并将面朝她的敌人们<status>晕眩</status>{{ rccduration }}秒。作为替代，未面朝她的敌人们会被<status>减速</status>{{ rslowpercent }}%，在相同时长内持续衰减。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      CassiopeiaP: null,
      CassiopeiaQ: null,
      CassiopeiaW: null,
      CassiopeiaE: null,
      CassiopeiaR: null,
    },
  };
}
export { importModule };
