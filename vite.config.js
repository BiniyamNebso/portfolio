import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // Set the base URL for your deployment
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  }
})
