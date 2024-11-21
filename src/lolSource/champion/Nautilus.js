function importModule() {
  return {
    type: "champion",
    id: "Nautilus",
    title: "深海泰坦",
    name: "诺提勒斯",
    avatar: "Nautilus.png",
    skins: [
      { name: "default", skin: "Nautilus_0.jpg" },
      { name: "失落大陆 诺提勒斯", skin: "Nautilus_1.jpg" },
      { name: "地底迷城 诺提勒斯", skin: "Nautilus_2.jpg" },
      { name: "宇航员 诺提勒斯", skin: "Nautilus_3.jpg" },
      { name: "光明骑士 诺提勒斯", skin: "Nautilus_4.jpg" },
      { name: "创世之神 诺提勒斯", skin: "Nautilus_5.jpg" },
      { name: "征服者 诺提勒斯", skin: "Nautilus_6.jpg" },
      { name: "山海绘卷 诺提勒斯", skin: "Nautilus_9.jpg" },
      { name: "魔域梦魇 诺提勒斯", skin: "Nautilus_18.jpg" },
      { name: "星界圣骑 诺提勒斯", skin: "Nautilus_27.jpg" },
      { name: "水晶泰坦 诺提勒斯", skin: "Nautilus_36.jpg" },
    ],
    spells: [
      {
        id: "NautilusP",
        name: "排山倒海",
        icon: "NautilusP.png",
        description:
          "诺提勒斯对一名目标发起的第一次攻击会造成提升过的物理伤害并将其暂时禁锢。",
      },
      {
        id: "NautilusQ",
        name: "疏通航道",
        icon: "NautilusQ.png",
        description:
          "诺提勒斯向前猛掷他的船锚。如果它命中了一个敌方单位，诺提勒斯就会将他自己和目标吸到一起，同时造成<magicDamage>{{ qdamagecalc }}魔法伤害</magicDamage>，并将目标暂时<status>晕眩</status>。如果它命中了地形，诺提勒斯则会把自己拉到船锚处。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NautilusW",
        name: "泰坦之怒",
        icon: "NautilusW.png",
        description:
          "诺提勒斯获得一层持续{{ shieldduration }}秒的<shield>{{ shieldcalc }}护盾</shield>。当<shield>护盾</shield>存在时，诺提勒斯的攻击会在2秒里对目标及目标周围的敌人持续造成共<magicDamage>{{ dotdamagecalc }}额外魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NautilusE",
        name: "暗流涌动",
        icon: "NautilusE.png",
        description:
          "诺提勒斯在他身边生成3道爆炸波纹，每道爆炸波纹都会对范围内的敌人们造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>并使他们<status>减速</status>{{ slowpercent*100 }}%，在{{ slowduration }}秒里持续衰减。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "NautilusR",
        name: "深海冲击",
        icon: "NautilusR.png",
        description:
          "诺提勒斯发射一道冲击波来追击一名敌方英雄，造成<magicDamage>{{ primarytargetdamage }}魔法伤害</magicDamage>，<status>击飞</status>目标并将其<status>晕眩</status>{{ stunduration }}秒。冲击波还会<status>击飞</status>和<status>晕眩</status>沿途经过的其它敌人，并造成<magicDamage>{{ secondarytargetdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      NautilusP: null,
      NautilusQ: null,
      NautilusW: null,
      NautilusE: null,
      NautilusR: null,
    },
  };
}
export { importModule };
