//引入express模块
const express = require('express');
const { singers } = require('./singers.json');
// console.log(singers);

//创建应用对象
const app = express();

//创建路由

app.get("/singer/:id.html", (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  let { id } = req.params;
  //在数组中寻找对应 id 的歌手
  let result = singers.find(item => {
    if (item.id === Number(id)) {
      return true;
    }
  });

  if (!result) {
    res.end('没有找到对应的歌手');
    return;
  }
  // console.log(result);
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h2>${result.singer_name}</h2>
      <img src="${result.singer_pic}">
    </body>
    </html>`);
});


//监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000正在监听中....');
});