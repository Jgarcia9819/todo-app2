import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth", "firebase/firestore"],
  },
});
