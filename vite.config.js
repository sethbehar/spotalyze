import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    proxy: {
      // any request starting with /api/... will be forwarded
      '/create-checkout-session': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }
})


