import "./globals.css";

export const metadata = {
  title: "泡泡尾巴宠物洗护",
  description: "泡泡尾巴宠物洗护门店官网首页，展示服务、流程、套餐、环境和预约方式。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
