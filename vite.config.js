import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    open: '/public/index.html',
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  plugins: [tsconfigPaths()],
});
