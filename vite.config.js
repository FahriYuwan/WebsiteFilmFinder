export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        hmr: {
            host: 'localhost',
            port: 5173,
        },
        proxy: {
            // Proxy semua permintaan API ke backend Laravel
            '/api': {
                target: 'http://localhost:8000', // Laravel berjalan di port 8000
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api'),
            },
        },
    },
});
