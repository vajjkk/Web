// URI包含URL

// 1.引入express
let express = require('express');

//2.创建app服务对象
let app = express();

//3.设置路由
app.get('/', (req, res) => {
    console.log(res.get('host'))
    
    /*
         request：
                    request.query	获取查询字符串的参数，拿到的是一个对象
                    request.params	获取参数路由的参数，拿到的是一个对象
                    request.body	获取post请求体，拿到的是一个对象（要借助一个中间件）
                    request.get(xxxx)	获取请求头中指定key对应的value

        response:
                    response.send()	给浏览器做出一个响应
                    response.end()	给浏览器做出一个响应（不会自动追加响应头，容易乱码）
                    response.download()	告诉浏览器下载一个文件（相对路径）
                    response.sendFile()	给浏览器发送一个文件（绝对路径）
                    response.redirect()	重定向到一个新的地址（url）
                    response.set(header,value)	自定义响应头内容
                    response.get()	获取响应头指定key对应的value
                    res.status(code)	设置响应状态码

  * */
    //  查询字符串参数
    // console.log(req.query);

    // 获取参数路由参数
    // req.params

    // 获取post请求请求体
    // req.body

    // res.download('./public/5月xxx专业课记录表-顾问.doc')
    // res.sendFile(__dirname+'/public/demo.ejs')
    // res.sendFile('D:\QD\NodeJs\day04\5.路由的使用\public\demo.ejs')
    // res.redirect('https://www.baidu.com')
    res.set('demo',123)
    res.send('ok')

})

// 参数路由
app.get('/meishi/:id', (req, res) => {
    // 获取参数路由参数
    console.log(req.params);
    res.send('我是参数路由的反馈')
})

// 一级路由
app.get('/meishi', (req, res) => {
  res.send('我是美食路由的响应')
})

// 二级路由
app.get('/meishi/huoguo', (req, res) => {
  res.send('我是美食--火锅路由的响应')
})


//4.设置端口监听
app.listen(3000, (err) => {
    if (!err) {
        console.log('服务器启动成功了')
    } else {
        console.log(err)
    }
})