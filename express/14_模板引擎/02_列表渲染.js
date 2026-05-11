const ejs = require('ejs');
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧'];

// let str = '<ul>';

// xiyou.forEach(item => {
//   str += `<li>${item}</li>`;
// });

// str += '</ul>';
// console.log(str);

// EJS实现
const fs = require('fs');
let html = fs.readFileSync('./02_西游.html').toString();
let resule = ejs.render(html, { xiyou: xiyou });

console.log(resule);