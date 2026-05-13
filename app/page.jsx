"use client";

import { useEffect } from "react";

const pageHtml = "<div class=\"page-shell\">\n      <header class=\"site-header\" id=\"top\">\n        <div class=\"container\">\n          <a class=\"brand\" href=\"#top\" aria-label=\"泡泡尾巴宠物洗护\">\n            <div class=\"brand-mark\" aria-hidden=\"true\"></div>\n            <div class=\"brand-copy\">\n              <strong>泡泡尾巴</strong>\n              <span>Pet Grooming House</span>\n            </div>\n          </a>\n          <nav class=\"site-nav\" aria-label=\"主导航\">\n            <a href=\"#services\">服务</a>\n            <a href=\"#process\">流程</a>\n            <a href=\"#pricing\">套餐</a>\n            <a href=\"#space\">门店</a>\n            <a href=\"#reviews\">口碑</a>\n            <a href=\"#booking\">预约</a>\n          </nav>\n          <a class=\"btn btn-primary header-cta\" href=\"#booking\">立即预约</a>\n          <button class=\"nav-toggle\" type=\"button\" aria-label=\"切换菜单\" aria-expanded=\"false\">\n            <span></span>\n          </button>\n        </div>\n      </header>\n\n      <main>\n        <section class=\"hero\">\n          <div class=\"container hero-grid\">\n            <div class=\"hero-copy\" data-reveal>\n              <div class=\"eyebrow\">城市毛孩子的沐浴小假期</div>\n              <h1>把洗澡变成一次轻松、好闻、会摇尾巴的体验</h1>\n              <p>\n                泡泡尾巴专注宠物洗护、美容造型与情绪安抚。我们把透明护理流程、低刺激清洁产品和安静分区空间放在同等重要的位置，让每一次到店都更安心。\n              </p>\n              <div class=\"btn-row\">\n                <a class=\"btn btn-primary\" href=\"#booking\">预约今天的时段</a>\n                <a class=\"btn btn-secondary\" href=\"#services\">看看护理项目</a>\n              </div>\n              <div class=\"hero-note\">\n                <div class=\"chip\">猫狗分区洗护</div>\n                <div class=\"chip\">一宠一巾一消毒</div>\n                <div class=\"chip\">护理结束附毛发建议</div>\n              </div>\n              <div class=\"hero-stats\">\n                <div class=\"stat-card\">\n                  <strong>1200+</strong>\n                  <span>年度洗护服务</span>\n                </div>\n                <div class=\"stat-card\">\n                  <strong>4.9</strong>\n                  <span>到店评分口碑</span>\n                </div>\n                <div class=\"stat-card\">\n                  <strong>0</strong>\n                  <span>强制推销套餐</span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"hero-panel\" data-reveal>\n              <div class=\"hero-card\">\n                <div class=\"floating-badge badge-right\">\n                  <strong>护理小结同步</strong>\n                  <span>皮肤观察、打结位置、吹干完成度，离店前一次说明清楚。</span>\n                </div>\n                <div class=\"hero-illustration\" aria-hidden=\"true\">\n                  <svg viewBox=\"0 0 520 360\" role=\"img\" aria-label=\"宠物洗护插画\">\n                    <defs>\n                      <linearGradient id=\"bubble-grad\" x1=\"0%\" x2=\"100%\" y1=\"0%\" y2=\"100%\">\n                        <stop offset=\"0%\" stop-color=\"#ffffff\" stop-opacity=\"0.9\"></stop>\n                        <stop offset=\"100%\" stop-color=\"#ffffff\" stop-opacity=\"0.4\"></stop>\n                      </linearGradient>\n                      <linearGradient id=\"body-grad\" x1=\"0%\" x2=\"100%\" y1=\"0%\" y2=\"100%\">\n                        <stop offset=\"0%\" stop-color=\"#ffefe3\"></stop>\n                        <stop offset=\"100%\" stop-color=\"#ffd8bf\"></stop>\n                      </linearGradient>\n                    </defs>\n                    <circle cx=\"96\" cy=\"88\" r=\"22\" fill=\"url(#bubble-grad)\"></circle>\n                    <circle cx=\"430\" cy=\"78\" r=\"18\" fill=\"url(#bubble-grad)\"></circle>\n                    <circle cx=\"400\" cy=\"126\" r=\"10\" fill=\"url(#bubble-grad)\"></circle>\n                    <circle cx=\"126\" cy=\"246\" r=\"14\" fill=\"url(#bubble-grad)\"></circle>\n                    <circle cx=\"444\" cy=\"244\" r=\"22\" fill=\"url(#bubble-grad)\"></circle>\n                    <path\n                      d=\"M156 245c0-66 54-120 120-120s120 54 120 120v18c0 34-28 62-62 62H218c-34 0-62-28-62-62v-18Z\"\n                      fill=\"url(#body-grad)\"\n                    ></path>\n                    <ellipse cx=\"260\" cy=\"168\" rx=\"92\" ry=\"82\" fill=\"#ffe6d4\"></ellipse>\n                    <path d=\"M205 112c-26-28-15-64 22-72 24 20 28 52 12 76Z\" fill=\"#f5b89c\"></path>\n                    <path d=\"M316 112c26-28 15-64-22-72-24 20-28 52-12 76Z\" fill=\"#f5b89c\"></path>\n                    <circle cx=\"226\" cy=\"176\" r=\"8\" fill=\"#20303b\"></circle>\n                    <circle cx=\"294\" cy=\"176\" r=\"8\" fill=\"#20303b\"></circle>\n                    <path\n                      d=\"M246 196c8 6 20 6 28 0-2 12-12 22-24 22s-22-10-24-22c7 6 13 8 20 8Z\"\n                      fill=\"#ff8e74\"\n                    ></path>\n                    <ellipse cx=\"260\" cy=\"192\" rx=\"12\" ry=\"9\" fill=\"#20303b\"></ellipse>\n                    <path\n                      d=\"M210 240h100c0 26-22 48-50 48s-50-22-50-48Z\"\n                      fill=\"#ffffff\"\n                      opacity=\"0.78\"\n                    ></path>\n                    <rect x=\"170\" y=\"252\" width=\"180\" height=\"22\" rx=\"11\" fill=\"#ffffff\" opacity=\"0.92\"></rect>\n                    <circle cx=\"188\" cy=\"132\" r=\"20\" fill=\"#ffffff\" opacity=\"0.72\"></circle>\n                    <circle cx=\"332\" cy=\"132\" r=\"24\" fill=\"#ffffff\" opacity=\"0.72\"></circle>\n                    <circle cx=\"260\" cy=\"110\" r=\"18\" fill=\"#ffffff\" opacity=\"0.7\"></circle>\n                    <path\n                      d=\"M104 272c18-28 42-42 72-42 14 0 24 10 24 24 0 10-4 18-12 24-14 10-24 12-60 12H104v-18Z\"\n                      fill=\"#1f7a74\"\n                      opacity=\"0.18\"\n                    ></path>\n                    <path\n                      d=\"M350 264c24-34 48-48 70-48 16 0 28 12 28 28 0 10-5 20-15 28-13 10-22 12-56 12h-27v-20Z\"\n                      fill=\"#ff8e74\"\n                      opacity=\"0.2\"\n                    ></path>\n                  </svg>\n                </div>\n                <div class=\"mini-list\">\n                  <div class=\"mini-item\">\n                    <strong>低敏洗护产品</strong>\n                    <span>根据毛发长度、皮肤状态和季节选择香波，不做一套用到底。</span>\n                  </div>\n                  <div class=\"mini-item\">\n                    <strong>安静吹干流程</strong>\n                    <span>缩短等待和噪音暴露时间，紧张型宠物也能循序适应。</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"floating-badge badge-left\">\n                <strong>新客体验价</strong>\n                <span>首单洗护 88 元起，含基础修爪和耳部清洁。</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"container\">\n            <div class=\"trust-band\" data-reveal>\n              <div class=\"trust-item\">\n                <div class=\"trust-icon\">01</div>\n                <div>\n                  <strong>透明护理</strong>\n                  <span>到店前确认流程和时长</span>\n                </div>\n              </div>\n              <div class=\"trust-item\">\n                <div class=\"trust-icon\">02</div>\n                <div>\n                  <strong>分区安抚</strong>\n                  <span>猫狗分区，降低应激反应</span>\n                </div>\n              </div>\n              <div class=\"trust-item\">\n                <div class=\"trust-icon\">03</div>\n                <div>\n                  <strong>定制养护</strong>\n                  <span>按毛量和肤况调整产品</span>\n                </div>\n              </div>\n              <div class=\"trust-item\">\n                <div class=\"trust-icon\">04</div>\n                <div>\n                  <strong>离店提醒</strong>\n                  <span>附居家梳护与复洗建议</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"section\" id=\"services\">\n          <div class=\"container\">\n            <div class=\"section-head\" data-reveal>\n              <div class=\"eyebrow\">核心服务</div>\n              <h2>照顾不同毛量、脾气和季节状态的洗护项目</h2>\n              <p>\n                从基础洗护到深层梳通，再到局部修整和造型整理，我们更关注宠物的舒适度，而不是把所有步骤硬塞进同一套模板里。\n              </p>\n            </div>\n            <div class=\"services-grid\">\n              <article class=\"card\" data-reveal>\n                <div class=\"card-icon\">SPA</div>\n                <h3>基础香波洗护</h3>\n                <p>适合定期清洁，包含两遍洗护、吹干拉毛、基础修爪和耳部护理。</p>\n                <div class=\"service-meta\">中小型犬 88 元起</div>\n              </article>\n              <article class=\"card\" data-reveal>\n                <div class=\"card-icon\">COAT</div>\n                <h3>深层去浮毛护理</h3>\n                <p>换毛季重点项目，结合梳通与局部护理，改善掉毛和打结问题。</p>\n                <div class=\"service-meta\">长毛犬猫 158 元起</div>\n              </article>\n              <article class=\"card\" data-reveal>\n                <div class=\"card-icon\">CALM</div>\n                <h3>敏感宠安抚洗护</h3>\n                <p>缩短单次刺激时长，使用低噪吹干方案，适合紧张或年长宠物。</p>\n                <div class=\"service-meta\">支持分段完成</div>\n              </article>\n              <article class=\"card\" data-reveal>\n                <div class=\"card-icon\">STYLE</div>\n                <h3>清爽修型整理</h3>\n                <p>面部、脚底、臀部和轮廓精修，适合需要保持利落外形的宠物。</p>\n                <div class=\"service-meta\">美容师一对一</div>\n              </article>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"section\" id=\"process\">\n          <div class=\"container process-layout\">\n            <div class=\"process-panel\" data-reveal>\n              <div class=\"section-head\">\n                <div class=\"eyebrow\">护理流程</div>\n                <h2>让洗护过程更有秩序，也更让主人放心</h2>\n                <p>\n                  每只宠物入店后都会先做快速观察和沟通确认，减少不必要等待。美容师会按毛发情况调整时长，而不是机械走流程。\n                </p>\n              </div>\n              <div class=\"process-list\">\n                <div class=\"step\">\n                  <div class=\"step-number\">1</div>\n                  <div>\n                    <h3>到店评估与安抚</h3>\n                    <p>确认体重、毛结、皮肤状态和当日情绪，决定洗护顺序与产品搭配。</p>\n                  </div>\n                </div>\n                <div class=\"step\">\n                  <div class=\"step-number\">2</div>\n                  <div>\n                    <h3>分区洗护与吹干</h3>\n                    <p>采用一宠一巾消毒流程，猫狗分区作业，减少交叉刺激与环境噪音。</p>\n                  </div>\n                </div>\n                <div class=\"step\">\n                  <div class=\"step-number\">3</div>\n                  <div>\n                    <h3>离店检查与建议</h3>\n                    <p>交付前核对脚底、耳道、毛发干燥度，并说明居家梳护和复洗周期。</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"process-visual\" data-reveal>\n              <div class=\"visual-card\">\n                <h3>安静、分区、可追踪</h3>\n                <p>这是我们最常被复购用户提到的三个关键词，也是门店设计时最先确定的原则。</p>\n                <div class=\"visual-grid\">\n                  <div class=\"visual-item\">\n                    <strong>低刺激香波库</strong>\n                    <span>区分日常清洁、去浮毛、敏感肌和长毛顺滑护理。</span>\n                  </div>\n                  <div class=\"visual-item\">\n                    <strong>定时消毒记录</strong>\n                    <span>梳具、浴缸和台面按批次处理，减少交叉接触风险。</span>\n                  </div>\n                  <div class=\"visual-item\">\n                    <strong>宠物情绪观察</strong>\n                    <span>对紧张型宠物优先做短时接触，再逐步进入吹干流程。</span>\n                  </div>\n                  <div class=\"visual-item\">\n                    <strong>离店毛发建议</strong>\n                    <span>根据当前季节给出梳护频次和下次到店时间建议。</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"section\" id=\"pricing\">\n          <div class=\"container\">\n            <div class=\"section-head\" data-reveal>\n              <div class=\"eyebrow\">洗护套餐</div>\n              <h2>简单清楚的价格结构，不把常规护理拆成复杂加项</h2>\n              <p>\n                具体价格会根据体型、毛量、是否严重打结和宠物配合度微调。首次到店可先做基础检查，再决定是否升级项目。\n              </p>\n            </div>\n            <div class=\"pricing-grid\">\n              <article class=\"price-card\" data-reveal>\n                <div>\n                  <h3>清爽快洗</h3>\n                  <p>适合规律到店的小体型宠物，做一次迅速而完整的基础清洁。</p>\n                </div>\n                <div class=\"price-tag\">\n                  <strong>128</strong>\n                  <span>元起</span>\n                </div>\n                <div class=\"price-points\">\n                  <div>双遍清洁与基础吹干</div>\n                  <div>修爪、脚底、耳部清洁</div>\n                  <div>离店前毛发表面整理</div>\n                </div>\n                <a class=\"btn btn-secondary\" href=\"#booking\">预约体验</a>\n              </article>\n\n              <article class=\"price-card featured\" data-reveal>\n                <div>\n                  <h3>泡泡 SPA</h3>\n                  <p>最受欢迎的洗护套餐，适合需要顺毛、去浮毛和气味管理的宠物。</p>\n                </div>\n                <div class=\"price-tag\">\n                  <strong>228</strong>\n                  <span>元起</span>\n                </div>\n                <div class=\"price-points\">\n                  <div>基础洗护全部内容</div>\n                  <div>深层梳通与护毛护理</div>\n                  <div>局部轮廓精修与香氛护理</div>\n                </div>\n                <a class=\"btn btn-primary\" href=\"#booking\">预约热门套餐</a>\n              </article>\n\n              <article class=\"price-card\" data-reveal>\n                <div>\n                  <h3>高级造型护理</h3>\n                  <p>适合赛级毛量或固定造型需求，预约时会先沟通目标风格和时长。</p>\n                </div>\n                <div class=\"price-tag\">\n                  <strong>368</strong>\n                  <span>元起</span>\n                </div>\n                <div class=\"price-points\">\n                  <div>美容师一对一修型</div>\n                  <div>打结分区处理与局部护理</div>\n                  <div>离店造型复盘与居家建议</div>\n                </div>\n                <a class=\"btn btn-secondary\" href=\"#booking\">咨询详情</a>\n              </article>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"section\" id=\"space\">\n          <div class=\"container space-layout\">\n            <div class=\"space-media\" data-reveal>\n              <div class=\"space-stage\">\n                <img\n                  id=\"space-stage-image\"\n                  src=\"assets/images/space-reception.png\"\n                  alt=\"泡泡尾巴宠物洗护店开放式接待台区域\"\n                />\n                <div class=\"space-stage-copy\">\n                  <span>环境轮播</span>\n                  <strong id=\"space-stage-title\">开放式接待台</strong>\n                  <p id=\"space-stage-text\">\n                    洗护前先在前台确认需求、毛况和预计时长，动线从这里开始会更从容。\n                  </p>\n                </div>\n              </div>\n              <div class=\"space-thumbs\" aria-label=\"门店区域展示切换\">\n                <button\n                  class=\"space-thumb is-active\"\n                  type=\"button\"\n                  aria-pressed=\"true\"\n                  data-space-image=\"assets/images/space-reception.png\"\n                  data-space-alt=\"泡泡尾巴宠物洗护店开放式接待台区域\"\n                  data-space-title=\"开放式接待台\"\n                  data-space-text=\"洗护前先在前台确认需求、毛况和预计时长，动线从这里开始会更从容。\"\n                >\n                  <span class=\"space-thumb-index\">01</span>\n                  <strong>接待台</strong>\n                  <span>入店确认与护理沟通</span>\n                </button>\n                <button\n                  class=\"space-thumb\"\n                  type=\"button\"\n                  aria-pressed=\"false\"\n                  data-space-image=\"assets/images/space-washroom.png\"\n                  data-space-alt=\"泡泡尾巴宠物洗护店透明洗护区\"\n                  data-space-title=\"透明洗护区\"\n                  data-space-text=\"玻璃分区让洗护流程更清楚，也更方便在安静环境里完成基础清洁。\"\n                >\n                  <span class=\"space-thumb-index\">02</span>\n                  <strong>洗护区</strong>\n                  <span>透明浴缸与低刺激清洁</span>\n                </button>\n                <button\n                  class=\"space-thumb\"\n                  type=\"button\"\n                  aria-pressed=\"false\"\n                  data-space-image=\"assets/images/space-drying.png\"\n                  data-space-alt=\"泡泡尾巴宠物洗护店安静吹干美容区\"\n                  data-space-title=\"安静吹干美容区\"\n                  data-space-text=\"吹干与修型分区完成，尽量降低等待和噪音暴露时间，照顾紧张型宠物。\"\n                >\n                  <span class=\"space-thumb-index\">03</span>\n                  <strong>吹干美容区</strong>\n                  <span>拉毛整理与局部修型</span>\n                </button>\n                <button\n                  class=\"space-thumb\"\n                  type=\"button\"\n                  aria-pressed=\"false\"\n                  data-space-image=\"assets/images/space-storage.png\"\n                  data-space-alt=\"泡泡尾巴宠物洗护店储物清洁区\"\n                  data-space-title=\"储物清洁区\"\n                  data-space-text=\"毛巾、梳具和消毒物料分区摆放，清洁路径明确，减少混用和来回干扰。\"\n                >\n                  <span class=\"space-thumb-index\">04</span>\n                  <strong>储物清洁区</strong>\n                  <span>毛巾梳具与消毒管理</span>\n                </button>\n                <button\n                  class=\"space-thumb\"\n                  type=\"button\"\n                  aria-pressed=\"false\"\n                  data-space-image=\"assets/images/space-lounge.png\"\n                  data-space-alt=\"泡泡尾巴宠物洗护店等候休息区\"\n                  data-space-title=\"等候休息区\"\n                  data-space-text=\"短停留休息角保持柔和和整洁，让主人等候与离店交接都更舒适。\"\n                >\n                  <span class=\"space-thumb-index\">05</span>\n                  <strong>等候区</strong>\n                  <span>短停留与离店交接</span>\n                </button>\n              </div>\n            </div>\n\n            <div class=\"space-copy\" data-reveal>\n              <div class=\"eyebrow\">门店环境</div>\n              <h2>像小型宠物会所，但动线和细节更偏护理效率</h2>\n              <p>\n                我们把门店空间拆成接待、洗护、吹干、整理和短暂停留五个区域，既方便美容师高效作业，也让宠物不会在噪音和陌生气味里久待。\n              </p>\n              <div class=\"facts\">\n                <div class=\"fact\">\n                  <strong>开放式接待台</strong>\n                  <p>洗护前会先确认需求和毛况，不在忙乱状态下仓促接单。</p>\n                </div>\n                <div class=\"fact\">\n                  <strong>独立储物和清洁区</strong>\n                  <p>毛巾、梳具和消毒流程分开管理，减少物品混用带来的不确定性。</p>\n                </div>\n                <div class=\"fact\">\n                  <strong>短停留等待机制</strong>\n                  <p>预约完成后按时到店，尽量缩短宠物在门店的总停留时间。</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"section\" id=\"reviews\">\n          <div class=\"container\">\n            <div class=\"section-head\" data-reveal>\n              <div class=\"eyebrow\">用户评价</div>\n              <h2>回头客最在意的不是洗得多快，而是宠物下次还愿意来</h2>\n              <p>\n                以下评价文案为页面展示示例，适合放在宠物门店官网或活动页中，帮助快速传达门店的服务气质。\n              </p>\n            </div>\n            <div class=\"review-grid\">\n              <article class=\"review-card\" data-reveal>\n                <div class=\"review-top\">\n                  <div class=\"review-name\">\n                    <strong>陆女士 / 比熊奶盖</strong>\n                    <span>常规月洗用户</span>\n                  </div>\n                  <div class=\"score\">5.0 / 5</div>\n                </div>\n                <p>\n                  以前一到吹风机就会躲，这里会先安抚再慢慢进入流程。洗完不是那种刺鼻香味，毛也顺很多，回家之后精神状态很轻松。\n                </p>\n              </article>\n              <article class=\"review-card\" data-reveal>\n                <div class=\"review-top\">\n                  <div class=\"review-name\">\n                    <strong>高先生 / 英短土豆</strong>\n                    <span>猫咪专属洗护</span>\n                  </div>\n                  <div class=\"score\">4.9 / 5</div>\n                </div>\n                <p>\n                  很喜欢他们会先说清楚猫咪今天适不适合做完整流程，不会为了接单硬做。结束后还会提醒掉毛季怎么梳，感觉很专业。\n                </p>\n              </article>\n              <article class=\"review-card\" data-reveal>\n                <div class=\"review-top\">\n                  <div class=\"review-name\">\n                    <strong>周女士 / 柴犬米粒</strong>\n                    <span>换毛季去浮毛护理</span>\n                  </div>\n                  <div class=\"score\">5.0 / 5</div>\n                </div>\n                <p>\n                  浮毛处理特别细致，回家后沙发上掉毛真的少了很多。最加分的是接送时间准，页面展示的风格和实际门店气质也很一致。\n                </p>\n              </article>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"section\" id=\"booking\">\n          <div class=\"container\">\n            <div class=\"booking-shell\" data-reveal>\n              <div class=\"booking-grid\">\n                <div>\n                  <div class=\"eyebrow\" style=\"background: rgba(255, 255, 255, 0.14); color: #ffffff;\">\n                    预约到店\n                  </div>\n                  <h2 style=\"margin-top: 20px;\">把下次洗护时间提前定好，毛孩子会更从容</h2>\n                  <p style=\"margin-top: 18px;\">\n                    建议至少提前 1 到 2 天预约。换毛季、周末和节假日前后是高峰期，如果是首次到店或敏感型宠物，欢迎先电话沟通。\n                  </p>\n                  <div class=\"btn-row\" style=\"margin-top: 24px;\">\n                    <a class=\"btn btn-secondary\" href=\"tel:021-6688-8899\">电话预约</a>\n                    <a class=\"btn btn-secondary\" href=\"mailto:hello@bubbletail.pet\">邮件咨询</a>\n                  </div>\n                </div>\n                <div class=\"booking-cards\">\n                  <div class=\"booking-card\">\n                    <strong>营业时间</strong>\n                    <span>周一至周日 10:00 - 20:00<br />周五延长至 21:00</span>\n                  </div>\n                  <div class=\"booking-card\">\n                    <strong>门店地址</strong>\n                    <span>上海市静安区汶水路 188 号 1 层<br />地铁步行约 5 分钟</span>\n                  </div>\n                  <div class=\"booking-card\">\n                    <strong>预约说明</strong>\n                    <span>请提前告知体型、品种、毛量和是否有打结，方便我们准确预留护理时段。</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n      </main>\n\n      <footer class=\"footer\">\n        <div class=\"container footer-row\">\n          <div class=\"brand\">\n            <div class=\"brand-mark\" aria-hidden=\"true\"></div>\n            <div class=\"brand-copy\">\n              <strong>泡泡尾巴宠物洗护</strong>\n              <span>Single-page HTML Demo</span>\n            </div>\n          </div>\n          <p>适合直接作为宠物洗护店落地页、门店官网首页或活动宣传页使用。</p>\n        </div>\n      </footer>\n    </div>";

function runPageInteractions() {
  document.body.classList.add("js-ready");

  const cleanups = [];
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  const revealItems = document.querySelectorAll("[data-reveal]");
  const spaceStageImage = document.querySelector("#space-stage-image");
  const spaceStageTitle = document.querySelector("#space-stage-title");
  const spaceStageText = document.querySelector("#space-stage-text");
  const spaceThumbs = document.querySelectorAll(".space-thumb");

  if (navToggle && header) {
    const handleNavToggle = () => {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    };

    navToggle.addEventListener("click", handleNavToggle);
    cleanups.push(() => navToggle.removeEventListener("click", handleNavToggle));
  }

  navLinks.forEach((link) => {
    const handleNavLinkClick = () => {
      header?.classList.remove("nav-open");
      navToggle?.setAttribute("aria-expanded", "false");
    };

    link.addEventListener("click", handleNavLinkClick);
    cleanups.push(() => link.removeEventListener("click", handleNavLinkClick));
  });

  if ("IntersectionObserver" in window) {
    const revealInView = (item) => {
      const rect = item.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < viewportHeight * 0.92) {
        item.classList.add("is-visible");
        return true;
      }

      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => {
      if (!revealInView(item)) {
        observer.observe(item);
      }
    });

    cleanups.push(() => observer.disconnect());
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  if (spaceStageImage && spaceStageTitle && spaceStageText && spaceThumbs.length) {
    let activeSpaceIndex = 0;
    let spaceRotationTimer;
    const canAutoRotate = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const setActiveSpace = (index) => {
      const thumb = spaceThumbs[index];

      if (!thumb) {
        return;
      }

      spaceThumbs.forEach((item, itemIndex) => {
        const isActive = itemIndex === index;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      spaceStageImage.src = thumb.dataset.spaceImage || spaceStageImage.src;
      spaceStageImage.alt = thumb.dataset.spaceAlt || spaceStageImage.alt;
      spaceStageTitle.textContent = thumb.dataset.spaceTitle || "";
      spaceStageText.textContent = thumb.dataset.spaceText || "";
      activeSpaceIndex = index;
    };

    const startSpaceRotation = () => {
      if (!canAutoRotate) {
        return;
      }

      window.clearInterval(spaceRotationTimer);
      spaceRotationTimer = window.setInterval(() => {
        const nextIndex = (activeSpaceIndex + 1) % spaceThumbs.length;
        setActiveSpace(nextIndex);
      }, 4200);
    };

    spaceThumbs.forEach((thumb, index) => {
      const handleThumbClick = () => {
        setActiveSpace(index);

        if (canAutoRotate) {
          startSpaceRotation();
        }
      };

      thumb.addEventListener("click", handleThumbClick);
      cleanups.push(() => thumb.removeEventListener("click", handleThumbClick));
    });

    const spaceMedia = document.querySelector(".space-media");
    const handleSpaceEnter = () => window.clearInterval(spaceRotationTimer);
    const handleSpaceLeave = () => startSpaceRotation();

    if (canAutoRotate && spaceMedia) {
      spaceMedia.addEventListener("mouseenter", handleSpaceEnter);
      spaceMedia.addEventListener("mouseleave", handleSpaceLeave);
      cleanups.push(() => spaceMedia.removeEventListener("mouseenter", handleSpaceEnter));
      cleanups.push(() => spaceMedia.removeEventListener("mouseleave", handleSpaceLeave));
    }

    setActiveSpace(0);
    startSpaceRotation();
    cleanups.push(() => window.clearInterval(spaceRotationTimer));
  }

  return () => {
    document.body.classList.remove("js-ready");
    cleanups.forEach((cleanup) => cleanup());
  };
}

export default function Home() {
  useEffect(() => runPageInteractions(), []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
