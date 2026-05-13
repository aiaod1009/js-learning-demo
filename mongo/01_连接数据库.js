const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
//设置回调
mongoose.set('strictQuery', true);
mongoose.connection.once('open', () => {
  console.log('数据库连接成功了哦~~~');
});
mongoose.connection.on('error', () => {
  console.log('数据库连接失败了哦~~~');
});
mongoose.connection.on('close', () => {
  console.log('数据库连接关闭了哦~~~');
});
//关闭
setTimeout(() => {
  mongoose.disconnect();
}, 2000)