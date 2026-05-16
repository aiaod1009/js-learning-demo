var express = require('express');
var router = express.Router();
const UserModel = require('../../models/UserModel')
//注册
router.get('/reg', (req, res) => {
  res.render('auth/reg');
})

// 注册用户
router.post('/reg', (req, res) => {
  // 可做表单验证
  // 获取用户提交的用户名和密码
  UserModel.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send('注册失败，请稍后再试~~');;
      return
    }
    res.render('success', { msg: '注册成功', url: '/login' });
  })
});
module.exports = router;
