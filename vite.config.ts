import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. BASE URL: Critical for GitHub Pages to load assets correctly
  base: '/myseotools/',
  resolve: {
    alias: {
      // 2. PATH ALIAS: Fixes imports using "@/" to point to the "src" directory
      '@': path.resolve(__dirname, './src'),
    },
  },
});