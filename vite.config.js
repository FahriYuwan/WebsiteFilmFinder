import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'], // Sesuaikan input file Anda
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0', // Agar bisa diakses di Railway
        port: 5173,
        strictPort: true, // Gunakan port ini secara ketat
        hmr: {
            host: process.env.RAILWAY_URL || 'websitefilmfinder-production.up.railway.app', // Gunakan domain Railway Anda
            port: 443, // Gunakan HTTPS untuk HMR
        },
        proxy: {
            '/api': {
                target: `http://localhost:8000`, // Proxy ke Laravel backend
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
