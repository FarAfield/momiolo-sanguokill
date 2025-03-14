import GameAi from "@/core/gameAi";
import GameCard from "@/core/gameCard";
import GameContent from "@/core/gameContent";
import GameEvent from "@/core/gameEvent";
import GameGetSet from "@/core/gameGetSet";
import GameLibrary from "@/core/gameLibrary";
import GameLog from "@/core/gameLog";
import GamePlayer from "@/core/gamePlayer";
import GameStatus from "@/core/gameStatus";
import GameUi from "@/core/gameUi";
import { AsyncFunction, UnInstantiated, delay } from "@/core/utils";
import { pick, cloneDeep } from "lodash-es";

const _ai = GameAi;
const _content = GameContent;
const _event = GameEvent;
const _get = GameGetSet.get;
const _set = GameGetSet.set;
const _library = GameLibrary;
const _log = GameLog;
const _status = GameStatus;
const _ui = GameUi;

class GameEngine extends UnInstantiated {
  static start() {
    _log.success("System", "游戏开始");
    // 初始化事件
    _status.event = GameEvent.initGameEvent();
    // 触发游戏事件
    _status.event.trigger("game");
    // 开启事件循环
    _game.loop();
  }
  static over() {
    _log.success("System", "游戏结束");
    _status.over = true;
  }

  static pause() {
    _log.warning("System", "游戏暂停");
    _status.pause = true;
  }

  static resume() {
    _log.warning("System", "游戏恢复");
    _status.pause = false;
    _game.loop();
  }

  static async delay(ms) {
    await delay(ms);
  }

  // 洗牌
  static washCard() {
    _status.cardPile.sort(() => Math.random() - 0.5);
  }

  static log() {
    let str = "";
    function transformClassObject(v) {
      if (v instanceof GameCard) {
        return v.name;
      } else if (v instanceof GamePlayer) {
        return v.name;
      } else if (v instanceof GameEvent) {
        return v.name;
      } else {
        return JSON.stringify(v);
      }
    }
    Array.from(arguments).forEach((value) => {
      if (typeof value === "object") {
        if (Array.isArray(value)) {
          str += `【${value.map(transformClassObject).join(",")}】`;
        } else {
          str += `【${transformClassObject(value)}】`;
        }
      } else if (typeof value === "string") {
        str += value;
      }
    });
    _log.log(str);
  }

  static debug() {
    _log.debug(...arguments);
  }

  // 事件循环
  static async loop() {
    while (true) {
      if (_status.pause || _status.over) {
        return;
      }
      const event = _status.event;
      // console.log("gameLoop", logEventPromise(event));
      if (event.next.length) {
        const next = event.next.shift();
        next.parent = event;
        _status.event = next;
      } else if (event.isFinish) {
        if (event.timing === 2) {
          event.trigger(`${event.name}End`);
          event.timing += 1;
        } else if (event.timing === 3) {
          event.trigger(`${event.name}After`);
          event.timing += 1;
        } else if (event.after.length) {
          const after = event.after.shift();
          after.parent = event;
          _status.event = after;
        } else if (event.parent) {
          event.parent.subResult[`${event.id}-status`] = "done";
          event.parent.subResult[`${event.id}-result`] = event.result;
          event.finish();
          _library.debug && _log.log(`【${event.name}】执行完成`);
          _status.event = event.parent;
        } else {
          event.finish();
        }
      } else {
        if (0) {
          event.finish();
        }
        if (event.timing === 0) {
          event.trigger(`${event.name}Before`);
          event.timing += 1;
        } else if (event.timing === 1) {
          event.trigger(`${event.name}Begin`);
          event.timing += 1;
        } else {
          await _game.runContent(event).then(() => {
            event.step += 1;
          });
        }
      }
    }
  }
  // 事件执行
  static async runContent(event) {
    return new Promise(async (resolve) => {
      if (typeof event.content !== "function") {
        event.setContent(_game.transformEventFunction(event));
      }
      // 执行content时入参必须保证与new Function参数一致
      await event.content(event, _game, _get, _set, _ui, _ai).catch((err) => {
        _log.error(`【${event.name}】执行异常`);
        console.error(err);
        _game.over();
      });
      resolve();
    });
  }
  // 事件解析器
  static transformEventFunction(event) {
    let fnMap = {};
    let fnKeyList = [];
    const fn = _content[event.name];
    if (!fn) {
      return new AsyncFunction("event", "event.finish();return;");
    } else {
      fnMap = fn({}); // 规范化参数
      fnKeyList = Object.keys(fnMap).sort(
        (a, b) => Number(a.replace("step", "")) - Number(b.replace("step", ""))
      );
      let str = `if(event.step >= ${fnKeyList.length}){event.finish();return;}`;
      str += "switch(event.step) {";
      fnKeyList.forEach((key, index) => {
        let functionBody = fnMap[key].toString();
        functionBody = functionBody.substring(
          functionBody.indexOf("{") + 1,
          functionBody.lastIndexOf("}")
        );
        str += `case ${index}:{${functionBody}break;}`;
      });
      str += "}";
      // 构造函数时的入参必须保证与执行时一致
      return new AsyncFunction("event", "game", "get", "set", "ui", "ai", str);
    }
  }
}

function logEventPromise(event) {
  function logEvent(e) {
    const result = pick(e, ["name", "isFinish", "content", "step"]);
    e.next && (result.next = e.next.map(logEvent));
    e.after && (result.after = e.after.map(logEvent));
    e.parent && (result.parent = logEvent(e.parent));
    e.result && (result.result = cloneDeep(e.result));
    e.subResult && (result.subResult = cloneDeep(e.subResult));
    return result;
  }
  return logEvent(event);
}

export default GameEngine;

// 暴露GameEngine供其内部调用
const _game = GameEngine;
