// npm install @hapi/joi@17.1.0
// 为表单中携带的每个数据项，定义验证规则
const Joi = require('@hapi/joi')
/**
* string() 值必须是字符串
* alphanum() 值只能是包含 a-zA-Z0-9 的字符串
* min(length) 最小长度
* max(length) 最大长度
* required() 值是必填项，不能为 undefined
* pattern(正则表达式) 值必须符合正则表达式的规则
*/
// 用户名的验证规则
// const username = joi.string().alphanum().min(1).max(10).required()
// 密码的验证规则
// const password = joi.string().pattern(/^[\S]{6,12}$/).required()


const userSchemal = {
    body: {
        username: Joi.string().alphanum().min(3).max(12).required(),
        password: Joi.string().pattern(/^[\S][6,15]$/),
        repassword: Joi.ref('password')
    },
    query: {
        name: Joi.string().alphanum().min(3).required(),
        age: Joi.number().integer().min(1).max(100).required()
    },
    params: {
        id: Joi.number.integer.min(0).required()
    }
}
console.log(userSchemal.body.username);
exports.userSchemal = userSchemal