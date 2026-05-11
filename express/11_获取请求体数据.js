const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//解析json格式的请求体的中间件
const jsonParser = bodyParser.json();
//解析querystring格式的请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/login', (req, res) => {
  // res.send('表单页面')
  res.sendFile(__dirname + '/11_form.html');
});

app.post('/login', urlencodedParser, (req, res) => {
  //获取用户名和密码
  console.log(req.body);
  res.send('获取用户的数据');
});

app.listen(3000, () => {
  console.log('server is running...')
})