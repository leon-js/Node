//事件模块 http://nodejs.cn/api/events.html#events_events

//1.引入事件模块
var events = require('events');

//2.创建事件,创建EventEmitter对象
var myEmitter = new events.EventEmitter();//注意new一个对象

//3.注册事件
myEmitter.on('llhEvent',function(){
    // console.log('注册事件');
    // console.log(this)
    // 当监听器函数被调用时，this 关键词会被指向监听器所绑定的 EventEmitter 实例
    setImmediate(() => {
        console.log('这是异步执行的')
    })
    //EventEmitter 会按照监听器注册的顺序同步地调用所有监听器。 所以必须确保事件的排序正确，且避免竞态条件。 可以使用 setImmediate() 或 process.nextTick() 切换到异步模式
});

//4.出发事件
myEmitter.emit('llhEvent');

console.log(1)


// myEmitter.on('llhEvent',function(msg){
//     console.log(msg);
// });

// myEmitter.emit('llhEvent','Hello World');
