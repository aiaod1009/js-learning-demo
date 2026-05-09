// 导入http模块
const http = require('http');
const fs = require('fs');
const path = require('path');
// 声明一个变量
let mimes = {
  html: 'text/html;',
  css: 'text/css;',
  js: 'text/javascript;',
  png: 'image/png;',
  jpg: 'image/jpeg;',
  json: 'application/json;'
}
// 创建服务对象
const server = http.createServer((request, response) => {、
  if (request.method !== 'GET') {
    response.statusCode = 405;
    response.end('<h1>405 Method Not Allowed</h1>');
    return;
  }
  let { pathname } = new URL(request.url, 'http://127.0.0.1');
  // 声明一个变量
  let root = __dirname + '/page';
  // 拼接文件路径
  let filePath = root + pathname;
  // 读取文吉件 fs 异步 API
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 设置字符集
      response.setHeader('Content-type', 'text/html; charset=utf-8');
      // 判断错误的代号
      switch (err.code) {
        case 'ENOENT':
          response.statusCode = 404;
          response.end('<h1>404 Not Found</h1>');
        case "EISDIR":
          response.statusCode = 403;
          response.end('<h1>403 Forbidden</h1>');
      }
      return;
    }
    // 获取文件后缀名
    let ext = path.extname(filePath).slice(1);
    let type = mimes[ext];
    if (type) {
      response.setHeader('content-type', type);
    } else {
      response.setHeader('content-type', 'application/octet-stream');
    }
    // console.log(ext);
    response.end(data); // 设置响应体
  })
  // if (pathname === '/index.html') {
  //   let html = fs.readFileSync(__dirname + '/page/index.html');
  //   response.end(html); // 设置响应体
  // } else if (pathname === '/css/app.css') {
  //   let css = fs.readFileSync(__dirname + '/page/css/app.css');
  //   response.end(css); // 设置响应体
  // } else {
  //   response.end('Not Found');
  // }
});

// 3. 监听端口，启动服务
server.listen(3000, () => {
  console.log('服务已经启动....');
});