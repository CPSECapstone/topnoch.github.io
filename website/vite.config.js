import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/topnoch.github.io/',
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.md'],
})
