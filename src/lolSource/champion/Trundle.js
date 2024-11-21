function importModule() {
  return {
    type: "champion",
    id: "Trundle",
    title: "巨魔之王",
    name: "特朗德尔",
    avatar: "Trundle.png",
    skins: [
      { name: "default", skin: "Trundle_0.jpg" },
      { name: "里尔击球手  特朗德尔", skin: "Trundle_1.jpg" },
      { name: "垃圾场  特朗德尔", skin: "Trundle_2.jpg" },
      { name: "传统造型 特朗德尔", skin: "Trundle_3.jpg" },
      { name: "巡逻警官 特朗德尔", skin: "Trundle_4.jpg" },
      { name: "创世之神 特朗德尔", skin: "Trundle_5.jpg" },
      { name: "屠龙勇士 特朗德尔", skin: "Trundle_6.jpg" },
      { name: "魔域梦魇 特朗德尔", skin: "Trundle_12.jpg" },
      { name: "超级电竞粉丝 特朗德尔", skin: "Trundle_21.jpg" },
    ],
    spells: [
      {
        id: "TrundleP",
        name: "国王的贡品",
        icon: "TrundleP.png",
        description:
          "每当附近有一个敌方单位死亡，特朗德尔都会获得相当于其一部分最大生命值的治疗效果。",
      },
      {
        id: "TrundleQ",
        name: "利齿撕咬",
        icon: "TrundleQ.png",
        description:
          "特朗德尔的下次攻击造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>和短暂的{{ slowamount*100 }}%<status>减速</status>，然后特朗德尔获得持续{{ sapdebuffduration }}秒的<physicalDamage>{{ bonusad }}攻击力</physicalDamage>并且敌人们在这期间失去<physicalDamage>{{ sappedad*-1 }}攻击力</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TrundleW",
        name: "冰封领域",
        icon: "TrundleW.png",
        description:
          "特朗德尔冻结一个区域{{ e4 }}秒。在其中时，他会获得<speed>{{ e1 }}%移动速度</speed>，<attackSpeed>{{ e2 }}%攻击速度</attackSpeed>，和{{ e3 }}%治疗效果提升。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TrundleE",
        name: "寒冰之柱",
        icon: "TrundleE.png",
        description:
          "特朗德尔生成一个持续{{ e1 }}秒的冰柱，短暂<status>击退</status>它上方的敌人们并使附近的敌人们<status>减速</status>{{ e2 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TrundleR",
        name: "强权至上",
        icon: "TrundleR.png",
        description:
          "特朗德尔吸取一名敌方英雄的生命力，在{{ actualdurationofdrainbuff }}秒里持续造成共计<magicDamage>{{ totalpercenthpdamage }}最大生命值的魔法伤害</magicDamage>并偷取<scaleArmor>{{ armormrshred*100 }}%护甲</scaleArmor>和<scaleMR>魔法抗性</scaleMR>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TrundleP: null,
      TrundleQ: null,
      TrundleW: null,
      TrundleE: null,
      TrundleR: null,
    },
  };
}
export { importModule };
