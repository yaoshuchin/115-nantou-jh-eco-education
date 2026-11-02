const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/src="南投國中超狂環保課：從太陽能車到復古嘉年華\.mp4"/g, 'src="1151102-115南投國中_環境教育考評南投國中超狂環保課：從太陽能車到復古嘉年華.mp4"');
html = html.replace(/href="南投國中超狂環保課：從太陽能車到復古嘉年華\.mp4"/g, 'href="1151102-115南投國中_環境教育考評南投國中超狂環保課：從太陽能車到復古嘉年華.mp4"');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully standardized video filename in index.html!');
