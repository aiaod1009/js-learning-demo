// 导入 express
const express = require('express');
// 2. 引入 express-session  connect-mongo
const session = require("express-session");
const MongoStore = require('connect-mongo');

// 创建应用对象
const app = express();
app.use(session({
  name: 'sid',      // 设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', // 参与加密的字符串（又称签名）   加盐
  saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
  resave: true,    // 是否在每次请求时重新保存session
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/project' // 数据库的连接配置
  }),
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作
    maxAge: 1000 * 300 // 这一条 是控制 sessionID 的过期时间的！！！
  },
}))

// 首页路由
app.get('/', (req, res) => {
  res.send('home')
})

// 启动服务
app.listen(3000);