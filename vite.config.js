import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./"),
      "@": resolve(__dirname, "src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".mjs"],
  },
});
