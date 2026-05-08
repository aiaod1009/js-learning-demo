// 导入http模块
const http = require('http');
const fs = require('fs');

// 创建服务对象
const server = http.createServer((request, response) => {
  let { pathname } = new URL(request.url, 'http://127.0.0.1');
  // 声明一个变量
  let root = __dirname + '/page';
  // 拼接文件路径
  let filePath = root + pathname;
  // 读取文吉件 fs 异步 API
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.statusCode = 500;
      response.end('文件读取失败~~');
      return;
    }
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