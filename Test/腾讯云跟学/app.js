'use strict'

console.log("Hello NodeJS!");

//定时器
setTimeout(function(){
    console.log('3 seconds have passed');
},3000);

var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
    if(time > 4){
        clearInterval(timer);
    }
},2000);

//路径
console.log(__dirname);//不包含文件名的路径
console.log(__filename);//包含文件名的路径

//global 全局对象
// console.log(global)