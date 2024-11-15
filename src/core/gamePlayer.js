class Player {
  // 基础属性
  playerId;
  playerTitle;
  playerName;
  playerAvatar;
  playerSkin = "default";
  skills = [];
  // 其他属性
  playerSeatNum = 0; // 位次
  playerMaxHp = 0;
  playerHp = 0;
  playerMaxPow = 0;
  playerPow = 0;
  // 额外属性
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
