// 1. 导入http模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // response.statusCode = 203; // 设置响应状态码
  // response.statusMessage = 'i love you'; // 响应状态的描述
  response.setHeader('Content-Type', 'text/html; charset=utf-8'); // 设置响应头，指定编码格式
  response.write('hello'); // 设置响应体
  response.end('response'); // 设置响应体
});

// 3. 监听端口，启动服务
server.listen(3000, () => {
  console.log('服务已经启动....');
});