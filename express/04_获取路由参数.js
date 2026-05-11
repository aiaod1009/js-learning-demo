//1.引入express模块
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由
// app.get("/100000.html", (req, res) => {
//   res.setHeader('Content-Type', 'text/html; charset=utf-8');
//   res.end('商品详情');
// });
//路由传参
app.get("/:id.html", (req, res) => {
  console.log(req.params); // 获取路由参数
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('商品详情');
});


//4.监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});