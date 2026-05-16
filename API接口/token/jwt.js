//导入jwt
const jwt = require('jsonwebtoken');
//创建（生成）token(用户数据。加密字符串。配置对象)
// let token = jwt.sign({
//   username: 'zhangsan',
// }, 'atguigu', {
//   expiresIn: 600
// });
// console.log(token);
// 校验token
let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNzc4OTEyMjkyLCJleHAiOjE3Nzg5MTI4OTJ9.OQXo2HbBJhT-30Njrfbb2hRbnu1G79ReMM0yRGT5n0Q'

jwt.verify(t, 'atguigu', (err, data) => {
  if (err) {
    console.log('校验失败了哦~~~');
    return;
  }
  console.log(data);
});