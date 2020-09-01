const https = require('https')
const cheerio = require('cheerio')

// 创建请求对象，此时未发送请求
let req = https.request('https://baidu.com/', (res) => {
    // 异步的响应
    let chunks = []
    // 监听data事件，获取传递过来的数据片段
    // 拼接数据片段
    res.on('data', (chunk) => {
        chunks.push(chunk)
    })

    // 监听end事件，获取数据完毕时触发
    res.on('end', () => {
        // 拼接所有的chunk，同时转换成字符串===>html 字符串
        // console.log(Buffer.concat(chunks).toString('utf-8'))
        let htmlStr = Buffer.concat(chunks).toString('utf-8')
        let $ = cheerio.load(htmlStr)
        // console.log($(".tea_main  li_img").attr('src'))
        // console.log($(".tea_main  li_img").length)
        $('.wrapper .s-img-mask').each((index,item)=>{
            console.log($(item).attr('src'));
        })


    })
})

// 发送请求
req.end()