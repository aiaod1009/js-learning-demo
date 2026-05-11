//1.引入express模块
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由
app.get("/request", (req, res) => {
  //原生操作
  // console.log(req.method); // 获取请求的方法
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.headers);

  // //express操作
  // console.log(req.path); // 获取请求的路径
  // console.log(req.query);
  // //获取 ip
  // console.log(req.ip);
  //获取请求头
  console.log(req.get('host'));

  res.end('Hello Express!');
})


//4.监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});