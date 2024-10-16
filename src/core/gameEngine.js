import emitter from "@/core/emitter";
import GameContent from "@/core/gameContent";
import GameEvent from "@/core/gameEvent";
import GameStatus from "@/core/gameStatus";
import { AsyncFunction, UnInstantiated, gameLog } from "@/core/utils";
import { pick } from "lodash-es";

const _content = GameContent;
const _event = GameEvent;
const _status = GameStatus;

class GameEngine extends UnInstantiated {
  static boot() {
    console.log("【游戏启动】");
  }
  static onload() {
    console.log("【游戏加载】");
  }
  static start() {
    console.log("【游戏开始】");
    // 初始化事件
    _status.event = _event.initGameEvent();
    // 触发游戏事件
    _status.event.trigger("game");
    // 开启事件循环
    _game.loop();
  }
  static over() {
    console.log("【游戏结束】");
    _status.over = true;
  }

  static pause() {
    console.log("【游戏暂停】");
    _status.pause = true;
  }

  static resume() {
    console.log("【游戏恢复】");
    _status.pause = false;
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
        if (event.after.length) {
          const after = event.after.shift();
          after.parent = event;
          _status.event = after;
        } else if (event.parent) {
          event.parent.subResult[`${event.eventId}-status`] = "done";
          event.parent.subResult[`${event.eventId}-result`] = event.result;
          event.finish();
          gameLog(`【${event.eventName}】执行完成`);
          _status.event = event.parent;
        } else {
          event.finish();
        }
      } else {
        if (0) {
          event.finish();
        }
        await _game.runContent(event).then(() => {
          event.step += 1;
        });
      }
    }
  }
  // 事件执行
  static async runContent(event) {
    return new Promise(async (resolve) => {
      if (typeof event.content !== "function") {
        event.setContent(_game.transformEventFunction(event));
      }
      await event.content(event, _game); // todo 入参  event,game   真正执行step入参
      resolve();
    });
  }
  // 事件解析器
  static transformEventFunction(event) {
    let fnMap = {};
    let fnKeyList = [];
    const fn = _content[event.eventName];
    if (!fn) {
      return new AsyncFunction("event.finish();return;");
    } else {
      fnMap = fn({ event, game: _game }); // todo 入参  { event, game }  形参，规范化展示
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
        str += `case ${index}:${functionBody}break;`;
      });
      str += "}";
      return new AsyncFunction("event", "game", str); // todo 生成器真正执行step入参
    }
  }
}

function logEventPromise(event) {
  function logEvent(e) {
    const result = pick(e, ["eventName", "isFinish", "content", "step"]);
    if (e.next) {
      result.next = e.next.map(logEvent);
    }
    if (e.parent) {
      result.parent = logEvent(e.parent);
    }
    if (e.result) {
      result.result = { ...e.result };
    }
    if (e.subResult) {
      result.subResult = { ...e.subResult };
    }
    return result;
  }
  return logEvent(event);
}

export default GameEngine;

// 暴露GameEngine供其内部调用
const _game = GameEngine;
