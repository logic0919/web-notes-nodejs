const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, val) => sum += val, 0)
// module.exports = {
//     url: baseURL,
//     arraySum: getArraySum
// }
exports.url = baseURL
exports.arraySum = getArraySum