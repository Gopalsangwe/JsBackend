require('dotenv').config()
const express = require('express')

const app=express()

const port =3000

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/login",(req,res)=>{
    res.send("Login Page")
})


app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is running on port ${port}`)
})