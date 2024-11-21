function importModule() {
  return {
    type: "champion",
    id: "Singed",
    title: "炼金术士",
    name: "辛吉德",
    avatar: "Singed.png",
    skins: [
      { name: "default", skin: "Singed_0.jpg" },
      { name: "防暴士兵 辛吉德", skin: "Singed_1.jpg" },
      { name: "机械污染 辛吉德", skin: "Singed_2.jpg" },
      { name: "冲浪高手 辛吉德", skin: "Singed_3.jpg" },
      { name: "科学狂人 辛吉德", skin: "Singed_4.jpg" },
      { name: "炼金狂士 辛吉德", skin: "Singed_5.jpg" },
      { name: "冰雪节 辛吉德", skin: "Singed_6.jpg" },
      { name: "SSW 辛吉德", skin: "Singed_7.jpg" },
      { name: "黑色天灾 辛吉德", skin: "Singed_8.jpg" },
      { name: "养蜂人 辛吉德", skin: "Singed_9.jpg" },
      { name: "抵抗军绿魔 辛吉德", skin: "Singed_10.jpg" },
      { name: "宇航员 辛吉德", skin: "Singed_19.jpg" },
    ],
    spells: [
      {
        id: "SingedP",
        name: "剧毒冲流",
        icon: "SingedP.png",
        description:
          "辛吉德借助附近英雄进行漂移，在经过他们时获得爆发性的移动速度加成。",
      },
      {
        id: "SingedQ",
        name: "剧毒踪迹",
        icon: "SingedQ.png",
        description:
          "<toggle>激活：</toggle>辛吉德在身后留下一条剧毒踪迹，对经过它的敌人造成每秒<magicDamage>{{ damagepersecond }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SingedW",
        name: "强力粘胶",
        icon: "SingedW.png",
        description:
          "辛吉德猛掷出一个装满粘性液体的桶，对区域内的敌人造成<status>缚地</status>和{{ slowpercent }}%<status>减速</status>，持续{{ wduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SingedE",
        name: "过肩摔",
        icon: "SingedE.png",
        description:
          "辛吉德对一名敌人进行过肩摔，造成<magicDamage>{{ basedamage }}外加{{ e3 }}%最大生命值的魔法伤害</magicDamage>。<br /><br />如果辛吉德将一名目标摔到他的<spellName>强力粘胶</spellName>上，那么该目标还会被<status>禁锢</status>{{ e2 }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "SingedR",
        name: "疯狂药剂",
        icon: "SingedR.png",
        description:
          "辛吉德喝下化学药剂，自身获得{{ statamount }}<scaleAP>法术强度</scaleAP>、<scaleArmor>护甲</scaleArmor>、<scaleMR>魔法抗性</scaleMR>、<speed>移动速度</speed>、<healing>生命回复</healing>和<scaleMana>法力回复</scaleMana>，持续{{ duration }}秒。在这个效果期间，辛吉德的<spellName>剧毒踪迹</spellName>还会施加持续{{ grievousduration }}秒的{{ grievousamount*100 }}%重伤。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      SingedP: null,
      SingedQ: null,
      SingedW: null,
      SingedE: null,
      SingedR: null,
    },
  };
}
export { importModule };
