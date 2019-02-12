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