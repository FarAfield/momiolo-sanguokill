function importModule() {
  return {
    type: "champion",
    id: "Jhin",
    title: "戏命师",
    name: "烬",
    avatar: "Jhin.png",
    skins: [
      { name: "default", skin: "Jhin_0.jpg" },
      { name: "西部牛仔 烬", skin: "Jhin_1.jpg" },
      { name: "腥红之月 烬", skin: "Jhin_2.jpg" },
      { name: "SKT T1 烬", skin: "Jhin_3.jpg" },
      { name: "源计划：升华 烬", skin: "Jhin_4.jpg" },
      { name: "暗星尊 烬", skin: "Jhin_5.jpg" },
      { name: "山海绘卷 烬", skin: "Jhin_14.jpg" },
      { name: "DWG 烬", skin: "Jhin_23.jpg" },
      { name: "至高天 烬", skin: "Jhin_25.jpg" },
      { name: "斗魂觉醒 烬", skin: "Jhin_36.jpg" },
      { name: "暗星绝杀 烬", skin: "Jhin_37.jpg" },
    ],
    spells: [
      {
        id: "JhinP",
        name: "低语",
        icon: "JhinP.png",
        description:
          "烬的手枪，“低语”，是一台精密的设备，用来造成出色的伤害。它会以一个固定的频率发射子弹，并且只能装四颗子弹。烬会将黑暗魔法注入最后一颗子弹，来让它产生暴击并造成额外斩杀伤害。当“低语”暴击时，它会为烬提供一个爆发性的移动速度加成。",
      },
      {
        id: "JhinQ",
        name: "曼舞手雷",
        icon: "JhinQ.png",
        description:
          "烬扔出一颗手雷，手雷会造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>，然后弹跳到附近的一个还未被此技能命中的目标上。<br /><br />手雷最多可命中{{ tooltipmaxtargetshit }}个目标。手雷每击杀一个单位，它的后续弹跳伤害就会提升{{ percentamponkill*100 }}%。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JhinW",
        name: "致命华彩",
        icon: "JhinW.png",
        description:
          "烬进行一次远程射击，对命中的第一个英雄和沿途的其它敌人造成<physicalDamage>{{ totaldamage }}物理伤害</physicalDamage>。<br /><br />如果被【W致命华彩】命中的敌方英雄在前{{ spottingduration }}秒受到过来自烬的友方英雄的伤害，那么这个英雄还会被<status>禁锢</status>{{ rootduration }}秒，并为烬提供<spellName>低语</spellName>的移动速度加成。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JhinE",
        name: "万众倾倒",
        icon: "JhinE.png",
        description:
          "<passive>被动：</passive>被烬击杀的英雄，将在其所在位置生成并引爆一个莲花陷阱。<br /><br /><active>主动：</active>烬放置一个持续{{ trapduration }}分钟的隐形莲花陷阱，陷阱会在被敌人踩中时生成一个区域，使区域内的敌人<status>减速</status>{{ trapslowamount*100 }}%。在{{ trapdetonationtime }}秒后，陷阱会爆炸，造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>。<br /><br />这个技能有2层充能({{ ammorechargeratetooltip }}秒刷新时间)。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "JhinR",
        name: "完美谢幕",
        icon: "JhinR.png",
        description:
          "烬架好武器，固定在原地，并获得4颗超级子弹。每颗超级子弹会在命中第一个敌方英雄时对其造成<physicalDamage>{{ damagecalc }}</physicalDamage>到<physicalDamage>{{ maxincreasecalc }}物理伤害（伤害会基于目标的已损失生命值而提升）</physicalDamage>并使其<status>减速</status>{{ slowpercent*100 }}%，持续{{ slowduration }}秒。第四颗子弹会暴击，造成{{ fourthshotmultiplier*100 }}%伤害。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      JhinP: null,
      JhinQ: null,
      JhinW: null,
      JhinE: null,
      JhinR: null,
    },
  };
}
export { importModule };
