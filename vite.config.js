// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url'; // ← node:urlからインポート
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/portfolio/',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
});
