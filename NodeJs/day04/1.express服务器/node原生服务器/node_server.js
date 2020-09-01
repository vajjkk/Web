// 1.引入http模块 ----http是node中的核心模块，无需下载引入即可使用
let http = require('http')
// 查询字符串参数，地址栏中传的参数就叫查询字符串参数
let querystring = require('querystring')


// 2.创建server对象
let server = http.createServer(function (request, response) {
    /* 
        request:请求对象 ----- 客户端发送给服务器（发送的数据包含在对象里面）
        response:响应对象 ---- 服务器给客户端
    */

    console.log(request.url);
    //   /?name=zhangsan&xiao=hl 变成key-value的对象
     let str = request.url.split('?')[1] //把一个字符串按照指定的字符拆分成数组
    // 自动的把参数转换成对象
    let obj = querystring.parse(str)
    if (obj.name === 'zhangsan') {
        response.end('<h2>张三好好听课</h2>')
    } else if (obj.name === 'lisi') {
        response.end('<h1>你回家吧</h1>')
    }else{
        response.end('<h2>页面走丢了</h2>')
    }
    console.log(obj)




    // response.end('ok')
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('<h1>我很好</h1>')
})

// 3.绑定端口监听(3000,5000,8080)
server.listen(5000, function (err) {
    if (!err) {
        console.log('服务器启动成功了');
    } else {
        console.log(err);
    }
})

// ping 网址可以看到IP地址
// 本机IP 127.0.0.1
// 地址栏问号传参  /?key1=value1&key2=value2

