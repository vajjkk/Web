/*
* 该模块是业务路由器，目前管理的业务是登陆还有注册
*
* */

let {Router} = require('express')

let router = new Router()

//引入用户模型
let userModel = require('../model/userModel')

// 业务路由--注册
router.post('/register', async (req, res) => {
    console.log(req.body)
    // 1.获取用户输入
    const {email, nick_name, password, re_password} = req.body

    // 2.检验数据合法性
    //定义正则表达式
    const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,12}\.com$/  //以什么什么开头，以什么什么结尾
    const nickNameReg = /[\u4e00-\u9fa5]/gm
    const passwordReg = /^[a-zA-z0-9_@#%]{2,16}$/

    //使用正则进行校验
    if (!emailReg.test(email)) {
        res.send('邮箱输入不合法，要求邮箱用户名是2-16位，不包含特殊字符，邮箱主机名是2-16，不包含特殊字符')
    } else if (!nickNameReg.test(nick_name)) {
        res.send('昵称输入不合法，昵称应为中文')
    } else if (!passwordReg.test(password)) {
        res.send('密码输入不合法，密码应为6-16位不包含特殊字符')
    } else if (password !== re_password) {
        res.send('两次输入密码不一致')
    }

    //try里面放可能出现错误的代码，一旦出现错误，会携带着错误来到catch中
    try {
        // 3.检查该邮箱是否注册过
        // 注册一次，连接一次数据库，所以服务器启动一次，数据库自动连接
        // db.then(()=>{}).catch(()=>{})
        let findResult = await userModel.findOne({email: email})
        if (findResult) {
            res.send("注册失败，该邮箱已经被注册")
            return
        } else {
            await userModel.create({email: email, nick_name: nick_name, password: password})
            console.log(`邮箱为：${email},昵称为${nick_name}的用户注册成功`)
            res.send('注册成功了')
        }
    } catch (err) {
        //1.计数  2.引入警报模块
        console.log(err)
        res.send('网络不稳定，稍后重试')
    }
    // 4.注册：驳回  未注册；注册
})

// 业务路由--登入
router.post('/login', async (req, res) => {
    // 1.获取用户输入
    const {email, password} = req.body

    // 2.检验数据合法性
    //定义正则表达式
    const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,12}\.com$/  //以什么什么开头，以什么什么结尾
    const passwordReg = /^[a-zA-z0-9_@#%]{2,16}$/
    //使用正则进行校验
    if (!emailReg.test(email)) {
        res.send('邮箱输入不合法，要求邮箱用户名是2-16位，不包含特殊字符，邮箱主机名是2-16，不包含特殊字符')
    } else if (!passwordReg.test(password)) {
        res.send('密码输入不合法，密码应为6-16位不包含特殊字符')
    }

    try {
        let findResult = await userModel.findOne({email, password})
        if (findResult) {
            res.redirect("https://www.baidu.com")
        } else {
            res.send('登入失败，邮箱或者密码出现错误')
        }
    } catch (e) {
        console.log(e)
        res.send('网络不稳定，请稍后重试')
    }
})

module.exports = router