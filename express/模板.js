//引入express模块
const express = require('express');

//创建应用对象
const app = express();

//创建路由

app.get("/:id.html", (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('hello');
});


//监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});