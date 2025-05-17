// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
  root: 'src',                    // where your index.html lives
  publicDir: '../static',         // your “public” folder
  base: command === 'serve'
    ? '/'                          // in dev: load from “/”
    : '/solar-system/',            // in prod: load from “/solar-system/”
  server: {
    host: true,
    open: false,
  },
  build: {
    outDir: '../dist',            // where to drop the final build
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'),
    },
  },
}));
