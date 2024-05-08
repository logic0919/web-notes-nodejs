const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, val) => sum += val, 0)
export default {
    url: baseURL,
    arraySum: getArraySum
}