const fs = require('fs');
let content = fs.readFileSync('slides_manifest.json', 'utf8').replace(/^\uFEFF/, '');
const data = JSON.parse(content);
data.forEach(s => {
  const texts = s.elements.filter(e => e.text).map(e => e.text);
  const imgs = s.elements.filter(e => e.type === 'pic').map(e => e.image);
  console.log(`Slide ${s.slide}: [${imgs.length} imgs] Texts: ${texts.join(' | ')}`);
});

