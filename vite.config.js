import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server:{
    proxy: {
      '/api' : {
        target: 'https://aesthetic-kelpie-ad2dd2.netlify.app',
        changeOrigin: true,
        rewrite: path => path.replace('/api', '')
      }
    }
  },
  optimizeDeps: {
    include: ['primeicons']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
