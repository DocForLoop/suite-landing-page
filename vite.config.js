import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'), // Set scss folder as an alias
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});