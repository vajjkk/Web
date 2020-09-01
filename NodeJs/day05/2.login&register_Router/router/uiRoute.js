let {Router} = require('express')


// app相当于router
let router = new Router()

//引入path模块，path模块是node中核心模块，无需下载即可引入,解决路径问题
// let path=require('path')
// path.resolve()
let {resolve} = require('path')

// 登入UI路由
router.get('/login', (req, res) => {
    let filePath = resolve(__dirname, '../public/login.ejs')
    res.sendFile(filePath)
})


// 注册UI路由
router.get('/register', (req, res) => {
    let filePath = resolve(__dirname, '../public/register.ejs')
    res.sendFile(filePath)
})

//暴露路由
module.exports = router