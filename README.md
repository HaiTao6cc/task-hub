# TaskHub

基于 Vue 3 + Vite 的任务工作台，数据保存在浏览器 localStorage。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build      # 产出 dist/，并自动生成 SPA 回退页 404.html
npm run preview    # 本地预览构建产物
```

## 部署到 GitHub Pages

已内置 `.github/workflows/deploy.yml`，推送到 `main` 分支即自动构建并发布。

**首次部署步骤**

1. 在 GitHub 新建仓库（默认名 `task-hub`，若用其他名字需改 `vite.config.js` 里的 `REPO_NAME`）
2. 关联远端并推送：

   ```bash
   git remote add origin https://github.com/<你的用户名>/task-hub.git
   git push -u origin main
   ```

3. 打开仓库 **Settings → Pages**，把 **Source** 改为 **GitHub Actions**
4. 等 Actions 跑完，访问 `https://<你的用户名>.github.io/task-hub/`

**改动说明**

- `vite.config.js`：构建时 `base` 设为 `/<仓库名>/`，本地 dev 仍为 `/`
- `src/router/index.js`：`createWebHistory(import.meta.env.BASE_URL)`，保证子路径下路由正常
- `scripts/spa-fallback.mjs`：把 `index.html` 复制为 `404.html`，使 `/login` 等深链接刷新不 404
- `public/.nojekyll`：阻止 Jekyll 处理构建产物
