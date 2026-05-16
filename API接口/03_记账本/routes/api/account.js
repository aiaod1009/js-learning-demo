const express = require('express');
const jwt = require('jsonwebtoken')
//导入中间件
let chheckTokenMiddleware = require('../../middlewares/checkTokenMiddlewaree');
const router = express.Router();
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');


//记账本列表
router.get('/account', chheckTokenMiddleware, function (req, res, next) {
  AccountModel.find().sort({ time: -1 }).exec((err, data) => {
    if (err) {
      res.json({
        code: '1001',
        msg: '读取失败了哦~~~',
        data: null
      })
      return;
    }
    res.json({
      code: '0000',
      msg: '读取成功',
      data: data
    });
  });
});

//新增记录
router.post('/account', chheckTokenMiddleware, (req, res) => {
  AccountModel.create({
    ...req.body,
    time: moment(req.body.time).toDate()
  }, (err, data) => {
    if (err) {
      res.json({
        code: '1002',
        msg: '添加失败了哦~~~',
        data: null
      });
      return;
    }
    res.json({
      code: '0000',
      msg: '添加成功哦~~~',
      data: data
    });
  })
});

//删除记录
router.delete('/account/:id', chheckTokenMiddleware, (req, res) => {
  //获取params.id
  let id = req.params.id;
  AccountModel.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.json({
        code: '1003',
        msg: '删除失败了哦~~~',
        data: null
      });
      return;
    }
    res.json({
      code: '0000',
      msg: '删除成功哦~~~',
      data: null
    });
  })
});

//获取单个账单信息
router.get('/account/:id', chheckTokenMiddleware, (req, res) => {
  //获取id参数
  let { id } = req.params;
  AccountModel.findById(id, (err, data) => {
    if (err) {
      return res.json({
        code: '1004',
        msg: '读取失败了哦~~~',
        data: null
      });
    }
    res.json({
      code: '0000',
      msg: '读取成功哦~~~',
      data: data
    });
  });
});

//更新单个账单信息
router.patch('/account/:id', chheckTokenMiddleware, (req, res) => {
  let { id } = req.params;
  AccountModel.updateOne({ _id: id }, req.body, (err, data) => {
    if (err) {
      return res.json({
        code: '1005',
        msg: '更新失败了哦~~~',
        data: null
      });
    }

    AccountModel.findById(id, (err, data) => {
      if (err) {
        return res.json({
          code: '1004',
          msg: '读取失败了哦~~~',
          data: null
        });
      }
      res.json({
        code: '0000',
        msg: '更新成功哦~~~',
        data: data
      });
    })
  })
});
module.exports = router;
