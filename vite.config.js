import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    host: true,
    fs: {
      strict: true,
    },
  },
  plugins: [vue(), vueJsx({})],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
      {
        find: "assets",
        replacement: resolve(__dirname, "./src/assets"),
      },
    ],
    extensions: [".ts", ".js"],
  },
});
