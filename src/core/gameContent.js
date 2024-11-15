const GameContent = {
  game: function ({ event, game, get, ui }) {
    function step1() {
      // 创建玩家
      ui.createPlayer(2);
      // 创建卡牌
      ui.createCard();
      // 洗牌
      game.washCard();
      // 选择英雄
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
    return {
      step1,
      step2,
      step3,
      step4,
    };
  },
  chooseHero: function ({ event, game, get }) {
    async function step1() {
      const playerList = get.gamePlayerList();
      const me = get.gameMe();
      const heroList = get.heroList();
      await game.delay(3000);
      // 当前玩家优先选
      me.chooseHero(heroList[get.random(0, heroList.length - 1)]);
      game.log(`【你选择了${me.playerTitle}: ${me.playerName}】`);
      await game.delay(3000);
      // 剩余的继续选
      playerList
        .filter((i) => i.playerSeatNum !== me.playerSeatNum)
        .forEach((i) => {
          i.chooseHero(heroList[get.random(0, heroList.length - 1)]);
          game.log(
            `【${i.playerSeatNum}号位选择了${me.playerTitle}: ${me.playerName}】`
          );
        });

      event.finish();
    }
    return {
      step1,
    };
  },
  gameStart: function ({ event }) {
    async function step1() {
      event.finish();
    }
    return {
      step1,
    };
  },
  gameDraw: function ({ event }) {
    async function step1() {
      await game.delay(3000);
      console.log("gameDraw  done");
      event.finish();
    }
    return {
      step1,
    };
  },
  gamePhaseLoop: function ({ event, get }) {
    async function step1() {
      get.gameRound(get.gameRound() + 1);
      if (get.gameRound() > 3) {
        game.over();
      } else {
        await game.delay(3000);
        console.log("gamePhaseLoop  done", `第${get.gameRound()}轮`);
        event.goto(1);
      }
    }
    return {
      step1,
    };
  },
};

export default GameContent;
