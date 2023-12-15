import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: '/public/index.html',
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
