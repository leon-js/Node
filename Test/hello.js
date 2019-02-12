'use strict';
//使用严格模式

var s = 'Hello';

function greet(name){
    console.log(s + ', ' + name + '!');
}

module.exports = {
    greetting : greet,//可以赋一个新的名称
    s
};
//上下两种暴露变量或者方法的方式
//但是，如果我们要输出的是一个函数或数组，那么，只能给module.exports赋值：
//给exports赋值是无效的，因为赋值后，module.exports仍然是空对象{}
// exports.greetting = greet;

//__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
console.log( __filename );

//__dirname 表示当前执行脚本所在的目录。
console.log( __dirname );

function printHello(){
    console.log( "Hello, World!");
 }
// 两秒后执行以上函数
//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
//返回一个代表定时器的句柄值。
var t = setTimeout(printHello, 2000);
 
// 清除定时器
//clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
clearTimeout(t);

//setInterval(cb, ms)
//setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
//返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
//setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
function printHello2(){
    console.log( "Hello, llh!");
 }
// 两秒后执行以上函数
var at = setInterval(printHello2, 1000);
setTimeout(function(){
    clearInterval(at)
    //用于停止setInterval()
},4000)