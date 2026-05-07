// 1. 导入http模块
const http = require('http');


// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 实例化URL对象
  // let url = new URL('http://http://127.0.0.1:3000/search?keyword=h5');
  let url = new URL(request.url, 'http://127.0.0.1');
  console.log(url.pathname);
  // 输出keyword查询字符串
  console.log(url.searchParams.get('keyword'));

  response.end('url new');
});

// 3. 监听端口，启动服务
server.listen(3000, () => {
  console.log('服务已经启动....');
});