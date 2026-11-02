const fs = require('fs');
const siteData = JSON.parse(fs.readFileSync('siteData.json', 'utf8'));
const slidesFull = JSON.parse(fs.readFileSync('slidesFull.json', 'utf8'));

let missing = 0;
let total = 0;

siteData.forEach(sec => {
  sec.items.forEach(item => {
    (item.images || []).forEach(img => {
      total++;
      if (!fs.existsSync('images/' + img)) {
        console.error('Missing in siteData item:', img);
        missing++;
      }
    });
  });
});

slidesFull.forEach(slide => {
  (slide.images || []).forEach(img => {
    total++;
    if (!fs.existsSync('images/' + img)) {
      console.error('Missing in slide ' + slide.slide + ':', img);
      missing++;
    }
  });
});

console.log(`Asset Verification Complete: Total references checked = ${total}, Missing = ${missing}`);
