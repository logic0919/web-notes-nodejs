const {arr} = require('./lib/arr')
const { str } = require('./lib/str')
// 以上为对象解构
// 以上为先把所有工具模块集中起来，先全部导入到此
// 以下为统一导出
module.exports = {
    arr,
    str
}