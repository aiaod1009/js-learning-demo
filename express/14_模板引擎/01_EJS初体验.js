const ejs = require('ejs');
const fs = require('fs');
let china = '中国';
let weather = '今天天气不错哦~';
// let str = '我爱你 <%= china %>';
let str = fs.readFileSync('./01_html.html').toString();
let result = ejs.render(str, { china: china, weather });
console.log(result);