import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_BASE_URL } = loadEnv(mode, process.cwd())
  const base =
    command === 'build' && !VITE_BASE_URL ?  '/abz-test-task/' : VITE_BASE_URL

  console.log({ base, mode, command })

  return {
    base,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
