function importModule() {
  return {
    type: "champion",
    id: "Yuumi",
    title: "魔法猫咪",
    name: "悠米",
    avatar: "Yuumi.png",
    skins: [
      { name: "default", skin: "Yuumi_0.jpg" },
      { name: "战斗校长 悠米", skin: "Yuumi_1.jpg" },
      { name: "觅心猫猫 悠米", skin: "Yuumi_11.jpg" },
      { name: "小蜜蜂 悠米", skin: "Yuumi_19.jpg" },
      { name: "魅惑女巫 悠米", skin: "Yuumi_28.jpg" },
      { name: "EDG 悠米", skin: "Yuumi_37.jpg" },
      { name: "狗头猫咪 悠米", skin: "Yuumi_39.jpg" },
      { name: "人工智能 悠米", skin: "Yuumi_49.jpg" },
      { name: "至臻 人工智能 悠米", skin: "Yuumi_50.jpg" },
    ],
    spells: [
      {
        id: "YuumiP",
        name: "猫的博爱",
        icon: "YuumiP.png",
        description:
          "周期性地，当悠米用一个攻击或技能击中一个英雄时，她会为自身和她要附身的下一个友方英雄回复生命值。<br><br>在附身于友方英雄时，悠米会与她的友方英雄们生成一个特殊羁绊。在附身于拥有最强羁绊的那名友方英雄时，悠米的各个技能会获得强化。",
      },
      {
        id: "YuumiQ",
        name: "摸鱼飞弹",
        icon: "YuumiQ.png",
        description:
          "悠米召唤一个飘忽不定的飞弹，可对命中的首个敌人造成<magicDamage>{{ totalmissiledamage }}魔法伤害</magicDamage>和{{ slowamount }}%<status>减速</status>。<br /><br />如果在<keywordMajor>附身</keywordMajor>状态时施放，那么悠米可以通过使用她的鼠标来控制飞弹一小段时间，直到它提速进入一条直线轨迹为止。已提速的飞弹会转而对目标造成<magicDamage>{{ totalmissiledamageempowered }}魔法伤害</magicDamage>和持续{{ empoweredslowduration }}秒的{{ empoweredslowamount }}%<status>减速</status>。<br /><br /><keywordMajor>挚友加成：</keywordMajor><spellName>摸鱼飞弹</spellName>将总是造成强化<status>减速</status>效果并在命中一名敌方英雄时还会为挚友提供持续{{ buffduration }}秒的<OnHit>附加%i:OnHit%</OnHit><magicDamage>{{ onhitdamagecalc }}魔法伤害</magicDamage>。<br /><br /><rules>额外附加伤害可提升{{ allycritchancemaxamp*100 }}%，基于她正附身的友军的暴击几率。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YuumiW",
        name: "悠米出动！",
        icon: "YuumiW.png",
        description:
          "<spellPassive>被动：</spellPassive>在附身于她的<keywordMajor>挚友</keywordMajor>身上时，悠米获得额外的<keywordMajor>{{ healandshieldpower*100 }}%治疗与护盾强度</keywordMajor>并且她的这名友军也会获得<OnHit>附加%i:OnHit%</OnHit><healing>{{ healthonhit }}治疗效果</healing>。<br /><br /><spellActive>主动：</spellActive>悠米突进到一名目标友方英雄处，并<keywordMajor>附身</keywordMajor>到该友军身上。当悠米处于<keywordMajor>附身</keywordMajor>状态时，她会跟随她搭档的移动并且不可被选取（防御塔除外）。<br /><br />对悠米施加<status>定身</status>效果会使这个技能进入为期{{ ccattachlockout }}秒的冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YuumiE",
        name: "旺盛精力",
        icon: "YuumiE.png",
        description:
          "悠米为自身提供<shield>{{ totalshielding }}护盾值</shield>并获得持续{{ msduration }}秒的<attackSpeed>{{ totalattackspeed }}%攻击速度</attackSpeed>。在护盾存留时，目标还会获得<speed>{{ msamount }}%移动速度</speed>。<br /><br />如果悠米处于<keywordMajor>附身</keywordMajor>状态，这个技能会转而影响她附身的友方英雄并且还会为该英雄回复<magicDamage>{{ manarestore }}法力值</magicDamage>，基于目标的已损失法力值至多提升{{ maxmanapercincrease*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "YuumiR",
        name: "魔典终章",
        icon: "YuumiR.png",
        description:
          "悠米引导{{ ultduration }}秒，发射{{ numberofwaves }}道影响双方的魔法波纹。如果在施放时处在<keywordMajor>附身</keywordMajor>状态，那么悠米可以操控这些波纹来跟随她的鼠标。<br /><br />波纹对命中的敌人们造成<magicDamage>{{ totalmissiledamage }}魔法伤害</magicDamage>和持续{{ ccduration }}秒的{{ baseslow*-100 }}%<status>减速</status>，每道命中的波纹都会使这个减速效果提升{{ bonusslowperwave*-100 }}%。<br /><br />每道波纹对命中的友方英雄们造成<healing>{{ totalhealperwave }}治疗效果</healing>。溢出的治疗效果会转化为<shield>护盾值</shield>。<br /><br /><keywordMajor>挚友加成：</keywordMajor>对她的<keywordMajor>挚友</keywordMajor>来说，治疗效果会提升至<healing>{{ enhancedhealperwave }}</healing>。<br /><br /><rules>施放<spellName>悠米出动！</spellName>将把波纹锁定在当前方向。<br />悠米可以在引导时移动和施放<spellName>旺盛精力</spellName>。</rules><br />{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      YuumiP: null,
      YuumiQ: null,
      YuumiW: null,
      YuumiE: null,
      YuumiR: null,
    },
  };
}
export { importModule };
