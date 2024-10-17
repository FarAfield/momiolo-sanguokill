const GameContent = {
  game: function ({ event, game }) {
    function step1() {
      event.trigger("chooseHero");
    }
    function step2() {
      event.trigger("gameStart");
    }
    function step3() {
      event.trigger("gameDraw");
    }
    function step4() {
      event.trigger("gamePhaseLoop");
    }
    function step5() {
      game.over();
    }
    return {
      step1,
      step2,
      step3,
      step4,
      step5,
    };
  },
  chooseHero: function ({ event }) {
    async function step1() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      console.log("chooseHero  done");
      event.finish();
    }
    return {
      step1,
    };
  },
  gameStart: function ({ event }) {
    async function step1() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      console.log("gameStart  done");
      event.finish();
    }
    return {
      step1,
    };
  },
  gameDraw: function ({ event }) {
    async function step1() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      console.log("gameDraw  done");
      event.finish();
    }
    return {
      step1,
    };
  },
  gamePhaseLoop: function ({ event }) {
    async function step1() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      console.log("gamePhaseLoop  done");
      event.finish();
    }
    return {
      step1,
    };
  },
  gameDrawBefore: function ({ event }) {
    return {
      step1: async function () {
        console.log("打断父级事件");
        event.parent.finish();
      },
    };
  },
};

export default GameContent;
