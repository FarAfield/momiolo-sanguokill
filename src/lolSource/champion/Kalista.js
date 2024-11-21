function importModule() {
  return {
    type: "champion",
    id: "Kalista",
    title: "复仇之矛",
    name: "卡莉丝塔",
    avatar: "Kalista.png",
    skins: [
      { name: "default", skin: "Kalista_0.jpg" },
      { name: "腥红之月 卡莉丝塔", skin: "Kalista_1.jpg" },
      { name: "冠军之矛 卡莉丝塔", skin: "Kalista_2.jpg" },
      { name: "SKT T1 卡莉丝塔", skin: "Kalista_3.jpg" },
      { name: "黑暗骑士 卡莉丝塔", skin: "Kalista_5.jpg" },
      { name: "花仙骑士 卡莉丝塔", skin: "Kalista_14.jpg" },
    ],
    spells: [
      {
        id: "KalistaP",
        name: "武术姿态",
        icon: "KalistaP.png",
        description:
          "如果卡莉丝塔在进行普攻或穿刺的同时被下达了移动指令，那么她会在发起进攻的同时朝着这个移动指令的方向位移小段距离。",
      },
      {
        id: "KalistaQ",
        name: "穿刺",
        icon: "KalistaQ.png",
        description:
          "卡莉丝塔掷出一支长矛，对命中的第一个目标造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。如果这个技能击杀了目标，那么长矛会继续前行，将<spellName>撕裂</spellName>的层数带给命中的下一个目标。<br /><br />卡莉丝塔可以在使用这个技能后使用<spellName>武术姿态</spellName>的冲刺。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KalistaW",
        name: "哨兵",
        icon: "KalistaW.png",
        description:
          "<spellPassive>被动：</spellPassive>当卡莉丝塔和她的<keywordMajor>誓约者</keywordMajor>都攻击相同的目标时，她会造成<magicDamage>{{ maxhealthdamage*100 }}%最大生命值的魔法伤害</magicDamage>。这个效果对每个目标有{{ pertargetcooldown }}秒冷却时间并且对非英雄单位有{{ maximummonsterdamage }}的伤害上限。<br /><br /><spellPassive>主动：</spellPassive>卡莉丝塔派出一个幽灵去巡视一个地区，持续3个来回。被发现的敌方英雄会被显形4秒。这个技能有2层充能({{ ammorechargetooltip }}秒充能时间)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KalistaE",
        name: "撕裂",
        icon: "KalistaE.png",
        description:
          "<spellPassive>被动：</spellPassive>卡莉丝塔的长矛会在目标身上存留4秒，可叠加任意次数。<br /><br /><spellActive>主动：</spellActive>卡莉丝塔从附近的敌人们身上拔出长矛，造成<physicalDamage>{{ normaldamage }}</physicalDamage>外加每根后续长矛<physicalDamage>{{ additionaldamage }}物理伤害</physicalDamage>。对命中的敌人们造成持续{{ slowduration }}秒的<attention>{{ totalslowamount }}</attention><status>减速</status>。<br /><br />如果这个技能击杀了至少一个目标，那么它的冷却时间会刷新并且它会返还<scaleMana>{{ manarefund }}法力值</scaleMana>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "KalistaR",
        name: "命运的召唤",
        icon: "KalistaR.png",
        description:
          "卡莉丝塔将她的<keywordMajor>誓约者</keywordMajor>置入凝滞状态并将其拖拽到她的身边，至多持续4秒。<keywordMajor>誓约者</keywordMajor>可以点击来将自己投放出去，在命中第一个英雄时停止并<status>击退</status>所有附近的敌人。如果<keywordMajor>誓约者</keywordMajor>命中了一名英雄，则会被放置在与目标相距其最大攻击距离的位置。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      KalistaP: null,
      KalistaQ: null,
      KalistaW: null,
      KalistaE: null,
      KalistaR: null,
    },
  };
}
export { importModule };
