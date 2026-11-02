const fs = require('fs');

const siteData = JSON.parse(fs.readFileSync('siteData.json', 'utf8'));
const slidesFull = JSON.parse(fs.readFileSync('slidesFull.json', 'utf8'));

// Indicators cross-reference matrix
const indicators = [
  {
    code: "A-1",
    domain: "行政與管理",
    title: "環境教育推動小組組織健全性與實施計畫完整度",
    standard: "依法設置環境教育推動委員會，定期召開會議，訂定年度計畫及各項子計畫並報主管機關核定。",
    targetSection: "plan",
    targetSlide: 3,
    evidenceTitle: "環境教育推展委員會組織架構表、年度實施計畫、各處室子計畫公文",
    photos: ["images/image8.png", "images/image9.png"]
  },
  {
    code: "A-2",
    domain: "行政與管理",
    title: "指定環境教育人員認證取得與法規落實",
    standard: "依環境教育法第 18 條規定，指定人員取得環境部/教育部認證並在有效期限內。",
    targetSection: "certification",
    targetSlide: 26,
    evidenceTitle: "教育部環境教育人員認證證書正本佐證",
    photos: ["images/image107.png"]
  },
  {
    code: "B-1",
    domain: "宣導與活動",
    title: "校園多元宣導與衛生安全防護落實度",
    standard: "全年度辦理各項環境教育宣導（病媒蚊、生物防治、空污防護、急救教育、減廢分類）。",
    targetSection: "campaign",
    targetSlide: 5,
    evidenceTitle: "荔枝椿象大螢幕宣導、登革熱防治、空污旗掛旗、AED操作演練照片",
    photos: ["images/image15.png", "images/image11.png", "images/image17.png", "images/image19.png"]
  },
  {
    code: "B-2",
    domain: "宣導與活動",
    title: "全員 4 小時法定環境教育時數落實與研習多元性",
    standard: "教職員工及學生全員每年接受 4 小時以上環境教育，形式涵蓋講座、戶外研習、競賽及手作。",
    targetSection: "workshop",
    targetSlide: 9,
    evidenceTitle: "南投縣環境知識競賽優勝、易經大學淨山、海生館生態研習、生態瓶體驗",
    photos: ["images/image31.png", "images/image35.jpg", "images/image39.png", "images/image47.png"]
  },
  {
    code: "C-1",
    domain: "課程與教學",
    title: "跨學科領域融入環境教育及優質教案研發",
    standard: "跨領域領域教學融入，教師自編或研發創新環境教育教案參與競賽或公開觀課。",
    targetSection: "curriculum",
    targetSlide: 15,
    evidenceTitle: "太陽能小車與永續未來AI綠能宣言教案全縣佳作、自然、英語、綜合、藝術領域教案",
    photos: ["images/image58.png", "images/image52.jpeg", "images/image67.png", "images/image71.png"]
  },
  {
    code: "C-2",
    domain: "課程與教學",
    title: "特殊教育融入與弱勢關懷之環境實踐",
    standard: "落實教育平權，針對特殊需求學生規劃適切之校園農場、感官體驗與資源再利用手作課程。",
    targetSection: "curriculum",
    targetSlide: 16,
    evidenceTitle: "特教班開心農場整地施肥、收成、廢棄物回收再出發手作課",
    photos: ["images/image61.png", "images/image64.png", "images/image62.png"]
  },
  {
    code: "D-1",
    domain: "特色與落實",
    title: "永續校園空間營造、無紙化行政與節能減碳",
    standard: "校園綠覆率、原生水生生態池維護、食農教育農場、行政數位化無紙化作業。",
    targetSection: "features",
    targetSlide: 21,
    evidenceTitle: "校園原生生態池、食農教育蔬菜栽種、無紙化廣播敬師、數位公告",
    photos: ["images/image81.png", "images/image83.png", "images/image85.png"]
  },
  {
    code: "D-2",
    domain: "特色與落實",
    title: "社區參與、特色主題活動與全國性競賽卓越成就",
    standard: "走入社區減塑淨街、創新特色主題低碳活動，以及指導學生參與全國性環境賽事獲卓越榮譽。",
    targetSection: "features",
    targetSlide: 25,
    evidenceTitle: "第三屆全國海洋科普繪本比賽第一名《鯨喜》、第三名《海好有你》、復古fun店趴運動會、減塑淨街",
    photos: ["images/image105.png", "images/image100.png", "images/image94.png", "images/image96.png"]
  }
];

const jsContent = `/**
 * 南投縣立南投國民中學 115學年度環境教育成果網 - 資料核心
 * Generated automatically from 115南投國中_環境教育考評複評到校輔導.pptx
 */
window.SITE_DATA = ${JSON.stringify(siteData, null, 2)};
window.SLIDES_DATA = ${JSON.stringify(slidesFull, null, 2)};
window.INDICATORS_DATA = ${JSON.stringify(indicators, null, 2)};
`;

fs.writeFileSync('data.js', jsContent, 'utf8');
console.log('Successfully bundled data.js (SITE_DATA + SLIDES_DATA + INDICATORS_DATA)!');
