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
    this.next = [];
    this.after = [];
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
    console.log(`执行${this.eventName}-------完成`);
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
  // 触发事件
  trigger(name) {
    const next = new GameEvent(name);
    this.next.push(next);
    this.result[name] = false;
    return this;
  }
}

export default GameEvent;

const EventManager = {
  event: GameEvent.initGameEvent(),
};

export { EventManager };
