import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/hp-world/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
