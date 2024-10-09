import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/", // Ensure the base path is correctly set
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist", // Ensure the output directory is set correctly
  },
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth", "firebase/database"],
  },
});
