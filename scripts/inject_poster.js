const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStr = '<!-- 3 PDF Books Grid -->';

const posterSection = `<!-- Eco Campus Flagship Poster -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm p-4 sm:p-6 space-y-3">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                <i data-lucide="map" class="w-4 h-4"></i>
              </span>
              <div>
                <h4 class="text-base font-bold text-slate-900">南投國中永續綠校園 · 旗艦全景海報</h4>
                <p class="text-xs text-slate-500">115學年度環境教育整體校園空間生態導覽全景圖</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="openLightbox('1151102-115南投國中_環境教育考評南投國中永續綠校園.png', '南投國中永續綠校園全景導覽海報')" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 transition-all shadow-sm">
                <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i>
                <span>放大檢視海報</span>
              </button>
              <a href="1151102-115南投國中_環境教育考評南投國中永續綠校園.png" download class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs flex items-center gap-1 transition-all">
                <i data-lucide="download" class="w-3.5 h-3.5"></i>
                <span>下載原圖 (5.7MB)</span>
              </a>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden bg-slate-900 aspect-[21/9] sm:aspect-[24/9] cursor-pointer group" onclick="openLightbox('1151102-115南投國中_環境教育考評南投國中永續綠校園.png', '南投國中永續綠校園全景導覽海報')">
            <img src="1151102-115南投國中_環境教育考評南投國中永續綠校園.png" alt="南投國中永續綠校園" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="text-xs text-white font-medium flex items-center gap-1">
                <i data-lucide="zoom-in" class="w-4 h-4 text-emerald-400"></i> 點擊放大查看完整高解析度細節
              </span>
            </div>
          </div>
        </div>

        `;

if (html.includes(targetStr)) {
  html = html.replace(targetStr, posterSection + targetStr);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Successfully injected Eco Campus Poster into index.html!');
} else {
  console.error('Target string for poster not found!');
}
