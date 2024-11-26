/**
 *   onBoot()  加载资源, initGameEvent(移动到game.start实现)
 *   onLoad()  解析资源，[trigger.game, gameLoop](移动到game.start实现)
 *   game.start()  游戏开始(initGameEvent,trigger.game,gameLoop)
 *   trigger.game
 *   1.根据模式替换英雄、牌堆、技能等(暂未实现)
 *   2.prepareArena
 *   2.1 showHistory
 *   2.2 create.players
 *   2.3 create.me
 *   2.4 create.cards
 *   3.chooseHero
 *   4.trigger.gameStart
 *   5.game.gameDraw
 *   6.game.phaseLoop
 *
 *
 */

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

//  gameStart    create.players(num)   create.me()   create.cardsAsync()
//  chooseHero   done   =>  radomHero

//  0  1  2  3  4  5  6  7
//           0  1  2  3  4
//  num = 1  current => 1    current = next   num++    =>   done  =>
//  num = 2
//  ...
//  done

//  champion
//  boss
//  equipment  sword/shield
//  spellRune  spell/rune

// 叠多重buff攻击

//  平衡性  1费=2血=1回血=1次控制

// 1.人数2-8人场，血量100，1被动+4主动(主动消耗能量，类似蓝条机制)，能量8
// 2.召唤师技能稀缺卡(随机抽取)
// 3.装备稀缺卡(随机抽取)
// 4.全局随机buff、自身选取buff
// 5.普通卡、普通buff卡  回血、扣血、回能、偷取装备、跳过回合、禁用回合
// 6.装备卡，最多6   3输出2防御1鞋子配卡   armor / boot  /  sword  /  bow 弓  /  staff 杖
