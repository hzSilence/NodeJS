var fs = require("fs");

var fileReadStream = fs.createReadStream('output.txt');

let count = 0;

let str = '';

fileReadStream.on('data',(chunk)=>{
    console.log(`${++count}接收到:${chunk.length}`);
    str+= chunk;
});

fileReadStream.on('end',()=>{
    console.log("结束");
    console.log(count);
    console.log(str);
});

fileReadStream.on('err',(err)=>{
    console.log(err);
});