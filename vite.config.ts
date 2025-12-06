import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For Vercel, app is at root, so base should be "/"
  base: '/', // you can also completely remove this line
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
