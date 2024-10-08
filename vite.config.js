import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    optimizeDeps: {
        include: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
    },
});
resolve: {
    alias: {
        '@': '/Users/joshuagarcia/Documents/GitHub/todo-app2',
    },
},