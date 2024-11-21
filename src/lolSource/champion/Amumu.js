function importModule() {
  return {
    type: "champion",
    id: "Amumu",
    title: "殇之木乃伊",
    name: "阿木木",
    avatar: "Amumu.png",
    skins: [
      { name: "default", skin: "Amumu_0.jpg" },
      { name: "法老 阿木木", skin: "Amumu_1.jpg" },
      { name: "狂欢 阿木木", skin: "Amumu_2.jpg" },
      { name: "情绪摇滚 阿木木", skin: "Amumu_3.jpg" },
      { name: "阿木木:“主人不要我了”", skin: "Amumu_4.jpg" },
      { name: "王子不是我 阿木木", skin: "Amumu_5.jpg" },
      { name: "小小骑士 阿木木", skin: "Amumu_6.jpg" },
      { name: "殇之机器人 阿木木", skin: "Amumu_7.jpg" },
      { name: "惊悚派对 阿木木", skin: "Amumu_8.jpg" },
      { name: "地狱火 阿木木", skin: "Amumu_17.jpg" },
      { name: "海克斯科技 阿木木", skin: "Amumu_23.jpg" },
      { name: "南瓜头王子 阿木木", skin: "Amumu_24.jpg" },
      { name: "青花瓷 阿木木", skin: "Amumu_34.jpg" },
      { name: "黯然心伤 阿木木", skin: "Amumu_44.jpg" },
    ],
    spells: [
      {
        id: "AmumuP",
        name: "诅咒之触",
        icon: "AmumuP.png",
        description:
          "阿木木的普通攻击会<font color='#9b0f5f'>诅咒</font>他的敌人，使敌人会从即将到来的魔法伤害中承受额外真实伤害。",
      },
      {
        id: "AmumuQ",
        name: "绷带牵引",
        icon: "AmumuQ.png",
        description:
          "阿木木掷出一条绷带，然后将他拉向命中的第一个敌人，使其<status>晕眩</status>{{ e2 }}秒，并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />这个技能拥有2层充能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AmumuW",
        name: "绝望光环",
        icon: "AmumuW.png",
        description:
          "<toggle>开启：</toggle>阿木木开始哭泣，每秒对附近的敌人们造成<magicDamage>{{ basedamage }}外加{{ totalhealthdamage }}%最大生命值的魔法伤害</magicDamage>并刷新<keywordMajor>诅咒</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AmumuE",
        name: "阿木木的愤怒",
        icon: "AmumuE.png",
        description:
          "<spellPassive>被动：</spellPassive>阿木木受到的物理伤害降低{{ damagereduction }}。此外，当阿木木被一次攻击命中时，这个技能的冷却时间会缩短{{ e3 }}秒。<br /><br /><spellActive>主动：</spellActive>阿木木大发脾气，对附近的敌人们造成<magicDamage>{{ tantrumdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AmumuR",
        name: "木乃伊之咒",
        icon: "AmumuR.png",
        description:
          "阿木木用绷带将周围敌方单位通通缠住，将其<status>晕眩</status>{{ rduration }}秒，造成<magicDamage>{{ rcalculateddamage }}魔法伤害</magicDamage>并施加<keywordMajor>诅咒</keywordMajor>效果。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AmumuP: null,
      AmumuQ: null,
      AmumuW: null,
      AmumuE: null,
      AmumuR: null,
    },
  };
}
export { importModule };
