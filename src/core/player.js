import { getCharacterImage } from "@/utils";
const Identity = ["monarch", "minister", "rebel", "spy"]; // 主 忠  反  内
class Player {
  characterGroup = []; // 例如  [shenguojia,guojia]
  playerName = undefined; // 名称  神郭嘉/郭嘉
  playerSex = undefined; // 性别
  playerIdentity = undefined; // 身份
  playerSeatNum = 0; // 位次（主公永远为0）
  playerGroup = undefined; // 势力
  playerAvatar = []; // 头像(双将时多头像)
  playerMaxHp = 0; // 最大体力上限
  playerHp = 0; // 当前体力

  // actionInfo
  skills = []; // 技能
  tempSkills = []; // 临时技能
  actionHistory = []; // 操作记录
  marks = new Map(); // 标记
  ai = {}; // ai逻辑

  phaseNumber = 0; // 阶段数

  constructor(player) {
    Object.keys(player).forEach((key) => {
      this[key] = player[key];
    });
  }

  // 生成玩家
  static $createPlayer(playerListConfig, allCharacterList) {
    const config = playerListConfig.map((item) => {
      const characterList = allCharacterList.filter((i) =>
        item.characterGroup.includes(i.characterType)
      );
      const firstCharacter = characterList[0];
      const player = {
        characterGroup: item.characterGroup,
        playerName: characterList.map((i) => i.characterName).join(","),
        playerSex: firstCharacter.characterSex,
        playerIdentity: item.identity,
        playerGroup: firstCharacter.characterGroup,
        playerAvatar: characterList.map((i) => i.characterAvatar),
        playerMaxHp: firstCharacter.characterMaxHp,
        playerHp: firstCharacter.characterMaxHp,
        skills: [],
        playerSeatNum: item.seatNum,
      };
      return player;
    });

    const characters = [];
    Object.entries(config).forEach(
      ([type, { name, sex, group: _group, maxHp, skills }]) => {
        const character = {
          group,
          playerType: type,
          playerName: name,
          playerSex: sex,
          playerGroup: [_group],
          playerAvatar: [getCharacterImage(type)],
          playerMaxHp: maxHp,
          playerHp: maxHp,
          skills,
        };
        characters.push(character);
      }
    );
    return characters;
  }
}

export default Player;
