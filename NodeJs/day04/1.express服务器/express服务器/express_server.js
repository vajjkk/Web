// 1.引入express
let express = require('express')

// 2.创建app服务对象
let app = express()

// 3.设置路由(这里配置的是后端路由，数据发送给服务器) 
// 路由可以理解为key-value组合，相应路由是一个匹配的过程

// 根路由
app.get('/', (req, res) => {
    res.send('<h1>我是主界面</h1>')
})


// 一级路由
app.get('/meishi', (req, res) => {
    /* 
        什么样的请求能交给这个回调函数处理 
            1.发送的请求必须为get请求
            2.访问的url里面关键词是meishi

        备注：使用request.query只能获取查询字符串参数，只能获取get请求得参数
    */
    console.log(req.query);
    res.send('<h1>我是美食界面</h1>')
})

app.get('/meishi2', (req, res) => {
    res.send('<h2>我是美食2界面</h2>')
})

// 二级路由
app.get('/meishi/huoguo', (req, res) => {
    res.send('<h2>我是火锅界面</h2>')
})

app.post('/demo', (req, res) => {
    /*
    *使用req.body可以获取请求体中的参数，但是需要借助中间件
    *
    * */
    // console.log(req.body);
    res.send('你发来的post请求我收到了，这是我的响应')
})

// 4.绑定端口监听
app.listen(3000, (err) => {
    if (!err) {
        console.log('服务器启动成功了')
    } else {
        console.log(err)
    }
})



