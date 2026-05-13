"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const brand = {
  name: "泡泡尾巴",
  fullName: "泡泡尾巴宠物洗护",
  tagline: "Pet Grooming House",
};

const bookingInfo = {
  phone: "021-6688-8899",
  email: "hello@bubbletail.pet",
  wechat: "BubbleTailCare",
  address: "上海市静安区汶水路 188 号 1 层",
  hours: "周一至周日 10:00 - 20:00，周五延长至 21:00",
};

const navItems = [
  { href: "#services", label: "服务" },
  { href: "#process", label: "流程" },
  { href: "#pricing", label: "套餐" },
  { href: "#space", label: "门店" },
  { href: "#reviews", label: "口碑" },
  { href: "#booking", label: "预约" },
];

const trustItems = [
  { title: "透明护理", text: "到店前确认流程和时长" },
  { title: "分区安抚", text: "猫狗分区，降低应激反应" },
  { title: "定制养护", text: "按毛量和肤况调整产品" },
  { title: "离店提醒", text: "附居家梳护与复洗建议" },
];

const services = [
  {
    icon: "SPA",
    title: "基础香波洗护",
    text: "适合定期清洁，包含两遍洗护、吹干拉毛、基础修爪和耳部护理。",
    meta: "中小型犬 88 元起",
  },
  {
    icon: "COAT",
    title: "深层去浮毛护理",
    text: "换毛季重点项目，结合梳通与局部护理，改善掉毛和打结问题。",
    meta: "长毛犬猫 158 元起",
  },
  {
    icon: "CALM",
    title: "敏感宠安抚洗护",
    text: "缩短单次刺激时长，使用低噪吹干方案，适合紧张或年长宠物。",
    meta: "支持分段完成",
  },
  {
    icon: "STYLE",
    title: "清爽修型整理",
    text: "面部、脚底、臀部和轮廓精修，适合需要保持利落外形的宠物。",
    meta: "美容师一对一",
  },
];

const processSteps = [
  {
    title: "到店评估与安抚",
    text: "确认体重、毛结、皮肤状态和当日情绪，决定洗护顺序与产品搭配。",
  },
  {
    title: "分区洗护与吹干",
    text: "采用一宠一巾消毒流程，猫狗分区作业，减少交叉刺激与环境噪音。",
  },
  {
    title: "离店检查与建议",
    text: "交付前核对脚底、耳道、毛发干燥度，并说明居家梳护和复洗周期。",
  },
];

const carePrinciples = [
  {
    title: "低刺激香波库",
    text: "区分日常清洁、去浮毛、敏感肌和长毛顺滑护理。",
  },
  {
    title: "定时消毒记录",
    text: "梳具、浴缸和台面按批次处理，减少交叉接触风险。",
  },
  {
    title: "宠物情绪观察",
    text: "对紧张型宠物优先做短时接触，再逐步进入吹干流程。",
  },
  {
    title: "离店毛发建议",
    text: "根据当前季节给出梳护频次和下次到店时间建议。",
  },
];

const pricingPlans = [
  {
    title: "清爽快洗",
    text: "适合规律到店的小体型宠物，做一次迅速而完整的基础清洁。",
    price: "128",
    cta: "预约体验",
    featured: false,
    points: ["双遍清洁与基础吹干", "修爪、脚底、耳部清洁", "离店前毛发表面整理"],
  },
  {
    title: "泡泡 SPA",
    text: "最受欢迎的洗护套餐，适合需要顺毛、去浮毛和气味管理的宠物。",
    price: "228",
    cta: "预约热门套餐",
    featured: true,
    points: ["基础洗护全部内容", "深层梳通与护毛护理", "局部轮廓精修与香氛护理"],
  },
  {
    title: "高级造型护理",
    text: "适合赛级毛量或固定造型需求，预约时会先沟通目标风格和时长。",
    price: "368",
    cta: "咨询详情",
    featured: false,
    points: ["美容师一对一修型", "打结分区处理与局部护理", "离店造型复盘与居家建议"],
  },
];

const spaceItems = [
  {
    title: "开放式接待台",
    shortTitle: "接待台",
    subtitle: "入店确认与护理沟通",
    image: "/assets/images/space-reception.png",
    alt: "泡泡尾巴宠物洗护店开放式接待台区域",
    text: "洗护前先在前台确认需求、毛况和预计时长，动线从这里开始会更从容。",
  },
  {
    title: "透明洗护区",
    shortTitle: "洗护区",
    subtitle: "透明浴缸与低刺激清洁",
    image: "/assets/images/space-washroom.png",
    alt: "泡泡尾巴宠物洗护店透明洗护区",
    text: "玻璃分区让洗护流程更清楚，也更方便在安静环境里完成基础清洁。",
  },
  {
    title: "安静吹干美容区",
    shortTitle: "吹干美容区",
    subtitle: "拉毛整理与局部修型",
    image: "/assets/images/space-drying.png",
    alt: "泡泡尾巴宠物洗护店安静吹干美容区",
    text: "吹干与修型分区完成，尽量降低等待和噪音暴露时间，照顾紧张型宠物。",
  },
  {
    title: "储物清洁区",
    shortTitle: "储物清洁区",
    subtitle: "毛巾梳具与消毒管理",
    image: "/assets/images/space-storage.png",
    alt: "泡泡尾巴宠物洗护店储物清洁区",
    text: "毛巾、梳具和消毒物料分区摆放，清洁路径明确，减少混用和来回干扰。",
  },
  {
    title: "等候休息区",
    shortTitle: "等候区",
    subtitle: "短停留与离店交接",
    image: "/assets/images/space-lounge.png",
    alt: "泡泡尾巴宠物洗护店等候休息区",
    text: "短停留休息角保持柔和和整洁，让主人等候与离店交接都更舒适。",
  },
];

const reviews = [
  {
    name: "陆女士 / 比熊奶盖",
    label: "常规月洗用户",
    score: "5.0 / 5",
    text: "以前一到吹风机就会躲，这里会先安抚再慢慢进入流程。洗完不是那种刺鼻香味，毛也顺很多，回家之后精神状态很轻松。",
  },
  {
    name: "高先生 / 英短土豆",
    label: "猫咪专属洗护",
    score: "4.9 / 5",
    text: "很喜欢他们会先说清楚猫咪今天适不适合做完整流程，不会为了接单硬做。结束后还会提醒掉毛季怎么梳，感觉很专业。",
  },
  {
    name: "周女士 / 柴犬米粒",
    label: "换毛季去浮毛护理",
    score: "5.0 / 5",
    text: "浮毛处理特别细致，回家后沙发上掉毛真的少了很多。最加分的是接送时间准，页面展示的风格和实际门店气质也很一致。",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isOpen ? "nav-open" : ""}`} id="top">
      <div className="container">
        <a className="brand" href="#top" aria-label={brand.fullName} onClick={closeMenu}>
          <div className="brand-mark" aria-hidden="true" />
          <div className="brand-copy">
            <strong>{brand.name}</strong>
            <span>{brand.tagline}</span>
          </div>
        </a>
        <nav className="site-nav" aria-label="主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary header-cta" href="#booking">
          立即预约
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="切换菜单"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">城市毛孩子的沐浴小假期</div>
          <h1>把洗澡变成一次轻松、好闻、会摇尾巴的体验</h1>
          <p>
            泡泡尾巴专注宠物洗护、美容造型与情绪安抚。我们把透明护理流程、低刺激清洁产品和安静分区空间放在同等重要的位置，让每一次到店都更安心。
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#booking">
              预约今天的时段
            </a>
            <a className="btn btn-secondary" href="#services">
              看看护理项目
            </a>
          </div>
          <div className="hero-contact">
            <a href={`tel:${bookingInfo.phone}`}>电话 {bookingInfo.phone}</a>
            <span>微信 {bookingInfo.wechat}</span>
            <a href={`mailto:${bookingInfo.email}`}>邮件咨询</a>
          </div>
          <div className="hero-note">
            <div className="chip">猫狗分区洗护</div>
            <div className="chip">一宠一巾一消毒</div>
            <div className="chip">护理结束附毛发建议</div>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <strong>1200+</strong>
              <span>年度洗护服务</span>
            </div>
            <div className="stat-card">
              <strong>4.9</strong>
              <span>到店评分口碑</span>
            </div>
            <div className="stat-card">
              <strong>0</strong>
              <span>强制推销套餐</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <div className="floating-badge badge-right">
              <strong>护理小结同步</strong>
              <span>皮肤观察、打结位置、吹干完成度，离店前一次说明清楚。</span>
            </div>
            <div className="hero-photo-stack" aria-label="泡泡尾巴门店环境展示">
              <Image
                className="hero-photo hero-photo-main"
                src="/assets/images/space-washroom.png"
                alt="泡泡尾巴宠物洗护透明洗护区"
                width={840}
                height={560}
                priority
              />
              <Image
                className="hero-photo hero-photo-small"
                src="/assets/images/space-reception.png"
                alt="泡泡尾巴宠物洗护开放式接待台"
                width={420}
                height={300}
              />
            </div>
            <div className="mini-list">
              <div className="mini-item">
                <strong>低敏洗护产品</strong>
                <span>根据毛发长度、皮肤状态和季节选择香波，不做一套用到底。</span>
              </div>
              <div className="mini-item">
                <strong>安静吹干流程</strong>
                <span>缩短等待和噪音暴露时间，紧张型宠物也能循序适应。</span>
              </div>
            </div>
          </div>
          <div className="floating-badge badge-left">
            <strong>新客体验价</strong>
            <span>首单洗护 88 元起，含基础修爪和耳部清洁。</span>
          </div>
        </div>
      </div>
      <TrustBand />
    </section>
  );
}

function TrustBand() {
  return (
    <div className="container">
      <div className="trust-band">
        {trustItems.map((item, index) => (
          <div className="trust-item" key={item.title}>
            <div className="trust-icon">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">核心服务</div>
          <h2>照顾不同毛量、脾气和季节状态的洗护项目</h2>
          <p>从基础洗护到深层梳通，再到局部修整和造型整理，我们更关注宠物的舒适度，而不是把所有步骤硬塞进同一套模板里。</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-meta">{service.meta}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="container process-layout">
        <div className="process-panel">
          <div className="section-head">
            <div className="eyebrow">护理流程</div>
            <h2>让洗护过程更有秩序，也更让主人放心</h2>
            <p>每只宠物入店后都会先做快速观察和沟通确认，减少不必要等待。美容师会按毛发情况调整时长，而不是机械走流程。</p>
          </div>
          <div className="process-list">
            {processSteps.map((step, index) => (
              <div className="step" key={step.title}>
                <div className="step-number">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="process-visual">
          <div className="visual-card">
            <h3>安静、分区、可追踪</h3>
            <p>这是我们最常被复购用户提到的三个关键词，也是门店设计时最先确定的原则。</p>
            <div className="visual-grid">
              {carePrinciples.map((item) => (
                <div className="visual-item" key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">洗护套餐</div>
          <h2>简单清楚的价格结构，不把常规护理拆成复杂加项</h2>
          <p>具体价格会根据体型、毛量、是否严重打结和宠物配合度微调。首次到店可先做基础检查，再决定是否升级项目。</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.title}>
              {plan.featured ? <div className="plan-badge">人气推荐</div> : null}
              <div>
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>
              </div>
              <div className="price-tag">
                <strong>{plan.price}</strong>
                <span>元起</span>
              </div>
              <div className="price-points">
                {plan.points.map((point) => (
                  <div key={point}>{point}</div>
                ))}
              </div>
              <a className={`btn ${plan.featured ? "btn-primary" : "btn-secondary"}`} href="#booking">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpaceGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = spaceItems[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % spaceItems.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section" id="space">
      <div className="container space-layout">
        <div className="space-media">
          <div className="space-stage">
            <Image
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.alt}
              width={960}
              height={720}
              sizes="(max-width: 1120px) 100vw, 58vw"
            />
            <div className="space-stage-copy">
              <span>环境轮播</span>
              <strong>{activeItem.title}</strong>
              <p>{activeItem.text}</p>
            </div>
          </div>
          <div className="space-thumbs" aria-label="门店区域展示切换">
            {spaceItems.map((item, index) => (
              <button
                className={`space-thumb ${index === activeIndex ? "is-active" : ""}`}
                type="button"
                aria-pressed={index === activeIndex}
                key={item.title}
                onClick={() => setActiveIndex(index)}
              >
                <span className="space-thumb-index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.shortTitle}</strong>
                <span>{item.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-copy">
          <div className="eyebrow">门店环境</div>
          <h2>像小型宠物会所，但动线和细节更偏护理效率</h2>
          <p>我们把门店空间拆成接待、洗护、吹干、整理和短暂停留五个区域，既方便美容师高效作业，也让宠物不会在噪音和陌生气味里久待。</p>
          <div className="facts">
            <div className="fact">
              <strong>开放式接待台</strong>
              <p>洗护前会先确认需求和毛况，不在忙乱状态下仓促接单。</p>
            </div>
            <div className="fact">
              <strong>独立储物和清洁区</strong>
              <p>毛巾、梳具和消毒流程分开管理，减少物品混用带来的不确定性。</p>
            </div>
            <div className="fact">
              <strong>短停留等待机制</strong>
              <p>预约完成后按时到店，尽量缩短宠物在门店的总停留时间。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">用户评价</div>
          <h2>回头客最在意的不是洗得多快，而是宠物下次还愿意来</h2>
          <p>以下评价文案为页面展示示例，适合放在宠物门店官网或活动页中，帮助快速传达门店的服务气质。</p>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-top">
                <div className="review-name">
                  <strong>{review.name}</strong>
                  <span>{review.label}</span>
                </div>
                <div className="score">{review.score}</div>
              </div>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section className="section" id="booking">
      <div className="container">
        <div className="booking-shell">
          <div className="booking-grid">
            <div>
              <div className="eyebrow booking-eyebrow">预约到店</div>
              <h2>把下次洗护时间提前定好，毛孩子会更从容</h2>
              <p>建议至少提前 1 到 2 天预约。换毛季、周末和节假日前后是高峰期，如果是首次到店或敏感型宠物，欢迎先电话或微信沟通。</p>
              <div className="btn-row booking-actions">
                <a className="btn btn-secondary" href={`tel:${bookingInfo.phone}`}>
                  电话预约
                </a>
                <a className="btn btn-secondary" href={`mailto:${bookingInfo.email}`}>
                  邮件咨询
                </a>
              </div>
            </div>
            <div className="booking-cards">
              <div className="booking-card">
                <strong>营业时间</strong>
                <span>{bookingInfo.hours}</span>
              </div>
              <div className="booking-card">
                <strong>门店地址</strong>
                <span>{bookingInfo.address}，地铁步行约 5 分钟</span>
              </div>
              <div className="booking-card">
                <strong>微信咨询</strong>
                <span>{bookingInfo.wechat}，请提前告知体型、品种、毛量和是否有打结。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true" />
          <div className="brand-copy">
            <strong>{brand.fullName}</strong>
            <span>Pet Grooming House</span>
          </div>
        </div>
        <p>适合直接作为宠物洗护店落地页、门店官网首页或活动宣传页使用。</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <SpaceGallery />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
