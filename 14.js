const fs=require('fs')

const stream=fs.createReadStream('14.txt', 'utf-8')

stream.on('data', (information)=>{
    console.log(information);
})

stream.on('end', ()=>{
    console.log("Stream End");
})

const writestream=fs.createWriteStream('15.txt', {encoding: 'utf-8'})

writestream.write('hello', 'utf-8', ()=>{
    console.log("stream written");
    writestream.end()
})

writestream.on('finish',()=>{
    console.log("Stream Finished");
})
