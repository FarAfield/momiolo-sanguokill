import { getCharacterImage } from "@/utils";
// character
class Character {
  group; // 分组   例如: basic  extra
  characterType; // 例如  shenguojia
  characterName; // 名称  神郭嘉
  characterSex; // 性别
  characterGroup; // 势力
  characterAvatar; // 头像
  characterMaxHp = 0; // 最大体力上限
  characterSkills = []; // 技能
  ai = {}; // ai逻辑

  constructor(character) {
    Object.keys(character).forEach((key) => {
      this[key] = character[key];
    });
  }

  // 生成人物
  static $createCharacter(group, config) {
    const characters = [];
    Object.entries(config).forEach(
      ([type, { name, sex, group: _group, maxHp, skills }]) => {
        const character = {
          group,
          characterType: type,
          characterName: name,
          characterSex: sex,
          characterGroup: _group,
          characterAvatar: getCharacterImage(type),
          characterMaxHp: maxHp,
          characterSkills: skills,
        };
        characters.push(character);
      }
    );
    return characters;
  }
}

export default Character;
