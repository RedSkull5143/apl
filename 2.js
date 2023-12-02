const fs=require('fs')

fs.readFile('2.txt', (err,res)=>{
    if(err) return console.error(err)
    console.log(res.toString())
})