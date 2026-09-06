# AI Learning Companion — Reference V1.4

## 本次重点：Roadmap 真正实现为时间轴组件

- Roadmap 从三条普通胶囊状态条改为「时间轴 + 任务条」
- 默认使用周视图：周一到周五
- 黑色：已完成
- 橙色：当前进行中
- 蓝色：下一步
- 当前任务末端有状态头像堆叠
- 日 / 周 / 月 / 年四个视图可真实点击切换
- 切换后时间刻度与任务位置会同步更新
- 任务条可点击并有轻微交互反馈
- 纯 HTML + CSS + JavaScript，无图表库依赖，GitHub Pages 可直接运行

## 插画融合
重要插画开始统一使用 Open Doodles 的 PNG 成品，不使用 SVG：
- 顶部头像：https://opendoodles.s3-us-west-1.amazonaws.com/selfie.png
- Hero：https://opendoodles.s3-us-west-1.amazonaws.com/sitting-reading.png

Hero 不再使用白色圆形硬裁切：
- PNG 透明底直接融入蓝色 Hero
- 底部加非常轻的半透明几何形
- 人物、背景、色块共同组成卡片构图

Open Doodles 官网：
https://www.opendoodles.com/

Open Doodles 为 CC0，官网说明可自由复制、编辑、重混、分享或重绘。

## 覆盖方式
只需覆盖仓库根目录 `index.html`。

## Commit
feat(ui): build interactive timeline roadmap and integrate doodle artwork
