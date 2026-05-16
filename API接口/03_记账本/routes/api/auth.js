var express = require('express');
var router = express.Router();
// 导入jwt
const jwt = require('jsonwebtoken');
const UserModel = require('../../models/UserModel')
const md5 = require('md5');
const { token } = require('morgan');



//登录操作
router.post('/login', (req, res) => {
  // 获取用户名和密码
  let { username, password } = req.body;
  // 查询数据库
  UserModel.findOne({ username: username, password: md5(password) }, (err, data) => {
    if (err) {
      res.status(500).send('登录失败，请稍后再试~~');
      res.json({
        code: '2001',
        msg: "数据库读取失败了哦~~~",
        data: null
      })
      return
    }
    if (!data) {
      return res.json({
        code: '2002',
        msg: "用户名或密码错误",
        data: null
      });
    }
    let token = jwt.sign({
      username: data.username,
    }, 'atguigu', {
      expiresIn: 60 * 60 * 24 * 7
    });
    console.log(token);
    //响应token
    res.json({
      code: '0000',
      msg: "登录成功",
      data: token
    })

    //登录成功响应
    res.render('success', { msg: '登录成功', url: '/account' });
  })
})

//退出登录
router.post('/logout', (req, res) => {
  // 销毁session
  req.session.destroy(() => {
    res.render('success', { msg: '退出登录成功', url: '/login' });
  })
})
module.exports = router;
