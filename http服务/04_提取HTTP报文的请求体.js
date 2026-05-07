// 1. 导入http模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 定义一个变量 body，用来拼接请求体的数据
  let body = '';
  request.on('data', chunk => {
    body += chunk;
  });
  request.on('end', () => {
    console.log(body);
    response.end('Hello HTTP!'); // 设置响应体
  });
});

// 3. 监听端口，启动服务
server.listen(3000, () => {
  console.log('服务已经启动....');
});