const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("Ok")
})
app.get('/om', (req,res)=>{
    res.send("mo")
})

app.listen(3000)