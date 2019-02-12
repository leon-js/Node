'use strict'

// var greet = require('./hello');

process.on('exit', function (code) {  // 程序即将退出时的回调函数:
    console.log('about to exit with code: ' + code);
});

// var s = 'Michael';

// greet.greetting(s);

process.nextTick(function () { // process.nextTick()将在下一轮事件循环中调用:
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
//有很多JavaScript代码既能在浏览器中执行，也能在Node环境执行，但有些时候，程序本身需要判断自己到底是在什么环境下执行的，常用的方式就是根据浏览器和Node环境提供的全局变量名称来判断：