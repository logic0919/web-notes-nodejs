const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, 'before.html'), (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const htmlStr = data.toString()
        const resultStr = htmlStr.replace(/[\n\r]/g, '')
        fs.writeFile(path.join(__dirname, 'after.html'),resultStr, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('ok');
            }
        })
    }
})
