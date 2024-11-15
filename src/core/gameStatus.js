import { useGameStore } from "@/store";

const GameStatus = {
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
export default GameStatus;

const gameStore = useGameStore();

// 通过Proxy劫持status的变更来更新视图
