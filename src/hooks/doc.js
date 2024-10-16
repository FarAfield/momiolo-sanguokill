const { after } = require("lodash-es");

class GameEvent {
  constructor(name) {
    this.name = name;
    this.finished = false;
    this.next = [];
    this.parent = null;
    this.triggerNum = 0;
    this.step = 0;
    this.after = [];
  }
}

let globalEvent = new GameEvent("game");
async function loop(executeEvent) {
  const event = globalEvent; // 判断获取哪一个事件
  while (true) {
    // 从事件中解构获取信息
    const { name, finished, next, after, triggerNum, step } = event;
    // 判断游戏状态，暂停或者终止循环
    if (name === "pause") {
      break;
    }
    // 存在next 则next重新构造事件
    if (next) {
      // 处理事件跳过  skip
      next.parent = event;
      globalEvent = next;
    } else if (finished) {
      // 根据triggerNum 触发end after
      if (triggerNum === 1) {
        // 触发end
        trigger(name);
        triggerNum++;
      } else if (triggerNum === 2) {
        // 触发after
        trigger(name);
        triggerNum++;
      } else if (after) {
        // 存在after,使用after重新构造事件  执行完成之后额外执行，例如插入新阶段、新回合
        // 处理事件跳过  skip
        after.parent = event;
        globalEvent = after;
      } else {
        // 把事件结果给到父事件，同时删除该事件(此时父事件可能只执行到其中一步，这一步拿到结果)
        event.parent._result = event.result;
        globalEvent = event.parent;
      }
    } else {
      // 事件未完成，触发before begin
      if (triggerNum === 1) {
        // 触发before
        trigger(name);
        triggerNum++;
      } else if (triggerNum === 2) {
        // 触发begin
        trigger(name);
        triggerNum++;
      } else {
        // 玩家阵亡、移除、退出,不触发事件
        if (0) {
          event.finished = true;
        } else {
          // 执行事件
          await runContent(event).then(() => {
            event.step++; //  和runContent有关，循环执行的关键, 按照步骤一步一步执行content里面的内容
          });
        }
      }
    }
  }
}
async function runContent(event) {
  return new Promise(async (resolve, reject) => {
    if (Array.isArray(event.content)) {
      // []都是异步函数
      for (let i = 0; i < event.content.length; i++) {
        await event.content[i]();
      }
      // 执行完每一个修改为已完成
      event.finish();
      resolve();
    } else if (typeof event.content === "asyncFunction") {
      // 异步函数
      await event.content();
      event.finish();
      resolve();
    } else {
      // 普通定义的（content里面分多步骤）
      event.content(); //  多步骤同步，最后一次step更改事件为已完成
      resolve();
    }
  });
}
function trigger() {
  // 不执行任何效果的或者触发器收集没有的直接返回
  return this;
  // 执行xxx
  this.next = ["xxx"];
  return this;
}
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

// console.log(globalEvent, phaseEvent, cardEvent, hpEvent, statusEvent);
// createEvent  =>   默认挂载到globalEvent的next里面

// createEvent('game')   =>  event.trigger("gameStart")  =>  (game.gameDraw  =>   game.phaseLoop )
// game.createEvent('gameDraw').setContent('gameDraw')
// game.createEvent('phaseLoop').setContent('phaseLoop')

const p = (fn) =>
  new Promise((r) =>
    setTimeout(() => {
      fn();
      r();
    }, 1000)
  );

// 1.initGameEvent
// 2.createEvent('game').setContent()
// 3.   step4: game.chooseCharacter()   step5:event.trigger('gameStart')   step6:game.gameDraw  step7:game.phaseLoop
// 4.  game.createEvent('chooseCharacter')   game.me.chooseButton(game.createEvent('chooseButton'))
// 5. => game => gameDraw | phaseLoop  =>  phase
