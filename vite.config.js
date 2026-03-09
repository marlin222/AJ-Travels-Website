import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Treat uppercase image extensions as static assets (e.g. AJ_LOGO.JPG)
  assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.JPEG', '**/*.GIF', '**/*.WEBP'],
})
