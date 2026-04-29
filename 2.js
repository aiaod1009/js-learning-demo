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
// 方式一 占用内存大
// let data = fs.readFileSync('./嘿嘿.mp4');
// fs.writeFileSync('./嘿嘿2.mp4', data);

// 方式二 占用内存少
// const rs = fs.createReadStream('./嘿嘿.mp4');
// const ws = fs.createWriteStream('./嘿嘿3.mp4');

// // 绑定data事件
// rs.on('data', chunk => {
//   ws.write(chunk);
// });

// rs.on('end', () => {
//   console.log(process.memoryUsage());
// })

// 文件重命名与移动
// fs.rename('./hello.txt', './hi.txt', err => {
//   if (err) {
//     console.log('重命名失败');
//     return;
//   }
//   console.log('重命名成功');
// });

// 文件的移动
// fs.rename('./hi.txt', './资料/hi.txt', err => {
//   if (err) {
//     console.log('移动失败');
//     return;
//   }
//   console.log('移动成功');
// });

// 文件的删除  同步unlinkSync
// fs.unlink('./观书有感.txt', err => {
//   if (err) {
//     console.log('删除失败');
//     return;
//   }
//   console.log('删除成功');
// });


// 调用 rm 方法
// fs.rm('./资料/hi.txt', err => {
//   if (err) {
//     console.log('删除失败');
//     return;
//   }
//   console.log('删除成功');
// });

// 创建文件夹
// fs.mkdir('./html', err => {
//   if (err) {
//     console.log('创建失败');
//     return;
//   }
//   console.log('创建成功');
// });

// 递归创建
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//   if (err) {
//     console.log('创建失败');
//     return;
//   }
//   console.log('创建成功');
// });


// 读取文件夹
// fs.readdir('./', (err, data) => {
//   if (err) {
//     console.log('读取失败');
//     return;
//   }
//   console.log(data);
// });

// 删除文件夹
// fs.rmdir('./html', err => {
//   if (err) {
//     console.log('删除失败');
//     return;
//   }
//   console.log('删除成功');
// });

// 递归删除
// fs.rm('./a', { recursive: true }, err => {
//   if (err) {
//     console.log('删除失败');
//     return;
//   }
//   console.log('删除成功');
// });

// stat方法 状态
// fs.stat('./嘿嘿.mp4', (err, stats) => {
//   if (err) {
//     console.log('获取状态失败');
//     return;
//   }
//   // console.log(stats);
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
// });

// 相对路径 url
// fs.writeFileSync('./index.txt', 'love')
// fs.writeFileSync('index.html', 'love')

// 绝对路径
fs.writeFileSync('E:/index.txt', 'love')