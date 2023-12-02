const fs= require("fs")

fs.writeFileSync('program3.txt','Hi')
fs.appendFileSync('program3.txt', "\nLine Appended")

fs.readFile('program3.txt', function(err,res){
    if(err) return console.error(err)
    console.log(res.toString())
})