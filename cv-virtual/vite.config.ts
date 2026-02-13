import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: El 'base' debe coincidir exactamente con el nombre de tu repo en GitHub
  base: '/CV-virtual/',
  resolve: {
    alias: {
      // Esto permite que el proyecto entienda los imports tipo '@/components/...'
      '@': path.resolve(__dirname, './src'),
    },
  },
})