//引入express模块
const express = require('express');
const fs = require('fs');
const path = require('path');
//创建应用对象
const app = express();

//声明中间件函数
app.use(express.static(__dirname + '/public'));

//使用中间件函数

//创建路由
app.get("/home", (req, res) => {
  res.send('前台首页');
});

//监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});