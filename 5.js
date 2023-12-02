const { log } = require('console')
const fs=require('fs')

const dirpath="G:\practice"

fs.readdir(dirpath, (err,files)=>{
    return
})

files.forEach((file,index)=>{
    console.log(`${index+1}. ${res}`);
})