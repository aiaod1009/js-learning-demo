// 导入http模块
const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => {
  response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        td{
          padding: 20px 40px;
        }
        table tr:nth-child(odd){
          background-color: #aef;
        }
          table tr:nth-child(even){
          background-color: #fcb;
        }
        table,td{
          border-collapse: collapse;
        }
      </style>

    </head>
    <body>
      <table border="1">
        <tr><td>1</td><td>2</td><td>3</td></tr>
        <tr><td>4</td><td>5</td><td>6</td></tr>
        <tr><td>7</td><td>8</td><td>9</td></tr>
        <tr><td>7</td><td>8</td><td>9</td></tr>
      </table>
      <script>
        let tds = document.querySelectorAll('td');
        tds.forEach(item => {
          item.onclick = function(){
            this.style.backgroundColor = 'red';
          }
        })
      </script>
    </body>
    </html>`); // 设置响应体
});

// 3. 监听端口，启动服务
server.listen(3000, () => {
  console.log('服务已经启动....');
});