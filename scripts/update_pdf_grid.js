const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const oldPdfGrid = `<!-- 2 PDF Books Grid -->
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
        </div>`;

const newPdfGrid = `<!-- 3 PDF Books Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <!-- PDF 1 -->
          <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-14 h-20 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-800 flex flex-col items-center justify-center text-white shrink-0 shadow-md">
                <i data-lucide="book-open" class="w-6 h-6 mb-0.5"></i>
                <span class="text-[9px] font-bold">手冊</span>
              </div>
              <div>
                <span class="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold">全彩出版手冊</span>
                <h4 class="text-sm font-bold text-slate-900 mt-1">南投國中綠色校園永續旅程</h4>
                <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  彙整環境教育推動脈絡、課程融入、師生獲獎與校園生態營造之完整手冊。
                </p>
              </div>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <a href="1151102-115南投國中_環境教育考評南投國中綠色校園永續旅程.pdf" target="_blank" class="text-purple-600 hover:text-purple-800 font-bold flex items-center gap-1">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> 線上閱讀
              </a>
              <a href="1151102-115南投國中_環境教育考評南投國中綠色校園永續旅程.pdf" download class="text-slate-500 hover:text-slate-700 flex items-center gap-1">
                <i data-lucide="download" class="w-3.5 h-3.5"></i> 36 MB
              </a>
            </div>
          </div>

          <!-- PDF 2 -->
          <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-14 h-20 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 flex flex-col items-center justify-center text-white shrink-0 shadow-md">
                <i data-lucide="bookmark" class="w-6 h-6 mb-0.5"></i>
                <span class="text-[9px] font-bold">手札</span>
              </div>
              <div>
                <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">成果專題手札</span>
                <h4 class="text-sm font-bold text-slate-900 mt-1">南投國中綠色永續手札</h4>
                <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  記錄校園在地深耕、師生日常實踐與低碳校園生活美學之精選專題手札。
                </p>
              </div>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <a href="1151102-115南投國中_環境教育考評南投國中綠色永續手札.pdf" target="_blank" class="text-amber-600 hover:text-amber-800 font-bold flex items-center gap-1">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> 線上閱讀
              </a>
              <a href="1151102-115南投國中_環境教育考評南投國中綠色永續手札.pdf" download class="text-slate-500 hover:text-slate-700 flex items-center gap-1">
                <i data-lucide="download" class="w-3.5 h-3.5"></i> 32 MB
              </a>
            </div>
          </div>

          <!-- PDF 3 -->
          <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-14 h-20 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex flex-col items-center justify-center text-white shrink-0 shadow-md">
                <i data-lucide="file-text" class="w-6 h-6 mb-0.5"></i>
                <span class="text-[9px] font-bold">剪貼簿</span>
              </div>
              <div>
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">精華圖文剪貼簿</span>
                <h4 class="text-sm font-bold text-slate-900 mt-1">綠色校園永續剪貼簿</h4>
                <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  圖文並茂收錄校園活動翦影、得獎獎狀、學生精彩學習單與社區淨街瞬間。
                </p>
              </div>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <a href="1151102-115南投國中_環境教育考評綠色校園永續剪貼簿.pdf" target="_blank" class="text-emerald-600 hover:text-emerald-800 font-bold flex items-center gap-1">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> 線上閱讀
              </a>
              <a href="1151102-115南投國中_環境教育考評綠色校園永續剪貼簿.pdf" download class="text-slate-500 hover:text-slate-700 flex items-center gap-1">
                <i data-lucide="download" class="w-3.5 h-3.5"></i> 39 MB
              </a>
            </div>
          </div>
        </div>`;

if (html.includes(oldPdfGrid)) {
  html = html.replace(oldPdfGrid, newPdfGrid);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Successfully updated to 3 PDF Books Grid in index.html!');
} else {
  console.error('Old PDF grid not found!');
}
