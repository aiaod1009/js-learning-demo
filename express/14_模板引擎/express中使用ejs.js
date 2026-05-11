//引入express模块
const express = require('express');
const path = require('path');
const app = express();
//设置模板引擎
app.set('view engine', 'ejs');

//设置模板文件的存放位置
app.set('views', path.resolve(__dirname, './views'));

//创建路由
app.get('/home', (req, res) => {
  // render 响应
  let title = 'EJS模板引擎';
  res.render('home', { title });
});

//监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});