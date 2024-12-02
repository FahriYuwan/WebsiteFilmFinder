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
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        hmr: {
            host: process.env.VITE_HMR_HOST || 'websitefilmfinder-production.up.railway.app',
            port: parseInt(process.env.VITE_HMR_PORT) || 443, // Gunakan port HTTPS
            protocol: 'wss', // WebSocket Secure untuk HTTPS
        },        
        proxy: {
            '/api': {
                target: `http://localhost:8000`,
                changeOrigin: true,
                secure: false,
                ws: true, // Tambahkan properti ini untuk WebSocket
            },
        },
    },
    }
);
