//引入express模块
const express = require('express');
const fs = require('fs');
const path = require('path');
//创建应用对象
const app = express();

app.use((req, res, next) => {
  let referer = req.get('referer');
  console.log(referer);
  if (referer) {
    //实例化
    let url = new URL(referer);
    //获取 hostname
    let hostname = url.hostname;
    console.log(hostname);
    if (hostname !== 'localhost') {
      res.send('图片防盗链');
      return;
    }
  }
  next();
});
//声明中间件函数(静态资源中间件，图片也可以不止css啥的)
app.use(express.static(__dirname + '/public'));


//监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});