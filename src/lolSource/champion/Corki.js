function importModule() {
  return {
    type: "champion",
    id: "Corki",
    title: "英勇投弹手",
    name: "库奇",
    avatar: "Corki.png",
    skins: [
      { name: "default", skin: "Corki_0.jpg" },
      { name: "外星装甲 库奇", skin: "Corki_1.jpg" },
      { name: "雪橇速滑 库奇", skin: "Corki_2.jpg" },
      { name: "红色男爵 库奇", skin: "Corki_3.jpg" },
      { name: "急速前进 库奇", skin: "Corki_4.jpg" },
      { name: "海牛骑手  库奇", skin: "Corki_5.jpg" },
      { name: "神龙之翼 库奇", skin: "Corki_6.jpg" },
      { name: "Fnatic 库奇", skin: "Corki_7.jpg" },
      { name: "电玩上校 库奇", skin: "Corki_8.jpg" },
      { name: "柯基 库奇", skin: "Corki_18.jpg" },
      { name: "宇航员 库奇", skin: "Corki_26.jpg" },
    ],
    spells: [
      {
        id: "CorkiP",
        name: "海克斯科技军备",
        icon: "CorkiP.png",
        description:
          "库奇普通攻击的一部分伤害会转化为<trueDamage>真实伤害</trueDamage>。",
      },
      {
        id: "CorkiQ",
        name: "磷光炸弹",
        icon: "CorkiQ.png",
        description:
          "库奇抛射一颗炸弹，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。该区域及命中的敌方英雄会被显形{{ revealduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CorkiW",
        name: "瓦尔基里俯冲",
        icon: "CorkiW.png",
        description:
          "库奇飞越并烧焦一条路径，使其灼烧{{ trailduration }}秒。火焰中的敌人们在此期间至多受到<magicDamage>{{ maximumdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CorkiE",
        name: "格林机枪",
        icon: "CorkiE.png",
        description:
          "库奇朝他的前方发射加特林机枪，在{{ sprayduration }}秒里持续造成共<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>并至多击碎<scaleArmor>{{ shredmax*-1 }}护甲</scaleArmor>和<scaleMR>魔法抗性</scaleMR>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CorkiR",
        name: "火箭轰击",
        icon: "CorkiR.png",
        description:
          "库奇发射一颗导弹，导弹会在命中第一个敌人时爆炸，对周围的敌人们造成<physicalDamage>{{ rsmallmissiledamage }}物理伤害</physicalDamage>。每第三颗导弹会转而造成<physicalDamage>{{ rbigmissiledamage }}物理伤害</physicalDamage>。<br /><br />这个技能至多有{{ maxammotooltip }}层充能。每次对英雄的普攻会使充能时间缩短<attention>{{ attackrefund }}</attention>秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      CorkiP: null,
      CorkiQ: null,
      CorkiW: null,
      CorkiE: null,
      CorkiR: null,
    },
  };
}
export { importModule };
