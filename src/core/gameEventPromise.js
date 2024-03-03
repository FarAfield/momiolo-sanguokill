/**
 *  GameEventPromise
 *  将事件Promise化以使用async异步函数来执行事件
 *  集成了事件和Promise二者的所有属性,Promise的原有属性无法被修改,拦截对事件属性的修改、删除
 */

class GameEventPromise extends Promise {
  // return a Promise for then/catch/finally
  static get [Symbol.species]() {
    return Promise;
  }
  // Promise overrides his Symbol.toStringTag
  get [Symbol.toStringTag]() {
    return "GameEventPromise";
  }
  #event;
  constructor(args) {
    const event = args;
    super((resolve, reject) => {
      event.resolve = resolve;
      event.reject = reject;
    });
    this.#event = event;
    return new Proxy(this, {
      get: function (target, propKey, receiver) {
        const thisValue = Reflect.get(target, propKey);
        if (thisValue) {
          if (typeof thisValue == "function") {
            return thisValue.bind(target); // bind this
          }
          return thisValue;
        }
        return Reflect.get(event, propKey, receiver);
      },
      set: function (target, propKey, value, receiver) {
        return Reflect.set(event, propKey, value, receiver);
      },
      has: function (target, propKey) {
        return Reflect.has(event, propKey);
      },
      deleteProperty: function (target, propKey) {
        return Reflect.deleteProperty(event, propKey);
      },
      ownKeys: function (target) {
        return Reflect.ownKeys(event);
      },
      getOwnPropertyDescriptor: function (target, propKey) {
        return Reflect.getOwnPropertyDescriptor(event, propKey);
      },
      defineProperty: function (target, propKey, propDesc) {
        return Reflect.defineProperty(event, propKey, propDesc);
      },
    });
  }
  toEvent() {
    return this.#event;
  }
}

export default GameEventPromise;
