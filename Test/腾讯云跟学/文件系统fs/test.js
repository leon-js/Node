var fs = require('fs');

fs.mkdir('../缓存与数据流', function(err){
    if (err){
        throw err
    }
    console.log('创建成功');
})