import GameEventPromise from "@/core/gameEventPromise";
import { gameLog } from "@/core/utils";
import { createSeedRadom } from "@/utils";

const radom = createSeedRadom(1000); // 创建种子

class GameEvent {
  #promise;
  constructor(name) {
    // base attrs
    this.eventId = radom();
    this.eventName = name;
    this.isFinish = false;
    this.resolve = null;
    this.reject = null;
    // event attrs
    this.parent = undefined;
    this.next = [];
    this.after = [];
    this.content = undefined;
    this.result = {}; // 当前事件执行结果
    this.subResult = {}; // 子事件执行结果  `${eventId}-status`   `${eventId}-result`
    this.step = 0; // 事件执行步骤
    this.timing = undefined; // 事件执行时机(依次添加before/begin/end/after)
    // other attrs
    this.player = {};
    this.source = {};
    this.target = {};
    this.targets = [];
    this.card = {};
    this.cards = [];
    this.skill = "";
    this.forced = false;
    this.baseDamage = 0;
  }

  // 初始化事件
  static initGameEvent() {
    return new GameEvent().toPromise();
  }

  // 完成事件
  finish() {
    this.isFinish = true;
    this.resolve?.();
    return this;
  }
  // 跳转到指定步骤
  goto(step) {
    this.step = step - 2;
    return this;
  }
  setContent(content) {
    this.content = content;
    return this;
  }
  // todo
  getParent(level, keyword) {}

  // 生成Promise
  toPromise() {
    !this.#promise && (this.#promise = new GameEventPromise(this));
    return this.#promise;
  }

  // 触发新事件
  trigger(name) {
    if (name === "gameStart") {
      // 广播游戏开始
    }
    gameLog(`【${name}】创建`);
    const needTimingEventName = ["gameDraw", "gamePhaseLoop"]; // todo
    return this.insertNext(name, needTimingEventName.includes(name));
  }
  insertNext(name, needTiming = false) {
    const next = new GameEvent(name);
    needTiming && (next.timing = 0);
    this.next.push(next);
    return next;
  }
  insertAfter(name, needTiming = false) {
    const after = new GameEvent(name);
    needTiming && (after.timing = 0);
    this.after.push(after);
    return after;
  }
}
export default GameEvent;
