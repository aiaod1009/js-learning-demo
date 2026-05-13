const db = require('./db/db');
const mongoose = require('mongoose');
const BookModel = require('./models/BookModel');
db(() => {

  BookModel.deleteMany({ is_hot: false }, (err, data) => {
    if (err) {
      console.log('删除失败了哦~~~');
      return;
    }
    console.log(data);
  });

}, () => {
  console.log('连接失败了哦~~~');
});
