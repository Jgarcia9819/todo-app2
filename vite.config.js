import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "src"), // Ensure the root is correctly set
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@firebase/app": "firebase/app",
      "@firebase/auth": "firebase/auth",
    },
  },
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth", "firebase/firestore"],
  },
});
