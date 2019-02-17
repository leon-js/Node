var http = require('http');



var fs = require('fs');
// 读取文件流
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');

// 写入文件流
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe2.txt');
// console.log(myReadStream);

// myReadStream.pipe(myWriteStream);
             //上下效果一致
// myReadStream.on('data', function(chunk){
//     console.log('======正在接收一部分数据');
//     // console.log(chunk);

//     // 写入数据
//     myWriteStream.write(chunk);
// });


// 搭建服务器
var server = http.createServer(function(req,res){
    // res.writeHead(200,{"Content-type":"text/html"});
    // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    // myReadStream.pipe(res);
    if (req.url === '/home' || req.url === '/'){
        console.log("当前路由：" + req.url);
        res.writeHead(200,{"Content-type":"text/html"});
        fs.createReadStream(__dirname + '/index.html', "utf-8").pipe(res);
    }else if(req.url === '/contact'){
        console.log("当前路由：" + req.url);
        res.writeHead(200,{"Content-type":"text/html"});
        fs.createReadStream(__dirname + '/contact.html', "utf-8").pipe(res);
    }else if(req.url === '/api/docs'){
        console.log("当前路由：" + req.url);
        res.writeHead(200,{"Content-type":"text/html"});
        fs.createReadStream(__dirname + '/api/docs.html', "utf-8").pipe(res);
    }
})

server.listen(3000,'127.0.0.1');

console.log('Server is running');