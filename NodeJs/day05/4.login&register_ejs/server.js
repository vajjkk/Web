/*
* 该模块是UI路由器模块，用于管理UI路由，以后配置新页面在这里定义路由即可
*
*
* */


// 引入express框架
let express = require('express')

//引入数据库连接模块
let db = require('./db')


//引入ui路由器
let uiRouter = require('./router/uiRoute')

//引入业务路由
let businessRouter = require('./router/businessRouter')


// 创建app服务对象
let app = express()

// 配置模板引擎
app.set('view engine','ejs')
// 配置模板目录
app.set('views','./views')

//数据库连接成功后注册路由
db.then(() => {
    //暴露静态资源的作用可以替换走路由
    app.use(express.static('public'))

    // 使用内置中间件获取post请求体参数
    app.use(express.urlencoded({extend: true}))

    // 使用ui路由器中间件
    app.use(uiRouter)

    // 使用业务路由
    app.use(businessRouter)


}).catch((err) => {
    res.send('数据库连接失败')
})


// 绑定端口监听
app.listen(3000, (err) => {
    if (!err) {
        console.log('服务器启动成功了');
    } else {
        console.log(err);
    }
})