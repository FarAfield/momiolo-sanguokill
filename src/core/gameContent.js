// 添加事件时机
function addEventInstant(name) {
  return ["Before", "Begin", "End", "After"].map((i) => `${name}${i}`);
}
const globalEvent = [
  "globalGameStart", // 所有人都展示武将牌后
  "globalGameDraw", // 游戏开始阶段
  "globalRound",
  "globalGameEnd",
];
const globalGameDrawEvent = addEventInstant("globalGameDraw");
const globalRoundEvent = ["roundBegin", "phaseLoop", "roundEnd"];
const phaseLoopEvent = [
  "phaseStart", // 开始
  "phaseJudge", // 判定
  "phaseDrawCard", // 摸牌
  "phaseUseCard", // 出牌
  "phasedDisCard", // 弃牌
  "phaseChange", // 阶段变更
];
const phaseStartEvent = addEventInstant("phaseStart");
const phaseJudgeEvent = addEventInstant("phaseJudge");
const phaseDrawCardEvent = addEventInstant("phaseDrawCard");
const phaseUseCardEvent = addEventInstant("phaseUseCard");
const phasedDisCardEvent = addEventInstant("phasedDisCard");

const GameContent = {
  game: function ({ event }) {
    globalEvent.forEach((i) => {
      event.trigger(i);
    });
  },
  globalGameDraw: function ({ event }) {
    globalGameDrawEvent.forEach((i) => {
      event.trigger(i);
    });
  },
  globalRound: function ({ event }) {
    globalRoundEvent.forEach((i) => {
      event.trigger(i);
    });
  },
  phaseLoop: function ({ event }) {
    phaseLoopEvent.forEach((i) => {
      event.trigger(i);
    });
  },
  phaseStart: function ({ event }) {
    phaseStartEvent.forEach((i) => {
      event.trigger(i);
    });
  },
  phaseJudge: function ({ event }) {
    phaseJudgeEvent.forEach((i) => {
      event.trigger(i);
    });
  },
  phaseDrawCard: function ({ event }) {
    phaseDrawCardEvent.forEach((i) => {
      event.trigger(i);
    });
  },
  phaseUseCard: function ({ event }) {
    phaseUseCardEvent.forEach((i) => {
      event.trigger(i);
    });
  },
  phasedDisCard: function ({ event }) {
    phasedDisCardEvent.forEach((i) => {
      event.trigger(i);
    });
  },
};

export default GameContent;
