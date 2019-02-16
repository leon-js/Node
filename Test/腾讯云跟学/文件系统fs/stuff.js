// 1.引入文件系统模块
var fs = require('fs');

// 2.使用模块对象调用方法
// fs.unlink('writeMe.txt',function (err){
//     if (err){
//         throw err;
//     }
//     console.log('文件删除成功！');
// })

// 创建文件夹 同步
// fs.mkdirSync('stuff');

// 删除文件夹 同步
// fs.rmdirSync('stuff');

// 异步创建和删除文件夹
// fs.mkdir('stuff',function () {
//     fs.readFile('readMe.txt','utf-8', function (err,data){
//         if (err) throw err;
//         fs.writeFile('./stuff/writeMe.txt',data, function (err){
//             if (err){
//                 throw err;
//             }
//         });
//     })
// })

// 需要先删除文件夹中的文件，再删除外部文件夹
fs.unlink('./stuff/writeMe.txt', function (){
    fs.rmdir('stuff', function (err){
        if (err){
            throw err;
        }
        console.log('文件夹删除成功');
    })
})