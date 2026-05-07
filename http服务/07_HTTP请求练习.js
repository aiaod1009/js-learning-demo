const http = require('http');

const server = http.createServer((request, response) => {
  let { method } = request;
  let { pathname } = new URL(request.url, 'http://127.0.0.1');
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  console.log(method, pathname);
  if (method === 'GET' && pathname === '/login') {
    response.end('登陆页面');
  } else if (method === 'GET' && pathname === '/reg') {
    response.end('注册页面');
  } else {
    response.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('服务已经启动..端口 3000 监听中...');
});