// 把 dist/index.html 复制成 dist/404.html
// GitHub Pages 没有 SPA 回退，深链接（如 /task-hub/login 直接刷新）会命中 404.html，
// 这样由 Vue Router 接管，页面依然能正常渲染。
import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const src = join(dist, 'index.html')
const dest = join(dist, '404.html')

if (!existsSync(src)) {
  console.error('[spa-fallback] 未找到 dist/index.html，请先执行 vite build')
  process.exit(1)
}

copyFileSync(src, dest)
console.log('[spa-fallback] 已生成 dist/404.html')
