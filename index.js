const express = require('express')
const data = express()
const portNo = 3000
// get api 
data.get('/data' ,(req,res)=>{
    res.json('hello')
})


data.listen(portNo,(req,res)=>{
    console.log('Hello port no :' , portNo)
})



