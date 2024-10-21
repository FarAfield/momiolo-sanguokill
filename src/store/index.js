import { createPinia } from "pinia";
import useGameStore from "@/store/useGameStore";

const pinia = createPinia();

export { useGameStore };
export default pinia;
