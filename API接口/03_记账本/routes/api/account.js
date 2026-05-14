var express = require('express');
var router = express.Router();

const moment = require('moment');
const AccountModel = require('../../models/AccountModel');

//记账本列表
router.get('/account', function (req, res, next) {
  //获取所有的账单信息
  // let accounts = db.get('accounts').value();
  AccountModel.find().sort({ time: -1 }).exec((err, data) => {
    if (err) {
      res.json({
        code: '1001',
        msg: '读取失败了哦~~~',
        data: null
      })
      return;
    }
    // console.log(data);
    // 前面 = 给 EJS 页面用的变量名
    // 后面 = 你后端真实的数据
    res.json({
      code: '0000',
      msg: '读取成功',
      data: data
    });
  });
});
//添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create');
});
//新增记录
router.post('/account', (req, res) => {
  // let id = shortid.generate();
  // db.get('accounts').unshift({ id: id, ...req.body }).write();
  // 数字转成日期对象moment.js
  // req.body.time = moment(req.body.time).toDate();
  // 或者
  // req.body.time = new Date(req.body.time);
  // console.log(req.body);
  AccountModel.create({
    ...req.body,
    time: moment(req.body.time).toDate()
  }, (err, data) => {
    if (err) {
      res.status(500).send('添加失败了哦~~~');
      return;
    }
    res.render('success', { msg: '添加成功哦~~~', url: '/account' });
  })
});

//删除记录
router.get('/account/:id', (req, res) => {
  //获取params.id
  let id = req.params.id;
  // db.get('accounts').remove({ id: id }).write();
  AccountModel.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send('删除失败了哦~~~');
      return;
    }
    res.render('success', { msg: '删除成功哦~~~', url: '/account' });
  })
});
module.exports = router;
