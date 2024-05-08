// 虽然使用XMLHttpRequest可以进行跨域请求，但这是通过服务器端进行设置才可以的。
// 服务器端必须允许来自其他域的请求，这通常通过设置HTTP头部的"Access-Control-Allow-Origin"来实现。


const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // 或者你的域名
    next();
});