import { defineConfig } from 'vite'
import elmPlugin from 'vite-plugin-elm'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    elmPlugin(),
    checker({ typescript: true }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
