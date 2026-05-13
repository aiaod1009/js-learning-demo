/**
 * 
 * @param {*} sucess 连接成功回调
 * @param {*} error 连接失败回调
 */
module.exports = function (sucess, error) {
  if (typeof error !== 'function') {
    error = () => {
      console.log('连接失败了哦~~~');
    }
  }
  //1. 安装 mongoose
  //2. 导入 mongoose
  const mongoose = require('mongoose');

  //设置 strictQuery 为 true
  mongoose.set('strictQuery', true);

  //3. 连接 mongodb 服务                        数据库的名称
  mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

  //4. 设置回调
  // 设置连接成功的回调  once 一次   事件回调函数只执行一次
  mongoose.connection.once('open', () => {
    sucess();
  });

  // 设置连接错误的回调
  mongoose.connection.on('error', () => {
    error();
  });
  //设置连接关闭的回调
  mongoose.connection.on('close', () => {
    console.log('连接关闭');
  });
}