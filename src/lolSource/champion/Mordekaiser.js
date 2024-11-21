function importModule() {
  return {
    type: "champion",
    id: "Mordekaiser",
    title: "铁铠冥魂",
    name: "莫德凯撒",
    avatar: "Mordekaiser.png",
    skins: [
      { name: "default", skin: "Mordekaiser_0.jpg" },
      { name: "龙骑士 莫德凯撒", skin: "Mordekaiser_1.jpg" },
      { name: "地狱火 莫德凯撒", skin: "Mordekaiser_2.jpg" },
      { name: "五杀摇滚吉他手  莫德凯撒", skin: "Mordekaiser_3.jpg" },
      { name: "死亡领主 莫德凯撒", skin: "Mordekaiser_4.jpg" },
      { name: "梅花国王 莫德凯撒", skin: "Mordekaiser_5.jpg" },
      { name: "暗星 莫德凯撒", skin: "Mordekaiser_6.jpg" },
      { name: "源计划：超体 莫德凯撒", skin: "Mordekaiser_13.jpg" },
      { name: "五杀摇滚 III：遗失的章节 莫德凯撒", skin: "Mordekaiser_23.jpg" },
      { name: "西部魔影 地狱列车长 莫德凯撒", skin: "Mordekaiser_32.jpg" },
      { name: "灰烬骑士 莫德凯撒", skin: "Mordekaiser_42.jpg" },
      { name: "古神 莫德凯撒", skin: "Mordekaiser_44.jpg" },
    ],
    spells: [
      {
        id: "MordekaiserP",
        name: "黑暗起兮",
        icon: "MordekaiserP.png",
        description:
          "莫德凯撒在对英雄或野怪打出3次攻击或技能之后获得一个强力的伤害光环和移动速度。",
      },
      {
        id: "MordekaiserQ",
        name: "破灭之锤",
        icon: "MordekaiserQ.png",
        description:
          "莫德凯撒用夜陨猛砸地面，造成<magicDamage>{{ qdamage }}魔法伤害</magicDamage>，如果这个技能只命中了一个敌人，则伤害提升至<magicDamage>{{ empowereddamagetooltip }}</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MordekaiserW",
        name: "不坏之身",
        icon: "MordekaiserW.png",
        description:
          "<passive>被动：</passive>莫德凯撒将他造成的{{ damageconversion*100 }}%伤害和他受到的{{ damagetakenconversion*100 }}%伤害储存起来。<br /><br /><active>主动：</active>莫德凯撒获得相当于已储存伤害值的<shield>护盾</shield>。他可以<recast>再次施放</recast>这个技能来回复<healing>相当于{{ healingpercent*100 }}%剩余护盾值的生命值</healing>。<br /><br />最小护盾值：<shield>{{ minhealthtooltip }}</shield><br />最大护盾值：<shield>{{ maxhealthtooltip }}</shield>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MordekaiserE",
        name: "断魂一扼",
        icon: "MordekaiserE.png",
        description:
          "<spellPassive>被动：</spellPassive>莫德凯撒获得{{ magicpen*100 }}%法术穿透。<br /><br /><spellActive>主动：</spellActive>莫德凯撒将敌人拉往他的方向，并造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "MordekaiserR",
        name: "轮回绝境",
        icon: "MordekaiserR.png",
        description:
          "莫德凯撒将自身和一个敌方英雄放逐至死者领域{{ spiritrealmduration }}秒，并在期间内偷取该英雄{{ statstealpercentscalar*100 }}%的核心属性。<br /><br />如果莫德凯撒在死者领域击杀了该敌人，那么他会吞噬目标的灵魂，保留他所偷取的属性，直到目标复活为止。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      MordekaiserP: null,
      MordekaiserQ: null,
      MordekaiserW: null,
      MordekaiserE: null,
      MordekaiserR: null,
    },
  };
}
export { importModule };
