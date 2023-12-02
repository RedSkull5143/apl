const express = require('express')
const app=express()

const r1=express.Router()
const r2=express.Router()
const r3=express.Router()

r1.get('/page1', function(req,res,next){
    console.log("Page 1 Router Working");
    res.end()
})

r2.get('/page2', function(req,res,next){
    console.log('Page2 Router Working');
    res.end()
})

r3.get('/page3', function(req,res,next){
    console.log('Page3 Router working')
    res.end()
})

app.use(r1)
app.use(r2)
app.use(r3)

app.listen(3000, function(err){
    if(err) console.error(err)
    console.log("Server Running at port 3000");
})