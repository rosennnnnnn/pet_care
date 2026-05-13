# 泡泡尾巴宠物洗护 Next.js 项目

这是一个宠物洗护门店单页官网，使用 Next.js App Router 构建。页面展示服务、流程、套餐、门店环境、用户评价和预约方式。

根目录的 `index.html` 是原始静态版本备份，当前运行入口是 `app/page.jsx`。

## 启动方式

```bash
npm install
npm run dev
```

然后访问 <http://localhost:3000>。

## 生产构建

```bash
npm run build
npm start
```

## 检查

```bash
npm run check
```

`check` 当前等同于生产构建，用来确认页面、图片和元数据在 Next.js 中能正常编译。

## 如何修改内容

主要内容数据集中在 `app/page.jsx` 顶部：

- `bookingInfo`：电话、邮箱、微信、地址和营业时间
- `services`：核心服务卡片
- `pricingPlans`：洗护套餐与价格
- `spaceItems`：门店环境轮播图片和说明
- `reviews`：用户评价

页面结构已拆成 `Header`、`Hero`、`TrustBand`、`Services`、`Process`、`Pricing`、`SpaceGallery`、`Reviews`、`Booking` 和 `Footer` 组件，后续维护时优先修改对应组件或数据数组。

## 图片资源

正式页面使用 `public/assets/images` 下的图片，路径以 `/assets/images/...` 引用。`assets/images` 保留为原始资源备份，不作为页面首选入口。

## SEO

页面标题、描述、Open Graph、Twitter Card 和 Web App Manifest 配置在 `app/layout.jsx` 与 `app/manifest.js` 中。
