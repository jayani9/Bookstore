import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/todolist/', // add this property and the value is the name of your repository
  plugins: [react()],
  test: {
    // vitest configuration
    globals: true,
    environment: 'jsdom',
  }
})
