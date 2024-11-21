function importModule() {
  return {
    type: "champion",
    id: "Tryndamere",
    title: "蛮族之王",
    name: "泰达米尔",
    avatar: "Tryndamere.png",
    skins: [
      { name: "default", skin: "Tryndamere_0.jpg" },
      { name: "勇敢的心 泰达米尔", skin: "Tryndamere_1.jpg" },
      { name: "国王 泰达米尔", skin: "Tryndamere_2.jpg" },
      { name: "诸神的黄昏 泰达米尔", skin: "Tryndamere_3.jpg" },
      { name: "恶魔之刃 泰达米尔", skin: "Tryndamere_4.jpg" },
      { name: "奥斯曼大帝 泰达米尔", skin: "Tryndamere_5.jpg" },
      { name: "关羽 云长", skin: "Tryndamere_6.jpg" },
      { name: "梦魇 泰达米尔", skin: "Tryndamere_7.jpg" },
      { name: "野兽猎人 泰达米尔", skin: "Tryndamere_8.jpg" },
      { name: "生化领主 泰达米尔", skin: "Tryndamere_9.jpg" },
      { name: "腥红之月 泰达米尔", skin: "Tryndamere_10.jpg" },
      { name: "黑夜使者 泰达米尔", skin: "Tryndamere_18.jpg" },
      { name: "胜利之王 泰达米尔", skin: "Tryndamere_27.jpg" },
    ],
    spells: [
      {
        id: "TryndamereP",
        name: "战斗狂怒",
        icon: "TryndamereP.png",
        description:
          "泰达米尔每次攻击、暴击或击杀都能获得怒气。怒气被动地增加他的暴击几率，且可以通过释放嗜血杀戮来消耗。",
      },
      {
        id: "TryndamereQ",
        name: "嗜血杀戮",
        icon: "TryndamereQ.png",
        description:
          "<spellPassive>被动：</spellPassive>泰达米尔嗜血成性，获得<scaleAD>{{ flatad }}攻击力</scaleAD>，每1%已损失生命值额外提供<scaleAD>{{ adperonepercentmissinghp }}攻击力</scaleAD>。<br /><br /><spellActive>主动：</spellActive>泰达米尔消耗他的<keywordMajor>怒气</keywordMajor>，回复<healing>{{ baseheal }}外加x{{ healperfury }}怒气的生命值</healing>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TryndamereW",
        name: "蔑视",
        icon: "TryndamereW.png",
        description:
          "泰达米尔抛出羞辱之语，使英雄们降低{{ adreduction*-1 }}攻击力，持续{{ reductionduration }}秒。背对泰达米尔的敌方英雄还会被<status>减速</status>{{ slowpotency*-100 }}%，持续相同时长。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TryndamereE",
        name: "旋风斩",
        icon: "TryndamereE.png",
        description:
          "泰达米尔旋转并穿过他的敌人，造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>并且每命中一个敌人就会生成<keywordMajor>{{ nonchampfurygain }}怒气</keywordMajor>，在命中敌方英雄时提升至<keywordMajor>{{ champfurygain }}怒气</keywordMajor>。<br /><br />这个技能的冷却时间会在泰达米尔暴击时缩短{{ nonchampcdrefund }}秒，并在对英雄暴击时缩短{{ champcdrefund }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TryndamereR",
        name: "无尽怒火",
        icon: "TryndamereR.png",
        description:
          "泰达米尔变得对死亡完全免疫，持续{{ e3 }}秒，拒绝将生命值降至{{ e2 }}以下，并瞬间获得<keywordMajor>{{ e1 }}怒气</keywordMajor>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TryndamereP: null,
      TryndamereQ: null,
      TryndamereW: null,
      TryndamereE: null,
      TryndamereR: null,
    },
  };
}
export { importModule };
