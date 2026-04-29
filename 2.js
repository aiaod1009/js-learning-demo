const fs = require('fs');

// const ws = fs.createWriteStream('./观书有感.txt');
// ws.write('观书有感\n');
// ws.write('半亩方塘一鉴开，\n');
// ws.write('天光云影共徘徊。\n');
// ws.write('问渠哪得清如许？\n');
// ws.write('为有源头活水来。\n');
// ws.close();

// 异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//   if (err) {
//     console.log('读取失败');
//     return;
//   }
//   console.log(data.toString());
// });

// 同步读取
// let data = fs.readFileSync('./观书有感.txt');
// console.log(data.toString());

// 创建读取流对象
// const rs = fs.createReadStream('./观书有感.txt');
// // 监听data事件   chunk 块
// rs.on('data', chunk => {
//   console.log(chunk.toString());
// });
// rs.on('end', () => {
//   console.log('读取完成');
// });


// 复制文件
// 方式一
// let data = fs.readFileSync('./嘿嘿.mp4');
// fs.writeFileSync('./嘿嘿2.mp4', data);

// 方式二
const rs = fs.createReadStream('./嘿嘿.mp4');
const ws = fs.createWriteStream('./嘿嘿3.mp4');

// 绑定data事件
rs.on('data', chunk => {
  ws.write(chunk);
});