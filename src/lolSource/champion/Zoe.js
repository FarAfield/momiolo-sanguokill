function importModule() {
  return {
    type: "champion",
    id: "Zoe",
    title: "暮光星灵",
    name: "佐伊",
    avatar: "Zoe.png",
    skins: [
      { name: "default", skin: "Zoe_0.jpg" },
      { name: "赛博潮流 佐伊", skin: "Zoe_1.jpg" },
      { name: "泳池派对 佐伊", skin: "Zoe_2.jpg" },
      { name: "星之守护者 佐伊", skin: "Zoe_9.jpg" },
      { name: "奥术师 佐伊", skin: "Zoe_18.jpg" },
      { name: "至臻 奥术师 佐伊", skin: "Zoe_19.jpg" },
      { name: "EDG 佐伊", skin: "Zoe_20.jpg" },
      { name: "北极星守望者 佐伊", skin: "Zoe_22.jpg" },
      { name: "暗星 佐伊", skin: "Zoe_33.jpg" },
    ],
    spells: [
      {
        id: "ZoeP",
        name: "烟火四射！",
        icon: "ZoeP.png",
        description: "佐伊在施放一次技能后的下次普攻会造成额外魔法伤害。",
      },
      {
        id: "ZoeQ",
        name: "飞星乱入！",
        icon: "ZoeQ.png",
        description:
          "佐伊发射一颗飞星，基于它的飞行距离来对命中的第一个敌人造成不断提升的伤害 -- <magicDamage>{{ totaldamagetooltip }}到{{ maxdamagetooltip }}魔法伤害</magicDamage>。目标附近的敌人会受到{{ e4 }}%伤害。<br /><br />佐伊可以<recast>再次施放</recast>这个技能来将这个飞弹重新导向到佐伊附近的一个新位置。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZoeW",
        name: "窃法巧手",
        icon: "ZoeW.png",
        description:
          "<spellPassive>被动：</spellPassive>敌人在使用【召唤师技能】或【主动型装备】时会掉落一个技能碎片。特定小兵也会在被佐伊或一名附近的友方英雄击杀后掉落一个技能碎片。佐伊可以拾取这些碎片来使用一次相应技能。<br /><br /><spellPassive>被动：</spellPassive>当佐伊施放这个技能或任一召唤师技能时，她会获得<speed>{{ e9 }}%移动速度</speed>，持续{{ e0 }}秒，并对她近期刚攻击过的目标投出3个飞弹。每颗飞弹造成<magicDamage>{{ missiledamagetooltip }}魔法伤害</magicDamage>。<br /><br /><spellActive>主动：</spellActive>施放一次来自佐伊已拾取的技能碎片的技能。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZoeE",
        name: "催眠气泡",
        icon: "ZoeE.png",
        description:
          "佐伊踢出一个气泡，可造成<magicDamage>{{ totaldamagetooltip }}魔法伤害</magicDamage>，并会在未命中任何单位时如陷阱一般停留。在飞越墙体后，气泡的距离会得到延长。<br /><br />在一段延迟后，被气泡命中的目标会陷入持续2秒的<status>昏睡</status>状态并降低{{ percentpen*100 }}%<scaleMR>魔法抗性</scaleMR>。攻击和技能在命中目标时都会将其惊醒并造成双倍伤害，最多造成<trueDamage>{{ breakdamagetooltip }}真实伤害</trueDamage>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "ZoeR",
        name: "折返跃迁",
        icon: "ZoeR.png",
        description:
          "佐伊传送到附近的一个位置1秒。然后，佐伊会传送回原来的位置。在此期间，佐伊可以攻击和使用技能，但无法移动。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: { ZoeP: null, ZoeQ: null, ZoeW: null, ZoeE: null, ZoeR: null },
  };
}
export { importModule };
