function importModule() {
  return {
    type: "champion",
    id: "Renata",
    title: "炼金男爵",
    name: "烈娜塔 · 戈拉斯克",
    avatar: "Renata.png",
    skins: [
      { name: "default", skin: "Renata_0.jpg" },
      { name: "舰队司令 烈娜塔", skin: "Renata_1.jpg" },
      { name: "魔域梦魇 烈娜塔", skin: "Renata_10.jpg" },
      { name: "魂蔷薇 烈娜塔", skin: "Renata_20.jpg" },
      { name: "至臻 魂蔷薇 烈娜塔", skin: "Renata_21.jpg" },
    ],
    spells: [
      {
        id: "RenataP",
        name: "物尽其用",
        icon: "RenataP.png",
        description:
          "烈娜塔的攻击会造成额外伤害并标记敌人。烈娜塔的队友在对被标记的敌人造成伤害时可以造成额外伤害。",
      },
      {
        id: "RenataQ",
        name: "铁腕竞合",
        icon: "RenataQ.png",
        description:
          "烈娜塔发射一颗飞弹来<status>禁锢</status>命中的第一个敌人{{ rootduration }}秒，并造成<magicDamage>{{ totaldamage }}</magicDamage><magicDamage>魔法伤害</magicDamage>。<br /><br /><recast>再次施放：</recast>烈娜塔将敌人朝一个方向<status>拉拽</status>，对被其碰到的敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>，并且如果被拉拽的敌人是一个英雄，那么还会造成{{ stunduration }}秒<status>晕眩</status>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RenataW",
        name: "及时救难",
        icon: "RenataW.png",
        description:
          "烈娜塔为一名友方英雄注入药剂，为其提供<attackSpeed>{{ ascalc }}攻击速度</attackSpeed>和朝敌人时的<speed>{{ mscalc }}移动速度</speed>，这个加成会在{{ duration }}秒里持续提升至<attackSpeed>{{ finalascalc }}攻击速度</attackSpeed>和<speed>{{ finalmscalc }}移动速度</speed>。参与击杀后会刷新这个增益的持续时间。<br /><br />如果该友方英雄阵亡，就会带着满额生命值归来，然后这些生命值会在3秒里持续衰减。<br /><br />如果该友方英雄在衰减期间参与了一次击杀，那么就会回复至<healing>{{ triumphpercent }}%最大生命值</healing>并停止衰减。<br /><br /><rules>该英雄在衰减状态下的死亡，可通过治疗或相似效果来延缓，但无法防止，除非该英雄参与了一次击杀。英雄仅可延缓一次死亡。</rules>{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RenataE",
        name: "忠诚激励",
        icon: "RenataE.png",
        description:
          "烈娜塔发射一对炼金科技飞弹，在命中敌人时对该敌人及周围的敌人们造成<magicDamage>{{ totaldamage }}魔法伤害</magicDamage>和持续{{ slowduration }}秒的30%<status>减速</status>。在命中友军时提供持续{{ shieldduration }}秒的<shield>{{ shieldcalc }}护盾值</shield>。{{ spellmodifierdescriptionappend }}",
      },
      {
        id: "RenataR",
        name: "恶意收购",
        icon: "RenataR.png",
        description:
          "烈娜塔发射一道炼金波纹，让命中的敌人们<status>狂暴</status>{{ berserkduration }}秒，来使他们攻击相距最近的单位并优先以他们的友军为目标。<br /><br />在<status>狂暴</status>状态下，敌人们会获得<attackSpeed>{{ bonusattackspeed*100 }}%攻击速度</attackSpeed>。{{ spellmodifierdescriptionappend }}",
      },
    ],
    effects: {
      RenataP: null,
      RenataQ: null,
      RenataW: null,
      RenataE: null,
      RenataR: null,
    },
  };
}
export { importModule };
