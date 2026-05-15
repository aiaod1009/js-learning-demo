const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
// app.get('/set-cookie', (req, res) => {
//   res.cookie('name', '张三')
//   res.send('home');
// });

//创建路由规则
app.get('/set-cookie', (req, res) => {
  res.cookie('name', '张三', { maxAge: 1000 * 60 * 60 }) //过期时间，单位毫秒
  res.cookie('tieme', 'blue')
  res.send('home')
});

//删除cookie
app.get('/clear-cookie', (req, res) => {
  res.clearCookie('name');
  res.send('删除成功');
});

//获取 cookie
app.get('/get-cookie', (req, res) => {
  console.log(req.cookies);
  res.send('获取cookie成功');
});
app.listen(3000);