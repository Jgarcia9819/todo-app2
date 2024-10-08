import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/Users/joshuagarcia/Documents/GitHub/todo-app2",
    },
  },
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth", "firebase/firestore"],
  },
});
