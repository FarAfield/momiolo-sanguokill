// gameAi  游戏AI相关实现  TODO

// gameBoot 游戏启动相关实现(firstStep)
// 读取资源并存储
// onLoad

// gameLoad 游戏加载相关实现(secondStep)
// 加载资源
// game.start

// gameEngine 游戏引擎相关实现(thirdStep)
// 解析事件并实现事件循环

// gameUi 游戏UI相关实现  TODO

// 卡牌事件  摸牌  获得牌  失去牌  使用牌  使用牌指定目标  响应牌  装备牌
// const cardEvent = [
//   "drawCard",
//   "gainCard",
//   "loseCard",
//   "useCard",
//   "useCardTo",
//   "response",
//   "equip",
// ]
//   .map((i) => addOpportunity(i))
//   .flat();
// 体力事件  伤害  受到伤害  失去体力  回复体力 减少体力上限  增加体力上限
// const hpEvent = [
//   "sourceDamage",
//   "damage",
//   "loseHp",
//   "recoverHp",
//   "loseMaxHp",
//   "gainMaxHp",
// ]
//   .map((i) => addOpportunity(i))
//   .flat()
//   .concat(...["hpChange", "maxHpChange"]); // 体力值、最大体力值变化
// 状态事件  翻面 横置  濒死
// const statusEvent = ["turnOver", "link", "dying"]
//   .map((i) => addOpportunity(i))
//   .flat()
//   .concat(...["dieBefore", "Begin"]); // 死亡前/时
