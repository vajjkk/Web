"use strict";

var https = require('https');

var cheerio = require('cheerio'); // 创建请求对象，此时未发送请求


var req = https.request('https://sx.meituan.com/', function (res) {
  // 异步的响应
  var chunks = []; // 监听data事件，获取传递过来的数据片段
  // 拼接数据片段

  res.on('data', function (chunk) {
    chunks.push(chunk);
  }); // 监听end事件，获取数据完毕时触发

  res.on('end', function () {
    // 拼接所有的chunk，同时转换成字符串===>html 字符串
    // console.log(Buffer.concat(chunks).toString('utf-8'))
    var htmlStr = Buffer.concat(chunks).toString('utf-8');
    var $ = cheerio.load(htmlStr); // console.log($(".tea_main  li_img").attr('src'))
    // console.log($(".tea_main  li_img").length)

    $('#react .img film-img').each(function (index, item) {
      console.log($(item).attr('src'));
    });
  });
}); // 发送请求

req.end();