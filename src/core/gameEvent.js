import GameEventPromise from "@/core/gameEventPromise";
import { createSeedRadom, eventLog } from "@/utils";

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
    this.content = "";
    this.result = {}; // 父事件收集子事件执行结果  `${eventId}-status`   `${eventId}-result`
    this.currentResult = {}; // 当前事件执行结果
    this.step = 0; // 事件执行步骤
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

  static initGameEvent() {
    return new GameEvent().toPromise();
  }
  // 事件结束
  finish(result) {
    this.isFinish = true;
    this.result = result;
    this.resolve?.();
    eventLog(`执行${this.eventName}完成`, this.eventId);
    return this;
  }
  // 生成Promise
  toPromise() {
    !this.#promise && (this.#promise = new GameEventPromise(this));
    return this.#promise;
  }
  // 设置事件内容
  setContent(content) {
    this.content = content;
    return this;
  }
  // 触发新事件
  trigger(name) {
    const next = new GameEvent(name);
    this.next.push(next);
    this.result[`${next.eventId}-status`] = "undone";
    eventLog(`触发${next.eventName}`, next.eventId);
    return this;
  }
}

export default GameEvent;

const EventManager = {
  event: GameEvent.initGameEvent(),
};

export { EventManager };
