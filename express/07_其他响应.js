//引入express模块
const express = require('express');

//创建应用对象
const app = express();

//创建路由

app.get("/other", (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  //跳转响应(重定向)
  // res.redirect('https://www.baidu.com');
  //下载响应
  // res.download(__dirname + '/singers.json');
  //json响应
  // res.json({
  //   name: '张三',
  //   age: 20
  // });
  //文件响应
  res.sendFile(__dirname + '/test.html');
});


//监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});