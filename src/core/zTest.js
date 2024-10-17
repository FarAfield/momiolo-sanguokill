import {
  isAsyncFunction,
  isGeneratorFunction,
  delay,
  runGen,
  runGenAsync,
  dynamicImportModule,
  UnInstantiated,
} from "./utils";
import GameContent from "./gameContent";
import GameEngine from "./gameEngine";
import GameEvent from "./gameEvent";
import GameStatus from "./gameStatus";
import { generateCard, generateHero } from "./gameLoad";

/** =========================测试utils============================== */

function testUtils() {
  function a() {}
  async function b() {}
  function* c() {}
  console.log(isAsyncFunction(a), isAsyncFunction(b), isAsyncFunction(c), [
    false,
    true,
    false,
  ]);
  console.log(
    isGeneratorFunction(a),
    isGeneratorFunction(b),
    isGeneratorFunction(c),
    [false, false, true]
  );
  delay(4500).then(() => console.log("delay 4.5s"));
  runGen(function* () {
    console.log("runGen");
    yield console.log(1);
    yield console.log(2);
    yield console.log(3);
  });
  runGenAsync(function* () {
    console.log("runGenAsync");
    yield delay(3000).then(() => console.log(1));
    yield delay(3000).then(() => console.log(2));
    yield delay(3000).then(() => console.log(3));
  });
  //   console.log(new UnInstantiated());
}
function testGameEvent() {
  GameEngine.boot();
  GameEngine.onload();
  GameEngine.start();
}
function testCardOrHero() {
  const cards = generateCard();
  const heros = generateHero();
  console.log(cards, heros);
}

async function testMain() {
  // testCardOrHero();
  const sc = await dynamicImportModule("card", "defaultCard");

  console.log(sc);
}

export { testMain };
