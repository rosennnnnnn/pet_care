import "./globals.css";

export const metadata = {
  title: "泡泡尾巴宠物洗护",
  description: "泡泡尾巴宠物洗护门店官网首页，展示服务、流程、套餐、环境和预约方式。",
  keywords: ["宠物洗护", "宠物美容", "猫狗洗护", "上海宠物店", "泡泡尾巴"],
  authors: [{ name: "泡泡尾巴宠物洗护" }],
  metadataBase: new URL("https://bubbletail.pet"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "泡泡尾巴宠物洗护",
    description: "透明流程、低刺激产品、猫狗分区空间，让宠物洗护更轻松。",
    url: "/",
    siteName: "泡泡尾巴宠物洗护",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/assets/images/space-reception.png",
        width: 1200,
        height: 900,
        alt: "泡泡尾巴宠物洗护门店接待区",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "泡泡尾巴宠物洗护",
    description: "透明流程、低刺激产品、猫狗分区空间，让宠物洗护更轻松。",
    images: ["/assets/images/space-reception.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
