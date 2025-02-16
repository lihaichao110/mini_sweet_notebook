# 情侣账本 - 基于 Taro + React + Zustand 的跨端记账小程序

## 🌟 项目简介
**情侣账本**是一款专为情侣设计的轻量化日常记账小程序，通过双人账本共享、消费趋势分析、情侣互动提醒等功能，帮助情侣共同管理财务，培养消费默契。项目基于 `Taro 3.x` + `React` + `TypeScript` + `Zustand` 技术栈实现，支持微信小程序、H5 等多端运行。

---

## 📱 功能特色

### 👫 情侣专属功能
- **双人账本实时同步**：情侣实时消费记录同步，支持多人同时编辑
- **角色权限管理**：自定义「AA制」「一方承担」「共同资金池」等多种消费分摊模式
- **情侣消费日历**：可视化双人消费日历，标记纪念日/大额支出
- **甜蜜互动**：消费备注支持表情包/语音留言，关键消费自动生成回忆卡片

### 💰 专业记账管理
- **智能分类**：自动识别 20+ 消费场景（餐饮/购物/旅行等）
- **多账本支持**：支持创建日常/旅行/装修等专属账本
- **数据报表**：月度消费趋势图、品类占比饼图、双人消费对比
- **账单导出**：支持导出 Excel/PDF 格式报表

### 🎨 体验优化
- **极速记账**：3 秒快速记账流程，支持语音输入
- **数据安全**：本地数据加密 + 云端自动备份
- **主题皮肤**：情侣定制主题（纪念日倒计时/双人头像等）

---

## 🛠 技术栈

### 核心框架
- **Taro 3.6+**：跨端开发框架，一次开发多端适配
- **React 18 + TypeScript**：组件化开发与类型安全
- **Zustand 4.0+**：轻量级状态管理，替代 Redux 的优雅方案

### 关键技术
- **跨端存储**：Taro 原生存储
- **数据可视化**：小程序端图表库
- **性能优化**：虚拟列表渲染、分包加载、SVG 压缩（Webpack5）

### 工程化
- **代码规范**：ESLint + Prettier + Husky 提交校验
- **CI/CD**：GitHub Actions 自动化构建部署
- **测试方案**：Jest + @testing-library 单元测试

---

## 📂 项目结构（简化版）
```bash
src/
├── assets               # 静态资源
├── components           # 公共组件
│   ├── Chart           # 数据可视化组件
│   └── VoiceInput      # 语音输入组件
├── stores               # Zustand 状态库
│   ├── useBillStore.ts # 账单核心逻辑
│   └── useUserStore.ts # 用户状态管理
├── pages                # 页面组件
│   ├── home            # 首页
│   └── statistics      # 统计页
├── services             # 数据服务
│   ├── api.ts          # 接口封装
│   └── websocket.ts    # WebSocket 服务
└── styles               # 全局样式


🚀 运行与构建
开发环境
# 安装依赖
yarn install

# 启动微信小程序开发模式
yarn dev:weapp

# 启动 H5 开发模式
yarn dev:h5

生产构建
# 构建微信小程序
yarn build:weapp

# 构建 H5 端
yarn build:h5
```

## 📌 设计理念
### 状态管理方案
采用 Zustand 实现响应式状态管理，相比 Redux 的优势：

```typescript
// 示例：账单状态管理
import create from 'zustand'

interface BillState {
  bills: BillItem[]
  addBill: (bill: Omit<BillItem, 'id'>) => Promise<void>
  syncBills: () => Promise<void>
}

const useBillStore = create<BillState>((set) => ({
  bills: [],
  addBill: async (bill) => {
    // 本地存储 + 云端同步逻辑
  },
  syncBills: async () => {
    // WebSocket 实时同步
  }
}))
```
## 跨端兼容方案
- 统一 API 层：通过 Taro.* 原生 API 抹平端差异
- 条件编译：使用 process.env.TARO_ENV 实现多端差异化逻辑
- 响应式布局：采用 Flex + 百分比布局适配不同屏幕

## 🌈 未来规划
1. 家庭账本模式（支持多人家庭成员）
2. AI 消费建议（基于消费习惯分析）
3. 电子发票自动归档
4. 双人预算挑战赛（游戏化记账）
5. 让每一笔消费都成为爱情的见证 ❤️ 
