function importModule() {
  return {
    type: "champion",
    id: "Aphelios",
    title: "残月之肃",
    name: "厄斐琉斯",
    avatar: "Aphelios.png",
    skins: [
      { name: "default", skin: "Aphelios_0.jpg" },
      { name: "黑夜使者 厄斐琉斯", skin: "Aphelios_1.jpg" },
      { name: "福牛守护者 厄斐琉斯", skin: "Aphelios_9.jpg" },
      { name: "EDG 厄斐琉斯", skin: "Aphelios_18.jpg" },
      { name: "灵魂莲华 厄斐琉斯", skin: "Aphelios_20.jpg" },
      { name: "心之钢 厄斐琉斯", skin: "Aphelios_30.jpg" },
    ],
    spells: [
      {
        id: "ApheliosP",
        name: "传知者与真知者",
        icon: "ApheliosP.png",
        description:
          "厄斐琉斯拥有5件由他妹妹拉露恩所制的皎月武器。他同一时间可以使用2件：1件主手武器和1件副手武器。每件武器都有1种独特的普攻方式和1个独特的技能。攻击和技能都会消耗该武器的弹药。在弹药耗尽后，厄斐琉斯会弃掉该武器，并且拉露恩会召唤下一件武器给厄斐琉斯。 ",
      },
      {
        id: "ApheliosQ",
        name: "武器技能",
        icon: "ApheliosQ.png",
        description: "{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ApheliosW",
        name: "月相轮转",
        icon: "ApheliosW.png",
        description:
          '切换主手武器与副手武器，装备<b><i><span class="colora64dff">坠明</span></i></b>。{{ spellmodifierdescriptionappend }}',
      },
      {
        id: "ApheliosE",
        name: "武器队列系统",
        icon: "ApheliosE.png",
        description: "{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ApheliosR",
        name: "清辉夜凝",
        icon: "ApheliosR.png",
        description:
          "厄斐琉斯发射一道浓缩爆裂的月光，在命中一位敌方英雄时爆炸，以对周围的敌人们造成<physicalDamage>{{ maxdamage }}物理伤害</physicalDamage>。<br /><br />随后，厄斐琉斯会用他的主手武器攻击所有英雄。{{ Spell_ApheliosR_WeaponMod_{{ f1 }} }}{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      ApheliosP: null,
      ApheliosQ: null,
      ApheliosW: null,
      ApheliosE: null,
      ApheliosR: null,
    },
  };
}
export { importModule };
