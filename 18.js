const express=require('express')
const app=express()
const bp=require('body-parser')

app.use(bp.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/'+'form.html')
})

app.post('/register', (req,res)=>{
    res.send(`Name is : ${req.body.sname}`)
})

app.listen(3000)