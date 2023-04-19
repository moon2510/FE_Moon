import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve('./src/components'),
      '@root': path.resolve('./src'),
      '@util': path.resolve('./src/util'),
      '@redux': path.resolve('./src/redux'),
    },
  },
})
