const fs=require('fs')
const path=require('path')
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    if (req.url === '/before.html') {
        fs.readFile(path.join(__dirname, '../04/before.html'), (err, data) => {
            res.setHeader('content-Type', 'text/html;charset=utf-8')
            res.end(data.toString())
        })
    } else {
        res.setHeader('content-Type', 'text/plain;charset=utf-8')
        res.end('您要访问的路径不在')
    }
    console.log('hello');
})
server.listen(8080, () => {
    console.log('web 服务已经启动')
})