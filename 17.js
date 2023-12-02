const express=require('express')
const app=express()
const body=require('body-parser')


app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/'+'form.html')
})

app.get('/register', (req,res)=>{
    res.send(`Name submitted is : ${req.query.sname}`)
    res.send("Get method successful")
})

app.listen(3000)