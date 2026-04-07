# HealthyWeigh

基于国家卫生健康委《成人肥胖食养指南（2024年版）》的体重管理健康指导平台，融合现代营养学与中医食养理念。

## 功能特性

- **BMI 计算器** - 计算体重指数（BMI）和腰围，评估肥胖类型和健康风险
- **分地区食谱** - 提供东北、西北、南方、通用四大地区的四季食谱，包含早中晚餐及加餐
- **中医体质辨识** - 五种中医肥胖分型：胃热火郁证、痰湿内盛证、气郁血瘀证、脾虚不运证、脾肾阳虚证
- **药食同源食材** - 12+ 种药食同源食材介绍，包含性味归经、用法用量及禁忌
- **热量查询** - 食物热量数据库，涵盖谷薯、蔬菜、水果、肉蛋、奶豆等分类
- **运动指导** - 有氧运动、抗阻训练推荐及运动安全指南
- **食养原则** - 六大食养原则及食物选择建议（推荐、限制、避免）

## 技术栈

| 类别 | 技术 |
|------|------|
| 前端框架 | React 19 + TypeScript |
| 构建工具 | Vite 7 |
| 样式方案 | Tailwind CSS + shadcn/ui |
| 图表可视化 | Recharts |
| 路由管理 | React Router DOM 7 |
| 表单处理 | React Hook Form + Zod |
| 动画效果 | GSAP + Lenis |
| 图标库 | Lucide React |

## 项目结构

```
HealthyWeigh/
├── public/                     # 静态资源
│   ├── hero-character.png      # 首页角色图片
│   ├── feature-character.png   # 功能区角色图片
│   └── recipe-*.jpg            # 食谱配图
├── src/
│   ├── components/ui/          # shadcn/ui 组件库（40+ 组件）
│   ├── data/                   # 数据文件
│   │   ├── recipes.ts          # 分地区食谱数据
│   │   └── guideContent.ts     # 指南内容数据
│   ├── pages/                  # 页面组件
│   │   ├── Home.tsx            # 首页
│   │   ├── BmiCalculator.tsx   # BMI 计算器
│   │   ├── CalorieQuery.tsx    # 热量查询
│   │   ├── RecipeDetail.tsx    # 食谱详情
│   │   ├── ObesityDefinition.tsx
│   │   ├── TcmObesity.tsx
│   │   ├── DietaryPrinciples.tsx
│   │   ├── ConstitutionDetail.tsx
│   │   ├── FoodMedicineDetail.tsx
│   │   ├── ExerciseGuide.tsx
│   │   ├── GuideIntro.tsx
│   │   └── Disclaimer.tsx
│   ├── sections/               # 页面区块组件
│   ├── hooks/                  # 自定义 Hooks
│   └── lib/                    # 工具函数
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看应用。

### 生产构建

```bash
npm run build
```

### 预览构建

```bash
npm run preview
```

## 路由结构

| 路径 | 页面 | 说明 |
|------|------|------|
| `/` | Home | 首页，展示所有功能区 |
| `/bmi-calculator` | BmiCalculator | BMI 与腰围计算器 |
| `/calories` | CalorieQuery | 食物热量查询 |
| `/recipe/:regionId` | RecipeDetail | 分地区食谱详情 |
| `/obesity-definition` | ObesityDefinition | 肥胖定义与判定标准 |
| `/tcm-obesity` | TcmObesity | 中医对肥胖的认识 |
| `/dietary-principles` | DietaryPrinciples | 食养原则与食物选择 |
| `/constitution` | ConstitutionDetail | 中医体质分型详情 |
| `/food-medicine` | FoodMedicineDetail | 药食同源食材介绍 |
| `/exercise` | ExerciseGuide | 运动指导 |
| `/guide-intro` | GuideIntro | 指南介绍 |
| `/disclaimer` | Disclaimer | 免责声明 |

## 设计规范

### 色彩体系

| 名称 | 色值 | 用途 |
|------|------|------|
| Primary | `#F6B5A6` | 主色调（桃色） |
| Secondary | `#F7C5C0` | 辅助色（淡粉） |
| Accent | `#F9D1C3` | 强调色 |
| Background | `#FFF9F5` | 背景色（暖白） |
| Text Dark | `#4A4A4A` | 主文字色 |
| Text Medium | `#6A6A6A` | 次文字色 |

### 字体

- **标题**: M PLUS Rounded 1c
- **正文**: Nunito Sans

### 动画

- `animate-float` - 悬浮效果
- `animate-breathe` - 呼吸效果
- `animate-pulse-soft` - 柔和脉冲
- `animate-spin-slow` - 缓慢旋转

## 数据来源

本项目内容依据国家卫生健康委发布的《成人肥胖食养指南（2024年版）》编写，仅供参考学习，不构成医疗建议。

## 许可证

[MIT License](LICENSE)

## 贡献指南

欢迎提交 Issue 和 Pull Request。

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request
