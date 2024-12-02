import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: process.env.NODE_ENV !== 'production', // Nonaktifkan refresh di production
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        hmr: process.env.NODE_ENV === 'production' ? false : { // Nonaktifkan HMR di production
            host: process.env.VITE_HMR_HOST || 'websitefilmfinder-production.up.railway.app',
            port: parseInt(process.env.VITE_HMR_PORT) || 443,
            protocol: 'wss',
        },
        proxy: {
            '/api': {
                target: `http://localhost:8000`,
                changeOrigin: true,
                secure: false,
                ws: true, // Mengaktifkan WebSocket untuk API jika diperlukan
            },
        },
    },
});
