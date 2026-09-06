# AI Learning Companion — V1.7

## 这版解决四个“意义不清”的问题

### 1. Hero 轮播数字
之前 2/3、3/5 表达的是内容进度，和轮播混在一起会造成跳跃。
现在统一为真正的轮播位置：
- 1 / 3
- 2 / 3
- 3 / 3

自动轮播恢复到 5 秒。

### 2. 技术 / 项目 / 面试 Tab
现在三个 Tab 有真实语义：
- 技术：技术学习模式
- 项目：项目实战模式
- 面试：面试准备模式

点击 Tab 会：
1. 切换到对应 Hero
2. 同步 Tab 高亮
3. 同步更新 Quick Start 内容

Hero 自动轮播时，Tab 与 Quick Start 也会一起同步。

### 3. Quick Start
删除没有解释的 1/3、2/4。
改为有业务意义的状态：
- 继续学习
- 进行中
- 当前项目
- 待完善
- 今日练习
- 准备中

Quick Start 的两张卡会跟随“技术 / 项目 / 面试”自动变更内容。

### 4. Roadmap
不是简单把原来的条拉长，而是重做结构：
- 取消每行全宽底轨道
- 改成更接近参考图的错位横向路径
- 4 条不同起点 / 不同长度的学习路径
- 标题直接写在路径内
- 增加中间 Today 时间标记
- 网格线更淡
- 无头像
- 日 / 周 / 月 / 年继续可切换

## Commit
refactor(ui): clarify tabs quick start carousel and rebuild roadmap layout
