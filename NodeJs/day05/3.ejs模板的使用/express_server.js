let express = require('express')

let app = express()

//设置模板引擎
app.set('view engine', 'ejs')

//设置模板所在目录
app.set('views', './views')

app.get('/', (req, res) => {
    // let data = '<h2>atguigu</h2>'
    //服务器端渲染,第一个参数是渲染哪一个模板,将变量传给模板
    // yarn add xxx 一般都会下载最新版本，3版本可以直接传数据，旧版本必须包含在旧版本里面

    let data = [{name: 'kobe', age: 18}, {name: 'wide', age: 19}, {name: 'peiqi', age: 20}]
    res.render('demo', {data})
})

// 4.绑定端口监听
app.listen(3000, (err) => {
    if (!err) {
        console.log('服务器启动成功了')
    } else {
        console.log(err)
    }
})



