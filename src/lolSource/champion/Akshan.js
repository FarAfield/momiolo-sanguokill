function importModule() {
  return {
    type: "champion",
    id: "Akshan",
    title: "影哨",
    name: "阿克尚",
    avatar: "Akshan.png",
    skins: [
      { name: "default", skin: "Akshan_0.jpg" },
      { name: "赛博潮流 阿克尚", skin: "Akshan_1.jpg" },
      { name: "水晶玫瑰 阿克尚", skin: "Akshan_10.jpg" },
      { name: "荣誉使者 阿克尚", skin: "Akshan_20.jpg" },
    ],
    spells: [
      {
        id: "AkshanP",
        name: "无所不用",
        icon: "AkshanP.png",
        description:
          "来自阿克尚攻击或技能的每第三次命中会造成额外伤害，并且如果目标是英雄还会为他提供一层护盾。<br><br>在阿克尚攻击时，他会进行一次额外的射击，来造成较少伤害。如果他取消掉了这次额外射击，那么他会转而获得移动速度。",
      },
      {
        id: "AkshanQ",
        name: "去而复还",
        icon: "AkshanQ.png",
        description:
          "阿克尚掷出一个回旋镖，造成<physicalDamage>{{ finaldamage }}物理伤害</physicalDamage>，每次命中一名敌人时会延长其距离。<br /><br />命中英雄时会为阿克尚提供在{{ hasteduration }}秒里持续衰减的<speed>{{ totalhaste }}移动速度</speed>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AkshanW",
        name: "赴险夺人",
        icon: "AkshanW.png",
        description:
          "{{ Spell_AkshanW_Tooltip_{{ gamemodeinteger }} }}{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AkshanE",
        name: "骄行荡寇",
        icon: "AkshanE.png",
        description:
          "<spellActive>第一段施放：</spellActive>阿克尚发射一个钩爪，吸附在命中的第一个地形上。<br /><br /><spellActive>第二段施放：</spellActive>阿克尚在地形附近摆荡，朝相距最近的敌人进行快速射击，每次射击造成<physicalDamage>{{ asmoddamagetodeal }}物理伤害</physicalDamage>。<br /><br /><spellActive>第三段施放：</spellActive>阿克尚从绳索上荡下来，并进行一次终极射击。<br /><br />与一名敌方英雄或地形产生碰撞，会提前结束摆荡。<br /><br />参与击杀敌方英雄后会刷新这个技能的冷却时间。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "AkshanR",
        name: "恩怨相抵",
        icon: "AkshanR.png",
        description:
          "阿克尚锁定一名敌方英雄并开始过载充能他的枪械至多{{ channelduration }}秒，至多可储存{{ numberofbullets }}颗子弹。<br /><br /><recast>再次施放：</recast>阿克尚释放已储存的子弹，每颗子弹对命中的首个敌人或建筑物至少造成<physicalDamage>{{ damageperbulletwithcrit }}物理伤害</physicalDamage>，基于已损失生命值至多提升至<physicalDamage>{{ maxdamageperbullet }}物理伤害</physicalDamage>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      AkshanP: null,
      AkshanQ: null,
      AkshanW: null,
      AkshanE: null,
      AkshanR: null,
    },
  };
}
export { importModule };
