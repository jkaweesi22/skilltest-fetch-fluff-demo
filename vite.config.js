import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match the GitHub Pages project URL: https://<owner>.github.io/<repo>/
// Replace skilltest-fetch-fluff-demo with the repo's name (kebab-case) before deploying.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/skilltest-fetch-fluff-demo/',
})
