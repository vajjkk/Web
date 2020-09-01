// 1.引入express
let express = require('express')

// 2.创建app服务对象
let app = express()
// 暴露静态资源所以这边需要借助中间件
app.use(express.static('public'))

app.get('/test_get', (req, res) => {
    console.log('一个get请求来了')
    res.send('我是服务器响应get请求的信息')
})

app.post('/test_post', function (req, res) {
    console.log('一个post请求来了');
    res.send('我是服务器响应post请求的信息')
})

// 4.绑定端口监听
app.listen(3000, (err) => {
    if (!err) {
        console.log('测试原生js发送Ajax_GET请求地址是:http://localhost:3000/ajax_get.html')
    } else {
        console.log(err)
    }
})



