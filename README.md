# Editorial Playful V1.1 — Inline Hotfix

这版是针对 iPhone / GitHub Pages 出现“HTML 已更新，但 CSS/JS 仍是旧缓存”的修复包。

## 修复方式
- CSS 全部内联进 index.html
- JS 全部内联进 index.html
- Hero SVG 插画也内联
- 不再依赖 css/app.css、js/app.js、assets 路径
- 增加 no-cache 元信息
- 只需覆盖仓库根目录 index.html

## 提交信息
fix(ui): inline homepage assets to prevent stale GitHub Pages cache
