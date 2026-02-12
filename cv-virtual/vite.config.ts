import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/cv-virtual/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})