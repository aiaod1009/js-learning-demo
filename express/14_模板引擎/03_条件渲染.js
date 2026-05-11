const ejs = require('ejs');
const fs = require('fs');
let isLogin = true;

// if (isLogin) {
//   console.log('欢迎来到后台首页');
// } else {
//   console.log('请先登录');
// }

let html = fs.readFileSync('./03_home.html').toString();
let result = ejs.render(html, { isLogin: isLogin });
console.log(result);