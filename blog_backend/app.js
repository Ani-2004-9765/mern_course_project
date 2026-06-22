const express = require('express');
const {connectDB} = require('./db');
const router = require('./router/blogRouter');
const cors = require('cors');
const app=express();

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",router)

app.listen (4000,()=>{
console.log("running...");

})
