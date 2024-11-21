function importModule() {
  return {
    type: "champion",
    id: "Pyke",
    title: "血港鬼影",
    name: "派克",
    avatar: "Pyke.png",
    skins: [
      { name: "default", skin: "Pyke_0.jpg" },
      { name: "怨之砂 派克", skin: "Pyke_1.jpg" },
      { name: "腥红之月 派克", skin: "Pyke_9.jpg" },
      { name: "源计划：毁灭 派克", skin: "Pyke_16.jpg" },
      { name: "灵能特工 派克", skin: "Pyke_25.jpg" },
      { name: "光明哨兵 派克", skin: "Pyke_34.jpg" },
      { name: "灰烬骑士 派克", skin: "Pyke_44.jpg" },
      { name: "至高天 派克", skin: "Pyke_45.jpg" },
      { name: "斗魂觉醒 派克", skin: "Pyke_53.jpg" },
      { name: "至臻 斗魂觉醒 派克", skin: "Pyke_54.jpg" },
      { name: "魔域梦魇 派克", skin: "Pyke_64.jpg" },
    ],
    spells: [
      {
        id: "PykeP",
        name: "溺水之幸",
        icon: "PykeP.png",
        description:
          "当派克消失在敌人视野外时，他可从所受的来自敌方英雄的伤害中回复显著的生命值。派克无法从任何来源（装备、符文等）中获得额外最大生命值加成，而是会获得攻击力作为替代。",
      },
      {
        id: "PykeQ",
        name: "透骨尖钉",
        icon: "PykeQ.png",
        description:
          "<tap>秒放：</tap>派克进行戳刺，对命中的第一个敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，优先选择英雄。该目标随后会受到持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。<br /><br /><hold>蓄力：</hold>派克扔出他的鱼叉，对命中的第一个敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>并将其<status>拉拽</status>向他。该目标随后会受到持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。<br /><br />如果派克成功命中一名敌方英雄，或是引导并未成功完成，则会返还{{ manarefund*100 }}%法力消耗。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "PykeW",
        name: "幽潭潜行",
        icon: "PykeW.png",
        description:
          "派克获得<keywordStealth>伪装</keywordStealth>和在{{ e0 }}秒里持续衰减的<speed>{{ movespeed }}%移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "PykeE",
        name: "魅影浪洄",
        icon: "PykeE.png",
        description:
          "派克进行冲刺，并在他的身后留下一个很快回到他身边的溺毙魅影。魅影造成{{ stunduration }}秒<status>晕眩</status>并对英雄造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "PykeR",
        name: "涌泉之恨",
        icon: "PykeR.png",
        description:
          "派克对X型范围内的所有敌方英雄发起一次打击，闪烁并<danger>处决</danger>低于<scaleAD>{{ rdamage }}</scaleAD>生命值的目标们。生命值在处决阈值之上的英雄和非英雄单位会转而受到相当于{{ reduceddamage*100 }}%该数额(<physicalDamage>{{ reduceddamagefinal }}</physicalDamage>)的物理伤害。<br /><br />当有敌方英雄死在X范围内时，派克可以在{{ rrecastduration }}秒内免费地<recast>再次施放</recast>这个技能。如果派克处决了该英雄，则最后一个提供协助的友方英雄也将获得击杀金币。如果他没有处决该英雄，他将仍然获得击杀金币，就如同他已完成击杀一样。<br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      PykeP: null,
      PykeQ: null,
      PykeW: null,
      PykeE: null,
      PykeR: null,
    },
  };
}
export { importModule };
