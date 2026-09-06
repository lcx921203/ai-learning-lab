# AI Learning Companion — Reference V1.5

## V1.5：首页动效与 Roadmap 精修

### Hero 轮播
- 3 张首页主卡：今日学习 / 项目实战 / 模拟面试
- 每 5.6 秒自动轮播
- 支持底部指示点点击切换
- 支持手机左右滑切换
- 文字、进度、插画同步切换
- 插画有 4px 以内的轻微漂浮动效
- 用户触摸时自动暂停轮播，结束后恢复

### AI Assistant
- Orb 增加缓慢旋转、呼吸、亮度变化
- 增加非常轻的径向光晕
- 滚出可视区域时暂停动画，降低电量消耗
- 保留 prefers-reduced-motion 无动画兼容

### Roadmap
- 去掉独立左侧任务标题列
- 任务名、状态直接进入彩色路径条
- 黑色：已完成
- 橙色：当前进行中
- 蓝色：下一步
- 当前任务条有极轻的流光
- 当前节点头像堆叠弹入
- 日 / 周 / 月 / 年切换继续保留真实交互
- 时间轴更接近参考图，而不是传统 Gantt

### 微交互
- 首屏首次进入做轻微 stagger
- 卡片、按钮、导航按下为 0.975 scale
- 不给普通文字和列表添加持续动画

### 底部导航
- 增加页面底部安全区
- Roadmap 与固定导航之间增加真实可视空间
- 减少固定导航遮挡内容

## 插画
继续统一使用 Open Doodles PNG，不使用 SVG：
- https://www.opendoodles.com/

## 使用
直接覆盖仓库根目录 `index.html`。

## Commit
feat(ui): add hero carousel ai orb motion and refine roadmap interactions
