// 加载http模块
const http = require('http')
// 创建web服务对象
const server = http.createServer()
// 监听request请求事件
server.on('request', (req, res) => {
    // 设置响应头:内容类型，普通文本;编码格式为 utf-8
    res.setHeader('content-Type', 'text/plain;charset=utf-8')
    // 设置响应体内容，结束本次请求与响应
    res.end('您好，欢迎使用 node.js 创建的 web 服务')
})
// 配置端口号并启动 Web 服务
server.listen(3000, () => {
    console.log('web 服务已经启动')
})
// ctrl+c结束web服务进程