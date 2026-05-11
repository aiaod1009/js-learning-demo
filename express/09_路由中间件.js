//引入express模块
const express = require('express');
const fs = require('fs');
const path = require('path');
//创建应用对象
const app = express();



//创建路由
app.get("/home", (req, res) => {
  res.send('前台首页');
});

//声明中间件函数
let check = (req, res, next) => {
  if (req.query.code === '521') {
    next();
  } else {
    res.send('暗号错误');
  }
}

//使用中间件函数
app.get('/admin', check, (req, res) => {
  res.send('后台首页');
});

app.get('/settings', check, (req, res) => {
  res.send('设置页面');
});


//监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});