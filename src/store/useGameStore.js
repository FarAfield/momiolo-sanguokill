import { defineStore } from "pinia";

const useGameStore = defineStore({
  id: "gameStore",
  state: () => {
    return {
      background: "background2",
    };
  },
});

export default useGameStore;
