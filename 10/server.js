// 目标:使用 npm 下载 dayjs 软件包来格式化日期时间
// 1.(可选) 初始化项目清单文件，命令: npm init -y   得到package.json文件，有则略过此命令
// 2.下载软件包到当前项目，命令: npm i 软件包名称   会产生package-lock.json（固化软件包版本）和node_modules（放软件包源码）
// 3.使用软件包
const dayjs = require('dayjs')
const nowDateStr = dayjs()//得到当前时间
console.log(nowDateStr);
console.log(nowDateStr.format('YYYY-MM-DD'));//对得到的时间格式化
const lodash = require('lodash')
console.log(lodash.max([1,2,3,4,5]));