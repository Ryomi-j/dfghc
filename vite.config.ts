import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ['./src/mocks/setupTests.ts'],
    environment: 'jsdom'
  },
  define:{
    'process.env.NODE_ENV': '"development"' 
  }
});
