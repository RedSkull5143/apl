const express= require("express")
const app=express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/"+"program18.html")
})

app.post('/om', (req,res)=>{
    res.send(req.body.omm);
})

app.listen(3000)