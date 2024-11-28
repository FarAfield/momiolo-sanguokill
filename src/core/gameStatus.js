import { useGameStore } from "@/store";
import { cloneDeep } from "lodash-es";

const gameStore = useGameStore();
const GameStatus = {
  pause: false,
  over: false,
  round: 0,
  auto: false,
  ai: {},
  event: null,
  history: [],
  cardPile: [],
  playerList: [],
  me: {},
  current: {},
};
// 通过Proxy劫持status的变更来更新视图
function deepProxy(obj, syncObj) {
  const cache = new WeakMap();
  function createProxy(obj, syncObj) {
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    const proxy = new Proxy(obj, {
      get: function (target, propKey, receiver) {
        const value = Reflect.get(target, propKey, receiver);
        if (
          typeof value === "object" &&
          value !== null &&
          propKey !== "event"
        ) {
          return createProxy(value, syncObj[propKey]);
        }
        return value;
      },
      set: function (target, propKey, value, receiver) {
        Reflect.set(target, propKey, value, receiver);
        if (propKey !== "event") {
          if (typeof value === "object" && value !== null) {
            syncObj[propKey] = cloneDeep(value);
          } else {
            syncObj[propKey] = value;
          }
        }
        return true;
      },
    });
    cache.set(obj, proxy);
    return proxy;
  }
  return createProxy(obj, syncObj);
}
const GameStatusProxy = deepProxy(GameStatus, gameStore);
export default GameStatusProxy;
