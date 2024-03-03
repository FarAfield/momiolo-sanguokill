import emitter from "@/core/emitter";
import { useGameStore } from "@/store";
import GameEvent, { EventManager } from "@/core/gameEvent";
import GameContent from "@/core/gameContent";
import { pick } from "lodash-es";

const mockContent = {
  extraDraw: async function ({ event }) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        console.log("额外摸牌结束，进入出牌阶段");
        event.triggerAsync("extraUse");
        resolve();
      }, 2000);
    });
  },
  extraUse: async function ({ event }) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        console.log("额外出牌结束，进入弃牌阶段");
        event.triggerAsync("extraDis");
        resolve();
      }, 2000);
    });
  },
  extraDis: async function ({ event }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("额外弃牌结束，进入正常流程");
        event.finish();
        resolve();
      }, 2000);
    });
  },
};

function logEventPromise(event) {
  function logEvent(e) {
    const result = pick(e, ["eventName", "isFinish", "content", "hasNext"]);
    if (e.next) {
      result.next = [...e.next];
    }
    if (e.parent) {
      result.parent = logEvent(e.parent);
    }
    return result;
  }
  return logEvent(event);
}

async function gameEventExecutorStart() {
  const event = EventManager.event;
  // console.log(logEventPromise(event), "gameEventExecutor");
  // gameOver
  if (event.isFinish && event.eventName === "game") {
    return;
  }
  //  事件执行完成，删除该事件，收集事件结果
  if (event.isFinish) {
    // 若父事件存在next，删除已执行的事件
    if (event.parent.next.length) {
      event.parent.next.shift();
    }
    EventManager.event = event.parent;
    await gameEventExecutorStart();
    return;
  }
  // hasNext为true且event.next非空，优先执行next
  if (event.hasNext && event.next.length) {
    const currentEvent = event.next[0];
    GameEvent.trigger(currentEvent);
    await gameEventExecutorStart();
    return;
  }
  //  hasNext为true且event.next为空，则代表事件执行结束
  if (event.hasNext && !event.next.length) {
    event.finish();
    await gameEventExecutorStart();
    return;
  }
  // 事件未完成则执行事件
  if (!event.isFinish) {
    await runContent();
    await gameEventExecutorStart();
    return;
  }
}

async function runContent() {
  const event = EventManager.event;
  return new Promise((resolve) => {
    setTimeout(async () => {
      await Object.assign(GameContent, mockContent)[event.eventName]({ event });
      console.log(`执行${event.eventName}-------完成`);
      resolve();
    }, 1000);
  });
}

async function gameEngineStart() {
  GameEvent.trigger("game");
  gameEventExecutorStart();
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

const gameStore = useGameStore();

async function initEventEngine() {
  const playerList = gameStore.playerList;
  // 游戏开始全局事件
  for (let i = 0; i < globalEvent.length; i++) {
    for (let j = 0; j < playerList.length; j++) {
      await trigger(globalEvent[i], playerList[j]);
    }
  }
  let roundCount = 0;
  // 循环执行回合
  while (1) {
    roundCount++;
    console.error(`第${roundCount}回合----`);
    for (let i = 0; i < playerList.length; i++) {
      for (let j = 0; j < phaseEvent.length; j++) {
        // 判断玩家时是否存活，存活则触发事件
        // 判断玩家是否跳过阶段，跳过则丢失某个阶段
        // 判断玩家是否有额外阶段，有则在此处额外附加阶段
        await trigger(phaseEvent[j], playerList[i]);
      }
    }
  }
}

function trigger(triggerEvent, target) {
  if (triggerEvent.includes("global")) {
    return new Promise((r) => {
      setTimeout(() => {
        console.log(`全局事件：${triggerEvent}，玩家: ${target.playerName}`);
        r();
      }, 100);
    });
  }
  if (triggerEvent.includes("phase") || triggerEvent.includes("round")) {
    return new Promise((r) => {
      setTimeout(() => {
        console.log(
          `回合阶段事件：${triggerEvent}，玩家: ${target.playerName}`
        );
        r();
      }, 1000);
    });
  }
}

export { initEventEngine, gameEngineStart };
