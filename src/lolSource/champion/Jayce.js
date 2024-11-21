function importModule() {
  return {
    type: "champion",
    id: "Jayce",
    title: "未来守护者",
    name: "杰斯",
    avatar: "Jayce.png",
    skins: [
      { name: "default", skin: "Jayce_0.jpg" },
      { name: "全金属狂潮 杰斯", skin: "Jayce_1.jpg" },
      { name: "蔷薇绅士 杰斯", skin: "Jayce_2.jpg" },
      { name: "天启骑士 杰斯", skin: "Jayce_3.jpg" },
      { name: "杰斯·光明之锤", skin: "Jayce_4.jpg" },
      { name: "战斗学院 杰斯", skin: "Jayce_5.jpg" },
      { name: "抵抗军雷神 杰斯", skin: "Jayce_15.jpg" },
      { name: "双城之战 杰斯", skin: "Jayce_24.jpg" },
      { name: "巅峰之星 杰斯", skin: "Jayce_25.jpg" },
      { name: "T1 杰斯", skin: "Jayce_34.jpg" },
      { name: "至臻 T1 杰斯", skin: "Jayce_36.jpg" },
    ],
    spells: [
      {
        id: "JayceP",
        name: "海克斯科技电容",
        icon: "JayceP.png",
        description: "每当杰斯切换武器时，他会获得短暂持续的移动速度加成。",
      },
      {
        id: "JayceQ",
        name: "苍穹之跃 / 电能震荡",
        icon: "JayceQ.png",
        description:
          "<keywordMajor>墨丘利之锤：</keywordMajor>杰斯跳向一名敌人，对周围的敌人造成<physicalDamage>{{ spell.jaycetotheskies:damage }}物理伤害</physicalDamage>和持续{{ spell.jaycetotheskies:slowduration }}秒的{{ spell.jaycetotheskies:slow*-100 }}%<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JayceW",
        name: "闪电领域 / 超能电荷",
        icon: "JayceW.png",
        description:
          "<keywordMajor>墨丘利之锤 - 被动：</keywordMajor>杰斯的<keywordMajor>战锤</keywordMajor>攻击会提供<scaleMana>{{ spell.jaycestaticfield:managain }}法力值</scaleMana>。<br /><br /><keywordMajor>墨丘利之锤 - 主动：</keywordMajor>杰斯创造一个电能光环，在{{ spell.jaycestaticfield:duration }}秒里持续造成共<magicDamage>{{ spell.jaycestaticfield:damage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JayceE",
        name: "雷霆一击 / 加速之门",
        icon: "JayceE.png",
        description:
          "<keywordMajor>战锤形态</keywordMajor>：杰斯挥舞他的战锤，<status>击退</status>他的目标并造成<magicDamage>{{ spell.jaycethunderingblow:flatdamage }}外加{{ spell.jaycethunderingblow:perchpdamage*100 }}%最大生命值的魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JayceR",
        name: "墨丘利之炮 / 墨丘利之锤",
        icon: "JayceR.png",
        description:
          "<keywordMajor>墨丘利之锤：</keywordMajor>杰斯将他的武器变形为<keywordMajor>墨丘利之炮</keywordMajor>，获得攻击距离和全新的一套技能。杰斯的下一个攻击移除<scaleArmor>{{ spell.jaycestancehtg:rangedformshred }}护甲</scaleArmor>和<scaleMR>魔法抗性</scaleMR>，持续{{ spell.jaycestancehtg:shredduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      JayceP: null,
      JayceQ: null,
      JayceW: null,
      JayceE: null,
      JayceR: null,
    },
  };
}
export { importModule };
