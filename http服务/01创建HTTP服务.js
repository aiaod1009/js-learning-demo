// 1. 导入http模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // response.end('Hello HTTP!'); // 设置响应体
  response.setHeader('Content-Type', 'text/html; charset=utf-8'); // 设置响应头，指定编码格式
  response.end('你好')
});
// 如果有中文会乱码

// 3. 监听端口，启动服务
server.listen(3000, () => {
  console.log('服务已经启动....');
});