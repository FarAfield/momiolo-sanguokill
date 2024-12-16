import GameEventPromise from "@/core/gameEventPromise";
import GameLibrary from "@/core/gameLibrary";
import GameLog from "@/core/gameLog";
import GameStatus from "@/core/gameStatus";
import { createSeedRadom } from "@/core/utils";

const _library = GameLibrary;
const _log = GameLog;
const _status = GameStatus;
const radom = createSeedRadom(_library.runtimeConfig.seed);

class GameEvent {
  #promise;
  constructor(name, aop = false) {
    // 基础属性
    this.id = radom();
    this.name = name;
    this.isFinish = false;
    this.resolve = null;
    this.reject = null;
    // 事件属性
    this.parent = undefined;
    this.next = [];
    this.after = [];
    this.content = undefined;
    this.result = {};
    this.subResult = {};
    this.step = 0;
    this.timing = aop ? 0 : undefined; // 事件执行时机(依次添加before/begin/end/after)
    // 游戏属性
    this.player = {};
    this.source = {};
    this.target = {};
    this.targets = [];
    this.card = {};
    this.cards = [];
    this.spell = undefined;
    this.forced = false;
    this.real = false;
    this.noTrigger = false;
    this.baseDamage = 0;
    this.extraDamage = 0;
  }

  /** ================================  基础属性方法  ================================ */
  toPromise() {
    !this.#promise && (this.#promise = new GameEventPromise(this));
    return this.#promise;
  }

  static createEvent(name, aop, triggerEvent) {
    const next = new GameEvent(name, aop).toPromise();
    (triggerEvent || _status.event).next.push(next);
    return next;
  }

  static initGameEvent() {
    return new GameEvent().finish().toPromise();
  }
  finish() {
    this.isFinish = true;
    this.resolve?.();
    return this;
  }
  /** ================================  事件属性方法  ================================ */

  getParent(keyword) {
    let event = this;
    if (typeof keyword === "string") {
      const historyList = [];
      while (true) {
        if (!event) {
          return null;
        }
        historyList.push(event);
        if (event.name === keyword) {
          return event;
        }
        event = event.parent;
        if (historyList.includes(event)) {
          return null;
        }
      }
    } else if (typeof keyword === "number") {
      for (let i = 1; i < level; i++) {
        if (!event) {
          return null;
        }
        event = event.parent;
      }
      return event;
    }
  }
  insertNext(name, aop) {
    _library.debug && _log.log(`insertNext 【${name}】`);
    const next = new GameEvent(name, aop).toPromise();
    this.next.push(next);
    return next;
  }
  insertAfter(name, aop) {
    _library.debug && _log.log(`insertAfter 【${name}】`);
    const after = new GameEvent(name, aop).toPromise();
    this.after.push(after);
    return after;
  }

  setContent(content) {
    this.content = content;
    return this;
  }
  goto(step) {
    this.step = step - 2;
    return this;
  }

  /** ================================  游戏属性方法  ================================ */

  increase(key, value = 1) {
    if (typeof this[key] !== "number" || typeof value !== "number") {
      _log.error(`【${this.name}】increase 错误`);
      return;
    }
    this[key] += value;
  }

  decrease(key, value = 1) {
    if (typeof this[key] !== "number" || typeof value !== "number") {
      _log.error(`【${this.name}】decrease 错误`);
      return;
    }
    this[key] = Math.max(this[key] - value, 0);
  }

  trigger(name, aop) {
    _library.debug && _log.log(`【${name}】创建`);
    const next = new GameEvent(name, aop).toPromise();
    this.next.push(next);
    return next;
  }
}
export default GameEvent;
