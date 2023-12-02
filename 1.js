const http=require('http')

http.createServer((req,res)=>{
    res.writeHead(200, {'COntent-Type': 'text/html'})
    res.end("Hello")
}).listen(3000)