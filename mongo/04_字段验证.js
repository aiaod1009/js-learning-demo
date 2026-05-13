const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
//设置回调
mongoose.set('strictQuery', true);
mongoose.connection.once('open', () => {
  // console.log('数据库连接成功了哦~~~');
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true  // 该属性必须不为空
    },
    author: {
      type: String,
      default: '佚名'  // 默认值
    },
    style: {
      type: String,
      enum: ['科幻', '小说', '文学']  // 枚举值
    },
    price: Number,
    is_hot: Boolean,
    pub_time: Date,
    unique: true  //唯一索引
  });
  //创建模型对象 对文档操作的封装对象
  let BookModel = mongoose.model('books', BookSchema);

  BookModel.create({
    name: '三体',
    author: '刘慈欣',
    price: 99,
    is_hot: true,
    style: '科幻',
    pub_time: new Date()
  }, (err, data) => {
    if (err) {
      console.log('插入失败了哦~~~');
      return;
    }
    console.log(data);
    mongoose.disconnect();
  });
});
mongoose.connection.on('error', () => {
  console.log('数据库连接失败了哦~~~');
});
mongoose.connection.on('close', () => {
  console.log('数据库连接关闭了哦~~~');
});
