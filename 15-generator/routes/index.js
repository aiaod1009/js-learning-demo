const formidable = require('formidable');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页的（表单）
router.get('/partrait', (req, res) => {
  res.render('portrait');
});


// 处理文件上传
router.post('/portrait', (req, res) => {
  //创建表单对象
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/../public/images',
    keepExtensions: true
  });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields);
    // console.log(files);
    // 服务器保存该图片的访问URL
    let url = '-***ges/' + files.portrait.newFilename;// 将来将此数据保存在数据库中

    res.send(url);
  }
  );

});
module.exports = router;
