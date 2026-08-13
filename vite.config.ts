import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        engineering: resolve(__dirname, 'engineering/index.html'),
        aiClipping: resolve(__dirname, 'engineering/ai-clipping/index.html'),
      },
    },
  },
})
