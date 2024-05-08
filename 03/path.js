const fs = require('fs')
// 加载path模块对象
const path = require('path')
console.log(__dirname);// D:\vscode\代码\node.js\03
console.log(path.join(__dirname, 'test.txt'));// D:\vscode\代码\node.js\03\test.txt
console.log(path.join(__dirname, './test.txt'));// D:\vscode\代码\node.js\03\test.txt
console.log(path.join(__dirname, '../test.txt'));// D:\vscode\代码\node.js\test.txt
fs.readFile(path.join(__dirname, '../test.txt'), (err, data) => {
    if (err)
        console.log(err);
    else {
        console.log(data.toString());//hello node.js
    }
})