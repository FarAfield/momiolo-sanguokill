function importModule() {
  return {
    type: "champion",
    id: "Milio",
    title: "明烛",
    name: "米利欧",
    avatar: "Milio.png",
    skins: [
      { name: "default", skin: "Milio_0.jpg" },
      { name: "花仙贤者 米利欧", skin: "Milio_1.jpg" },
      { name: "青蛙雨衣 米利欧", skin: "Milio_11.jpg" },
    ],
    spells: [
      {
        id: "MilioP",
        name: "热情洋溢！",
        icon: "MilioP.png",
        description:
          "米利欧的技能可以为队友提供增益，让他们下一次伤害造成更多伤害，并点燃目标。",
      },
      {
        id: "MilioQ",
        name: "火爆飞踢",
        icon: "MilioQ.png",
        description:
          "米利欧踢出一团火球，这个火球会<status>击退</status>命中的第一个敌人。如果它命中了敌人，则会弹至目标身后并爆炸，对周围的敌人们造成<magicDamage>{{ damage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamountpercent }}<status>减速</status>。<br /><br />用<spellName>火爆飞踢</spellName>命中至少一个敌方英雄时，会返还其{{ refundratio*100 }}%法力消耗。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MilioW",
        name: "依依不舍",
        icon: "MilioW.png",
        description:
          "米利欧创造一团炉火来跟随友方英雄们，持续{{ zoneduration }}秒。炉火附近的友方英雄们会在持续期间获得{{ rangepercent }}攻击距离并且持续回复共<healing>{{ healingovertime }}生命值</healing>。炉火还会每{{ healfrequencyseconds }}秒施加<spellName>热情洋溢！</spellName>。<br /><br /><recast>再次施放：</recast>改变炉火跟随的友方英雄。 {{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MilioE",
        name: "融融情谊",
        icon: "MilioE.png",
        description:
          "米利欧将一名友方英雄裹入护体火焰之中，提供<shield>{{ shieldcalc }}护盾值</shield>和持续{{ movespeedduration }}秒的<speed>{{ movespeedamount*100 }}%移动速度</speed>。<br /><br />这个技能有2层充能并且它的各种效果可在目标上堆叠。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MilioR",
        name: "生生不息",
        icon: "MilioR.png",
        description:
          "米利欧释放一道舒心火焰波纹给附近的友方英雄们，净化<status>限制</status>和<status>定身</status>效果，回复<healing>{{ healcalc }}生命值</healing>，并提供持续{{ tenacityduration }}秒的{{ tenacityamount*100 }}%韧性。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      MilioP: null,
      MilioQ: null,
      MilioW: null,
      MilioE: null,
      MilioR: null,
    },
  };
}
export { importModule };
