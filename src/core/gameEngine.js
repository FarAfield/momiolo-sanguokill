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
        event.trigger("extraUse");
        resolve();
      }, 2000);
    });
  },
  extraUse: async function ({ event }) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        console.log("额外出牌结束，进入弃牌阶段");
        event.trigger("extraDis");
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
    const result = pick(e, ["eventName", "isFinish", "content"]);
    if (e.next) {
      result.next = [...e.next];
    }
    if (e.parent) {
      result.parent = logEvent(e.parent);
    }
    if (e.result) {
      result.result = { ...e.result };
    }
    return result;
  }
  return logEvent(event);
}

async function loop() {
  while (true) {
    const event = EventManager.event;
    // console.log(logEventPromise(event), "loop");
    // debugger;
    const { eventName, isFinish, next, after } = event;
    // 游戏暂停
    if (eventName === "pause") {
      break;
    }
    if (next.length) {
      const next = event.next.shift();
      next.parent = event;
      EventManager.event = next;
    } else if (isFinish) {
      if (after.length) {
        const after = event.after.shift();
        after.parent = event;
        EventManager.event = after;
      } else {
        // 结果给到父事件
        event.parent.result[event.eventName] = true;
        EventManager.event = event.parent;
      }
    } else {
      // 玩家阵亡、移除、退出,不触发事件
      if (0) {
        event.finish();
      } else {
        // 执行事件
        await runContent(event);
      }
    }
  }
}

async function runContent(event) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      if (
        Object.values(event.result).length &&
        Object.values(event.result).every((i) => !!i)
      ) {
        event.finish();
      } else {
        console.log(`执行${event.eventName}-------开始`);
        await Object.assign(GameContent, mockContent)[event.eventName]({
          event,
        });
      }
      resolve();
    }, 1000);
  });
}

async function gameEngineStart() {
  EventManager.event.trigger("game");
  loop();
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
