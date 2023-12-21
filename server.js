const express=require('express')
const app= express()
const dotenv =require("dotenv")
const router=require("./routes/route")
const cors=require("cors")
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(['/'],router)


app.listen(process.env.PORT,()=>{console.log(`running on port ${process.env.PORT}`)})