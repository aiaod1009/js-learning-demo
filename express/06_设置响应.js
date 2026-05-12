//引入express模块
const express = require('express');

//创建应用对象
const app = express();

//创建路由

app.get("/response", (req, res) => {
  //原生响应
  // res.statusCode = 200;
  // res.statusMessage = 'love'
  // res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // res.write('hello express')
  // res.end(' hello');

  //express响应
  res.status(500);
  res.set('aaa', 'bbb');
  res.send('你好 express'); // send方法会自动设置Content-Type和Content-Length
  // res.status(200).set('aaa', 'bbb').send('你好 express'); //链式调用
});


//监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});