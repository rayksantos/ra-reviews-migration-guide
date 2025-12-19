import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ra-reviews-migration-guide/', // Altere para o nome do seu repositório no GitHub
  server: {
    port: 5173,
  }
})