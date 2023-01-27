const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv").config()
const connect=require("./config/db")
const userRouter=require("./routes/userRouter")
const app=express()
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("home")
})
app.use("/",userRouter)

app.get("/generatestring",(req,res)=>{
    let rs=""
    let char="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for(let i=0;i<10;i++){
        rs+=char.charAt(Math.floor(Math.random()*char.length))
    }
    res.send(rs)
})


app.listen(PORT,async()=>{
    await connect()
    console.log("listening on port"+" "+PORT)
})