import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  root: 'src',
  publicDir: '../static',
  base: command === 'serve' ? '/' : '/',     // always load assets from "/"
  server: {
    host: true,
    open: false,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
}));