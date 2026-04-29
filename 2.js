const fs = require('fs');

const ws = fs.createWriteStream('./观书有感.txt');
ws.write('观书有感\n');
ws.write('半亩方塘一鉴开，\n');
ws.write('天光云影共徘徊。\n');
ws.write('问渠哪得清如许？\n');
ws.write('为有源头活水来。\n');
ws.close();

// 异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//   if (err) {
//     console.log('读取失败');
//     return;
//   }
//   console.log(data.toString());
// });

// 同步读取
let data = fs.readFileSync('./观书有感.txt');
console.log(data.toString());