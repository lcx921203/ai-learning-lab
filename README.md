# AI Learning Companion — V1.8

这版不是继续堆视觉，而是把“视觉规范”和“交互语义”分开。

## 交互语义

### Hero
Hero 是独立的 Featured Carousel（重点推荐轮播）。
- 3 张
- 右上角固定 1/3、2/3、3/3
- 5 秒自动轮播
- 支持左右滑
- 支持底部圆点点按
- Hero 不再自动改变下面的 Tab 内容

### 技术 / 项目 / 面试
三个 Tab 是“首页内容分类筛选”，不是 Hero 页码。

点击 Tab 会同时改变：
1. Tab 高亮
2. Tab 下方的上下文提示
3. Quick Start 两张卡
4. My Courses 三条课程内容

#### 技术
- Python 集合与哈希
- Data Agent 源码
- 数据工程 / Python 工程课程

#### 项目
- AI-Native Data Platform
- Audit Window Calibration
- 项目架构 / 难点复盘

#### 面试
- 高频技术问答
- 项目表达
- 模拟面试 / 项目题库 / 简历优化

这样用户点击 Tab 后，会明确看到“整个内容区域已经进入哪个模式”。

## Quick Start
删除“1/3、2/4”这类没有业务解释的数字。
状态只保留有意义的信息：
- 12 MIN
- 上次
- 当前
- 下一步
- 8 题
- Story

状态胶囊去掉灰色描边，避免脏边。

## AI Assistant
彻底删除 Orb / 光晕 / 呼吸动画。
改用 Open Doodles PNG 插画填充视觉留白。
AI 区域保持静态，只保留“问 AI”操作。

## Roadmap
- 背景由纯白改为淡蓝灰 `#E9EEF7`
- 保留错位时间路径
- 无头像
- 无流光
- 日 / 周 / 月 / 年可切换
- 交互只做必要的短反馈

## 视觉原则
1. 颜色：冷灰底 + 蓝主色 + 粉 / 橙功能色 + 黑视觉锚点
2. 排版：大标题有力量，小字克制、有个性，不做无意义装饰
3. 插画：优先 Open Doodles PNG，卡片空时用于丰富构图，不使用矢量 SVG
4. 动效：只为状态变化和反馈服务，不做持续炫技动画
5. 交互：每个可点元素必须有明确语义和结果

## Commit
refactor(ui): clarify interaction semantics and replace ai motion with illustration
