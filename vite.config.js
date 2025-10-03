import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import vitePluginSWCopy from './vite-plugin-sw-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSWCopy()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      },
      // Ensure service worker is not processed by Vite
      external: ['service-worker.js']
    }
  },
  server: {
    port: 5173,
    headers: {
      'Service-Worker-Allowed': '/',
      'Service-Worker': 'script'
    },
    proxy: {
      '/api': {
        target: 'https://api.kaamsetu.co.in',
        changeOrigin: true,
      },
    },
  },
});