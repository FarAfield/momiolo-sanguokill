import { defineStore } from "pinia";
import { gameInit } from "@/core/init";

const useGameStore = defineStore({
  id: "gameStore",
  state: () => {
    return {
      background: "background2",
      playerList: [],
      cardList: [],
    };
  },
  actions: {
    async init() {
      const result = await gameInit();
      this.playerList = result.playerList;
      this.cardList = result.cardList;
    },
  },
});

export default useGameStore;
