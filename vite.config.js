// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/',
});

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // latest JS
    outDir: "dist",   // output folder
    rollupOptions: {
      output: {
        manualChunks: undefined, // chunks auto split ना हो
      },
    },
  },
  optimizeDeps: {
    force: true, // deps को re-bundle कर देगा
  },
  // Android/Termux में native module problem avoid करने के लिए
  resolve: {
    alias: {
      "rollup/dist/native": "rollup/dist/shared/node-entry.js",
    },
  },
});