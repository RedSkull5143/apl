var fs = require('fs')
fs.readFile('program2.txt', function(err,res){
    if(err) return console.error(err)
    console.log(res.toString())
});
