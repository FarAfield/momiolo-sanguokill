import { getCharacterImage } from "@/utils";
class Player {
  // baseInfo
  playerType = undefined; // 例如  shenguojia/guojia
  playerName = undefined; // 名称  神郭嘉/郭嘉
  playerSex = undefined; // 性别
  playerGroup = []; // 势力(双将时可认定为多势力)
  playerAvatar = undefined; // 头像
  playerMaxHp = 0; // 最大体力上限
  playerHp = 0; // 当前体力

  // actionInfo
  skills = []; // 技能
  tempSkills = []; // 临时技能
  actionHistory = []; // 操作记录
  marks = new Map(); // 标记
  ai = {}; // ai逻辑

  playSeatNum = 0; // 位次（主公永远为0）
  phaseNumber = 0; // 阶段数

  constructor(player) {
    Object.keys(player).forEach((key) => {
      this[key] = player[key];
    });
  }

  // 生成人物
  static $createCharacter(config) {
    const characters = [];
    Object.entries(config).forEach(
      ([type, { name, sex, group, maxHp, skills }]) => {
        const character = {
          playerType: type,
          playerName: name,
          playerSex: sex,
          playerGroup: [group],
          playerAvatar: getCharacterImage(type),
          playerMaxHp: maxHp,
          playerHp: maxHp,
          skills,
        };
        characters.push(character);
      }
    );
    return characters;
  }

  // 由生成的人物生成玩家(多将融合、自身位更新头像)
  static $createPlayer(config) {}
}

export default Player;
