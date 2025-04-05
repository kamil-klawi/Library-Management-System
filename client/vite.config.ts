import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': './src/assets',
      '@components': './src/components',
      '@context': './src/context',
      '@hooks': './src/hooks',
      '@pages': './src/pages',
      '@services': './src/services',
      '@styles': './src/styles',
      '@utils': './src/utils',
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api/v1': 'http://localhost:5000',
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
})
