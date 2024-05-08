// 加载fs模块对象
const fs = require('fs')
// writeFile可以自动生成文件，但不能自动生成文件夹
// fs.writeFile('文件路径', '写入内容', err => {
//     写入后的回调函数
// })
// fs.readFile('文件路径', (err,data) => {
//     读取后的回调函数
//     data是文件内容的Buffer数据流
// })
fs.writeFile('./test.txt', 'hello node.js', (err) => {
    if (err)
        console.log(err);
    else
        console.log('写入成功');
})
fs.readFile('./test.txt', (err,data) => {
    if (err)
        console.log(err);
    else
    {
        console.log(data);//<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
        console.log(data.toString());//hello node.js
    }
})