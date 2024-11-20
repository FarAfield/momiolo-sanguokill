const GameContent = {
  game: function ({ event, game, get, ui }) {
    function step1() {
      // 创建玩家
      ui.createPlayer();
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
      game.log(`你处于【${me.playerSeatNum}】号位`);
      // 当前玩家优先选
      await game.delay(3000);
      me.chooseHero(heroList[get.random(0, heroList.length - 1)]);
      game.log(`【你选择了${me.playerTitle}: ${me.playerName}】`);
      // 剩余的继续选
      const otherPlayerList = playerList.filter(
        (i) => i.playerSeatNum !== me.playerSeatNum
      );
      for (let i = 0; i < otherPlayerList.length; i++) {
        await game.delay(3000);
        const hero = heroList[get.random(0, heroList.length - 1)];
        otherPlayerList[i].chooseHero(hero);
        game.log(
          `【${otherPlayerList[i].playerSeatNum}号位选择了${otherPlayerList[i].playerTitle}: ${otherPlayerList[i].playerName}】`
        );
      }
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
  gameDraw: function ({ event, game, get }) {
    async function step1() {
      const playerList = get.gamePlayerList();
      const cardPile = get.gameCardPile();
      for (let i = 0; i < playerList.length; i++) {
        await game.delay(3000);
        playerList[i].handCards = cardPile.splice(0, 2);
        const cardNames = playerList[i].handCards
          .map((i) => i.cardName)
          .join(",");
        game.log(`玩家【${playerList[i].playerName}】获得两张牌:${cardNames}`);
      }
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
