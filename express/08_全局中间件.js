//引入express模块
const express = require('express');
const fs = require('fs');
const path = require('path');
//创建应用对象
const app = express();

//声明中间件函数
function recordMiddleware(req, res, next) {
  let { url, ip } = req;
  //将信息保存在文件中 access.log
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);
  //调用next函数，继续向下执行
  next();
}

//使用中间件函数
app.use(recordMiddleware);


//创建路由
app.get("/home", (req, res) => {
  //获取url和ip
  // let { url, ip } = req;
  // //将信息保存在文件中 access.log
  // fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);
  res.send('前台首页');
});

app.get('/admin', (req, res) => {
  // let { url, ip } = req;
  // //将信息保存在文件中 access.log
  // fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);
  res.send('后台管理');
});

// app.all('*', (req, res) => {
//   res.send('404 Not Found');
// });

//监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});