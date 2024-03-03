import GameEventPromise from "@/core/gameEventPromise";

class GameEvent {
  #promise;
  constructor(name) {
    // base attrs
    this.eventId = Math.random();
    this.eventName = name;
    this.isFinish = false;
    this.resolve = null;
    this.reject = null;
    // event attrs
    this.parent = undefined;
    this.hasNext = false;
    this.next = [];
    this.async = false;
    this.content = "";
    this.result = {};
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
  // 创建链式非异步获取数据事件
  static trigger(name) {
    const event = new GameEvent(name);
    event.parent = EventManager.event;
    EventManager.event = event.toPromise();
    return EventManager.event;
  }
  // 创建链式异步获取数据事件
  triggerAsync(name) {
    const event = new GameEvent(name);
    event.parent = this;
    event.async = true;
    return event.toPromise();
  }
  forResult() {
    return Promise.resolve(this.isFinish);
  }
}

export default GameEvent;

const EventManager = {
  event: GameEvent.initGameEvent(),
};

export { EventManager };
