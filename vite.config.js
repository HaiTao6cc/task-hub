import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// GitHub Pages 的仓库名。仓库不叫 task-hub 的话，只改这一行即可
const REPO_NAME = 'task-hub'

export default defineConfig(({ command }) => ({
  // 本地 dev 保持 '/'，打包时切到 '/<repo>/'，否则 Pages 上资源会 404
  base: command === 'build' ? `/${REPO_NAME}/` : '/',
  plugins: [
    vue(),
    tailwindcss(), // 激活 Tailwind v4 引擎
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}))
