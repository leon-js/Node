// 文件系统

// 1.引入文件系统模块
var fs = require('fs')

// 2.通过对象调用方法
// var readMellh = fs.readFileSync('readMe.txt','utf-8');// 同步读取
// console.log(readMellh);

// fs.writeFileSync('writeMe.txt',readMellh);// 同步写入

// 异步读取文件
fs.readFile('readMe.txt','utf-8',function(err,data){
    if (err) throw err;

    console.log(data)
});

// 异步写入文件
fs.readFile('readMe.txt','utf-8',function(err,data){
    if (err) throw err;

    fs.writeFile('writeMe2.txt',data, function(err){
        if(err){
            throw err;
        }
    })
    //一开始写的是fs.writeFile('writeMe2.txt',data),这样的话报错(node:14853) [DEP0013] DeprecationWarning: Calling an asynchronous function without callback is deprecated.不推荐在不回调的情况下调用异步函数
});