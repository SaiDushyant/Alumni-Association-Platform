import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // This allows for HTML5 History API fallback
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Additional Data: Import global SCSS variables, mixins, etc.
        // prependData: `@import "@/styles/variables.scss";`
      },
    },
  },
});
