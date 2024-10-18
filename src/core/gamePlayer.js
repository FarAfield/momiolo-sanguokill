class Player {
  group; // 卡包组   例如: basic
  playerName; // 名称
  playerGroup; // 阵营
  playerSeatNum = 0; // 位次
  playerMaxHp = 0; // 最大体力上限
  playerHp = 0; // 当前体力

  skills = []; // 技能
  tempSkills = []; // 临时技能
  actionHistory = []; // 操作记录
  marks = {}; // 标记
  ai = {}; // ai逻辑

  constructor(player) {
    Object.keys(player).forEach((key) => {
      this[key] = player[key];
    });
  }
}
export default Player;
