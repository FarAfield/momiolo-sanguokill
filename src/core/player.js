class Player {
  name = undefined; // 武将名称
  sex = undefined; // 武将性别
  group = []; // 武将势力
  avatar = undefined; // 头像
  maxHp = 0; // 最大体力上限
  hp = 0; // 当前体力
  seatNum = 0; // 位次（主公永远为0）

  phaseNumber = 0; // 阶段数
  skills = []; // 技能
  tempSkills = []; // 临时技能
  actionHistory = []; // 操作记录
  marks = new Map(); // 标记
  ai = {}; // ai逻辑

  constructor(player) {
    Object.keys(player).forEach((key) => {
      this[key] = player[key];
    });
  }

  static $createPlayer() {}
}

export default Player;
