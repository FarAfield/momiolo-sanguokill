function importModule() {
  return {
    type: "champion",
    id: "Caitlyn",
    title: "皮城女警",
    name: "凯特琳",
    avatar: "Caitlyn.png",
    skins: [
      { name: "default", skin: "Caitlyn_0.jpg" },
      { name: "抵抗军天使 凯特琳", skin: "Caitlyn_1.jpg" },
      { name: "荒野治安官 凯特琳", skin: "Caitlyn_2.jpg" },
      { name: "古墓丽影 凯特琳", skin: "Caitlyn_3.jpg" },
      { name: "冰原狙击 凯特琳", skin: "Caitlyn_4.jpg" },
      { name: "女警狙击 凯特琳", skin: "Caitlyn_5.jpg" },
      { name: "铁血狙击手 凯特琳", skin: "Caitlyn_6.jpg" },
      { name: "玉净夜叉 凯特琳", skin: "Caitlyn_10.jpg" },
      { name: "未来战士 凯特琳", skin: "Caitlyn_11.jpg" },
      { name: "泳池派对 凯特琳", skin: "Caitlyn_13.jpg" },
      { name: "电玩女神 凯特琳", skin: "Caitlyn_19.jpg" },
      { name: "至臻 电玩女神 凯特琳", skin: "Caitlyn_20.jpg" },
      { name: "战斗学院 凯特琳", skin: "Caitlyn_22.jpg" },
      { name: "双城之战 凯特琳", skin: "Caitlyn_28.jpg" },
      { name: "至臻 电玩女神 凯特琳 (2022)", skin: "Caitlyn_29.jpg" },
      { name: "净雪之月 凯特琳", skin: "Caitlyn_30.jpg" },
      { name: "怦然心动 凯特琳", skin: "Caitlyn_39.jpg" },
      { name: "DRX 凯特琳", skin: "Caitlyn_48.jpg" },
    ],
    spells: [
      {
        id: "CaitlynP",
        name: "爆头",
        icon: "CaitlynP.png",
        description:
          "每进行几次基础攻击，对中了她的陷阱或绳网的单位进行攻击时，凯特琳就会造成一次【爆头】效果，造成随暴击几率增长的额外伤害。在对中了陷阱或绳网的目标进行攻击时，凯特琳的【爆头】攻击距离翻倍。",
      },
      {
        id: "CaitlynQ",
        name: "和平使者",
        icon: "CaitlynQ.png",
        description:
          "凯特琳加速转动她的步枪来射出一颗穿刺弹，造成<physicalDamage>{{ initialdamage }}物理伤害</physicalDamage>。在子弹命中第一个单位后，它会绽开为一个更宽的弹体，造成<physicalDamage>{{ secondarydamage }}物理伤害</physicalDamage>。<br /><br />被<spellName>约德尔诱捕器</spellName>显形的敌人总会受到全额伤害。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CaitlynW",
        name: "约德尔诱捕器",
        icon: "CaitlynW.png",
        description:
          "凯特琳设置一个陷阱来<status>禁锢</status>踩中它的第一个英雄{{ e6 }}秒并提供该英雄的<keywordStealth>真实视野</keywordStealth>，持续3秒。陷阱持续{{ e3 }}秒，并且同一时间至多可存在{{ e5 }}个已激活的陷阱。这个技能有{{ e5 }}层充能({{ ammorechargetime }}秒充能时间)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CaitlynE",
        name: "90口径绳网",
        icon: "CaitlynE.png",
        description:
          "凯特琳发射一张绳网，并将她向后推送。绳网对命中的第一个目标造成持续{{ e2 }}秒的{{ e3 }}%<status>减速</status>和<magicDamage>{{ netdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "CaitlynR",
        name: "让子弹飞",
        icon: "CaitlynR.png",
        description:
          "凯特琳花费一段时间来引导并精心准备完美一击，然后她会开火，造成<physicalDamage>{{ rtotaldamage }}物理伤害</physicalDamage>，但其他敌方英雄能拦截子弹。这个技能在引导期间会提供目标的<keywordStealth>真实视野</keywordStealth>。<br /><br /><rules>基于凯特琳的暴击几率，至多造成{{ critchanceamp*100 }}%的额外伤害。</rules>{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      CaitlynP: null,
      CaitlynQ: null,
      CaitlynW: null,
      CaitlynE: null,
      CaitlynR: null,
    },
  };
}
export { importModule };
