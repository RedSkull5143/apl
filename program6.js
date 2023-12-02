// Create File
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created
// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created
// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created

var fs = require('fs');

fs.open('demo.txt', 'w', function (err, file) { //file created
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFileSync('demo.txt','Hi Everyone') //write content in file

fs.readFile('demo.txt', function(err, res){ //read content from file
    if(err) return console.error(err)
    console.log(res.toString())
})

fs.rename('demo.txt', 'program6.txt', function (err) { //rename file
    if (err) throw err;
    console.log('File Renamed!');
});

fs.unlink('program6.txt', function(err){ //file deleted
    if(err) return console.log(err)
    console.log("File Deleted")
})