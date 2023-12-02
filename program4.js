const fs= require("fs")

console.log("Start of Program")
fs.readFile('program4.txt', function(err,res){
    if(err) return console.error(err)
    console.log(res.toString())
})
console.log("End of Program")

// A callback is a function that is called when a task is completed, thus helping in preventing any kind of blocking and a callback function allows other code to run in the meantime. Callback is called when a task gets completed and is the asynchronous equivalent of a function. Using the Callback concept, Node.js can process a large number of requests without waiting for any function to return the result which makes Node.js highly scalable. For example: In Node.js, when a function starts reading the file, it returns the control to the execution environment immediately so that the next instruction can be executed. Once file I/O gets completed, the callback function will get called to avoid blocking or waiting for File I/O.