const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStr = '<!-- Download Banner -->';

const mediaSection = `
      <!-- Multimedia Section: 2 Videos & 2 PDFs -->
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
          <div>
            <span class="text-xs font-bold text-purple-600 uppercase tracking-widest">MULTIMEDIA & PUBLICATIONS</span>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
              影音專題紀錄片 ＆ 全彩成果電子書手冊專區
            </h3>
          </div>
          <span class="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-bold self-start sm:self-center">
            2 部精彩紀錄片 ＋ 2 冊全彩成果電子書
          </span>
        </div>

        <!-- 2 MP4 Videos Grid -->
        <div class="grid lg:grid-cols-2 gap-6">
          <!-- Video 1 -->
          <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div class="bg-black aspect-video relative flex items-center justify-center overflow-hidden">
              <video controls class="w-full h-full object-cover" preload="metadata">
                <source src="1151102-115南投國中_環境教育考評南投國中：環境教育的典範.mp4" type="video/mp4">
                您的瀏覽器不支援影片播放。
              </video>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <span class="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[11px] font-bold">考評專題紀錄片</span>
                <h4 class="text-base font-bold text-slate-900 mt-1">南投國中：環境教育的典範</h4>
                <p class="text-xs text-slate-600 mt-1 leading-relaxed">
                  完整紀錄南投國中全體親師生深耕環境教育之典範歷程，涵蓋組織制度、宣導研習、跨域教案與生態校園。
                </p>
              </div>
              <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400">檔案大小：45 MB ｜ 高畫質 MP4</span>
                <a href="1151102-115南投國中_環境教育考評南投國中：環境教育的典範.mp4" download class="text-purple-600 hover:text-purple-800 font-bold flex items-center gap-1">
                  <i data-lucide="download" class="w-3.5 h-3.5"></i> 下載影片
                </a>
              </div>
            </div>
          </div>

          <!-- Video 2 -->
          <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div class="bg-black aspect-video relative flex items-center justify-center overflow-hidden">
              <video controls class="w-full h-full object-cover" preload="metadata">
                <source src="南投國中超狂環保課：從太陽能車到復古嘉年華.mp4" type="video/mp4">
                您的瀏覽器不支援影片播放。
              </video>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">精華短影音</span>
                <h4 class="text-base font-bold text-slate-900 mt-1">南投國中超狂環保課：從太陽能車到復古嘉年華</h4>
                <p class="text-xs text-slate-600 mt-1 leading-relaxed">
                  精選全縣教案佳作『AI 太陽能小車組裝』與全校首創『綠能年代。復古 fun 店趴』低碳嘉年華盛況。
                </p>
              </div>
              <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400">檔案大小：9.5 MB ｜ 精華剪輯 MP4</span>
                <a href="南投國中超狂環保課：從太陽能車到復古嘉年華.mp4" download class="text-emerald-600 hover:text-emerald-800 font-bold flex items-center gap-1">
                  <i data-lucide="download" class="w-3.5 h-3.5"></i> 下載影片
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 2 PDF Books Grid -->
        <div class="grid lg:grid-cols-2 gap-6 pt-2">
          <!-- PDF 1 -->
          <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-5">
            <div class="w-20 h-28 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-800 flex flex-col items-center justify-center text-white shrink-0 shadow-md">
              <i data-lucide="book-open" class="w-8 h-8 mb-1"></i>
              <span class="text-[10px] font-bold tracking-wider">PDF 手冊</span>
            </div>
            <div class="flex-1 space-y-1.5 text-center sm:text-left">
              <span class="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[11px] font-bold">全彩出版手冊</span>
              <h4 class="text-base font-bold text-slate-900">南投國中綠色校園永續旅程</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                彙整南投國中環境教育推動脈絡、課程融入、師生獲獎與校園生態營造之完整電子手冊。
              </p>
              <div class="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                <a href="1151102-115南投國中_環境教育考評南投國中綠色校園永續旅程.pdf" target="_blank" class="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all flex items-center gap-1">
                  <i data-lucide="eye" class="w-3.5 h-3.5"></i> 線上閱讀
                </a>
                <a href="1151102-115南投國中_環境教育考評南投國中綠色校園永續旅程.pdf" download class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-all flex items-center gap-1">
                  <i data-lucide="download" class="w-3.5 h-3.5"></i> 下載 PDF (36MB)
                </a>
              </div>
            </div>
          </div>

          <!-- PDF 2 -->
          <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-5">
            <div class="w-20 h-28 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex flex-col items-center justify-center text-white shrink-0 shadow-md">
              <i data-lucide="file-text" class="w-8 h-8 mb-1"></i>
              <span class="text-[10px] font-bold tracking-wider">PDF 剪貼簿</span>
            </div>
            <div class="flex-1 space-y-1.5 text-center sm:text-left">
              <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">精華圖文剪貼簿</span>
              <h4 class="text-base font-bold text-slate-900">綠色校園永續剪貼簿</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                圖文並茂收錄校園活動翦影、得獎獎狀、學生精彩學習單與社區淨街精彩瞬間。
              </p>
              <div class="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                <a href="1151102-115南投國中_環境教育考評綠色校園永續剪貼簿.pdf" target="_blank" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all flex items-center gap-1">
                  <i data-lucide="eye" class="w-3.5 h-3.5"></i> 線上閱讀
                </a>
                <a href="1151102-115南投國中_環境教育考評綠色校園永續剪貼簿.pdf" download class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-all flex items-center gap-1">
                  <i data-lucide="download" class="w-3.5 h-3.5"></i> 下載 PDF (39MB)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

`;

if (html.includes(targetStr)) {
  html = html.replace(targetStr, mediaSection + '\n      ' + targetStr);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Successfully injected 2 Videos & 2 PDFs into index.html!');
} else {
  console.error('Target string not found!');
}
