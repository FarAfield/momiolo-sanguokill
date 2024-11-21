function importModule() {
  return {
    type: "champion",
    id: "Tristana",
    title: "麦林炮手",
    name: "崔丝塔娜",
    avatar: "Tristana.png",
    skins: [
      { name: "default", skin: "Tristana_0.jpg" },
      { name: "粉色萝莉 崔丝塔娜", skin: "Tristana_1.jpg" },
      { name: "圣诞精灵 崔丝塔娜 ", skin: "Tristana_2.jpg" },
      { name: "烈焰雄心 崔丝塔娜", skin: "Tristana_3.jpg" },
      { name: "游击队员 崔丝塔娜", skin: "Tristana_4.jpg" },
      { name: "约德尔海贼团 崔丝塔娜", skin: "Tristana_5.jpg" },
      { name: "火箭达人 崔丝塔娜", skin: "Tristana_6.jpg" },
      { name: "驯龙炮手 崔丝塔娜", skin: "Tristana_10.jpg" },
      { name: "魅惑女巫 崔丝塔娜", skin: "Tristana_11.jpg" },
      { name: "欧米伽小队 魔鬼伞兵", skin: "Tristana_12.jpg" },
      { name: "小恶魔 崔丝塔娜", skin: "Tristana_24.jpg" },
      { name: "我，羽饰骑士 崔丝塔娜", skin: "Tristana_33.jpg" },
      { name: "海克斯科技 崔丝塔娜", skin: "Tristana_40.jpg" },
      { name: "虎头虎脑 崔丝塔娜", skin: "Tristana_41.jpg" },
      { name: "灵魂莲华 崔丝塔娜", skin: "Tristana_51.jpg" },
      { name: "花仙子 崔丝塔娜", skin: "Tristana_61.jpg" },
    ],
    spells: [
      {
        id: "TristanaP",
        name: "瞄准",
        icon: "TristanaP.png",
        description: "崔丝塔娜的射程随等级提升。",
      },
      {
        id: "TristanaQ",
        name: "急速射击",
        icon: "TristanaQ.png",
        description:
          "崔丝塔娜开始全自动射击，获得持续{{ buffduration }}秒的<attackSpeed>{{ attackspeedmod*100 }}%攻击速度</attackSpeed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TristanaW",
        name: "火箭跳跃",
        icon: "TristanaW.png",
        description:
          "崔丝塔娜将自己推送出去，在着陆时造成<magicDamage>{{ landingdamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowmod*-100 }}%<status>减速</status>。<br /><br />参与击杀后，或者满层<spellName>爆炸火花</spellName>爆炸后，会重置这个技能的冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TristanaE",
        name: "爆炸火花",
        icon: "TristanaE.png",
        description:
          "<spellPassive>被动：</spellPassive>崔丝塔娜的攻击在击杀敌人时会对周围敌人造成<magicDamage>{{ passivedamage }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>崔丝塔娜将一颗炸弹附着在一名敌人或防御塔上，来在{{ activeduration }}秒后对周围敌人造成<physicalDamage>{{ activedamage }}物理伤害</physicalDamage>。崔丝塔娜对带着炸弹的目标进行的每次攻击和技能都会使这个伤害提升{{ activeperstackamp*100 }}%(最多4层)，并且叠加暴击几率也会使这个伤害提升{{ critchanceamp*100 }}%。<br /><br />在{{ activemaxstacks }}层时，这个炸弹会立刻爆炸(最大值为<physicalDamage>{{ activemaxdamage }}物理伤害</physicalDamage>)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "TristanaR",
        name: "毁灭射击",
        icon: "TristanaR.png",
        description:
          "崔丝塔娜发射一颗大型加农炮弹，对目标造成<magicDamage>{{ damagecalc }}魔法伤害</magicDamage>，并对其与周围敌人们施加<status>击退</status>和{{ stunduration }}秒<status>晕眩</status>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      TristanaP: null,
      TristanaQ: null,
      TristanaW: null,
      TristanaE: null,
      TristanaR: null,
    },
  };
}
export { importModule };
