import { defineStore } from "pinia";

const useGameStore = defineStore({
  id: "gameStore",
  state: () => {
    return {
      pause: false,
      over: false,
      round: 0,
      auto: false,
      ai: {},
      event: null,
      history: [],
      playerList: [],
      cardPile: [],
      me: {},
    };
  },
  actions: {},
});

export default useGameStore;
