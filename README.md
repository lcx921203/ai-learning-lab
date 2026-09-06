# AI Learning Companion — Reference V1.6

本版针对 V1.5 真机反馈做“降速 + 减法”。

## 动效调整
- Hero 自动轮播：5.6 秒 → 10 秒
- Hero 切换动画：约 0.7 秒，更柔和
- 删除 Hero 人物持续漂浮
- 删除首屏错峰入场
- 删除 Roadmap 流光
- 删除 Roadmap 头像弹入
- AI Orb 保留，但改为极慢：
  - 外层旋转约 20 秒
  - 内层旋转约 16 秒
  - 呼吸约 9–10 秒
  - 幅度明显降低
- 保留按钮按压反馈，不让页面到处持续运动

## 插画调整
均为 Open Doodles 官方 PNG，不使用 SVG：
- 今日学习：reading.png
- 项目实战：sitting-reading.png
- 模拟面试：levitate.png

插画仍直接融入蓝色 Hero，不增加白色硬裁切框。

## Roadmap 调整
- 删除当前任务头像堆叠
- 去掉流光动画
- Roadmap 左右内边距进一步缩小，时间轴更宽
- 路径条加高、字号略增
- 默认路径跨度改为：
  - Python：约 60%
  - Data Agent：约 80%
  - 面试项目表达：约 60%
- 标题直接放在路径条内部
- 日 / 周 / 月 / 年切换继续可交互
- 网格线更淡，更接近参考图的轻量 Roadmap

## 使用
直接覆盖仓库根目录 `index.html`。

## Commit
refactor(ui): calm motion widen roadmap and refresh hero illustrations
