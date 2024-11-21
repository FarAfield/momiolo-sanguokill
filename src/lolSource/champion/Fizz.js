function importModule() {
  return {
    type: "champion",
    id: "Fizz",
    title: "潮汐海灵",
    name: "菲兹",
    avatar: "Fizz.png",
    skins: [
      { name: "default", skin: "Fizz_0.jpg" },
      { name: "失落大陆 菲兹", skin: "Fizz_1.jpg" },
      { name: "苔原猎手 菲兹", skin: "Fizz_2.jpg" },
      { name: "海牛猎手 菲兹", skin: "Fizz_3.jpg" },
      { name: "虚空海灵 菲兹", skin: "Fizz_4.jpg" },
      { name: "兔宝宝 菲兹", skin: "Fizz_8.jpg" },
      { name: "银河魔装机神 菲兹", skin: "Fizz_9.jpg" },
      { name: "欧米伽小队 鬼影蛙人", skin: "Fizz_10.jpg" },
      { name: "绒毛菲兹", skin: "Fizz_14.jpg" },
      { name: "至臻 绒毛菲兹", skin: "Fizz_15.jpg" },
      { name: "小恶魔 菲兹", skin: "Fizz_16.jpg" },
      { name: "至臻 绒毛菲兹 (2022)", skin: "Fizz_25.jpg" },
      { name: "宇航员 菲兹", skin: "Fizz_26.jpg" },
      { name: "青蛙雨衣 菲兹", skin: "Fizz_35.jpg" },
    ],
    spells: [
      {
        id: "FizzP",
        name: "伶俐斗士",
        icon: "FizzP.png",
        description:
          "菲兹在移动时可以穿过单位并且从所有来源处受到的伤害都会减少一个固定的数额。",
      },
      {
        id: "FizzQ",
        name: "淘气打击",
        icon: "FizzQ.png",
        description:
          "菲兹冲刺并穿过一名敌人，同时造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>加上<magicDamage>{{ qdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "FizzW",
        name: "海石三叉戟",
        icon: "FizzW.png",
        description:
          "<spellPassive>被动</spellPassive>：菲兹的攻击会使他的敌人们流血，在{{ bleedduration }}秒里持续造成共<magicDamage>{{ dotdamage }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动</spellActive>：菲兹的下次攻击造成额外的<magicDamage>{{ activedamage }}魔法伤害</magicDamage>。如果这次攻击将目标击杀，那么菲兹会返还<scaleMana>{{ onkillmanarefund }}法力</scaleMana>并使这个技能的冷却时间缩短至{{ onkillnewcooldown }}秒。如果这次攻击未能造成击杀，那么菲兹的攻击会造成额外的<magicDamage>{{ onhitbuffdamage }}魔法伤害</magicDamage>，持续{{ onhitbuffduration }}秒。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "FizzE",
        name: "古灵/精怪",
        icon: "FizzE.png",
        description:
          "菲兹跳到他的三叉戟上，变为【不可被选取】状态0.75秒，随后对附近敌人造成<magicDamage>{{ edamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的{{ slowamount*100 }}%<status>减速</status>。<br /><br />菲兹可以在【不可被选取】状态中<recast>再次施放</recast>这个技能，以再次位移，并提前结束该状态，在一个较小的区域内造成伤害，并且不会造成<status>减速</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "FizzR",
        name: "巨鲨强袭",
        icon: "FizzR.png",
        description:
          "菲兹掷出一只小鱼来吸附到命中的第一个敌方英雄身上。这个英雄会被施加<keywordStealth>真实视野</keywordStealth>和<status>减速</status>，减速幅度为40%到80%，基于小鱼在吸附前的位移距离。<br /><br />在{{ detonationtime }}秒后，一头巨鲨会从目标脚下出现，<status>击飞</status>带着小鱼的目标1秒，<status>击退</status>其它单位，并基于小鱼在吸附前的位移距离造成<magicDamage>{{ smallsharkdamage }}到{{ bigsharkdamage }}魔法伤害</magicDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      FizzP: null,
      FizzQ: null,
      FizzW: null,
      FizzE: null,
      FizzR: null,
    },
  };
}
export { importModule };
