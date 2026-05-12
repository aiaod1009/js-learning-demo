var express = require('express');
var router = express.Router();
//导入lowdb
const low = require('lowdb');
//导入lowdb的文件存储适配器
const FileSync = require('lowdb/adapters/FileSync');
//创建适配器对象，指定数据库文件存储在data目录下，文件名为db.json
const adapter = new FileSync(__dirname + '/../data/db.json');
// 获取db对象
const db = low(adapter)
//导入 shortid
const shortid = require('shortid');

//记账本列表
router.get('/account', function (req, res, next) {
  //获取所有的账单信息
  let accounts = db.get('accounts').value();
  res.render('list', { accounts: accounts });
});
//添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create');
});
//新增记录
router.post('/account', (req, res) => {
  let id = shortid.generate();
  db.get('accounts').unshift({ id: id, ...req.body }).write();
  res.render('success', { msg: '添加成功哦~~~', url: '/account' });
});

//删除记录
router.get('/account/:id', (req, res) => {
  //获取params.id
  db.get('account').remove({ id: id }).write();
  res.send("删除成功")
})

module.exports = router;
