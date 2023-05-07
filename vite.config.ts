import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // fixes for gitabl pages: https://forum.gitlab.com/t/no-access-control-allow-origin-header-for-https-projects-gitlab-io-auth/54904
  base: '/flowbite-vue-router-tabs',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
