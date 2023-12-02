const { log } = require('console');
const fs= require('fs')

fs.open('3.txt','w',(err, file)=>{
    if(err) return console.log(err);
    console.log('File Saved');
})

fs.writeFileSync('3.txt', 'Hello')

fs.readFile('3.txt', (err,res)=>{
    console.log(res.toString());
})

fs.rename('3.txt', 'demo3.txt',(err,res)=>{
    console.log('renamed');
})

fs.unlink('demo3.txt', (err)=>{
    
})