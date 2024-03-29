import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.html'),
      name: 'sprint_3',
      fileName: (format) => `sprint3.${format}.js`,
    },
    outDir: 'dist',
  },
  plugins: [tsconfigPaths()],
});
